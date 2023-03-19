import React from 'react'

let curDate=new Date();
curDate=curDate.getHours();

let pintu= "";

const cssStyle={};

if(curDate>=1&&curDate<=12){
    pintu="Morning";
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