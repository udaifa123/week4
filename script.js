console.log ("hudaifa");

let numbers=[1,2,3,4,5];
let squares=numbers.map(num=>num*num);
console.log(squares);

let numbers1=[5,10,15,20,25,];
let bigNumbers=numbers1.filter(num=>num>15);
console.log(bigNumbers);
console.log(numbers1);

let numbers2=[1,2,3,4,5];
numbers2.reverse();
console.log(numbers2);

let fruits=["mango","apple","kiwi"];
fruits.forEach((fruit,index)=>{
    console.log(index,fruit);
});

let vegetables=["carrot","cucumber","beetrot","redchilly"];
vegetables.sort((a,b)=>a.localeCompare(b,'en',{sensitivity:'base'}));
console.log(vegetables);

let people=[
    {name:"zayd",age:20},
    {mame:"zayn",age:18},
    {nme:"zuad",age:25}
];
people.sort((a,b)=>a.age-b.age);
console.log(people);

let nums=[6,2,7,1,99];
nums.sort((a,b)=>a-b);
console.log(nums);
nums.sort((a,b)=>b-a);
console.log(nums);

let numbers3=[1,2,3,4];
let sum=numbers3.reduce((total,num)=>total+num,0);
console.log(sum);

let numbers4=[2,3,4,5,6];
let product=numbers4.reduce((total,num)=>total*num,1);
console.log(product);

let arr=["a","b","c"];
for(let index in arr){
    console.log(index);
    console.log(arr[index]);
}

let arr1=["a","b","c"];
for(let value in arr1){
    console.log(value);
}

let arr3=["s","t","u"];
arr3.forEach((value,index)=>{
     console.log(index,value);
});

let numbers5=[4,8,6,5,2];
let result=numbers5
.map(num=>num*2)
.filter(num=>num>10)
.sort((a,b)=>a-b);
console.log(result);

let numbers6=[1,2,3,4,5,6,7,8,9,10];
let result1=numbers6
.filter(num=>num%2===0)
.map(num=>num*2)
.sort((a,b)=>b-a);
console.log(result1);

let students=[
    {name:"Ayrin",marks:95},
    {name:"Basith",marks:30},
    {name:"Clara",marks:75},
    {name:"Donald",marks:60},
    {name:"Elsa",marks:55}
];
let average=
students
.map(student=>student.marks)
.reduce((sum,marks)=>sum+marks,0)
/students.length;
console.log("Average Marks",average);

let topScorer=students.reduce((top,current)=>
    current.marks>top.marks?current:top
);
console.log("Top Scorer",topScorer.name,"-",topScorer.marks);

let passList=students
.filter(student=>student.marks>=40)
.map(student=>student.name);
console.log("Pass List",passList);

let failList=students
.filter(student=>student.marks<40)
.map(student=>student.name);
console.log("Fail List",failList);

let students1=[
    {name:"Aysha",marks:90},
    {name:"Bathool",marks:85},
    {name:"Chris",marks:40},
    {name:"Dain",marks:75},
    {name:"Ebi",marks:65}
];
let top3Names=students1
.sort((a,b)=>b.marks-a.marks)
.slice(0,3)
.map(s=>s.name);
console.log(top3Names);

let students3=[
    {name:"Aaliya",marks:45},
    {name:"Bathu",marks:78},
    {name:"Fathima",marks:92},
    {name:"Khadeeja",marks:35},
    {name:"Hirunnisa",marks:60}
];
let result2=students3
.filter(student3=>student3.marks>=40)
.map(student3=>( {
    name:student3.name,
    marks:student3.marks+5
 }))
 .sort((a,b)=>b.marks-a.marks);
 console.log(result2);

let result2=students
.filter(student3=>student3.marks>=40)
.map(student3=>( {
    name:student3.name,
    marks:student3.marks+5
 }))
 .sort((a,b)=>b.marks-a.marks);
 console.log(result2);






