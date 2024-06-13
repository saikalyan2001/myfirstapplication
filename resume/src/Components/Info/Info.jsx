import React, { useEffect, useRef, useState } from 'react';
import "./Info.css";
import Data from '../Data/Data';
import Drop from '../Dropdown/Drop';
import Test from '../test';

const Info = () => {

  const [apiKey, setApiKey] = useState('');
  const [isApiKeyEntered, setIsApiKeyEntered] = useState(false);

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (apiKey.trim() !== '') {
        setIsApiKeyEntered(true);
      }
    }
  };

  const handleBlur = () => {
    if (apiKey.trim() === '') {
      setIsApiKeyEntered(false);
    }
  };

  
/*     const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleIncrement = () => {
    let value = parseInt(inputRef.current.value, 10) || 0;
    setInputValue(value + 1);
  };

  const handleDecrement = () => {
    let value = parseInt(inputRef.current.value, 10) || 0;
    setInputValue(value - 1);
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
  }, [inputValue]);
 */
 /*    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    }
    
    const decrement = () => {
        setCount(count - 1);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Backspace') {
          setCount('');
        }
      }; */


  return (
    <div class="container">
        <h1 class="mb-5">Resume Generator</h1>
        <h5 class="mb-5">Create Your Resume by Filling the Following Details</h5>
        <form className="main">
  <div class="form-group">
    <label class="form-label mt-3" for="exampleFormControlInput1">Enter Your API key</label>
    <input type="password" id="apiKeyInput"  value={apiKey} onChange={handleApiKeyChange}  onKeyPress={handleKeyPress} onBlur={handleBlur} class="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1"/>
  </div> 
  {isApiKeyEntered && (     
    <>
  <div class="form-group">
    <label class="form-label mt-3" for="exampleFormControlInput1">Full Name</label>
    <input type="email" class="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="Enter your name" />
  </div>
  <div class="form-group">
    <label class="form-label mt-3" for="exampleFormControlInput1">GitHub URL</label>
    <input type="email" class="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="Enter URL only" />
  </div>
  <div class="form-group">
    <label class="form-label mt-3" for="exampleFormControlInput1">LinkedIn URL</label>
    <input type="email" class="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="Enter URL only" />
  </div>
  <div class="form-group">
    <label class="form-label mt-3" for="exampleFormControlInput1">Personal Website URL</label>
    <input type="email" class="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="Enter URL only" />
  </div>
  <div class="form-group">
    <label class="form-label mt-3" for="exampleFormControlInput1">Email</label>
    <input type="email" class="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="Enter your email" />
  </div>
  <div class="form-group">
    <label class="form-label mt-3" for="exampleFormControlInput1">Phone Number</label>
    <input type="email" class="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="Enter your phone number" />
  </div>
  <div>
  </div>
  <div class="form-group sai">
    <label class="form-label mt-3" for="exampleFormControlTextarea1">Professional Summary (Include Keywords from Job Description to make it ATS Friendly)</label>
    <textarea class="form-control w-50 bg-dark text-white border-0" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
{/*   <div class="form-group bbb">
    <label class="form-label mt-3" for="exampleFormControlInput1">Number of Experiences</label>
    <div class="input-group w-50">
    <input type="email" ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}  class="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="" />
    <button type="button" id="minus" class="input-group-text btn text-white bg-dark border-0 special" onClick={handleDecrement}>-</button>
    <button type="button" id="plus" class="input-group-text btn text-white bg-dark border-0 special" onClick={handleIncrement}>+</button>
  </div>
  </div>
  <div class="form-group bbb">
    <label class="form-label" for="exampleFormControlInput1">Number of Projects</label>
    <div class="input-group w-50">
    <input type="email" ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}  class="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="" />
    <button type="button" id="minus" class="input-group-text btn text-white bg-dark border-0 special" onClick={handleDecrement}>-</button>
    <button type="button" id="plus" class="input-group-text btn text-white bg-dark border-0 special" onClick={handleIncrement}>+</button>
  </div>
  </div>
  <div class="form-group bbb">
    <label class="form-label" for="exampleFormControlInput1">Number of Educational Entries</label>
    <div class="input-group w-50">
    <input type="email" ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}  class="form-control w-50 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="" />
    <button type="button" id="minus" class="input-group-text btn text-white bg-dark border-0 special" onClick={handleDecrement}>-</button>
    <button type="button" id="plus" class="input-group-text btn text-white bg-dark border-0 special" onClick={handleIncrement}>+</button>
  </div>
  </div> */}
  <Test />
  <div class="form-group mt-3">
    <label class="form-label" for="exampleFormControlTextarea1">Skills (separated by comma)</label>
    <textarea class="form-control w-50 bg-dark text-white border-0" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button class="bg-dark text-white p-2 rounded mt-3 button btn btn-outline-secondary">Generate PDF</button>
  </>
)}
</form>
</div>
  )
}

export default Info
