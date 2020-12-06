import React, {useState} from 'react';

function CreateRadioButton(numOfPeople, membersInfo) {
  
  var RadioButtons = [];
  for (var i = 0; i < numOfPeople; i++) {
    RadioButtons.push (
      <div key={i}>
        <input type="radio"/>
      </div>
    )
  }
  return RadioButtons;
}

function AddMemberInfo(numOfPeople, membersInfo) {
  var RadioButtons = [];
  
  for (var i = 0; i < numOfPeople; i++) {
    RadioButtons.push (
      <div key={i}>
        <input type="text" onChange={(e, index) => handleMemeberinfo(e, index)}/>
      </div>
    )
  }
  return RadioButtons;
}

function handleMemeberinfo(e, index) {
  // console.log(RadioButtons);
  
}

export default function Top() {
  const [numOfPeople, setNumOfPeople] = useState(0);
  var [memberInfo, SetMemberInfo] = useState([]);

  function handleChange(e) {
    console.log('in the handle change');
    setNumOfPeople(e.target.value);
    SetMemberInfo([]);
    for (var i = 0; i < numOfPeople; i++) {
      console.log('memberInfo');
      SetMemberInfo(memberInfo.push("hi"));
    }
    console.log(memberInfo);
  }

  return(
    <div>
      <div>how many people are in your group</div>
      <input type="text" onChange={handleChange} />
      <div>type their name</div>
      {AddMemberInfo(numOfPeople, 1)}
      <div>who paid?</div>
      {CreateRadioButton(numOfPeople, 1)}
      <div>for who?</div>
      {CreateRadioButton(numOfPeople, 1)}
      <button>calculate</button>
    </div>
  )
}