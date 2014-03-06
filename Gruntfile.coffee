module.exports = (grunt) ->

  # project configuration
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    # grunt watch
    watch:
      css:
        files: '**/*.styl'
        tasks: ['stylus']
        # options:
        #   livereload: 35729
      all:
        files: ['papsb-draft1/*.html', 'papsb-draft1/*.css', 'papsb-draft1/*.js']
        options:
          livereload: true

    # stylus auto compile
    stylus:
      compile:
        files:
          'papsb-draft1/style.css': 'papsb-draft1/style.styl'

  # load the grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-stylus')
  grunt.loadNpmTasks('grunt-contrib-coffee')

  # default task
  grunt.registerTask('default', ['stylus', 'watch'])
