module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          compass:true,
          style:'compressed',
          cacheLocation: '/Users/Corey/.sass-cache',
          trace:false
        },
        files: {
          'predawn.css' : 'predawn.scss'
        }
      }
    },
    watch: {
      sass: {
        files: ['*.scss'],
        tasks: ['sass', 'notify:sass']
      }
    },
    notify: {
      sass: {
        options: {
          title: 'Task Complete',  // optional
          message: 'SASS compiled successfully.', //required
        }
      }
    }
  });

  grunt.registerTask('loadSitemap', function() {
    var sitemap_urls = grunt.file.readJSON('./sitemap.json');
    grunt.config.set('uncss.dist.options.urls', sitemap_urls);
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  grunt.registerTask('default',['sass', 'watch']);


};