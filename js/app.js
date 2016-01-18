var apiURL = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=9a00d835e032b9fe05b30215d22b5713&photoset_id=72157631058013910&user_id=29454428%40N08&format=json&nojsoncallback=1&auth_token=72157663679606365-d314110c27b2e8fd&api_sig=f7b0dc3b6f60f938564d0734d71cfdbe";

function getPhotos(path, callback) {
  var flickrRequest = new XMLHttpRequest();
  flickrRequest.onreadystatechange = function() {
    if (flickrRequest.readyState === 4) {
      if (flickrRequest.status === 200) {
        var data = JSON.parse(flickrRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  flickrRequest.open('GET', path);
  flickrRequest.send(); 
};



window.onload = function() {

  getPhotos(apiURL, function(data){
    document.getElementById('username').innerHTML = data['photoset'].ownername;
    
    var user = data['photoset'].owner;
    var photos = data['photoset'].photo;


    for(i = 0; i < photos.length; i++) {
      var imgURL = '<img src="https://farm'+ photos[i].farm +'.staticflickr.com/' + photos[i].server + '/'+ photos[i].id + '_' + photos[i].secret + '.jpg'+ '"" />';
      var thumb = '<div class="image-thumbnail"><a href="#" class="thumbnail-target" data-index="'+ i +'" data-user="'+ user +'" id="' + photos[i].id + '"'+ '>'+ imgURL +'</a></div>';
      document.getElementById('photogrid').innerHTML += thumb;
    };
  });

}