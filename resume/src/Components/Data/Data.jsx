import React, { useEffect, useRef, useState } from 'react';
import Drop from "../Dropdown/Drop";

const Info = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(0);
  const [experiences, setExperiences] = useState([]);

  const handleIncrement = () => {
    let value = parseInt(inputRef.current.value, 10) || 0;
    setInputValue(value + 1);
  };

  const handleDecrement = () => {
    let value = parseInt(inputRef.current.value, 10) || 0;
    if (value > 0) {
      setInputValue(value - 1);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Backspace') {
      setInputValue(0);
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
    <div className="container">
      <h1 className="mb-5">Resume Generator</h1>
      <h5 className="mb-5">Create Your Resume by Filling the Following Details</h5>
      <form className="main">
        <div className="form-group">
          <label className="form-label" htmlFor="exampleFormControlInput1">Full Name</label>
          <input type="email" className="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label className="form-label mt-3" htmlFor="exampleFormControlInput1">GitHub URL</label>
          <input type="email" className="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="Enter URL only" />
        </div>
        <div className="form-group">
          <label className="form-label mt-3" htmlFor="exampleFormControlInput1">LinkedIn URL</label>
          <input type="email" className="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="Enter URL only" />
        </div>
        <div className="form-group">
          <label className="form-label mt-3" htmlFor="exampleFormControlInput1">Personal Website URL</label>
          <input type="email" className="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="Enter URL only" />
        </div>
        <div className="form-group">
          <label className="form-label mt-3" htmlFor="exampleFormControlInput1">Email</label>
          <input type="email" className="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label className="form-label mt-3" htmlFor="exampleFormControlInput1">Phone Number</label>
          <input type="email" className="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="Enter your phone number" />
        </div>
        <div className="form-group">
          <label className="form-label mt-3" htmlFor="exampleFormControlTextarea1">Professional Summary (Include Keywords from Job Description to make it ATS Friendly)</label>
          <textarea className="form-control w-50 bg-dark text-white border-0" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="form-group bbb">
          <label className="form-label mt-3" htmlFor="exampleFormControlInput1">Number of Experiences</label>
          <div className="input-group w-50">
            <input type="email" ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(parseInt(e.target.value, 10) || 0)} className="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="" />
            <button type="button" id="minus" className="input-group-text btn text-white bg-dark border-0 special" onClick={handleDecrement}>-</button>
            <button type="button" id="plus" className="input-group-text btn text-white bg-dark border-0 special" onClick={handleIncrement}>+</button>
          </div>
        </div>
        {experiences.map((experience, index) => (
          <div key={index} style={{ marginTop: '20px' }}>
            <div
              style={{
                cursor: 'pointer',
                padding: '10px',
                backgroundColor: '#333',
                color: '#fff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: experience.isOpen ? '1px solid #ccc' : '1px solid transparent',
                borderBottom: experience.isOpen ? 'none' : '1px solid #ccc',
                borderRadius: experience.isOpen ? '5px 5px 0 0' : '5px'
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
                borderRadius: '0 0 5px 5px'
              }}>
                <div>
                  <label>Role {index + 1}</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Company {index + 1}</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Start Date {index + 1}</label>
                  <input type="date" defaultValue="2024-06-11" />
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    I am currently working in this role
                  </label>
                </div>
                <div>
                  <label>End Date {index + 1}</label>
                  <input type="date" defaultValue="2024-06-11" />
                </div>
                <div>
                  <label>Description {index + 1}</label>
                  <textarea></textarea>
                </div>
              </div>
            )}
          </div>
        ))}
        <Drop />
        <div className="form-group bbb">
          <label className="form-label" htmlFor="exampleFormControlInput1">Number of Projects</label>
          <div className="input-group w-50">
            <input type="email" ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(parseInt(e.target.value, 10) || 0)} className="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="" />
            <button type="button" id="minus" className="input-group-text btn text-white bg-dark border-0 special" onClick={handleDecrement}>-</button>
            <button type="button" id="plus" className="input-group-text btn text-white bg-dark border-0 special" onClick={handleIncrement}>+</button>
          </div>
        </div>
        <Drop />
        <div className="form-group bbb">
          <label className="form-label" htmlFor="exampleFormControlInput1">Number of Educational Entries</label>
          <div className="input-group w-50">
            <input type="email" ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(parseInt(e.target.value, 10) || 0)} className="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="" />
            <button type="button" id="minus" className="input-group-text btn text-white bg-dark border-0 special" onClick={handleDecrement}>-</button>
            <button type="button" id="plus" className="input-group-text btn text-white bg-dark border-0 special" onClick={handleIncrement}>+</button>
          </div>
        </div>
        <Drop />
        <div className="form-group">
          <label className="form-label" htmlFor="exampleFormControlTextarea1">Skills (separated by comma)</label>
          <textarea className="form-control w-50 bg-dark text-white border-0" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className="bg-dark text-white p-2 rounded mt-3 button">Generate PDF</button>
      </form>
    </div>
  );
}

export default Info;
