// DOM declarations
const play = document.querySelector("#play");
const video = document.querySelector("video");
const stop = document.querySelector("#stop");
const progress = document.querySelector("#progress");
const time = document.querySelector("#time");

// Event Listeners
video.addEventListener("click", toggleVideo);
video.addEventListener("timeupdate", updateProgress);
video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon)

play.addEventListener("click", toggleVideo);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setProgress);




// Toggle video (start-stop)
function toggleVideo(){
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
};

// After pause-play icon change
function updateIcon(){

    if(video.paused){
        play.innerHTML = `<i class="fa fa-play"></i>`
    } else {
        play.innerHTML = `<i class="fa fa-pause"></i>`
    }

}

// Stop the video
function stopVideo(){
    video.pause();
    video.currentTime = 0;
    progress.value = 0;
};

// Set progress time (percentage)
function setProgress(){
    video.currentTime = (video.duration * progress.value) / 100;
};

// Update progress and time
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;

    //Get minutes
    let minutes = Math.floor(video.currentTime / 60);
    
    
    //Get seconds
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds<10){
        seconds = "0"+seconds
    }
    
    time.innerHTML = `${minutes}:${seconds}`
};

