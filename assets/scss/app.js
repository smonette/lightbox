var apiURL = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=162ae4b12809e3b41cee979360aa2456&photoset_id=72157629896598070&user_id=17903031%40N00&format=json&nojsoncallback=1&api_sig=421cefef122af206387f351a822d1664";

// var apiURL = 'sample.json';

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
}


getPhotos(apiURL, function(data){
  console.log(data);
});