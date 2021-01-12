import React, {useState, useEffect} from 'react';

export default function RadioButtons(props) {
  var RadioButtons = [];
  console.log('props');
  console.log(props);
  
  props.memberInfo.map((el, index) => {
    RadioButtons.push (
      <div key={el}>
        <input
          type="radio"
          value={el}
          name={`for-who-${index}`}
          checked={props.forWho.includes(el)}
          onClick={(e) => props.function(e)}
        />
        <label htmlFor="">{el}</label>
      </div>
    )
  })
  return RadioButtons;
}