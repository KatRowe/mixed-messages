
// Today we will wear 'messageOne' and snack on 'messageTwo' and our activity will be 'messageThree'

const messageOne = ["pjs", "fancy dress", "sports gear", "a dress"]

const messageTwo = ["chocolate", "crisps", "fruit", "biscuits"]

const messageThree = ["yoga", "running", "baking", "Minecraft", "watch a film", "arts and craft", "games", "puzzles"]

let messageOneRandom = messageOne[Math.floor(Math.random() * messageOne.length)];

let messageTwoRandom = messageTwo[Math.floor(Math.random() * messageTwo.length)];

let messageThreeRandom = messageThree[Math.floor(Math.random() * messageThree.length)];



console.log(`Today we will wear ${messageOneRandom} and snack on ${messageTwoRandom} and our activity will be ${messageThreeRandom}.`)