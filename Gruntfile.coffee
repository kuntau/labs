module.exports = (grunt) ->

  # project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    # grunt watch
    watch: {
      css: {
        files: '**/*.styl'
        task: ['stylus']
        options: {
          livereload: true
        }
      }
    },

    stylus: {
      compile:
        files:
          '**/style.css': '**/style.styl'
    }
  })

  # load the grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-stylus')
  grunt.loadNpmTasks('grunt-contrib-coffee')

  # default task
  grunt.registerTask('default', ['watch'])
  grunt.registerTask('stylus', ['stylus'])
