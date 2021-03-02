#!/usr/bin/env node
let path = process.cwd();
let fs = require('fs');

let photoExt = ['jpg','png'];
let docExt = ['pdf','txt'];
let musicExt = ['mp3','wav'];
let files = fs.readdirSync(path); //Files read from directory

(function(){

    let photoFiles = [];
    let docFiles = [];
    let musicFiles = [];

    for(i=0;i<files.length;i++){
        files[i] = files[i].split('.');
    }
    
    makeFolder();

    //Move files into folders
    for(i in files){
        if(photoExt.includes(files[i][1])){
            files[i] = files[i].join('.');
            photoFiles.push(files[i]);
            moveFiles("Photos");
        }else if(docExt.includes(files[i][1])){
            files[i] = files[i].join('.');
            docFiles.push(files[i]);
            moveFiles("Documents");
        }else if(musicExt.includes(files[i][1])){
            files[i] = files[i].join('.');
            musicFiles.push(files[i]);
            moveFiles("Music");
        }
    }

    // console.log(files);
})();

function moveFiles(dest){
    fs.rename(`${path}\\${files[i]}`,`${path}\\${dest}\\${files[i]}`,function(err){
        if (err) console.log(err);
    })
}

function makeFolder(){
    fs.mkdirSync("Photos");
    fs.mkdirSync("Documents");
    fs.mkdirSync("Music");
}