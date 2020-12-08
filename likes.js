// Functions that make possible setting the Like flag for a movie
// The flag setting is stored as key-value pair in a local storage in the format
//  <movie-title> => "yes"       : for liked movie
//  <movie-title> => "no" or ""  : for movies that don't have the like flag


// The scripts detects the movie title of the Page title element
// expected to contain the name
var movieOnThePage = document.getElementById("movieTitle").innerText;



// Read the like flag off local storage
// The expected returned values: 
//  "yes"       => has a Like flag
//  "no" or ""  => doesn't have the Like flag
function ReadLike(movie) {
    return localStorage.getItem(movie);
}
// Save the like flag state for a given movie
// "movie" parameter is to pass the title of the movie
// "liked" parameter is to pass the flag state
function SaveLike(movie, liked) {
    localStorage.setItem(movie, liked);
}


// Reflect the like/non-liked setting on the page
// Save the current state in local file storage
// "movie" parameter is to pass the title of the movie
// "liked" parameter is a boolean. "true" for liked pages
function SetLiked(movie, likeFlag) {
    var likeContainer = document.getElementsByClassName("heart-icon")[0];

    if (likeFlag) {
        likeContainer.innerHTML = "<ion-icon name=\"heart\"> </ion-icon>";
        SaveLike(movie, "yes");
    }
    else {
        likeContainer.innerHTML = "<ion-icon name=\"heart-outline\"> </ion-icon>";
        SaveLike(movie, "no");
    }
}


function ToggleLiked(movie) {
    // Read current state of the Liked flag off local stoage
    // Flip its value to the opposite
    // Note, that "" and "no" both represent non-Liked state of the movie
    SetLiked(movie, !(ReadLike(movie) === "yes"));
}

// The call executing during page loading, 
// which assumes the script is referenced after the like/heartToggling image declaration on the page
// so by the time this call is executed, needed image element is available
// The logic here checks if the local storage contains like save for a movie for this page
// and re-applies appropriate Like image this session to restore the state of Like/Heart flag
SetLiked(movieOnThePage, ReadLike(movieOnThePage) === "yes");