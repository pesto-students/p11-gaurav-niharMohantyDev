function displayWindowProperties() {
console.log("User Agent:", window.navigator.userAgent);
console.log("Screen Width:", window.screen.width);
console.log("Screen Height:", window.screen.height);
console.log("Current URL:", window.location.href);
console.log("Current Path:", window.location.pathname);

// Store data in sessionStorage
window.sessionStorage.setItem("name", "John Doe");
window.sessionStorage.setItem("age", "30");

// Retrieve data from sessionStorage
console.log("Session Storage - Name:", window.sessionStorage.getItem("name"));
console.log("Session Storage - Age:", window.sessionStorage.getItem("age"));

// Store data in localStorage
window.localStorage.setItem("city", "New York");
window.localStorage.setItem("country", "USA");

// Retrieve data from localStorage
console.log("Local Storage - City:", window.localStorage.getItem("city"));
console.log("Local Storage - Country:", window.localStorage.getItem("country"));
}

// Call the displayWindowProperties function when the page loads
window.addEventListener("DOMContentLoaded", displayWindowProperties);
