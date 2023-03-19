let name={
    firstname:"abk",
    lastname:"kumar"
    // printFullName:function(){
    //     console.log(this.firstname+" "+this.lastname)
    // }
}


let printFullName=function(hometown){
    console.log(this.firstname+" "+this.lastname+"from"+Hometown)
}
printFullName(name,"Delhi");

// function Borrowing
// using .call()  after that passing argument that will refer to this


let name2={
    firstname:"yoyo",
    lastname:"singh"
}
printFullName.call(name2,"mumbai");