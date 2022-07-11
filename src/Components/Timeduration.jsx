import React from 'react'

let curDate=new Date();
curDate=curDate.getHours();

let pintu= "";

const cssStyle={};

if(curDate>=1&&curDate<=12){
    pintu="Good Morning";
    cssStyle.color="red";
}
else if(curDate>12&&curDate<18){
    pintu="Good Afternoon";
    cssStyle.color="blue";
}
else if(curDate>18&&curDate<21){
    pintu="Good Evening";
    cssStyle.color='brown';
}
else{
    pintu="Good Night";
    cssStyle.color="green";
}

function Timeduration(){
    return (
<h1 style={cssStyle}>{pintu} {curDate} O'clock</h1>
    )
  }

export default Timeduration