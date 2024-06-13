import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

function Experience() {
  // State to manage the visibility of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ margin: '20px', border: '2px solid #ccc', width: '555px', marginLeft: '1px', borderRadius: '5px' }}>
      {/* Header that toggles the dropdown */}
      <div 
        style={{ 
          cursor: 'pointer', 
          padding: '10px', 
          color: '#fff', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
        }}
        onClick={toggleDropdown}
      >
        Experience 1
        {/* Dropdown symbol */}
        <span>
          {isOpen ? '>' : '<'}
        </span>
      </div>

      {/* Dropdown content */}
      {isOpen && (
        <div style={{ padding: '10px', }}>
            <div class="form-group">
              <label class="form-label" for="exampleFormControlInput1">Role 1</label>
              <input type="email" class="form-control w-80 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div class="form-group">
              <label class="form-label mt-3" for="exampleFormControlInput1">Company 1</label>
              <input type="email" class="form-control w-80 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div class="form-group">
              <label class="form-label mt-3" for="exampleFormControlInput1">Start Date 1</label>
              <input type="email" class="form-control w-80 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div class="form-group mt-2">
              <input class="mt-3" type="checkbox" />
              <label class="form-label p-2" >I am currently working in this role</label>
            </div>
            <div class="form-group">
              <label class="form-label mt-1" for="exampleFormControlInput1">End Date 1</label>
              <input type="email" class="form-control w-80 bg-dark text-white border-0" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div class="form-group">
              <label class="form-label mt-2" for="exampleFormControlTextarea1">Description 1</label>
              <textarea class="form-control w-80 bg-dark text-white border-0" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          <div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
