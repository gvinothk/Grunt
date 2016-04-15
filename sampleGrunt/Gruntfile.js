module.exports = function(grunt) {
grunt.initConfig({
   copy: {
      build: {
        cwd: 'app',
        src: [ '**' ],
        dest: 'd:\\testbuild',
        expand: true
      }
    },
    clean: {
  build: {
    src: [ 'build' ]
  },
},
connect: {
  server: {
    options: {
      port: 4000,
      base: 'build',
      hostname: 'localhost'
    }
  }
}
});
 grunt.loadNpmTasks('grunt-contrib-copy');
 grunt.loadNpmTasks('grunt-contrib-clean');
 grunt.loadNpmTasks('grunt-contrib-connect');
 grunt.registerTask(
  'build', 
  'Compiles all of the assets and copies the files to the build directory.', 
  [ 'clean', 'copy' ]
);
grunt.registerTask(
  'default', 
  'Watches the project for changes, automatically builds them and runs a server.', 
  [ 'build', 'connect' ]
);
  // grunt.loadNpmTasks ('grunt-angular-builder');

  // grunt.registerTask ('release', ['angular-builder']);
  // grunt.registerTask ('debug', ['angular-builder::debug']);
}