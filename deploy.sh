if [ -e "$DEPLOYMENT_TARGET/gulpfile.js" ]; then
    echo "Running gulp tasks"
    cd "$DEPLOYMENT_TARGET"
    eval 'node_modules/.bin/gulp build'
    exitWithMessageOnError "gulp failed"
    cd -> /dev/null
fi