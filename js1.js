const person = {
    name: "Aflaahh",
    age: 23,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name); 
console.log(person.age);  
person.greet();    

const car=new Object();
car.brand="Toyota";
car.model="Corolla";
car.start=function(){
    console.log(`${this.brand} ${this.model} is starting.`);
};
car.start();

function Person(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log(`Hi,I'm ${this.name}`);
    };
}
const person1=new Person("Laaz",25);
const person2=new Person("Jaaz",20);
person1.greet();
person2.greet();

class Person3{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello,my name is ${this.name}`);
    }
}
const person3=new Person3("Ayrin",25);
person3.greet();

const cat={
    name:"Tattu"
};
cat.cry=function(){
    console.log(`${this.name} is crying!`);
};
cat.cry();

const person4={
    name:"Marwa",
    greet:function(){
        console.log("Hello,"+this.name);
        }
    };
    person4.greet();

const person5={
    name:"Shaaz",
    greet:()=>{
        console.log("Hello,"+this.name);
    }
};
person5.greet();

const person6={
    name:"Charlie",
    greet:function(){
        function inner(){
            console.log(this.name);
        }
        inner();
    }
};
person6.greet();

const person7={
    name:"Charlie",
    greet:function(){
        const inner=()=>{
            console.log(this.name);
        };
        inner();
    }
};
person7.greet();

const user={
    username:"udaifa",
    email:"udaifa@045gmail.com",
    country:"India"
};
const{username,country}=user;
console.log(username);
console.log(country);

const numbers=[10,20,30];
const[first,second]=numbers;
console.log(first);
console.log(second);

const{city="Unknown"}=user;
console.log(city);

let[a,b,c]=[10,20,30];
console.log(a,b,c);

let[x,z]=[1,2,3];
console.log(x,z);

let [first1, ...rest]=[5,10,15,20];
console.log(first1);
console.log(rest);

let[p=100,q=200]=[50];
console.log(p,q);

let person8={name:"Saji",age:19,city:"Ladak"};
let{name,age}=person8;
console.log(name,age);

let{name:fullName,age:years}=person8;
console.log(fullName,years);

let{name1,country1="Paris"}=person8;
console.log(name,country1);

let student={
    id:1,
    info:{firstName:"lazzy",lastName:"Dain"}
};
let{info:{firstName,lastName}}=student;
console.log(firstName,lastName);

let data={
    colors:["black","white","green"],
    sizes:{small:"S",large:"L"}
};
let[primary,secondary]=data.colors;
let{sizes:{small,large}}=data;
console.log(primary,secondary);
console.log(small,large);

function outer(){
    let count=0;
    return function inner(){
        count++;
        console.log(count);
    };
}
const increment=outer();
increment();
increment();
increment();

function counter(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    };
}
const myCounter=counter();
myCounter();
myCounter();

function greet(name){
    return function(){
        console.log(`Hello, ${name}!`);
    };
}
const greetBob=greet('Bob');
greetBob();

function bankAccount(balance){
    return function(amount){
        balance+=amount;
         console.log(`Balance: ${balance}`);
        };
}
const account=bankAccount(100);
account(50);
account(30);

function createProfile(name2,age2,skills){
    return{
        name2,
        age2,
        skills
    };
}
const profile=createProfile("Hisha",24,["HTML","CSS","JavaScript"]);
const{name2,age2,skills}=profile;
console.log("Name:",name2);
console.log("Age:",age2);
console.log("Skills:",skills.join(","));





