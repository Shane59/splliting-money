import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const PersonResult = styled.div`
  display: flex;
`;
const ResultName = styled.div`
  flex: 0 0 180px;
`;
const ResultAmount = styled.div`
  flex: 1 0 auto;
`;

export default function Results(props) {
  let temp = [];
    Object.keys(props.userObj).map((el) => {
      console.log('how does this get rendered?');
      console.log(props.userObj[el]);
      temp.push(
        <PersonResult className="person-result">
          <ResultName className="result-name">{props.userObj[el].key}</ResultName>
          <ResultAmount className="result-amount">{props.userObj[el].value} yen</ResultAmount>
        </PersonResult>
      );
    })
    return temp;
}