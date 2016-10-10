'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      js: {
        files: ['src/*.js', 'Gruntfile.js'],
        tasks: ['jshint']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['src/*.js']
    },
    concat: {
      dist: {
        src: ['src/*.js'],
        dest: 'dist/videojs-utils.js'
      }
    },
    uglify: {
      all: {
        files: {
          'dist/videojs-utils.min.js' : [
            'dist/videojs-utils.js'
          ]
        }
      }
    }
  });
  // Load Grunt tasks.
  require('load-grunt-tasks')(grunt);
  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
