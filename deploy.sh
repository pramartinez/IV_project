echo "-----------------Variables---------------------------------"
echo "DEPLOYMENT_SOURCE = %DEPLOYMENT_SOURCE%"
echo "DEPLOYMENT_TARGET = %DEPLOYMENT_TARGET%"
echo "NEXT_MANIFEST_PATH = %NEXT_MANIFEST_PATH%"
echo "PREVIOUS_MANIFEST_PATH = %PREVIOUS_MANIFEST_PATH%"
echo "KUDU_SYNC_CMD = %appdata%\npm\kuduSync.cmd"
echo "-----------------Variables END ---------------------------------"
echo ""
echo ""


echo =======  Executing gulp task release: Starting at %TIME% ======= 
if [ -e "$DEPLOYMENT_SOURCE/gulpfile.js" ]; then
    echo "Running gulp start"
    cd "$DEPLOYMENT_SOURCE"
    eval './node_modules/.bin/gulp build'
    IF !ERRORLEVEL! NEQ 0 goto error
    popd
fi
echo =======  Executing Gulp task release: Finished at %TIME% =======
