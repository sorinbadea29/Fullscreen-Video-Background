let video = document.getElementById("video");
document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  video.autoplay = true;
  video.loop = true;
  video.load();
});
