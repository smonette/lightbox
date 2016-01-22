// Declaring some variables that'll come in handy later
var lightboxPhotos;
var lightboxTitles;

// Find the lightbox overlay
var wrapper = document.getElementById('lightbox-wrapper');

// Find navigation controls
var dismiss = document.getElementById('lightbox-dismiss');
var prev = document.getElementById('lightbox-prev');
var next = document.getElementById('lightbox-next');

function getPhotos(path, callback) {
  var flickrRequest = new XMLHttpRequest();
  flickrRequest.onreadystatechange = function() {
    if (flickrRequest.readyState === 4) {
      if (flickrRequest.status === 200) {
        var data = JSON.parse(flickrRequest.responseText);
        if (callback) callback(data);
        // if the request is good, set the variables to start formating photos
        var photos = data['photos'].photo;
        lightboxPhotos = [];
        lightboxTitles = [];

        for(i = 0; i < photos.length; i++) {
          // add each image to thumbnail grid
          loadThumbs(photos, i);
          // add each to the array of lightbox images
          loadLightbox(photos, i);
          // after getPhotos() finishes, you can initialize the lightbox
          lightboxInit();
        };
      }
    }
  };
  flickrRequest.open('GET', path);
  flickrRequest.send(); 
};

function buildURL(farm, server, id, secret, sizeFlag, title, index) {
  var flickrURL = '<img src="https://farm' + farm +'.staticflickr.com/' + server + '/'+ id + '_' + secret + sizeFlag + '.jpg" alt="'+ title +'" "data-id="' + i + '"/>';
  return flickrURL;
};

function loadThumbs(data, index){
  var flickrURL = buildURL(data[index].farm, data[index].server, data[index].id, data[index].secret, '_q', data[index].title, i);
  var thumb = '<div class="image-thumbnail"><a href="#" class="thumbnail-target" data-index="'+ i +'" data-user="'+ data[index].owner +'" data-id="' + data[i].id + '"'+ '>'+ flickrURL +'</a></div>';
  document.getElementById('photogrid').innerHTML += thumb;
};

function loadLightbox(data, index){
  // set navigation buttons
  var flickrURL = buildURL(data[index].farm, data[index].server, data[index].id, data[index].secret, '', data[index].title, i);
  var flickrTitle = data[index].title;
  lightboxPhotos.push(flickrURL);
  lightboxTitles.push(flickrTitle);
};

function lightboxInit() {
  var thumbnails = document.getElementsByClassName('thumbnail-target');
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function(event){
      event.preventDefault();
      lightbox( this.getAttribute("data-index") );
    }, false);
  }
};

function lightbox(image) {
  var theImage = lightboxPhotos[image];
  var theTitle = lightboxTitles[image];

  wrapper.setAttribute("class", "active");
  // append previous and next data to the controls
  prev.setAttribute("data-prev", parseInt(image)-1);
  // TODO: Don't let next increment on last image
  next.setAttribute("data-next",parseInt(image)+1);
  document.getElementById('lightbox-image_container').innerHTML = theImage;
  document.getElementById('lightbox-image_title').innerHTML = theTitle;
};

// Lightbox navigation controls
dismiss.onclick = function(event) {
  event.preventDefault();
  wrapper.setAttribute("class", "inactive");
};
prev.onclick = function(event) {
  event.preventDefault();
  var prevImg = this.getAttribute("data-prev");
  if(prevImg >= 0) {
    // TODO: hide prev control if first image
    lightbox(prevImg);
  }
};
next.onclick = function(event) {
  event.preventDefault();
  var nextImg = this.getAttribute("data-next");
  // TODO: hide next control if last image, also prevent slideshow from advancing
  lightbox(nextImg);
};

// prev and next functionality so it works with the arrow keys
document.onkeydown = function (event) { 
  if (event.keyCode == '37'){
    event.preventDefault(); 
    var prevImg = prev.getAttribute("data-prev"); 
    if(prevImg >= 0) {
      // TODO: hide prev control if first image
      lightbox(prevImg);
    }
  } else if (event.keyCode == '39') {
    event.preventDefault(); 
    var nextImg = next.getAttribute("data-next"); 
    lightbox(nextImg); 
  }
};





