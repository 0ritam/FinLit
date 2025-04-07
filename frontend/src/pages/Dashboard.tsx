import ContentHeader from "@/components/landing/ContentHeader";
import '../components/landing/Dashboard.css';
import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';

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
    margin-bottom: 25%;
    position: realtive;
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
  const { getToken } = useAuth();
  const [last30Days, setLast30Days] = useState([]);
  const [today, setToday] = useState("");
  const [presentDays, setPresentDays] = useState(new Set());
  const [fullname, setFullname] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const todayFormatted = currentDate.toISOString().split('T')[0];
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
      const token = await getToken();

      try {
        const response = await fetch("http://localhost:5000/v1/user/attendance", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
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
              .map(record => record.date.split('T')[0])
          );
          setPresentDays(presentDates);
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
      <div className="min-h-screen bg-background">
        <ContentHeader/>
        <div className='main max-w-6xl min-h-screen bg-background p-5 rounded-xl'>
          <h1 className="intro">Welcome back, {fullname}</h1>
          <div className="mt-4 p-4 border border-gray-700 rounded-2xl bg-gray-800/80 flex flex-col sm:flex-row gap-4">
            
            {/* Streak Section */}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;