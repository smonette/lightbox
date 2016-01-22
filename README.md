# lightbox :camera:

This is a vanilla Javascript lightbox, that calls the [Flickr API](https://www.flickr.com/services/api/explore/flickr.photosets.getPhotos). Styles are written in Sass, and compiled with [Grunt](http://gruntjs.com/).

A demo is available [here!](http://stephmonette.com/lightbox/)

## Contents
* [Goals](#goals)
* [Getting Set Up](#getting-set-up)
* [API Info](#API-info) 
* [Helpful Links](#relevant-links)
* [TODO](#todo)
  *[Features Wishlist](#features-wishlist)

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
This gallery is built using the flickr API, and displays a currated gallery of photos from [New Years 2016](https://www.flickr.com/photos/flickr/galleries/72157663033498841/). 

I noticed that my auth is expiring after a day. For this reason I included the data in `data.json` that can be called locally, and while offline. (A sample API URL is also set, but commented out above.) For this reason it's _very_ important to run this on a server (as opposed to just opening `index.html`), and avoid the dreaded :skull:cross origin request errors:skull:.

### Helpful Links
* [Flickr's API Docs](https://www.flickr.com/services/api/)
* [Flickr API Explorer](https://www.flickr.com/services/api/explore/flickr.galleries.getPhotos)
* [Flickr Image Size Flags](https://www.flickr.com/services/api/misc.urls.html)

---

### TODO
Improvements:
* Make this work on all devices. Currently only stable on desktop.
  * Rescale images in the overlay to fit within a device's screen size.
* If a user clicks on the blank parts of the overlay, dismiss it.
* Preload images in the lightbox, so that there's no lag.
* Hide `Previous` control on first image, and `Next` control on last image
  * Prevent slideshow from advancing


#### Features Wishlist
As I was working on this there were times where I'd think to myself "You know what would be great...?"
Feature ideas:
* Text search for photos. [Could be done](https://www.flickr.com/services/api/flickr.photos.search.html) with the `text` param?
* Swipe through images on touch devices
