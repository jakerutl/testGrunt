module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'), // read all the packages inside readJSON

    //write the concat task
    concat : {
      dist: {
        src: [
          'js/modules/*.js',
          'js/main.js'
        ],
        dest: 'prod/production.js'
      }
    },

    uglify : {
      build : {
        src: 'prod/production.js',
        dest: 'prod/production.min.js'
      }
    },

    watch : {
      scripts : {
        files : ['js/main.js', 'js/modules/*.js'],
        tasks: ['concat','uglify'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify']);
  grunt.registerTask('watchFiles', ['watch']);

};
