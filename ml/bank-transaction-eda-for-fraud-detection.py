import pandas as pd
import warnings
import numpy as np
from sklearn.cluster import KMeans, DBSCAN
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import IsolationForest
from sklearn.model_selection import train_test_split
import xgboost as xgb
import sys
import json
import os
import traceback

warnings.filterwarnings("ignore")

try:
    # Load dataset (for model training)
    df = pd.read_csv("C:/Users/rswtf/Desktop/christ/spd/FinlitV1/ml/data.csv")

    # Convert date columns to datetime
    df["TransactionDate"] = pd.to_datetime(df["TransactionDate"])
    df["PreviousTransactionDate"] = pd.to_datetime(df["PreviousTransactionDate"])
    
    # Create new features
    df["HourOfTransaction"] = df["TransactionDate"].dt.hour
    df["TimeSinceLastTransaction"] = (df["TransactionDate"] - df["PreviousTransactionDate"]).dt.total_seconds()
    
    # Define relevant features
    features = ["TransactionAmount", "Location", "TransactionType", "TransactionDuration", "LoginAttempts", 
                "AccountBalance", "TimeSinceLastTransaction"]

    df = df.dropna(subset=features)  # Handle missing values

    # One-Hot Encoding for categorical features
    cat_features = ["Location", "TransactionType"]
    encoder = OneHotEncoder(handle_unknown='ignore', sparse_output=False)  # Fixed sparse argument
    encoded_cats = encoder.fit_transform(df[cat_features])
    encoded_df = pd.DataFrame(encoded_cats, columns=encoder.get_feature_names_out(cat_features))

    # Combine numerical and encoded categorical data
    df_final = pd.concat([df.drop(columns=cat_features), encoded_df], axis=1)

    # Drop non-numeric columns before scaling
    df_final = df_final.select_dtypes(include=[np.number])  # Ensure only numeric data remains

    # Standardize numerical features
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(df_final)

    # Store column order for later use
    feature_names = df_final.columns

    # K-Means Clustering
    kmeans = KMeans(n_clusters=3, random_state=42)
    kmeans_labels = kmeans.fit_predict(X_scaled)
    df["KMeans_Cluster"] = kmeans_labels
    distances = np.linalg.norm(X_scaled - kmeans.cluster_centers_[kmeans_labels], axis=1)
    threshold = np.percentile(distances, 95)
    df["KMeans_Fraud"] = distances > threshold

    # XGBoost Model
    X_train, X_test, y_train, y_test = train_test_split(X_scaled, df["KMeans_Fraud"], test_size=0.3, random_state=42)
    model = xgb.XGBClassifier(random_state=42)
    model.fit(X_train, y_train)

    # DBSCAN (fit only once)
    dbscan = DBSCAN(eps=0.5, min_samples=5)
    dbscan_labels = dbscan.fit_predict(X_scaled)  # Fit on training data
    df["DBSCAN_Fraud"] = dbscan_labels == -1

    # Isolation Forest
    iso_forest = IsolationForest(contamination=0.01, random_state=42)
    iso_forest.fit(X_scaled)

except Exception as e:
    print(json.dumps({"error": "Model training failed", "details": str(e), "traceback": traceback.format_exc()}))
    sys.exit(1)

def detect_fraud(file_path):
    try:
        if not os.path.exists(file_path):
            return json.dumps({"error": f"File not found: {file_path}"})

        new_df = pd.read_csv(file_path)

        # Convert date columns to datetime
        new_df["TransactionDate"] = pd.to_datetime(new_df["TransactionDate"])
        new_df["PreviousTransactionDate"] = pd.to_datetime(new_df["PreviousTransactionDate"])
        
        # Create new features
        new_df["HourOfTransaction"] = new_df["TransactionDate"].dt.hour
        new_df["TimeSinceLastTransaction"] = (new_df["TransactionDate"] - new_df["PreviousTransactionDate"]).dt.total_seconds()

        # One-Hot Encode categorical features
        encoded_new_cats = encoder.transform(new_df[cat_features])
        encoded_new_df = pd.DataFrame(encoded_new_cats, columns=encoder.get_feature_names_out(cat_features))

        # Combine numerical and encoded categorical data
        new_df_final = pd.concat([new_df.drop(columns=cat_features), encoded_new_df], axis=1)

        # Ensure same column order as training
        new_df_final = new_df_final.reindex(columns=feature_names, fill_value=0)

        # Scale new data
        X_new_scaled = scaler.transform(new_df_final)


        # XGBoost Fraud Detection
        new_df["XGBoost_Fraud"] = model.predict(X_new_scaled).astype(bool)

        # Isolation Forest Fraud Detection
        new_df["IsolationForest_Fraud"] = iso_forest.predict(X_new_scaled) == -1

        # Filter fraud cases
        fraud_df = new_df[(new_df["XGBoost_Fraud"]) |  (new_df["IsolationForest_Fraud"])]

        # 🔥 Convert all datetime columns to string to prevent JSON serialization errors
        for col in ["TransactionDate", "PreviousTransactionDate"]:
            if col in fraud_df.columns:
                fraud_df[col] = fraud_df[col].astype(str)

        return json.dumps(fraud_df.to_dict(orient="records"))

    except Exception as e:
        error_message = {
            "error": "Fraud detection failed",
            "details": str(e),
            "traceback": traceback.format_exc()
        }
        print(json.dumps(error_message, indent=4))
        with open("error_log.txt", "w") as f:
            json.dump(error_message, f, indent=4)
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No file path provided"}))
        sys.exit(1)

    file_path = sys.argv[1]

    if not os.path.exists(file_path):
        print(json.dumps({"error": f"File not found: {file_path}"}))
        sys.exit(1)

    fraud_json = detect_fraud(file_path)
    print(fraud_json)
