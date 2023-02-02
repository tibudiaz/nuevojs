//darkmode
const toggleDarkMode = document.getElementById("Dark");
const textElements = document.querySelectorAll(".text");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    textElements.forEach(element => element.classList.add("dark-mode"));
    toggleDarkMode.checked = true;
}

toggleDarkMode.addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
    textElements.forEach(element => element.classList.toggle("dark-mode"));
        if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.removeItem("darkMode");
    }
});


