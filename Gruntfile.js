module.exports = function(grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
        responsive_images: {
        mytask: {
            options: {
                // Task-specific options go here.
                engine: 'gm',
                newFilesOnly: true,
                sizes: [{ width: 200, suffix: 'x-sm'},
                        { width: 400, suffix: 'sm'},
                        { width: 800, suffix: 'me' },
                        { width: 1300, suffix: 'lg' }]
            },
            files: [{
                expand: true,
                src: ['*.{gif,jpg,jpeg}'],
                cwd: 'img/',
                dest: 'img/img_optimize/'
            }]
            }
        }
      });
      grunt.loadNpmTasks('grunt-responsive-images');
      grunt.registerTask('default', ['responsive_images']);
  };