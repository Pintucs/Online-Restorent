import React from 'react'

let curDate=new Date();
curDate=curDate.getHours();

// const convertFrom24To12Format = (time24) => {
//     const [sHours, minutes] = time24.match(/([0-9]{1,2}):([0-9]{2})/).slice(1);
//     const period = +sHours < 12 ? 'AM' : 'PM';
//     const hours = +sHours % 12 || 12;
// }

let pintu= "";

const cssStyle={};

if(curDate>=1&&curDate<=12){
    pintu="Hii, Morning";
    cssStyle.color="red";
}
else if(curDate>12&&curDate<18){
    pintu="Afternoon";
    cssStyle.color="blue";
}
else if(curDate>18&&curDate<21){
    pintu="Evening";
    cssStyle.color='brown';
}
else{
    pintu="Night";
    cssStyle.color="green";
}

const Timeduration=()=>{
    return (
<h1 style={cssStyle}>{pintu} {curDate} O'clock</h1>
    )
  }

export default Timeduration