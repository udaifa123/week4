const person={
    greet:function(){
        console.log(`Hello,my name is ${this.name}`);
    }
};
const udaifaahh=Object.create(person);
udaifaahh.name="Udaifaahh😍";
udaifaahh.greet();

const grandParent={
    familyName:"CH Manzil"
};
const parent=Object.create(grandParent);
parent.firstName="Ayshaahh";
const child=Object.create(parent);
child.age=10;
console.log(child.age);
console.log(child.firstName);
console.log(child.familyName);
console.log(child.toString());

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        console.log(`Heyy,I'm ${this.name} and I'm ${this.age} years old.`);
    }
}
const udaifa=new Person("Udaifa",18);
udaifa.introduce();

class Student extends Person{
    constructor(name,age,course){
        super(name,age);
        this.course=course;
    }
    study(){
        console.log(`${this.name} is studying ${this.course}`);
    }
}
const udaifah=new Student("Udaifa",18,"JavaScript");
udaifa.introduce();
udaifah.study();


const profile = { name: "Udaifa", age: 18};
localStorage.setItem("profile", JSON.stringify(profile));
const storedProfile = JSON.parse(localStorage.getItem("profile"));
console.log(storedProfile.name); 
console.log(storedProfile.age); 

const user = { username: "Udaifa", loggedIn: true };
sessionStorage.setItem("user", JSON.stringify(user));
const sessionUser = JSON.parse(sessionStorage.getItem("user"));
console.log(sessionUser.username); 
console.log(sessionUser.loggedIn);

function greet (greeting,punctuation){
    console.log(`${greeting},my name is ${this.name}${punctuation}`);
}
const person1={name:"Udaifa"};
greet.call(person1,"Hello","!");

greet.apply(person1,["Hi","!!!"]);

const greetUdaifa=greet.bind(person1,"Hey");
greetUdaifa("!");

function saveNote(note){
    let notes=JSON.parse(localStorage.getItem("notes"))||[];
    notes.push(note);
    localStorage.setItem("notes",JSON.stringify(notes));
}
function getNotes(){
    return JSON.parse(localStorage.getItem("notes"))||[];
}
saveNote("Buy milk");
saveNote("Call joll");
console.log(getNotes());













