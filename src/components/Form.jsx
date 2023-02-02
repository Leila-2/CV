import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function Form() {
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <>
      <div className="form-group mb-2">
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <ProgressBar password={password} />
    </>
  );
}
