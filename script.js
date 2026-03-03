

function describeRoom(roomName) {
    if (roomName === "Entrance") {
        document.getElementById("scene-image").src = "images/entrance.jpg";
        document.getElementById("scene-text").textContent = "entrance text";
    } else if (roomName === "Hallway") {
        document.getElementById("scene-image").src = "images/hallway.jpg";
        document.getElementById("scene-text").textContent = "hallway text";
    } else if (roomName === "Kitchen") {
        document.getElementById("scene-image").src = "images/kitchen.jpg";
        document.getElementById("scene-text").textContent = "kitchen text";
    } else if (roomName === "Landing") {
        document.getElementById("scene-image").src = "images/landing.jpg";
        document.getElementById("scene-text").textContent = "landing text";
    }
}
let exampleNode = {
    image: "images/entrance.jpg",
    text: "You stand at the entrance of a creepy rock pile. You feel the thick dust inside rush out.",
    choices: ["Go down the hallway", "Open the kitchen door", "Climb the stairs to the landing"]
};

let storyNodes = [
    {
        image: "images/entrance.jpg",
        text: "You stand at the entrance of a creepy rock pile. You feel the thick dust inside rush out.",
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


function displayNode(index) {
    let node = storyNodes[index];
    document.getElementById("scene-image").src = node.image;
    document.getElementById("scene-text").textContent = node.text;
}