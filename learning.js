const rNum = Math.floor(Math.random()*100)+1
let noGuess = 0
//document.getElementById("demo").textContent = rNum
console.log(rNum)
function guessing(){
const guess= Number(document.getElementById("userInputNum").value)
if(guess <=0 || guess>=101){
	document.getElementById("hint").textContent = 'pls pick a number between 1-100, dumbass'
}
else if(isNaN(guess)){
document.getElementById("hint").textContent = "wtf that isn't even a number"
}
else if(guess < rNum){
document.getElementById("hint").textContent = "the answer is higher than " + guess
}
else if(guess > rNum){
document.getElementById("hint").textContent = "the answer is lower than " + guess
}
else{
document.getElementById("hint").textContent = "ur right the answer is " + rNum
}
}

function hello(name, age){
	return console.log("hello " + name + "you are " + age + "years old")
}

let name = "viphou"
let age = "17"

function greetings(name, age){
	console.log(`hello, ${name}`)
	console.log(`you are ${age} years old`)
}
greetings(name, age)

let fruits = ["apple", "banana", "watermelon", "orange","rectangle", "building",]
function join(fruits){
	fruits.join
}

const randomWords = [
  "Elephant",
  "Sunshine",
  "Astronaut",
  "Guitar",
  "Pineapple",
  "Serendipity",
  "Galaxy",
  "Bubblegum",
  "Tornado",
  "Mosaic",
  "Wanderlust",
  "Pegasus",
  "Velvet",
  "Cactus",
  "Symphony"
];

console.log(...randomWords.sort());

const userInput = document.getElementById("userInputTemp")
const cel2Far = document.getElementById("cel2Far")
const far2Cel = document.getElementById("far2Cel")
let TempAnsw
function convert(){
  if(cel2Far.checked){
    TempAnsw = Number(userInput.value)
    TempAnsw = (TempAnsw * 9/5) +32
    document.getElementById("tempAnsw").textContent = TempAnsw.toFixed(2) + "°F"
  }
  else if(far2Cel.checked){
    TempAnsw = Number(userInput.value)
    TempAnsw = (TempAnsw - 32) * (5/9)
    document.getElementById("tempAnsw").textContent = TempAnsw.toFixed(2) + "°C"
  }
  else if(!(cel2Far.checked && far2Cel.checked)){
    document.getElementById("tempAnsw").textContent = "pls pick a button, dumbass"
  }
}

// RANDOM PASSWORD GENERATOR

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if(length <= 0){
      return `(password length must be at least 1)`;
  }
  if(allowedChars.length === 0){
      return `(At least 1 set of character needs to be selected)`;
  }

  for(let i = 0; i < length; i++){
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
  }

  return password;
}

const passwordLength = 20;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                               includeLowercase, 
                               includeUppercase, 
                               includeNumbers, 
                               includeSymbols);

console.log(`Generated password: ${password}`);

function hello(callback){
  console.log("hello")
  callback()
}
function goodbye(){
  console.log("goodbye")
}
function leave(){
  console.log("please leave")
}

hello(leave)

function adding(callback, x, y){
  let result = x - y
  callback(result)
}
function display(result){
  console.log(result)
}

adding(display, 2, -111)

let math = 0.1+0.2
console.log(math.toFixed(2))

function executeCall(){
  const callBack1 = Number(document.getElementById("callbackIn1").value)
  const callBack2 = Number(document.getElementById("callbackIn2").value)

  function addCallback(callback, x, y){
    let resultCall = x + y
    callback(resultCall)
  }
  function display(resultCall){
    document.getElementById("callbackAnsw").textContent = resultCall.toFixed(2)
  }

  addCallback(display, callBack1, callBack2 )

}
let sex = -13
let qrfwe = 1324
function anal(x, y){
  let z = x + y
  return z
}

console.log(anal(sex, qrfwe))

function forLoop(){
  for (let i = 1; i <= 13; i++) {
    console.log("i")
  }
}
forLoop()

let numbersForEach = [1, 2, 3, 4, 5]

function consoleLog(element){
  console.log(element)
}

function squared(element,index,array){
  array[index] = Math.pow(element, 2)
}

numbersForEach.forEach(squared)
numbersForEach.forEach(consoleLog)

function anal(x,y){
 return x * y
}

let answanal = anal(5,3)

console.log(answanal)

let arrays = ["fruit1", "fruit2", "fruit3", "fruit4", "fruit5", "fruit6"]

console.log(arrays[3])

function forLoopExample(length){
  for (i=1; i<=insideVari; i*=2){
    console.log(i)
  }
}

const insideVari = 20
forLoopExample(insideVari)