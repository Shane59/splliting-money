import React, {useState, useEffect} from 'react';
import './Top.css';

export default function Top() {
  const [memberInfo, SetMemberInfo] = useState([]);
  const [currentMember, SetCurrentMember] = useState("");
  const [amoutPaid, SetAmoutPaid] = useState(0);
  const [forWho, SetForWho] = useState([]);
  const [calculated, setCalculated] = useState(false);
  const [userObj, setUserObj] = useState([]);

  function CreateRadioButtonForWho() {
    var RadioButtons = [];
    memberInfo.map((el, index) => {
      RadioButtons.push (
        <div key={el}>
          <input
            type="radio"
            value={el}
            name={`for-who-${index}`}
            checked={forWho.includes(el)}
            onClick={(e) => selectedPepopleForWho(e)}
          />
          <label htmlFor="">{el}</label>
        </div>
      )
    })
    return RadioButtons;
  }

  function AddMemberInfo() {
    return (
      <div>
        <input
          id="memberName"
          className="add-member-input"
          type="text"
          onChange={(e) => SetCurrentMember(e.target.value)}
        />
        <label htmlFor="memberName"></label>
        <button className="add-button" onClick={() => addMemebers()}>Add +</button>
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

  function displayResult() {
    let temp = [];
    Object.keys(userObj).map((el) => {
      console.log('how does this get rendered?');
      console.log(userObj[el]);
      temp.push(
        <div className="person-result">
          <div className="result-name">{userObj[el].key}</div>
          <div className="result-amount">{userObj[el].value} yen</div>
        </div>
      );
    })
    return temp;
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
    <div className="splitting-bill-app section">
      <h1 className="title">Splitting Bill</h1>
      <div>
        <div className="adding-name">
          <div className="subtitle">add a name</div>
          {AddMemberInfo()}
        </div> 
        {memberInfo.length > 0 ? 
          <div className="how-much-wrapper section">
            <div className="subtitle">how much?</div>
            <div>
              <input className="amount-input" type="text" onChange={(e) => SetAmoutPaid(e.target.value)}/>
            </div>
            <div className="display-bill">{amoutPaid} yen!</div>
          </div> :
          null
        }
        <div className="section">
          <div>for who?</div>
          <div>
            {CreateRadioButtonForWho()}
          </div>
        </div>
        {calculated ? 
          <div>
            {displayResult(amoutPaid)}
          </div>
        :
        null}
      </div>
    <button className="calc-button" onClick={() => calcBill()}>calculate</button>
  </div>
  )
}