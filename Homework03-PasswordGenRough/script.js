//generate random password
function generate(){

// set password length/complexity
let complexity = document.getElementById("slider").value;

//possible password values
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

let password = "";

//create for loop to choose password characters
for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

//add password to textbox/display area
document.getElementById("display").value = password;

//add password t previously generated passwords section
document.getElementById("lastNums").innerHTML += password + "<br />";

}

//set default length display of 68 [which is between 8 and 128]
document.getElementById("length").innerHTML = "Length: 68";

//function to set lenght based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 8";
    }
}


//function to copy password to clipboard
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

alert("Password copied to clipboard!");

}