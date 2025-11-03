import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 50);

    const dotsInterval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-lime-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style={{animationDelay: '2s', animationDuration: '4s'}}></div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* 3D Spinner Container */}
        <div className="relative w-32 h-32" style={{perspective: '1000px'}}>
          {/* Outer rotating ring */}
          <div className="absolute inset-0 border-4 border-accent rounded-full" style={{
            transform: 'rotateX(60deg)',
            transformStyle: 'preserve-3d'
          }}></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-green-500 border-r-green-400 rounded-full animate-spin" style={{
            animationDuration: '1.5s',
            transform: 'rotateX(60deg)',
            transformStyle: 'preserve-3d'
          }}></div>

          {/* Middle counter-rotating ring */}
          <div className="absolute inset-3 border-3 border-accent rounded-full" style={{
            transform: 'rotateY(60deg)',
            transformStyle: 'preserve-3d'
          }}></div>
          <div className="absolute inset-3 border-3 border-transparent border-t-emerald-400 border-l-emerald-500 rounded-full animate-spin" style={{
            animationDirection: 'reverse',
            animationDuration: '1s',
            transform: 'rotateY(60deg)',
            transformStyle: 'preserve-3d'
          }}></div>

          {/* Inner fast spinning ring */}
          <div className="absolute inset-6 border-2 border-accent rounded-full" style={{
            transform: 'rotateZ(45deg)',
            transformStyle: 'preserve-3d'
          }}></div>
          <div className="absolute inset-6 border-2 border-transparent border-t-lime-400 rounded-full animate-spin" style={{
            animationDuration: '0.7s',
            transform: 'rotateZ(45deg)',
            transformStyle: 'preserve-3d'
          }}></div>

          {/* Center glowing core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-lime-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-400 to-lime-400 rounded-full blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-green-300 via-emerald-300 to-lime-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>

          {/* Orbiting particles */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1"
              style={{
                animation: `orbit 2s linear infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              <div className="w-2 h-2 bg-accent rounded-full shadow-lg shadow-green-500/50"></div>
            </div>
          ))}
        </div>

       

        
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(60px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(60px) rotate(-360deg);
          }
        }

        @keyframes gridMove {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;