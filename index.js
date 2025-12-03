// index.js


// //=== PART 1: Pop-up Message ===
// alert("Hello World!"); 

// console.log("Pop-up Message should be displayed first"); 


// //=== PART 2: DOM Manipulation ===
// // The codes below can be executed in addition to PART 1.

// const messageEl = document.getElementById("message");

// if (messageEl) {
//   messageEl.textContent = "JavaScript is connected and working!";
//   messageEl.style.color = "#5a4b77"; // it's lilac Hex code (high precision), we can change the color to "red" or "rgb(90, 75, 119)"
//   messageEl.style.fontWeight = "700"; // it's bold, 400 is normal, we can choose 100 to 900 every 100, or "normal", "bold", "lighter"
//   messageEl.style.padding = "4px 8px 12px 16px"; // it's read clockwise, or we may choose 1
// }
// console.log("DOM Manipulation script finished running"); // we can see this on Console log (inspect/F12)


//=== PART 3: Event Listeners ===

// const messageEl = document.getElementById("message");
// const changeButton = document.getElementById("changeButton");

// function changeMessage() {
//     if (messageEl) {
//         messageEl.textContent = "Message changed by button!";
//         messageEl.style.padding = "20px";
//         messageEl.style.backgroundColor = "#f2f2f2";
//         messageEl.style.color = "#d4af37";
//     }   
//         console.log("Message is changed whenever the button is clicked."); 
// }
// if (changeButton) {
//     changeButton.addEventListener("click", changeMessage);
// }


//=== PART 4: Toggle Menu ===

const messageEl = document.getElementById("message");
const changeButton = document.getElementById("changeButton");


// Initial styles for the message element
if (messageEl) {
    messageEl.style.padding = "4px 8px 12px 16px";
    messageEl.style.backgroundColor = "#5a4b77";
    messageEl.style.color = "#e6e0eb";
}
// End of initial styles

function changeMessage() {
    if (messageEl) {
        const initialText = "This message will be changed by JavaScript";
        const currentText = messageEl.textContent.trim(); // trim () to clean extra spaces

        if (currentText === initialText) {

            messageEl.textContent = "Message changed by button!";
            messageEl.style.padding = "20px";
            messageEl.style.backgroundColor = "black";
            messageEl.style.color = "#d4af37";
            console.log("Change message is 'Active'.");

        } else {
            messageEl.textContent = initialText;
            messageEl.style.padding = "4px 8px 12px 16px";
            messageEl.style.backgroundColor = "#5a4b77";
            messageEl.style.color = "#e6e0eb";
            console.log("Back to initial message.");
        }
    }
}
if (changeButton) {
    changeButton.addEventListener('click', changeMessage);
}