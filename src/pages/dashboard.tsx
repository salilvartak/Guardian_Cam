import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';

const cameras = [
  { id: 'cam1', name: 'Front Door Camera' },
  { id: 'cam2', name: 'Lobby Camera' },
  { id: 'cam3', name: 'Parking Lot Camera' },
];

const Dashboard = () => {
  const [fallStatus, setFallStatus] = useState<Record<string, string>>({});
  const [isFallDetected, setIsFallDetected] = useState(false);
  const [fallStartTime, setFallStartTime] = useState<number | null>(null);
  const alarmRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/auth');
  };

  const fetchFallStatus = async () => {
    try {
      const res = await fetch('http://localhost:8000/fall-status');
      const data = await res.json();
      setFallStatus(data);

      const anyFall = Object.values(data).includes('FALL');

      if (anyFall) {
        if (!fallStartTime) {
          setFallStartTime(Date.now());
        } else {
          const elapsed = Date.now() - fallStartTime;
          if (elapsed >= 10000 && !isFallDetected) {
            setIsFallDetected(true);
            if (alarmRef.current) {
              alarmRef.current.play().catch((e) => console.error('Alarm error:', e));
            }
          }
        }
      } else {
        setFallStartTime(null);
        if (isFallDetected) {
          setIsFallDetected(false);
        }
        if (alarmRef.current) {
          alarmRef.current.pause();
          alarmRef.current.currentTime = 0;
        }
      }
    } catch (err) {
      console.error('Error fetching fall status:', err);
    }
  };

  useEffect(() => {
    fetchFallStatus();
    const interval = setInterval(fetchFallStatus, 1000); // Check every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`min-h-screen px-6 py-10 transition-colors duration-500 ${
        isFallDetected ? 'bg-red-100' : 'bg-gray-100'
      }`}
    >
      <audio ref={alarmRef} src="/assets/alarm.mp3" preload="auto" />

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Camera Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {isFallDetected && (
        <div className="text-red-600 font-semibold text-lg mb-4 text-center animate-pulse">
          ⚠️ Fall Detected for more than 10 seconds!
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cameras.map((cam) => (
          <div
            key={cam.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border"
          >
            <div className="aspect-video bg-black">
              <img
                src={`http://localhost:8000/video/${cam.id}`}
                alt={cam.name}
                className="w-full h-auto object-cover"
              />

            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{cam.name}</h2>
              <p
                className={`text-sm ${
                  fallStatus[cam.id] === 'FALL'
                    ? 'text-red-500 font-bold'
                    : 'text-gray-500'
                }`}
              >
                Status: {fallStatus[cam.id] || 'Loading...'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
