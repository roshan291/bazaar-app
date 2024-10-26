import React, { useState } from 'react';

const StepThree = ({ formData, handleChange }: any) => {
  const [password, setPassword] = useState('');

  return (
    <div>
      <h2>Step 3: Enter your password</h2>
      <input
        type="text"
        placeholder="password"
        value={formData.password}
        onChange={handleChange('password')}
      />
    </div>
  );
};

export default StepThree;
