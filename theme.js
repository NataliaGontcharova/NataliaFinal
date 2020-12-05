function SetDayNightTheme(isDark) {
    var body = document.getElementsByTagName("BODY")[0];
    if (isDark) {
        body.style.background = "black";
        localStorage.setItem("theme", "dark");
    }
    else {
        body.style.background = "#fbf5e9";
        localStorage.setItem("theme", "light");
    }
}
function ToggleDayNight() {
    SetDayNightTheme(!(localStorage.getItem("theme") === "dark"));
}
SetDayNightTheme(localStorage.getItem("theme") === "dark");