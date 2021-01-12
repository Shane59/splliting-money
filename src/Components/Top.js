import React, {useState, useEffect} from 'react';
import RadioButtons from './RadioButtons/RadioButtons';
import Results from './Results/Results';
import styled from 'styled-components';

const Title = styled.h1`
  background-color: #02C39A;
  text-align: center;
  margin: 0;
  padding: 10px;
  color: white;
  margin-bottom: 24px;
`;
const AddMemberInput = styled.input`
  height: 32px;
  width: 100%;
`;
const AddButton = styled.button`
  width: 120px;
  margin-top: 16px;
  padding: 10px;
  background-color: #02C39A;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
const Subtitle = styled.div`
  margin-bottom: 16px;
  margin-left: 16px;
  font-size: 24px;
`;
const AddButtonWrapper = styled.div`
  text-align: center;
`;
const ForWhoRadioButtonsWrapper = styled.div`
  margin-left: 16px;
`;
const ResultWrapper = styled.div`
  text-align: center;
  margin-top: 24px;
`;
const AmountInput = styled.input`
  height: 32px;
  width: 100%;
`;
const CalcButtonWrapper = styled.div`
  margin-top: 16px;
  text-align: center;
`;
const CalcButton = styled.button`
  width: 120px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  background-color: #02C39A;
  border-radius: 30px;
`;
const Section = styled.div`
  margin-top: 16px;
`;

export default function Top() {
  const [memberInfo, SetMemberInfo] = useState([]);
  const [currentMember, SetCurrentMember] = useState("");
  const [amoutPaid, SetAmoutPaid] = useState(0);
  const [forWho, SetForWho] = useState([]);
  const [calculated, setCalculated] = useState(false);
  const [userObj, setUserObj] = useState([]);

  function AddMemberInfo() {
    return (
      <div>
        <AddMemberInput
          id="memberName"
          placeholder="add a member"
          type="text"
          onChange={(e) => SetCurrentMember(e.target.value)}
        />
        <label htmlFor="memberName"></label>
        <AddButtonWrapper>
          <AddButton
            onClick={() => addMemebers()}>Add +</AddButton>
        </AddButtonWrapper>
      </div>
    );
  }

  function addMemebers() {
    let newArr = [...memberInfo];
    newArr.push(currentMember);
    SetMemberInfo(newArr);
    document.getElementById('memberName').value ='';
  }

  function selectedPepopleForWho(e) {
    let newArr = [...forWho];
    if (forWho.includes(e.target.value)) {
      var deleteIndex = forWho.indexOf(e.target.value);
      newArr.splice(deleteIndex, deleteIndex = 1);
    } else {
      newArr.push(e.target.value);
    }
    SetForWho(newArr);
  }

  function calcBill() {
    setCalculated(true);
    var tempObj;
    tempObj = [...userObj];
    
    if (tempObj.length == 0) {
      for (var i = 0; i < memberInfo.length; i++) {
        const temp = {};
        temp.key = memberInfo[i];
        temp.value = 0;
        tempObj.push(temp);
      }
    } else {
      tempObj = userObj;
    }
    const billPerPerson = Math.round(amoutPaid / forWho.length);

    Object.keys(tempObj).map((index) => {
      if (forWho.includes(tempObj[index].key)) {
        tempObj[index].value += billPerPerson;
      }
    });
    setUserObj([...tempObj]);
  }

  useEffect(() => {
    console.log('memberInfo has Changed ' + memberInfo);
  }, [memberInfo])

  useEffect(() => {
    console.log('for Who?' + forWho);
  }, [forWho])

  useEffect(() => {
    console.log('userObj updated!' + userObj);
  }, [userObj])

  return(
    <div>
      <Title>Splitting Bill</Title>
      <div>
        <div>
          <Subtitle>1. Add a name</Subtitle>
          {AddMemberInfo()}
        </div> 
        {memberInfo.length > 0 ? 
          <Section>
            <Subtitle>2. How much?</Subtitle>
            <div>
              <AmountInput type="text" onChange={(e) => SetAmoutPaid(e.target.value)}/>
            </div>
          </Section>
          :
          null
        }
        {memberInfo.length > 0 ?
          <Section>
            <Subtitle>3. For who?</Subtitle>
            <ForWhoRadioButtonsWrapper>
              <RadioButtons
                memberInfo={memberInfo}
                function={selectedPepopleForWho}
                forWho={forWho}/>
            </ForWhoRadioButtonsWrapper>
          </Section>
        : null
        }
      </div>
      {memberInfo.length > 0 ?
        <CalcButtonWrapper>
          <CalcButton onClick={() => calcBill()}>calculate</CalcButton>
        </CalcButtonWrapper>
      : null
      }
      {calculated ?
        <ResultWrapper>
          <Results
            userObj={userObj}
          />
        </ResultWrapper>
      :
        null}
  </div>
  )
}