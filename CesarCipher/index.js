
const readlineSync = require('readline-sync');
const fs = require('fs');
const path = require('path');

function cesarCipher(str,idx){
    let result="";
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let letter of str){
        let index = alphabet.indexOf(letter);


        if(index !== -1 ){
           let newIndex = (index+idx)%alphabet.length;
           let newLetter= alphabet[newIndex];

           result+=newLetter;
        }
        //console.log("letter",letter);
        //console.log("index",index);
    }

    return result;
}

function registerUser(){
    let userName=readlineSync.question("Enter your name: ");
    let password=readlineSync.question("Enter your password: ");

    console.log("Welcome ",userName);
    console.log('Password ',password);
    let passwordCifrada = cesarCipher(password,7);
    console.log("Password cifrada: ",passwordCifrada);


    addUser(userName,passwordCifrada);

}

function addUser(userName,password){
    const filePath=path.join(__dirname,'users.json');
    let users = [];
    fs.readFile(filePath,(err,data)=>{
        if(err){
            users;

        }else{
            users = JSON.parse(data);
        }


        users.push({userName,password});
        fs.writeFile(filePath,JSON.stringify(users),(err)=>{
            if(err){
                console.log('Error creating user');
            }
            else{
                console.log('Successfully created');
            }
        })
    })
}

function login(){
    let userName=readlineSync.question("Enter your name: ");
    let password=readlineSync.question("Enter your password: ");
    const filePath = path.join(__dirname,'users.json');
    let users = [];
    fs.readFile(filePath,(err,data)=>{
        if(err){
            console.log('Error creating user');
        }else{



            for( let userNames of JSON.parse(data)){
                let pss = cesarCipher(password,7);
                if(userName === userNames.userName  && pss === userNames.password){
                    console.log('Successfully logged in');
                    console.log('Welcome ',userName);
                    return;
                }
                else{



                    console.log('Error logged in');

                }
            }
        }
    })
}



function menu(){
    console.log('Favor de elegir una opción');

    console.log('Favor de elegir una opción\n(L) -----LOGIN----\n(R) ---REGISTER---\n(E) ------EXIT----\n');



    let desition=readlineSync.question("\nElige tu opción: \n");


    if(desition === "L" || desition === "l"){
        login();
    }
    else if(desition === "R" || desition === "r"){
        registerUser();
    }
    else if(desition === "E" || desition === "e"){
        console.log("Programa terminado");
        return;

    }
}

menu();
//console.log(cesarCipher("abc",2));