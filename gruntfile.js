module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watch for changes; perform relevant task
    watch: {
      sass: {
        files: ['assets/scss/**'],
        tasks: ['sass']
      }
    },

    // Compile Sass into CSS
    sass: {
      dist: {
        options: {
          style: 'compressed',
          noCache: true
        },
        files: [{
          expand: true,
          cwd: 'assets/scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    }
  });

  grunt.registerTask("compile", ['sass']);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
};
