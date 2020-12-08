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

  //targets the elements in the navbar
  var navText = document.getElementsByClassName("nav-link");
  var navBrand = document.getElementsByClassName("navbar-brand");

  // Depending the on the them type, apply corresponding color/image
  // The calling SaveTheme() to save the choice made, which is needed for
  //  - subsequent toggling  (we read current setting of a cookie)
  //  - remembering the choice the next time the page is opened
  if (isDark) {
    body.style.background = "#121212";
    document.getElementsByTagName("nav")[0].style.background = "#1F1F1F";
    for (var i = 0; i < navText.length; i++) {
      navText[i].style.color = "#FBF5E9";
    }
    navBrand[0].style.color = "#FBF5E9";
    document.getElementsByTagName("Footer")[0].style.color = "#FBF5E9";
    document.getElementsByClassName("socialMedia")[0].style.color = "#FBF5E9";
    document.getElementsByClassName("socialMedia")[1].style.color = "#FBF5E9";
    img.src = "Images/bulb-outline.svg";
    SaveTheme("dark");
  } else {
    body.style.background = "#fbf5e9";
    document.getElementsByTagName("nav")[0].style.background = "#E5DAC4";
    for (var i = 0; i < navText.length; i++) {
      navText[i].style.color = "#093235";
    }
    navBrand[0].style.color = "#093235";
    document.getElementsByTagName("nav")[0].style.color = "#093235";
    document.getElementsByTagName("Footer")[0].style.color = "#093235";
    document.getElementsByClassName("socialMedia")[0].style.color = "#093235";
    document.getElementsByClassName("socialMedia")[1].style.color = "#093235";

    img.src = "Images/bulb.svg";
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
