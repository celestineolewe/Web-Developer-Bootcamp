// function greet(firstName, lastName) {
//     console.log(`Good Morning, ${firstName} ${lastName}`);
// }
// greet("John", "Doe");

// function add(a, b) {
//     console.log(a + b);
// }
// add(5, 10);

// function singSong() {
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday dear Imelda!");
//     console.log("Happy birthday to you!");
// }
// singSong()
 
// function rant(message) {
//     const newMessage = message.toUpperCase()
    
//     console.log(newMessage);
//     console.log(newMessage);
//     console.log(newMessage);
    
// }
// function isSnakeEyes(x, y) {
//     if (x === 1 && y === 1) {
//     console.log("Snake Eyes!");
//     } else {
//         console.log("Not Snake Eyes!");
        
//     }
// }

function multiply(a,b) {
    return(a * b);
}

function isShortsWeather(temperature) {
    if (temperature >= 75) {
    return true;
    
} else {
    return false;
}
}

function lastElement(arr) {
    
    if (arr.length > 0) {
      return arr[arr.length - 1];  
    }else {
        return null;
    }
}

function capitalize(word) {
    const firstLetterCaps = word[0].toUpperCase();
    const restOfString = word.slice(1);
    return firstLetterCaps + restOfString;
    
}
function sumArray(nums) {
     let total = 0;
     for (let num of nums) {
         total += num;
     }
     return total;
}


function returnDay(num) {
    
 const daysOfTheWeek = ['Monday','Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday','Sunday']
    
    if (num < 1 || num > 7) {
    return null;
    } else {
    return daysOfTheWeek[num - 1];
}

}
