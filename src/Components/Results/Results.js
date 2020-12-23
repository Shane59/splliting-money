import React, {useState, useEffect} from 'react';
import './Results.css';

export default function Results(props) {
  let temp = [];
    Object.keys(props.userObj).map((el) => {
      console.log('how does this get rendered?');
      console.log(props.userObj[el]);
      temp.push(
        <div className="person-result">
          <div className="result-name">{props.userObj[el].key}</div>
          <div className="result-amount">{props.userObj[el].value} yen</div>
        </div>
      );
    })
    return temp;
}