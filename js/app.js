var apiURL = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=162ae4b12809e3b41cee979360aa2456&photoset_id=72157629896598070&user_id=17903031%40N00&format=json&nojsoncallback=1&api_sig=421cefef122af206387f351a822d1664";

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
    document.getElementById('username').innerHTML = data['photoset'].ownername
    
    var user = data['photoset'].owner;
    var photos = data['photoset'].photo;


    for(i = 0; i < photos.length; i++) {
      var imgURL = '<img src="https://farm'+ photos[i].farm +'.staticflickr.com/' + photos[i].server + '/'+ photos[i].id + '_' + photos[i].secret + '.jpg'+ '"" />';
      var thumb = '<div class="image-thumbnail"><a href="#" class="thumbnail-target" data-user="'+ user +'" data-id="' + photos[i].id + '"'+ '>'+ imgURL +'</a></div>';
      document.getElementById('photogrid').innerHTML += thumb;
    };
  });

}