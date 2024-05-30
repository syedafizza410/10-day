// *************** 100 days coding challenge "10 day" *************** //


/* Q28  Stages of Life: Determine a 
person’s life stage with an if-else chain.
Explain & TIP: Use age to check the life stage. 
This practice shows how to handle multiple conditions with an if-else chain.*/

let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}


/* Q29  Favorite Fruit: Create an array for 
your favorite fruits and check if certain fruits are included.
Explain & TIP: Arrays can store multiple items like fruit names. 
Use if statements to check for specific fruits.*/


let favorite_fruits: string[] = ["apples", "bananas", "cherries"];

if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}

/* Q30 Hello Admin: Greet users differently,
especially 'admin'.
Explain & TIP: Loop through usernames to personalize greetings. 
This introduces looping and conditional logic together.*/


let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
