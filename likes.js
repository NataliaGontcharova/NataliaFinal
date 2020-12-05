var movieOnThePage = document.getElementById("movieTitle").innerText;

function ReadLike(movie) {
    return localStorage.getItem(movie);
}
function SaveLike(movie, liked) {
    localStorage.setItem(movie, liked);
}


function SetLiked(movie, liked) {
    var img = document.getElementById("heartToggleImg");
    if (liked) {
        img.src = "Images/heart.svg";
        SaveLike(movie, "yes");
    }
    else {
        img.src = "Images/heart-outline.svg";
        SaveLike(movie, "no");
    }
}
function ToggleLiked(movie) {
    SetLiked(movie, !(ReadLike(movie) === "yes"));
}
SetLiked(movieOnThePage, ReadLike(movieOnThePage) === "yes");