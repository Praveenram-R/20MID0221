import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberSelector from './NumberSelector';
const WINDOW_SIZE = 10;
const NumberDisplay = () => {
  const [storedNumbers, setStoredNumbers] = useState([]);
  const [updatedNumbers, setUpdatedNumbers] = useState([]);
  const [average, setAverage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/numbers/p1'); 
        setStoredNumbers(response.data.storedNumbers);
        setUpdatedNumbers(response.data.updatedNumbers);
        setAverage(response.data.average);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred. Please try again.');
      }
    };

    fetchData();
  }, []);

  const handleSelect = async (numberId) => {
    setError(null); 

    try {
      const response = await axios.get(`http://localhost:3000/numbers/${numberId}`);
      setStoredNumbers(response.data.storedNumbers);
      setUpdatedNumbers(response.data.updatedNumbers);
      setAverage(response.data.average);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>Number Data</h1>
      {error && <p className="error">{error}</p>}
      <NumberSelector onSelect={handleSelect} />
      <h2>Stored Numbers (Before Latest Fetch):</h2>
      <ul>
        {storedNumbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      <h2>Updated Numbers (After Latest Fetch):</h2>
      <ul>
        {updatedNumbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      <h2>Average (Window Size {WINDOW_SIZE}):</h2>
      <p>{average !== null ? average : 'No data yet'}</p>
    </div>
  );
};

export default NumberDisplay;
