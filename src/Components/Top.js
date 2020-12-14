import React, {useState, useEffect} from 'react';

export default function Top() {
  const [memberInfo, SetMemberInfo] = useState([]);
  const [currentMember, SetCurrentMember] = useState("");
  const [amoutPaid, SetAmoutPaid] = useState(0);
  const [whoPaid, SetWhoPaid] = useState('');
  const [forWho, SetForWho] = useState([]);

  function CreateRadioButtonForWhoPaid() {
    var RadioButtons = [];
    memberInfo.map((el, index) => {
      RadioButtons.push (
        <div key={el}>
          <input
            type="radio"
            value={el}
            name={`for-who-paid-${index}`}
            checked={whoPaid === el}
            onChange={(e) => selectedPepople(e)}
          />
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
          type="text"
          onChange={(e) => SetCurrentMember(e.target.value)}
        />
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

  function selectedPepople(e) {
    SetWhoPaid(e.target.value);
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
    const userObj = [];
    for (var i = 0; i < memberInfo.length; i++) {
      const temp = {};
      temp.key = memberInfo[i];
      temp.value = 0;
      userObj.push(temp);
    }
    const billPerPerson = Math.round(amoutPaid / forWho.length);

    Object.keys(userObj).map((index) => {
      if (forWho.includes(userObj[index].key)) {
        userObj[index].value += billPerPerson;
      }
    });
    console.log(userObj);
    
  }

  useEffect(() => {
    console.log('memberInfo has Changed' + memberInfo);
  }, [memberInfo])

  useEffect(() => {
    console.log('for Who?' + forWho);
  }, [forWho])

  return(
    <div>
      <div>
        <div>
          <div>type their name</div>
          {AddMemberInfo()}
        </div> 
        {memberInfo.length > 0 ? 
          <div>
            how much?
            <div>
              <input type="text" onChange={(e) => SetAmoutPaid(e.target.value)}/>
            </div>
            {amoutPaid} yen!
          </div> :
          null
        }
        <div>who paid?</div>
        <div>
          {CreateRadioButtonForWhoPaid()}
        </div>
        <div>for who?</div>
        <div>
          {CreateRadioButtonForWho()}
        </div> 
      </div>
    <button onClick={() => calcBill()}>calculate</button>
  </div>
  )
}