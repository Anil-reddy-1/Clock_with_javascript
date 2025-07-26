let time = null;
let elapsedtime=0,running= false,settime=0;
let hours, minutes, seconds,milisecs;
//let y = Date.now()
//document.getElementById("report").textContent=`yo.${y}`

//document.getElementById("start").onclick=start();
function start() {
  if(!running){
  settime = Date.now()-elapsedtime;
  time=setInterval(update,10);
  running=true;
  }
}
function stop(){
  if(running){
    clearInterval(time);
    running = false;
  }
}
function reset() {
  clearInterval(time);
  running=false;
  elapsedtime=0;
  document.getElementById("time").textContent=`00:00:00:00`;
}
function update() {
  let curtime = Date.now();
  elapsedtime= curtime-settime;
  hours=Math.floor(elapsedtime/(1000*60*60));
  minutes=Math.floor(elapsedtime/(1000*60)%60);
  seconds=Math.floor(elapsedtime/1000%60);
  milisecs=Math.floor((elapsedtime%1000)/10);
  hours=String(hours).padStart(2,"0");
  minutes=String(minutes).padStart(2,"0");
  seconds=String(seconds).padStart(2,"0");
  milisecs=String(milisecs).padStart(2,"0");
  document.getElementById("time").textContent=`${hours}:${minutes}:${seconds}:${milisecs}`
  
}
























/*let num = [3,4,5,6,8];
let y = num.reduce(square);
function square(acc,param) {
 acc=acc+param;
  return acc;
}
const person1 = {
  name: "Anil",
  age: 23,
  mail: "anilreddy5251@gmail.com",
  hello(){
    report.textContent= `HELLO THIS IS  ${person1.name}`;
  }
}
person1.hello();
//report.textContent= ` the numbers are ${person1.mail} `;
/*
function person (name,age,mail){
  this.name=name,
  this.age=age,
  this.mail=mail,
  this.hello = function () {report.textContent=`Hello This is ${this.name}`}
}


//let person1= new person("anil",18,"anilreddy5251");
const {name,age,mail}=person1;
report.textContent=` yo ${person1.name}.${person1.mail}`;

report1.textContent =`${name} ${age} ${mail}`
/*
class person{
  static count =0;
  constructor(name,age,mail){
    this.name=name;
    this.age=age;
    this.mail=mail;
    person.count++;
  }
  hello(){
    report.textContent=`this is ${this.name} my age is ${this.age} contact by ${this.mail} user no ${person.count} i am ${this.occupation}`
  }
}
class per extends person{
   constructor(name,age,mail, occupation){
    super (name,age,mail);
    this.occupation =occupation;
  }
  yo(){
    report1.textContent=`i am a ${this.occupation}`;
    super.hello();
  }
}


const person1 = new per("anil",18,"anilreddy5251@gmail.com","developer");
const person2 = new per("whish",19,"wish324@gmail.com","freelancer");
const person3 = new per("yo",23,"yo@gmail.com");

person1.hello();
person2.hello();
*/


/*
class user{
  constructor(name,num,dob){
    this.name=name;
    this.num=num;
    this.dob=dob;
  }
  set name(newname){
    if (newname=="" || newname.includes(SVGNumberList)) {
      document.getElementById("nameer").textContent=`enter the valid name`;
    }
    else {
      this._name=newname;
   document.getElementById("nameer").textContent=``;
    }
  }
  set num(newnum){
    if (newnum>100 || newnum<0){
      document.getElementById("ageer").textContent=`enter the Valid age`;
    }
    else {
      this._num=newnum;
    document.getElementById("ageer").textContent=``;
    }
    }
  
  get name(){
    return this._name;
  }
  get num(){
    return this._num;
  }
  
  display (){
    report.textContent=`your name is ${this.name} your number is ${this.num} your Date of Birth is ${this.dob}`;
  }
}







submit.onclick = function(){
  let num,name,dob;
 num = document.getElementById("number").value;
 num = Number(num);
  name=document.getElementById("name").value;
  dob=document.getElementById("dob").value;
  
  const person = new user(name,num,dob);
 person.display();
   // report.textContent= `the number is ${num}  ${name} ${dob}`;
  
 // report1.textContent= ` the number is ${dob}`;
}
*/




















