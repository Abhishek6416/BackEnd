const fs=require("fs")

fs.mkdir("abk",(err)=>{
    console.log("folder created")
})

fs.writeFile("bio.txt","my name is yo yo",(err)=>{
    console.log("files created")
})

fs.appendFile("bio.txt","anjali mondalllllllllllllllllllll",(err)=>{
    console.log(" new data added")
})

fs.readFile("bio.txt","utf-8",(err,data)=>{
    console.log(data);
})

fs.rename("bio.txt","anjali.txt",(err)=>{
    console.log("file renamed")
})

fs.unlink("anjali.txt",(err)=>{
    console.log("file deleted")
})