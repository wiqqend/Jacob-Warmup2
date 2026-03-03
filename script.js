// Requirements
// Part 1: A Branching Function
// Before touching the DOM or your story data, write a standalone function called describeRoom that takes a single 
// string argument (a room name like "foyer" or "living room") and uses an if/else if/else or a switch-case block 
// to return a different one-sentence description depending on the value passed in. Test it by calling it with 
// several different arguments and logging the results to the console. This part has no visual output — it's 
// purely about getting comfortable with conditional logic in a function.

// Part 2: A Story Node Object

// Create a single JavaScript object called exampleNode that represents one room in the house. It should have 
// the following properties:

// image — a string containing the relative path to an image file
// text — a string containing the descriptive paragraph for this scene
// choices — an array of strings, each one a short label for a possible action (e.g., "Go down the hallway", 
// "Open the kitchen door")
// Practice accessing each property and logging it to the console to confirm your object is structured correctly.

// Part 3: An Array of Story Nodes

// Create an array called storyNodes containing at least four node objects representing four different rooms or 
// moments in the house. Each node should follow the same shape as your exampleNode from Part 2. The choices 
// arrays don't need to point anywhere yet — they just need to exist as lists of label strings.


// Part 4: A Display Function

// Write a function called displayNode that takes an index number as its argument, retrieves the corresponding 
// object from storyNodes, and updates the page to show that node's image and text. Your HTML will need an <img> 
// element and a <p> element with id attributes for the function to target.

// Test your function by calling it manually in your script with different index numbers (e.g., displayNode(0), 
// displayNode(2)) and confirming that the correct image and text appear on the page each time.

function describeRoom(roomName) {
    if (roomName === "Entrance") {
        document.getElementById("sceneimage").src = "images/entrance.jpg";
        document.getElementById("caption").textContent = "entrance text";
    } else if (roomName === "Hallway") {
        document.getElementById("sceneimage").src = "images/hallway.jpg";
        document.getElementById("caption").textContent = "hallway text";
    } else if (roomName === "Kitchen") {
        document.getElementById("sceneimage").src = "images/kitchen.jpg";
        document.getElementById("caption").textContent = "kitchen text";
    } else if (roomName === "Landing") {
        document.getElementById("sceneimage").src = "images/landing.jpg";
        document.getElementById("caption").textContent = "landing text";
    }
}
let exampleNode = {
    image: "images/entrance.jpg",
    text: "You are standing in the entrance of a spooky house. The air is thick with dust and the floorboards creak beneath your feet.",
    choices: ["Go down the hallway", "Open the kitchen door", "Climb the stairs to the landing"]
};

let storyNodes = [
    {
        image: "images/entrance.jpg",
        text: "You are standing in the entrance of a spooky house. The air is thick with dust and the floorboards creak beneath your feet.",
        choices: ["Go down the hallway", "Open the kitchen door", "Climb the stairs to the landing"]
    },
    {
        image: "images/hallway.jpg",
        text: "You are in a long, dimly lit hallway. The walls are lined with old portraits that seem to watch you as you move.",
        choices: ["Go to the kitchen", "Go to the landing", "Return to entrance"]
    },
    {
        image: "images/kitchen.jpg",
        text: "You are in a dusty kitchen. The stove is covered in grime and there's an old, broken refrigerator in the corner.",
        choices: ["Go back to hallway", "Search for food", "Investigate the pantry"]
    },
    {
        image: "images/landing.jpg",
        text: "You are on a narrow landing overlooking a dark staircase. There's a small window that lets in some moonlight.",
        choices: ["Go back to hallway", "Descend the stairs", "Look through window"]
    }
];