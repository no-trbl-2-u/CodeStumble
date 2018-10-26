#!/bin/sh

echo "Switching to branch master"
  git checkout master

echo "Building application with npm run build"
  npm run build

echo "Deploying files to the server: CodeStumble.com"
  rsync -avP build/ appuser@50.116.51.131:/var/www/codestumble.com/
  
echo "Deployment complete" 