const fs = require('fs');
const path = require('path');

module.exports.crt = (async(req,res,next) =>{
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    let datetime=year + "-" + month + "-" + date + "@" + hours + "-" + minutes + "-" + seconds;
      
    let string = date_ob.toString();

    res.send(string);
  
    fs.open((""+datetime+".txt"), 'w',function (err, file) {
        if (err) throw err;
        console.log('File is opened in write mode.');
    });
  
    fs.appendFile((""+datetime+".txt"), string, function (err) {
        if (err) throw err;
        console.log('File has been created successfully.');
    });
});
  
module.exports.view = (async(req,res,next) =>{
    const directoryPath = '../data-time-task1/';
    var count =0;
    fs.readdir(directoryPath, (err, files) => {
         
        if (err)
        console.log(err);
        else {
        console.log("Filenames with the .txt extension:");
        files.forEach(file => {
        if (path.extname(file) == ".txt"){
            count++;
            console.log(file);
        }
        })
        console.log(`number of the file is`+ " "+count);
        res.send(`number of the file is`+ " "+count.toString());     
        }
    })  
              
});