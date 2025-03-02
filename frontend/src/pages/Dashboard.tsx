import Navigation from '../components/landing/Navigation1';
import '../components/landing/Dashboard.css';
import { useEffect, useState } from 'react';
import Footer from '@/components/landing/Footer';
import Header from "@/components/landing/Header";
// Add additional inline styles to preserve your CSS structure while adding dark theme
const additionalStyles = `
  .intro {
    font-weight: 700;
    font-size: 1.875rem;
    color: #f3f4f6;
  }
  
  .main {
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    background-color: #1f2937;
    box-shadow: 0 0 40px rgba(79, 70, 229, 0.2);
  }
  
  /* Add glowing effect */
  .main::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(99, 102, 241, 0.2), transparent 70%);
    z-index: 0;
    pointer-events: none;
  }
  
  .streak {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
    padding: 20px;
    position: relative;
    z-index: 1;
  }
  
  /* Streak item styling */
  .streak-item {
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    background-color: #374151;
    color: #e5e7eb;
    transition: background-color 0.3s ease;
    border: 2px solid #4b5563;
  }
  
  .streak-item:hover {
    background-color: #4ade80;
    border: 2px solid #3B82F6;
  }
  
  .active-day {
    background-color: #4ade80;
    color: #1f2937;
    border-color: #3B82F6;
  }
  
  .present-day {
    background-color: #4ade80;
    color: #1f2937;
  }
  
  .today-text {
    font-size: 0.625rem;
    font-weight: bold;
    color: #1f2937;
  }
  
  .hidden {
    display: none;
  }
  
  .block {
    display: block;
  }
`;

const Dashboard = () => {
  const [last30Days, setLast30Days] = useState([]);
  const [today, setToday] = useState("");
  const [presentDays, setPresentDays] = useState(new Set()); // Store present days from API
  const [fullname, setFullname] = useState(""); // Store user name
  const [progressData, setProgressData] = useState([]); // Store module progress

  useEffect(() => {
    const currentDate = new Date();
    const todayFormatted = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD
    setToday(todayFormatted);

    // Calculate the last 30 days
    const daysArray = [];
    for (let i = 0; i < 30; i++) {
      const day = new Date();
      day.setDate(currentDate.getDate() - i);
      daysArray.push(day.toISOString().split('T')[0]);
    }
    setLast30Days(daysArray);

    // Fetch attendance and user data from API
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3000/v1/user/attendance", {
          method: "GET",
          headers: {
            // "Authorization": `Bearer ${localStorage.getItem("token")}`, // Uncomment if using authentication
            "Content-Type": "application/json"
          }
        });

        const data = await response.json();
        if (response.ok) {
          // Set Fullname
          setFullname(data.fullname || "User");

          // Set Present Days
          const presentDates = new Set(
            (data.attendance || [])
              .filter(record => record.status === "presented")
              .map(record => record.date.split('T')[0]) // Extract YYYY-MM-DD format
          );
          setPresentDays(presentDates);

          // Set Progress Data with Default Values
          setProgressData(
            (data.progress && data.progress.length > 0)
              ? data.progress.map(module => ({
                  module: module.module || "Unknown Module",
                  progress: module.progress ?? 0 // Default to 0% if null/undefined
                }))
              : [
                  { module: "Budgeting", progress: 0 },
                  { module: "Investing", progress: 0 },
                  { module: "Saving", progress: 0 },
                  { module: "Fraud Prevention", progress: 0 }
                ]
          );
        } else {
          console.error("Error fetching user data:", data.msg);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    };

    fetchUserData();
  }, []);

  // Format the current date as "Tue, Dec 24, 2024"
  const formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <>
      <style>{additionalStyles}</style>
      <div className="min-h-screen bg-gray-900">
      <Header/>
        <div className='main max-w-6xl min-h-screen bg-gray-800 p-5 rounded-xl'>
          <h1 className="intro">Welcome back, {fullname}</h1>
          <div className="mt-4 p-4 border border-gray-700 rounded-2xl bg-gray-800/80 flex flex-col sm:flex-row gap-4">
            
            {/* Streak Section (Left) */}
            <div className="flex max-w-md flex-wrap mb-4 streak">
              <div className="w-full mb-2">
                <h4 className="font-medium mb-2 text-gray-300">{formattedDate}</h4>
              </div>

              {/* Streak Days */}
              {last30Days.map((day) => (
                <div 
                  key={day} 
                  className={`streak-item ${presentDays.has(day) ? 'present-day' : ''}`}
                >
                  {day === today && <div className="today-text">Today</div>}
                </div>
              ))}
            </div>

            {/* Total Progress Section (Right) */}
            <div className="flex flex-col justify-start w-full">
              <h1 className="intro mb-4">Total Progress</h1>

              {/* Progress Bars for Modules */}
              <div className="flex flex-col gap-6">
                {progressData.map((module, index) => (
                  <div key={index} className="w-full">
                    <label className="block text-sm font-medium text-gray-300 mb-2">{module.module}</label>
                    
                    {/* Progress bar container with rounded corners */}
                    <div className="rounded-lg bg-gray-700 p-2">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-300 bg-teal-900">
                            {module.progress}%
                          </span>
                        </div>
                      </div>

                      {/* Progress bar with increased height and glow effect */}
                      <div className="w-full bg-gray-700 rounded-full h-4">
                        <div
                          className="bg-teal-500 h-4 rounded-full shadow-lg shadow-teal-500/30"
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;