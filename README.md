# lightbox

This is a vanilla Javascript lightbox, that calls the [Flickr API](https://www.flickr.com/services/api/explore/flickr.photosets.getPhotos). Styles are written in Sass, and compiled with [Grunt](http://gruntjs.com/).

## Contents
* [Goals](#goals)
* [Getting Set Up](#getting-set-up)
* [API Info](#API-info) 
* [Helpful Links](#relevant-links)

### Goals
* access a public photo API
* create a web page that shows a grid of photo thumbnails
* on click, the photo should be displayed in a lightbox view,  
* ability to move to the next / previous 
* display the photo title

### Getting Set Up
This project uses Grunt, [Grunt Sass](https://github.com/sindresorhus/grunt-sass), and [Grunt Contrib Watch](https://github.com/gruntjs/grunt-contrib-watch) to process Sass. 

* Run `npm install` to install the dependencies. 
* Run `grunt compile` to build the project (this will create the `css` folder). 
* Run `grunt watch` to automatically compile future Sass changes.
* Spin up a local server and open site. _I use [Anvil](http://anvilformac.com/), but any simple server should do the trick._

### API Info
This gallery is built using the flickr API, and displays a currated gallery of photos from [New Years 2016](https://www.flickr.com/photos/flickr/galleries/72157663033498841/). I have noticed that my auth is expiring after about a day. For this reason I included the data in `data.json` that can be called locally, and while offline. (A sample URL is also set, but commented out.) For this reason it's _very_ important to run this on a server (as opposed to just opening `index.html`), and avoid the dreaded :skull: cross origin request errors :skull:.

### Helpful Links
* [Flickr's API Docs](https://www.flickr.com/services/api/)
* [Flickr API Explorer](https://www.flickr.com/services/api/explore/flickr.galleries.getPhotos)
* [Flickr Image Size Flags](https://www.flickr.com/services/api/misc.urls.html)
* []()