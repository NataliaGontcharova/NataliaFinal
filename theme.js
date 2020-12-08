// Functions for setting, toggling Day/Light themes
// and saving the theme choice as cookie

// Read theme name off a cookie value
// Cookie format is expected to be:  
//   theme=dark  or theme=light
// So we extract the theme name starting with position 6
//   to get "dark" or "light" in the function result
function ReadTheme() {
    return document.cookie.substring(6);
}

// Saving theme value on a cookie in the format:
//  theme=dark or theme=light
function SaveTheme(themeType) {
    document.cookie = "theme=" + themeType;
}

// Apply the theme setting to the document
//   - apply the background color to the <body> element
//   - set corresponding image for the menu Icon image for them toggling       
function SetDayNightTheme(isDark) {
    // find the body element by tag name (document could have only one body)
    var body = document.getElementsByTagName("BODY")[0];
    // find the icon image by ID we assign on the page(s)
    var img = document.getElementById("themeToggleImg");
    var twitter = document.getElementById("twitter-logo");
    var fb = document.getElementById("fb-logo");


    const footerText = document.querySelectorAll('.footer-text');
    footerText.forEach(element => { element.style.color = (isDark) ? "#FBF5E9" : "#093235"; });
    const navBrand = document.querySelectorAll('.navbar-brand');
    navBrand.forEach(element => { element.style.color = (isDark) ? "#FBF5E9" : "#093235"; });
    const navLink = document.querySelectorAll('.nav-link');
    navLink.forEach(element => { element.style.color = (isDark) ? "#FBF5E9" : "#093235"; });
    const info = document.querySelectorAll('.movie-info');
    info.forEach(element => { element.style.color = (isDark) ? "#FBF5E9" : "#093235"; });
    const description = document.querySelectorAll('.movie-decription');
    description.forEach(element => { element.style.color = (isDark) ? "#FBF5E9" : "#093235"; });



    const navBar = document.querySelectorAll('.navbar');
    navBar.forEach(element => { element.style.background = (isDark) ? "#1F1F1F" : "#E5DAC4"; });




    // Depending the on the them type, apply corresponding color/image
    // The calling SaveTheme() to save the choice made, which is needed for 
    //  - subsequent toggling  (we read current setting of a cookie)
    //  - remembering the choice the next time the page is opened
    if (isDark) {
        body.style.background = "black";
        img.src = "Images/bulb-white.svg";
        if (twitter) twitter.src = "Images/logo-twitter-white.svg";
        if (fb) fb.src = "Images/logo-facebook-white.svg";

        SaveTheme("dark");
    }
    else {
        body.style.background = "#fbf5e9";
        img.src = "Images/bulb.svg";
        if (twitter) twitter.src = "Images/logo-twitter-black.svg";
        if (fb) fb.src = "Images/logo-facebook-black.svg";
        SaveTheme("light");
    }
}
function ToggleDayNight() {
    // Read current theme off a cookie
    // Switch to the another option
    SetDayNightTheme(!(ReadTheme() === "dark"));
}

// The call executing during page loading, 
// which assumes the script is referenced after body and menu ICON image declaration on the page
// so by the time this call is executed, needed html elements are available
// The logic here reads off a cookie the theme choice made when this web site was used last time
// and re-applies the theme for this session
SetDayNightTheme(ReadTheme() === "dark");