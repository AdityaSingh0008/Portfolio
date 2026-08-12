import { useState, useEffect, useRef } from "react";

const TOTAL = 25 * 60;

export default function MiniTimer() {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const mins = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const secs = String(secondsLeft % 60).padStart(2, "0");
  const progress = ((TOTAL - secondsLeft) / TOTAL) * 360;

  const reset = () => {
    setRunning(false);
    setSecondsLeft(TOTAL);
  };

  return (
    <div className="mini-timer">
      <div
        className={`ring ${running ? "pulsing" : ""}`}
        style={{ background: `conic-gradient(var(--accent) ${progress}deg, var(--border) 0deg)` }}
      >
        <div className="ring-inner">{mins}:{secs}</div>
      </div>
      <div className="timer-controls">
        <button className="btn btn-primary tiny" onClick={() => setRunning((r) => !r)}>
          {running ? "Pause" : "Start"}
        </button>
        <button className="btn btn-outline tiny" onClick={reset}>Reset</button>
      </div>

      <style>{`
        .mini-timer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          padding: 24px 0;
        }
        .ring {
          width: 130px; height: 130px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.3s linear;
        }
        .ring.pulsing { animation: pulse-ring 1.6s ease-in-out infinite; }
        @keyframes pulse-ring {
          0%, 100% { filter: drop-shadow(0 0 0px var(--accent)); }
          50% { filter: drop-shadow(0 0 14px var(--accent)); }
        }
        .ring-inner {
          width: 104px; height: 104px;
          border-radius: 50%;
          background: var(--bg-alt);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          font-weight: 700;
          font-variant-numeric: tabular-nums;
        }
        .timer-controls { display: flex; gap: 10px; }
        .tiny { padding: 8px 20px; font-size: 13px; }
      `}</style>
    </div>
  );
}
