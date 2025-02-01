// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(  "dark",  
    localStorage.currentTheme === "dark" ||    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),);// Whenever the user explicitly chooses light mode
localStorage.currentTheme = "light";
// Whenever the user explicitly chooses dark mode
localStorage.currentTheme = "dark";
// Whenever the user explicitly chooses to respect the OS
 preferencelocalStorage.removeItem("theme");