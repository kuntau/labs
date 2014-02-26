#!/bin/bash

# Note: this is ONLY a fix for https://github.com/npm/npm/issues/4719
# If you are having some OTHER issue, then DO NOT USE THIS SCRIPT.
# It won't help, and might cause other problems.

# You have been warned.
# Just to prove that you're not blindly copying and pasting, please
# remove these two lines before running:

# echo "Apparently you didn't read the instructions"
# exit 1

# crash on any errors
set -e

# print each line as we run it
set -x

# add the fixed uid-number version to the npm cache
npm cache add uid-number@0.0.5

# get the cache dir (where we just put the fixed codes)
cache=$(npm get cache)

# get the root dir (where npm is installed)
root=$(npm root -g)

# copy the fixed codes into place
sudo cp $cache/uid-number/0.0.5/package/*.js \
  $root/npm/node_modules/uid-number

# and now you can 'sudo npm i -g npm' to get the
# latest npm bits, and things should work fine.
