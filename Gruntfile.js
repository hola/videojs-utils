'use strict';

module.exports = function(grunt) {
  let pkg = grunt.file.readJSON('package.json');
  let version = pkg.version;

  grunt.initConfig({
    pkg: pkg,
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
    },
    shell: {
      publish: {
        command: [
          'git tag v'+version,
          'npm publish',
          'git push --tags origin',
        ].join(' && ')
      }
    }
  });
  // Load Grunt tasks.
  require('load-grunt-tasks')(grunt);
  grunt.registerTask('release', ['default', 'shell:publish']);
  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
