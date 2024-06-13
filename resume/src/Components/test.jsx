import React, { useEffect, useRef, useState } from 'react';
import Drop from './Dropdown/Drop';
import './test.css';

const Info = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(1);
  const [experiences, setExperiences] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');


  const handleIncrement = () => {
    let value = parseInt(inputRef.current.value, 10) || 0;
    setInputValue(value + 1);
    setErrorMessage('');
  };

  const handleDecrement = () => {
    let value = parseInt(inputRef.current.value, 10) || 0;
    if (value > 0) {
      setInputValue(value - 1);
    }  else {
      setErrorMessage('Value must be greater than or equal to one');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Backspace') {
      setInputValue('');
    }
  };

  useEffect(() => {
    inputRef.current.addEventListener('keydown', handleKeyPress);
    return () => {
      inputRef.current.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    inputRef.current.value = inputValue;
    // Adjust the experiences array based on the inputValue
    if (inputValue > experiences.length) {
      const newExperiences = [
        ...experiences,
        ...Array(inputValue - experiences.length).fill({ isOpen: false }),
      ];
      setExperiences(newExperiences);
    } else if (inputValue < experiences.length) {
      setExperiences(experiences.slice(0, inputValue));
    }
  }, [inputValue, experiences]);

  const toggleDropdown = (index) => {
    const newExperiences = experiences.map((experience, i) => {
      if (i === index) {
        return { ...experience, isOpen: !experience.isOpen };
      }
      return experience;
    });
    setExperiences(newExperiences);
  };

  return (
    <div className="container kalyan">

        <div className="form-group bbb">
          <label class="form-label mt-3 exp1" htmlFor="exampleFormControlInput1">Number of Experiences</label>
          <div className="input-group w-50">
            <input type="text" ref={inputRef}
              value={inputValue}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10) || 0;
              setInputValue(value); 
                if (value >= 1) {
                  setErrorMessage('');
                } else {
                  setErrorMessage('Value must be greater than or equal to one');
                }}
              } className="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="" />
           {errorMessage && (
          <div className="popup" style={{ color: 'white', backgroundColor: "#212121", padding: "5px", fontSize: "12px", borderRadius: "5px", position: 'absolute', marginTop: '50px', left: '50%', zIndex: 1 }}>
            {errorMessage}
          </div>
        )}
            <button type="button" id="minus" className="input-group-text btn text-white bg-dark border-0 special" disabled={inputValue <= 0} onClick={handleDecrement}>-</button>
            <button type="button" id="plus" className="input-group-text btn text-white bg-dark border-0 special" onClick={handleIncrement}>+</button>
          </div>
        </div>
        {experiences.map((experience, index) => (
          <div key={index} style={{ marginTop: '20px' }}>
            <div
              style={{
                cursor: 'pointer',
                padding: '10px',
                color: '#fff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: experience.isOpen ? '1px solid #ccc' : '1px solid #ccc',
                borderBottom: experience.isOpen ? 'none' : '1px solid #ccc',
                borderRadius: experience.isOpen ? '5px 5px 0 0' : '5px',
                width: '555px'
              }}
              onClick={() => toggleDropdown(index)}
            >
              Experience {index + 1}
              <span>
                {experience.isOpen ? '▲' : '▼'}
              </span>
            </div>

            {experience.isOpen && (
              <div style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderTop: 'none',
                borderRadius: '0 0 5px 5px',
                width: '555px',
              }}>
                <div class="form-group">
                  <label>Role {index + 1}</label>
                  <input class="form-control w-80 bg-dark text-white border-0" type="text" />
                </div>
                <div>
                  <label class="mt-3">Company {index + 1}</label>
                  <input class="form-control w-80 bg-dark text-white border-0" type="text" />
                </div>
                <div>
                  <label class="mt-3">Start Date {index + 1}</label>
                  <input class="form-control w-80 bg-dark text-white border-0" type="date" defaultValue="2024-06-11" />
                </div>
                <div>
                    <input type="checkbox" />
                    <label class="p-2 mt-2" > I am currently working in this role </label>
                </div>
                <div>
                  <label class="mt-3">End Date {index + 1}</label>
                  <input class="form-control w-80 bg-dark text-white border-0" type="date" defaultValue="2024-06-11" />
                </div>
                <div>
                  <label class="mt-3">Description {index + 1}</label>
                  <textarea class="form-control w-80 bg-dark text-white border-0"></textarea>
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Info;
