# lightbox

This is a Javascript lightbox, that calls the [Flickr API](https://www.flickr.com/services/api/explore/flickr.photosets.getPhotos). Styles are written in Sass, and compiled with [Grunt](http://gruntjs.com/).

### Getting Set Up

Run `npm install` to install the dependencies in the `package.json`. This project uses Grunt, [Grunt Sass](https://github.com/sindresorhus/grunt-sass), and [Grunt Contrib Watch](https://github.com/gruntjs/grunt-contrib-watch). Run `grunt compile` to build the project (this will create a `css` file). Running `grunt watch` will automatically compile changes made to the Sass.

### Goal
 - create a web page that shows a grid of photo thumbnails
 - on click, the photo should be displayed in a lightbox view,  
 - ability to move to the next / previous 
 - display the photo title