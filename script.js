console.log("Script running...")
// Task 1: Hello button flow
// Select the 'Click me for hello' button
let button = document.querySelector("#helloButton")
console.log(button)
// Select the empty p tag under that button
let tag = document.querySelector("#helloText")
console.log(tag)
// Add an event listener to the hello button such that when it's click, the p tag text says "Hello"
button.addEventListener("click", function(event){
  tag.textContent = "Hello"
})


// Task 2: All caps button flow
// Implement the DOM manipulation code flow such that when you click the all caps button, the text below becomes all caps (i.e. "THERE'S NO NEED TO SHOUT")
// Make sure to add whatever IDs/classes you need to select the necessary elements
let Allcaps = document.querySelector("#lol")
console.log(Allcaps)

let caps = document.querySelector("#pop")
console.log(caps)

  Allcaps.addEventListener("click", function(event){
    
   caps.addEventListener.toUpperCase() 
})







// Task 3: Dog image flow
// Implement the DOM manipulation code flow such that when your mouse is over the dog image, it shows happy-dog.jpeg and when it is off the dog image, it shows sad-dog.jpeg.
// Make sure to add whatever IDs/classes you need to select the necessary elements









// Task 4: Name input flow
// Implement the DOM manipulation code flow such that when you click the submit button, you display "Nice to meet you " with the value typed into the input field
// Make sure to add whatever IDs/classes you need to select the necessary elements









