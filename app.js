//how old I am
let myAge = 31;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears  -= 4;

myAgeinDogYears = earlyYears + laterYears;

console.log(earlyYears);
console.log(laterYears);
console.log(myAgeinDogYears);

myName ="Iain".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeinDogYears} years old in dog years.`);


function dogYears(myAge){
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears  -= 4;
myAgeinDogYears = earlyYears + laterYears;
return console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeinDogYears} years old in dog years.`);
}

dogYears(1);
yourName = input("what is your name?");