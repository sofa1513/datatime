import React from 'react';
import './Grid.css';

const Grid = ({ day, date, time, city, colorScheme }) => {
  const generateRandomChars = (length) => {
    const chars = 'luckyHaPPYHOPEbestLOVethankyouFOREVERLOVELYsun0123456789';
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
  };

  const getGridData = () => {
    const gridData = Array(120).fill(null).map(() => generateRandomChars(1)); // Increased to 120 for two extra rows

    // Placing day in the grid (second row, start)
    day.split('').forEach((char, index) => {
      gridData[20 + index] = <span className={`highlight-yellow ${colorScheme}`}>{char}</span>;
    });

    // Placing time in the grid (third row, slightly left)
    time.split('').forEach((char, index) => {
      gridData[40 + 2 + index] = <span className={`highlight-white ${colorScheme}`}>{char}</span>;
    });

    // Placing date in the grid (fourth row, more left)
    date.split('').forEach((char, index) => {
      gridData[60 + 4 + index] = <span className={`highlight ${colorScheme}`}>{char}</span>;
    });

    // Placing city in the grid (fifth row, end)
    city.split('').forEach((char, index) => {
      gridData[80 + (20 - city.length) + index] = <span className={`highlight-white ${colorScheme}`}>{char}</span>;
    });

    // Additional rows of random characters (sixth and seventh rows)
    for (let i = 100; i < 120; i++) {
      gridData[i] = <span className={`highlight`}>{generateRandomChars(1)}</span>;
    }

    return gridData;
  };

  return (
    <div className="container">
      {getGridData().map((char, index) => (
        <div key={index} className="cell">
          {char}
        </div>
      ))}
    </div>
  );
};

export default Grid;