# lightbox

This is a Javascript lightbox, that calls the [Flickr API](https://www.flickr.com/services/api/explore/flickr.photosets.getPhotos). Styles are written in Sass, and compiled with [Grunt](http://gruntjs.com/).

Contents
- [Goals](#goals)
- [Getting Set Up](#getting-set-up)
- [API Info](#API-info)

### Goals
 - create a web page that shows a grid of photo thumbnails
 - on click, the photo should be displayed in a lightbox view,  
 - ability to move to the next / previous 
 - display the photo title


### Getting Set Up

Run `npm install` to install the dependencies in the `package.json`. This project uses Grunt, [Grunt Sass](https://github.com/sindresorhus/grunt-sass), and [Grunt Contrib Watch](https://github.com/gruntjs/grunt-contrib-watch). Run `grunt compile` to build the project (this will create a `css` file). Running `grunt watch` will automatically compile changes made to the Sass.

I am running this locally on my machine with [Anvil](http://anvilformac.com/), but any simple server should do.

### API Info

This gallery is built using the flickr API, and displays a flickr currated gallery of photos from [New Years 2016](https://www.flickr.com/photos/flickr/galleries/72157663033498841/). I have noted that my auth is expiring after about a day. For the purposes of demonstration, I included the data in `data.json` that can be called locally, and offline. _For this reason it's very important to run this on a server (as opposed to just opening index.html), and avoid cross origin request errors._ 
