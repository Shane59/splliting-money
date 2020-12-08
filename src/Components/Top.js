import React, {useState} from 'react';

export default function Top() {
  const [numOfPeople, setNumOfPeople] = useState(0);
  const [memberInfo, SetMemberInfo] = useState([]);

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

  function CreateRadioButtonForWhoPaid(numOfPeople, membersInfo) {
    var RadioButtons = [];
    membersInfo.map((el, index) => {
      RadioButtons.push (
        <div key={el}>
          <input type="radio" name={`for-who-paid-${index}`}/>
          <label htmlFor="">{el}</label>
        </div>
      )
    })
    return RadioButtons;
  }

  function CreateRadioButtonForWho(numOfPeople, membersInfo) {
    var RadioButtons = [];
    membersInfo.map((el, index) => {
      RadioButtons.push (
        <div key={el}>
          <input type="radio" name={`for-who-${index}`}/>
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
    console.log('====================================');
    console.log('addMemberInfo');
    console.log('====================================');
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
      {numOfPeople !== 0 ? 
        <div>
          <div>
            <div>type their name</div>
            {AddMemberInfo(numOfPeople, memberInfo)}
          </div> 
          <div>who paid?</div>
          <div>
            {CreateRadioButtonForWhoPaid(numOfPeople, memberInfo)}
          </div>
          <div>for who?</div>
          <div>
            {CreateRadioButtonForWho(numOfPeople, memberInfo)}
          </div> 
        </div>
        :
        null
      }
      <button>calculate</button>
    </div>
  )
}