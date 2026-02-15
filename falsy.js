const password = prompt("Enter a new password");

if (password.length >= 6 && password.indexOf(" ") === -1) { 
    console.log("That is a good password!");
} else {
    console.log("Password is not valid! Must be at least 6 characters and contain no spaces."); 
    
}