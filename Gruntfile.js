module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
      options: {
        livereload: true
      }
    },
    connect: {
      server: {
        options: {
          port: 8005,
          livereload: true,
          base: '.'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  

  grunt.registerTask('default', ['connect', 'watch']);

};