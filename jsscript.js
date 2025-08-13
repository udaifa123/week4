function greet(name){
    console.log("Hello,"+name+"!");
}
    greet("Udaifa");

    sayheyy();
    function sayheyy(){
        console.log("Hi!");
    }
    function add(a,b){
        return a+b;
    }
    console.log(add(5,3));

    const greet1=function(name){
        return `Hello,${name}!`;
    };
    console.log(greet1("Dudu"));

    const myFunction=(name)=>`Heyy,${name}!`;
    console.log(myFunction("lazzy"));

    const add1=(a,b)=>a+b;
    console.log(add1(3,7));

     const numbers=[1,2,3];
     const squares=numbers.map(n=>n*n);
     console.log(squares);

     setTimeout(function(){
        console.log("Hello Iam Udaifa!");
     },1000);

     const greet2=function(name){
        console.log("Heyy "+name);
     };
     greet2("ayyshaah");

     const numbers1=[2,4,6];
     numbers1.forEach((num)=>{
        console.log(num*2);
     });

     function sum(...numbers){
        let total=0;
        for(let num of numbers){
            total+=num;
        }
        console.log(total);
     }
     sum(20,30);
     sum(5,10,15,20,25,30);

     function greet3(first,...others){
        console.log("Main:",first);
        console.log("Others:",others);
     }
     greet3("aysha","maryam","khadeeja");

     function sum(...numbers){
        return numbers.reduce((total,num)=>total+num,0);
     }
     console.log(sum(4,5,6));
     console.log(sum(50,60,70,80));

     const arr1=[1,2,3];
     const arr2=[4,5,6];
     const combined=[...arr1,...arr2];
     console.log(combined);

     function sum(a,b,c){
        console.log(a+b+c);
     }
     const numbers2=[30,40,50];
     sum(...numbers2);

     const obj1={name:"Udaifa"};
     const obj2={age:18};
     const merged={...obj1,...obj2};
     console.log(merged);

     let myName="Huzaifa";
     function sayHello(){
        console.log("Hello "+myName);
     }
     sayHello();
     console.log(myName);

     function greet4(){
        let message="Hello from inside the function";
        console.log(message);
     }
     greet4();
    
     if(true){
        let name2="Zayyn";
        console.log(name2);
     }

     let globalVar="I am Udaifa";
     function outerFunction(){
        let outerVar="I am from Nellikkunnu";
        function innerFunction(){
            let innerVar="I am studying zaitoon international campus";
            console.log(globalVar);
            console.log(outerVar);
            console.log(innerVar);
        }
        innerFunction();
     }
     outerFunction();

     let todos=[];
     function addTodo(task){
        if(task.trim()!==""){
            todos.push(task);
            console.log(`Added:"${task}"`);
        } else{
            console.log("Task cannot be empty!");
        }
     }
     function removeTodo(index){
        if(index>=0&&index<todos.length){
            let removed=todos.splice(index,1);
            console.log(`Removed"${removed[0]}"`);
        }else{
            console.log("Invalid index!");
        }
     }
     function showTodos(){
        if(todos.length===0){
            console.log("Your Todos:");
            todos.forEach((todo,i)=>{
                console.log(`${i}:${todo}`);
            });
        }
     }
     addTodo("Learn JavaScript");
     addTodo("Practice coding");
     showTodos();

     removeTodo(0);
     showTodos();

