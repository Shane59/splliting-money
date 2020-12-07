import React, {useState} from 'react';

export default function Top() {
  const [numOfPeople, setNumOfPeople] = useState(0);
  const [memberInfo, SetMemberInfo] = useState([]);

  function handleMemeberinfo(e, memberInfo) {
    let newArr = [];
    memberInfo.map((el, index) => {
      if (index == e.target.name) {
        newArr.push(e.target.value);
      } else {
        newArr.push(el);
      }
    });
    SetMemberInfo(newArr);
    
  }

  function CreateRadioButton(numOfPeople, membersInfo) {
  
    var RadioButtons = [];
    memberInfo.map((el) => {
      RadioButtons.push (
        <div key={el}>
          <input type="radio"/>
          <label htmlFor="">{el}</label>
        </div>
      )
    })
    return RadioButtons;
  }

  function handleChange(e) {
    const temp = e.target.value;
    setNumOfPeople(temp);
    SetMemberInfo([]);
    var i;
    for (i = 0; i < temp; i++) {
      SetMemberInfo(memberInfo.push("hi"));
    }
    SetMemberInfo(memberInfo);
  }

  function AddMemberInfo(numOfPeople, membersInfo) {
    var RadioButtons = [];
    
    for (var i = 0; i < numOfPeople; i++) {
      RadioButtons.push (
        <div key={i}>
          <input type="text" name={i} onChange={(e, index) => handleMemeberinfo(e, memberInfo)}/>
        </div>
      )
    }
    return RadioButtons;
  }

  return(
    <div>
      <div>how many people are in your group</div>
      <input type="text" onChange={handleChange} />
      <div>type their name</div>
      {AddMemberInfo(numOfPeople, memberInfo)}
      <div>who paid?</div>
      {CreateRadioButton(numOfPeople, memberInfo)}
      <div>for who?</div>
      {CreateRadioButton(numOfPeople, memberInfo)}
      <button>calculate</button>
    </div>
  )
}