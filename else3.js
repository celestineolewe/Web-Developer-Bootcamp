const password = prompt("Please enter a new password");

if (password.length >= 6) { 
    if (password.indexOf(" ") === -1) {     
    console.log("Good job! No Space!");
    } else {
        console.log("Password cannot contain spaces!"); 
    }

}  else {
    console.log("Password is too short! Must be at least 6 characters and contain no spaces.");   
}