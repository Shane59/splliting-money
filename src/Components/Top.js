import React, {useState, useEffect} from 'react';

export default function Top() {
  const [memberInfo, SetMemberInfo] = useState([]);
  const [currentMember, SetCurrentMember] = useState("");

  function handleMemeberinfo(e, memberInfo) {
    let newArr = [];
    SetMemberInfo(newArr);
    memberInfo.map((el, index) => {
      if (index == e.target.name) {
        newArr.push(e.target.value);
      } else {
        newArr.push(el);
      }
    });
    SetMemberInfo(newArr);
    
  }

  function CreateRadioButtonForWhoPaid() {
    var RadioButtons = [];
    memberInfo.map((el, index) => {
      RadioButtons.push (
        <div key={el}>
          <input type="radio" name={`for-who-paid-${index}`}/>
          <label htmlFor="">{el}</label>
        </div>
      )
    })
    return RadioButtons;
  }

  function CreateRadioButtonForWho() {
    var RadioButtons = [];
    memberInfo.map((el, index) => {
      RadioButtons.push (
        <div key={el}>
          <input type="radio" name={`for-who-${index}`}/>
          <label htmlFor="">{el}</label>
        </div>
      )
    })
    return RadioButtons;
  }

  function AddMemberInfo() {
    
    return (
      <div>
        <input id="memberName" type="text" onChange={(e) => SetCurrentMember(e.target.value)}/>
        <label htmlFor="memberName"></label>
        <button onClick={() => addMemebers()}>Add +</button>
      </div>
    );
  }

  function addMemebers() {
    let newArr = [...memberInfo];
    newArr.push(currentMember);
    SetMemberInfo(newArr);
    document.getElementById('memberName').value ='';
  }

  useEffect(() => {
    console.log('memberInfo has Changed' + memberInfo);
  }, [memberInfo])

  return(
    <div>
      <div>
        <div>
          <div>type their name</div>
          {AddMemberInfo()}
        </div> 
        <div>who paid?</div>
        <div>
          {CreateRadioButtonForWhoPaid()}
        </div>
        <div>for who?</div>
        <div>
          {CreateRadioButtonForWho()}
        </div> 
      </div>
    <button>calculate</button>
  </div>
  )
}