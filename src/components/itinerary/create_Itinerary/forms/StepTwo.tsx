import React, { useState } from 'react';

const StepTwo = ({ formData, handleChange }: any) => {
  const [email, setEmail] = useState('');

  return (
    <div>
      <h2>Step 2: Enter your email</h2>
      <input
        type="text"
        placeholder="email"
        value={formData.email}
        onChange={handleChange('email')}
      />
    </div>
  );
};

export default StepTwo;
