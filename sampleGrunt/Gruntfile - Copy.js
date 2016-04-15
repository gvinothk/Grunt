module.exports = function(grunt) {
grunt.initConfig({
  processhtml: {
    dev: {
      options: {
        data: {
          message: 'This is development environment'
        }
      },
      files: {
        'dev/index.html': ['index.html']
      }
    },
    dist: {
      options: {
        process: true,
        data: {
          title: 'My app',
          message: 'This is production distribution'
        }
      },
      files: {
        'dest/index.html': ['index.html']
      }
    },
    custom: {
      options: {
        templateSettings: {
          interpolate: /{{([\s\S]+?)}}/g // mustache 
        },
        data: {
          message: 'This has custom template delimiters'
        }
      },
      files: {
        'custom/custom.html': ['custom.html']
      }
    }
  }
});
grunt.loadNpmTasks('grunt-processhtml');
  // grunt.loadNpmTasks ('grunt-angular-builder');

  // grunt.registerTask ('release', ['angular-builder']);
  // grunt.registerTask ('debug', ['angular-builder::debug']);
}