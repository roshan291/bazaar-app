import React, { useState } from 'react';

 
const StepFout = ({ formData, handleSubmit, handleChange }: any) => {
  const [name, setName] = useState('');

  return (
    <div>
      <h2>Step 4: Enter your name</h2>
      <input
        type="text"
        placeholder="agreement"
        value={formData.agreement}
        onChange={handleChange('agreement')}
      />
      <button type = "submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StepFout;
