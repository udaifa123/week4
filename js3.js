let numbers=[1,2,2,3,3,4];
let uniqueNumbers=[...new Set(numbers)];
console.log(uniqueNumbers);

let fruits=new Set(["apple","mango","orange"]);
console.log(fruits.has("mango"));
console.log(fruits.has("grape"));

let userIds=new Set();
userIds.add(101).add(102).add(101);
console.log(userIds);

let map=new Map();
let objKey={id:1};
map.set(objKey,"User 1");
console.log(map.get(objKey));

let words=["apple","banana","apple","orange","banana"];
let wordCount=new Map();
words.forEach(word=>{
    wordCount.set(word,(wordCount.get(word)||0)+1);
});
console.log(wordCount);

let numbers1=new Set([1,2,3,3]);
console.log(numbers1);

let myMap=new Map();
myMap.set("name","Udaifa");
myMap.set("age",18);
console.log(myMap.get("name"));
console.log(myMap.has("age"));
myMap.delete("age");
myMap.forEach((value,key)=>{
    console.log(key,value);
});

let numbers2=[1,2,2,3,4,4,5];
let uniqueNumbers1=[...new Set(numbers2)];
console.log("Original array",numbers2);
console.log("without duplicates",uniqueNumbers1)

function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(getRandomInt(1,10));

let randomDecimal=Math.random();
console.log("Random decimal(0-1):",randomDecimal);

console.log("Random decimal:",Math.random());

function getRandomDecimal(min,max){
    return Math.random()*(max-min)+min;
}
console.log("Random decimal between 5 and 10:",getRandomDecimal(5,10));

function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log("Random integer between 1 and 10:",getRandomInt(1,10));

let num=5.6789;
console.log("\nRounding examples:");
console.log("Math.round:",Math.round(num));
console.log("Math.floor:",Math.floor(num));
console.log("Math.ceil:",Math.ceil(num));


let values=[10,4,25,7,16];
console.log("\nMin value:",Math.min(...values));
console.log("Max value:",Math.max(...values));

const greet=function(name){
    return`Hello,${name}!`;
};
console.log(greet("Udaifa"));
function saySomething(fn){
    console.log(fn("JavaScript"));
}
saySomething(greet);
function multiplier(factor){
    return function(number){
        return number*factor;
    };
}
const double=multiplier(2);
console.log(double(5));

const usernames=new Set();
function addUsername(name){
    if(usernames.has(name)){
        console.log(name+" is taken");
    }else{
        usernames.add(name);
        console.log(name+" is added");
    }
}
addUsername("Udaifaahh");
addUsername("Ayshahh");
addUsername("Udaifaahh");
console.log(usernames);

