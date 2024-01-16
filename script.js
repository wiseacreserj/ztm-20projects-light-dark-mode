const toggleSwitch = document.querySelector("input[type='checkbox']");

//Switch Theme Dynamicaly

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}

console.log(toggleSwitch);
//Event Listener
toggleSwitch.addEventListener("change", switchTheme);
