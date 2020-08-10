var instance = new vidbg(".video", {
  mp4: "vids/world.mp4", // URL or relative path to MP4 video
  webm: "vids/world.webm", // URL or relative path to webm video
  poster: "vids/poster.jpg", // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
});
var rellax = new Rellax(".rocket");
if (document.body.clientWidth < 600) {
  rellax.destroy();
}
AOS.init();
