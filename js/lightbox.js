// Declaring some variables that'll come in handy later
var lightboxPhotos;
var lightboxTitles;

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
          // after getPhotos() runs, you can initialize the lightbox
          lightboxInit();
        };
      }
    }
  };
  flickrRequest.open('GET', path);
  flickrRequest.send(); 
};

function buildURL(farm, server, id, secret, sizeFlag) {
  var flickrURL = '<img src="https://farm' + farm +'.staticflickr.com/' + server + '/'+ id + '_' + secret + sizeFlag + '.jpg" />';
  return flickrURL;
};

function loadThumbs(data, index){
  var flickrURL = buildURL(data[index].farm, data[index].server, data[index].id, data[index].secret, '_q');
  var thumb = '<div class="image-thumbnail"><a href="#" class="thumbnail-target" data-index="'+ i +'" data-user="'+ data[index].owner +'" data-id="' + data[i].id + '"'+ '>'+ flickrURL +'</a></div>';
  document.getElementById('photogrid').innerHTML += thumb;
};

function loadLightbox(data, index){
  var flickrURL = buildURL(data[index].farm, data[index].server, data[index].id, data[index].secret, '');
  var imageTitle = data[index].title;
  lightboxPhotos.push(flickrURL);
  lightboxTitles.push(flickrURL);
}


function lightboxInit() {
  var thumbnails = document.getElementsByClassName('thumbnail-target');
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function(event){
      event.preventDefault();
      lightbox(this);
    }, false);
  }
}

var lightbox = function(image) {
  var whichThumb = image.getAttribute("data-index");
  console.log(whichThumb);
  var bigPhoto = lightboxPhotos[whichThumb];

  console.log(bigPhoto);

  document.getElementById('lightbox-wrapper').setAttribute("class", "active");
  document.getElementById('lightbox-image').innerHTML = bigPhoto;
};





