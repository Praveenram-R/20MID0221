import React, { useState } from 'react';

const NumberSelector = ({ onSelect }) => {
  const [numberId, setNumberId] = useState('');

  const handleChange = (event) => {
    setNumberId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSelect(numberId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="numberId">Number ID:</label>
      <input
        type="text"
        id="numberId"
        value={numberId}
        onChange={handleChange}
        placeholder="e1 (even 1st digit)"
      />
      <button type="submit">Get Numbers</button>
    </form>
  );
};

export default NumberSelector;
