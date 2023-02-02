import React from 'react';
import { checkPassword } from '../services/checkPassword';

export default function ProgressBar({ password }) {
  const changeProgressColor = () => ({
    width: `${checkPassword(password).progress}%`,
    background: `${checkPassword(password).color}`,
  });

  return (
    <div className="progress">
      <div className="progress-bar" style={changeProgressColor()}></div>
    </div>
  );
}
