// Set variables
var modal = document.getElementById("galleryModal");
var modalImg;
var counter;
var galleryImgs = document.getElementsByClassName("gallery__item");
var span = document.getElementsByClassName("close")[0];

// Open modal when an image is clicked and display that image
$(".gallery__item").click(function() {
  var img = $(this).attr("src");

  //set counter to index of current image
  counter = $(this).index();

  modal.style.display = "block";
  $(".modal-content").attr("src", img);
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user presses Esc key, close the modal
$(document).keydown(function(event) {
  if (event.keyCode == 27) {
    modal.style.display = "none";
  }
});

//next button
$(".next").click(function() {

  //increment counter
  //modulus (%) operator resets counter to 0 when it reaches the length of the array
  counter = (counter + 1) % galleryImgs.length;

  //set src of .modal-content to next img src
  // $(modalImg).attr("src", $(galleryImgs[counter]).attr("src"));
  $(".modal-content").attr("src", $(galleryImgs[counter]).attr("src"));
});

//previous button
$(".prev").click(function() {

  //check to see if counter is 0
  if (counter == 0) {

    //set counter to last image
    counter = galleryImgs.length - 1;

    //set src of .modal-content to previous img src
    $(".modal-content").attr("src", $(galleryImgs[counter]).attr("src"));
  }
  else {
    
    //decrement counter
    counter = (counter - 1);

    //set src of .modal-content to previous img src
    $(".modal-content").attr("src", $(galleryImgs[counter]).attr("src"));
  }
});
