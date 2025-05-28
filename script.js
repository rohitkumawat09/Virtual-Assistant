

// let btn = document.querySelector('#btn');
// let contant = document.querySelector('#contant');

// let Voice = document.querySelector('#Voice');

// function speak(text) {
//     let text_speak = new SpeechSynthesisUtterance(text);
//     text_speak.rate = 1;
//     text_speak.pitch = 1;
//     text_speak.volume = 1;
//     text_speak.lang = "hi-IN"; 
//     window.speechSynthesis.speak(text_speak);
// }

// function wishMe() {
//     let day = new Date();
//     let hours = day.getHours();
//     let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let currentDay = daysOfWeek[day.getDay()]; 

//     if (hours >= 0 && hours < 12) {
//         speak(`Good Morning Sir, Happy ${currentDay}`);
//     } else if (hours >= 12 && hours < 16) {
//         speak(`Good Afternoon Sir, Happy ${currentDay}`);
//     } else if (hours >= 16 && hours < 22) {
//         speak(`Good Evening Sir, Happy ${currentDay}`);
//     } else {
//         speak(`Good Night Sir, Happy ${currentDay}`);
//     }
// }

// window.addEventListener("load", () => {
//     wishMe();
// });

// let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// let recognition = new speechRecognition();

// recognition.onresult = (event) => {
//     let currentIndex = event.resultIndex;
//     let transcript = event.results[currentIndex][0].transcript;
//     contant.innerText = transcript;
//     takeCommand(transcript);
// };

// btn.addEventListener("click", () => {
//     recognition.start();
//     btn.style.display="none"
//     Voice.style.display="block"
// });

// function takeCommand(transcript) {
//     btn.style.display="flex"
//     Voice.style.display="none"
//     let lowerTranscript = transcript.toLowerCase();
//     if (lowerTranscript.includes("hello")) {
//         btn.innerText = "Hello Sir, what can I help you with?";
//         speak("Hello Sir, what can I help you with?");
//     } else if (lowerTranscript.includes("who are you")) {
//         speak("I am a virtual assistant, created by Rohit sir");
//     } else if (lowerTranscript.includes("open youtube")) {
//         speak("Opening YouTube...");
//         window.open("https://youtube.com", "_blank"); 
//     } else if (lowerTranscript.includes("open google")) {
//         speak("Opening Google...");
//         window.open("https://google.com", "_blank"); 
//     } else if (lowerTranscript.includes("open calculator")) {
//         speak("Opening Calculator...");
//         window.open("calculator://"); 
//     } else if (lowerTranscript.includes("open whatsapp")) {
//         speak("Opening WhatsApp...");
//         window.open("whatsapp://"); 
//     } else if (lowerTranscript.includes("time")) {
//         let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
//         speak(time);
//     } else if (lowerTranscript.includes("date")) {
//         let currentDate = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
//         speak(currentDate);
//     } else {
//         let searchQuery = lowerTranscript.replace(/shipra|shifra/g, '');
//         let finalText = `This is what I found on the internet regarding ${searchQuery}`;
//         speak(finalText);
//         window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
//     }
// }
// Elements
let btn = document.querySelector('#btn');
let contant = document.querySelector('#contant');
let Voice = document.querySelector('#Voice');
let searchInput = document.querySelector('#searchInput');
let searchBtn = document.querySelector('#searchBtn');

// Speak function to read out loud
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-IN"; 
    window.speechSynthesis.speak(text_speak);
}

// Greeting based on time of day
function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDay = daysOfWeek[day.getDay()]; 

    if (hours >= 0 && hours < 12) {
        speak(`Good Morning Sir, Happy ${currentDay}`);
    } else if (hours >= 12 && hours < 16) {
        speak(`Good Afternoon Sir, Happy ${currentDay}`);
    } else if (hours >= 16 && hours < 22) {
        speak(`Good Evening Sir, Happy ${currentDay}`);
    } else {
        speak(`Good Night Sir, Happy ${currentDay}`);
    }
}

// Call greeting when page loads
window.addEventListener("load", () => {
    wishMe();
});

// Speech Recognition setup
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

// When speech is recognized
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    contant.innerText = transcript;
    takeCommand(transcript);
};

// Start speech recognition on mic button click
btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    Voice.style.display = "block";
});

// Handle search button click to process typed input
searchBtn.addEventListener("click", () => {
    let inputText = searchInput.value.trim();
    if (inputText !== "") {
        contant.innerText = inputText;
        takeCommand(inputText);
    }
});

// Main function to process commands/text
function takeCommand(transcript) {
    btn.style.display = "flex";
    Voice.style.display = "none";
    let lowerTranscript = transcript.toLowerCase();

    if (lowerTranscript.includes("hello")) {
        btn.innerText = "Hello Sir, what can I help you with?";
        speak("Hello Sir, what can I help you with?");
    } else if (lowerTranscript.includes("who are you")) {
        speak("I am a virtual assistant, created by Rohit sir");
    } else if (lowerTranscript.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com", "_blank");
    } else if (lowerTranscript.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com", "_blank");
    } else if (lowerTranscript.includes("open calculator")) {
        speak("Opening Calculator...");
        // This might not work in browsers, so just open Google calculator
        window.open("https://www.google.com/search?q=calculator", "_blank");
    } else if (lowerTranscript.includes("open whatsapp")) {
        speak("Opening WhatsApp...");
        window.open("https://web.whatsapp.com", "_blank");
    } else if (lowerTranscript.includes("time")) {
        let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        speak(`The time is ${time}`);
    } else if (lowerTranscript.includes("date")) {
        let currentDate = new Date().toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
        speak(`Today's date is ${currentDate}`);
    } else {
        let searchQuery = lowerTranscript.replace(/shipra|shifra/g, '').trim();
        let finalText = `This is what I found on the internet regarding ${searchQuery}`;
        speak(finalText);
        window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, "_blank");
    }
}
