
import inquirer from 'inquirer';
let todos=[];
 
let repeat:boolean=true;
let condition;




do{

console.log("----------- TO DO LIST --------------\n");
console.log("1. \t Add Task in List");
console.log("2. \t View Task List");
console.log("3. \t Delete Task from List");
console.log("4. \t Exit");

let answer= await inquirer.prompt([{
    name:"options",
    type:"number",
    message:"\n Enter Given numbers for desired Output"
}])

if(answer.options>0 && answer.options<5){

if(answer.options==1){
    do{
    console.clear()
console.log("-----------Add Task------------- ");
console.log(todos);

let addinput=  await inquirer.prompt([{
    name:"add",
    type:"string",
    message:" Enter Task You Want to add In List"

},

])


todos.push(addinput.add)
addinput= await inquirer.prompt([{
    name:"addMore",
    type:"list",
    message:" Do you want to add another Task in the list?",
    choices:["YES", "NO"]
}])

condition=addinput.addMore;
console.clear()



}while(condition=="YES")

}else if(answer.options==2){
    console.log("View Task ");
    console.log(todos);

}else if(answer.options==3){
    do{
    console.clear();
    console.log("-------------Delete Task ----------");

    console.log(todos);

    let deleteTask=  await inquirer.prompt([{
        name:"delete",
        type:"number",
        message:" Enter Task  Number You Want to delete In List"
    
    }
    ])
   
    if(deleteTask.delete>0 && deleteTask.delete<=todos.length && todos.length>0){
        deleteTask.delete--
        todos.splice(deleteTask.delete,1);
        console.log(" =====Task Deleted ===== \n");
        console.log(todos);
       

    }else if(todos.length<=0){
        console.log("To Do List is Empty kindly add somethin in List ");
    }else{
        console.log("invalid input");
    }
    deleteTask= await inquirer.prompt([{
        name:"deletMore",
        type:"list",
        message:" Do you want to delete another Task in the list?",
        choices:["YES", "NO"]
    }])
    condition=deleteTask.deletMore
    console.clear()
}while(condition=="YES")

}else{
    
    repeat=false;
}
}else{
    console.clear();
    console.log(" Give a Valid Number Between 1 to 4");
}
}while(repeat)

