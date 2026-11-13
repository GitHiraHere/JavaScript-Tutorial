// Easy way - window prompt
// professional way = HTML text box

let username;

username = window.prompt("What is your username?");

console.log(username);

//Everything we do once we click the submit button
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value; //value of the text box
    console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}` //using the template literal {username} to change the text content from Welcome
}

//The file is meant to be called index.js but for version control I have renamed.

