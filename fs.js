const fs = require ('fs');
const path = require('path');
const dirpath = path.join(__dirname,);
const filepath = `${dirpath}/appple.txt`

fs.writeFileSync(`${filepath}`,'this is sample of file system');

fs.readFile(filepath,'utf8',(err,itn)=>{
console.log(itn)
}) 

fs.appendFile(filepath, ' is that text added to the apple.txtfile', (err)=>{
    if(!err){
     console.log("appended successfully")
    }
})

fs.rename(filepath,`${dirpath}/rename.txt`,(err)=>{
    if(!err){
        console.log(" file name changed")
    }
})

// fs.unlinkSync(`${dirpath}/rename.txt`)