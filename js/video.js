var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume*100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*0.9;
	console.log(video.playbackRate);
	
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*1.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration-5) {
		video.currentTime = video.currentTime+5;
	}
	else{
		video.currentTime=0;
	}
	console.log(video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	var vol = document.querySelector("#myVideo")
	if (vol.muted) {
		document.getElementById("mute").innerHTML = "Mute";
		vol.muted = false;
		console.log("Unmuted");
	}
	else {
		document.getElementById("mute").innerHTML = "Unmute";
		video.muted = true;
		console.log("Muted");
	}
});

document.querySelector("#volumeSlider").addEventListener("click", function() {
	var vol = this.value/100;
	video.volume = vol;
	console.log(video.volume)
	document.querySelector("#volume").innerHTML = (this.value + "%");
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
	console.log("Changed to old school style");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
	console.log("Changed to original style");
});


