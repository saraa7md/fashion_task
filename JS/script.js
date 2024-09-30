
var openPopupBtn = document.getElementById('openPopupBtn');
var popupOverlay = document.getElementById('popupOverlay');
var closePopupBtn = document.getElementById('closePopupBtn');

    openPopupBtn.onclick = function () {
        popupOverlay.style.display = 'flex';
    }
    closePopupBtn.onclick = function () {
        popupOverlay.style.display = 'none';
    }
    window.onclick = function (event) {
        if (event.target == popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    }


function showComment1() {
    var x = document.getElementById("article1-comments");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function showComment2() {
    var y = document.getElementById("article2-comments");
    if (y.style.display == "none") {
        y.style.display = "block";
    }
    else {
        y.style.display = "none";
    }
}

function showComment3() {
    var z = document.getElementById("article3-comments");
    if (z.style.display == "none") {
        z.style.display = "block";
    }
    else {
        z.style.display = "none";
    }
}

