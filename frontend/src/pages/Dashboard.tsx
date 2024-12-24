import Navigation from '../components/landing/Navigation1';
import '../components/landing/Dashboard.css';
import { useEffect, useState } from 'react';
import Footer from '@/components/landing/Footer';

const Dashboard = () => {

  const [last30Days, setLast30Days] = useState([]);
  const [today, setToday] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const today = currentDate.getDate();
    setToday(today);

    // Calculate the last 30 days
    const daysArray = [];
    for (let i = 0; i < 30; i++) {
      const day = new Date();
      day.setDate(currentDate.getDate() - i); // Subtract i days
      daysArray.push(day.getDate()); // Push the date (day number)
    }

    setLast30Days(daysArray); // Store the last 30 days
  }, []);

  // Format the current date as "Tue, Dec 24, 2024"
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  // Progress data for modules (customized names)
  const progressData = [
    { module: "Budgeting", progress: 70 }, // 70% progress for Budgeting
    { module: "Investing", progress: 50 }, // 50% progress for Investing
    { module: "Saving", progress: 80 },    // 80% progress for Saving
    { module: "Fraud Prevention", progress: 90 }, // 90% progress for Fraud Prevention
  ];

  return (
    <>
      <div className="min-h-screen bg-neutral-100">
        <Navigation />
        <div className='main max-w-6xl min-h-screen bg-white p-5'>
          <h1 className="intro">Welcome back, Romit Shah</h1>
          <div className="mt-4 p-4 border border-gray-200 rounded-2xl bg-gray-100 flex flex-col sm:flex-row gap-4">
            {/* Streak Section (Left) */}
            <div className="flex max-w-md flex-wrap mb-4 streak">
              {/* Date inside streak container */}
              <div className="w-full mb-2">
                <h4 className="font-medium mb-2">{formattedDate}</h4>
              </div>

              {/* Streak Days */}
              {last30Days.map((day) => (
                <div key={day} className={`streak-item`}>
                  <div className={`${day === today ? 'block' : 'hidden'} today-text`}>
                    Today
                  </div>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">{module.module}</label>
                    
                    {/* Progress bar container with rounded corners */}
                    <div className="rounded-lg bg-gray-200 p-2">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                            {module.progress}%
                          </span>
                        </div>
                      </div>

                      {/* Progress bar with increased height */}
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-teal-500 h-4 rounded-full"
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
}

export default Dashboard;
