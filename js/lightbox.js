function lightbox() {
  console.log('clicked!');
};

document.addEventListener("DOMContentLoaded", function(event) { 
  var thumbnails = document.getElementsByClassName('thumbnail-target');

  console.log(thumbnails);

  // thumbnails.addEventListener("click", lightbox() );
  
});
