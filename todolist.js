let input = prompt("What would you like todo?");
const todo = ["Collect Chicken Eggs", "Clean Litter Box", "Do Laundry"];

while (input !== "quit" && input !== "q") {

    if (input === "list") {
        console.log("**********");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("**********");

    } else if (input === "new") {
        const newTodo = prompt("OK, what is the new todo?");
        todo.push(newTodo);
        console.log(newTodo + " added to the list!");

    } else if (input === "delete") {
        const index = parseInt(prompt("OK, enter an index to delete:"));

        if (!isNaN(index) && index >= 0 && index < todo.length) {
            const deleted = todo.splice(index, 1);
            console.log(deleted[0] + " deleted.");
        } else {
            console.log("Invalid index.");
        }
    }

    input = prompt("What would you like todo?");
}

console.log("OK, YOU QUIT THE APP!");
