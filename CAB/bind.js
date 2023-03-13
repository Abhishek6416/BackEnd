// the only difference between call & apply method is the way we are passing the arguments
// the argumenst passing in the function

// 1.after 1st function taht refers to this function/refernce for this ,the second or 3rd arguments will be given in arraylis
// rather than passing individually



let name={
    firstname:"abk",
    lastname:"kumar"
    // printFullName:function(){
    //     console.log(this.firstname+" "+this.lastname)
    // }
}


let printFullName=function(hometown,state){
    console.log(this.firstname+" "+this.lastname+"from"+hometown+"state is"+state)
}
printFullName(name,"delhi","delhi");

// function Borrowing
// using .call()  after that passing argument that will refer to this


let name2={
    firstname:"yoyo",
    lastname:"singh"
}
printFullName.call(name2,"mumbai","maharastra");


// passsing arguments in array list rather than passing individually other than that everything is same
printFullName.apply(name2,["mumbai","maharastra"]);


// BIND METHOD

// IT binds the method(function) with the object 
// it will create a copy of printFullName and will bind that Name2 object(2ndobject) and will return a function


// the main catch is that it will not call directly call the function/method that we used to call rather it will return
// a method that we can call it later as we store it on something

let printMyName=printFullName.bind(name2,"mumbai","maharastra")
console.log(printMyName)

printMyName();