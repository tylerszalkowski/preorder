function showVideo() {
    document.getElementById('playbutton').style.display = "none";
    document.getElementById('smile').style.animation = "spin 2500ms";
  setTimeout(() => {
    document.getElementById('smile').style.display = "none";
    document.getElementById('ytplayer').style.display = "block";
    }, 3000);
}

let video = document.getElementById('ytplayer');

function playVideo() {
  setTimeout(() => {
    video.play();
  }, 4000); 
}

