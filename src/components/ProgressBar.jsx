import React from 'react';
import { checkPassword } from '../services/checkPassword';

export default function ProgressBar({ password }) {
  const { progress, color } = checkPassword(password);
  const styles = { width: `${progress}%`, background: color };

  return (
    <div className="progress">
      <div className="progress-bar" style={styles}></div>
    </div>
  );
}
