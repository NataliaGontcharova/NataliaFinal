function ReadTheme() {
    return document.cookie.substring(6);
}
function SaveTheme(themeType) {
    document.cookie = "theme=" + themeType;
}


function SetDayNightTheme(isDark) {
    var body = document.getElementsByTagName("BODY")[0];
    var img = document.getElementById("themeToggleImg");
    if (isDark) {
        body.style.background = "black";
        img.src = "Images/bulb-outline.svg";
        SaveTheme("dark");
    }
    else {
        body.style.background = "#fbf5e9";
        img.src = "Images/bulb.svg";
        SaveTheme("light");
    }
}
function ToggleDayNight() {
    SetDayNightTheme(!(ReadTheme() === "dark"));
}
SetDayNightTheme(ReadTheme() === "dark");