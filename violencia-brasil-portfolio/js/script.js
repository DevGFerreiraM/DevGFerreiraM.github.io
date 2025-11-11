var modal = document.getElementById("myModal");
var img = document.getElementById("dashboard");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

span.onclick = function () {
  modal.style.display = "none";
};


if (window.SimpleAnime) {
  new SimpleAnime();
}
