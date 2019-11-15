echo "-----------------Variables---------------------------------"
echo "DEPLOYMENT_SOURCE = %DEPLOYMENT_SOURCE%"
echo "DEPLOYMENT_TARGET = %DEPLOYMENT_TARGET%"
echo "NEXT_MANIFEST_PATH = %NEXT_MANIFEST_PATH%"
echo "PREVIOUS_MANIFEST_PATH = %PREVIOUS_MANIFEST_PATH%"
echo "KUDU_SYNC_CMD = %appdata%\npm\kuduSync.cmd"
echo "-----------------Variables END ---------------------------------"
echo ""
echo ""
"""
# 2. Install npm devDependancy packages with explicit flag --only=dev at DEPLOYMENT_SOURCE instead of DEPLOYMENT_TARGET
echo =======  Installing npm  devDependancy packages: Starting at %TIME% ======= 
IF EXIST "%DEPLOYMENT_SOURCE%\package.json" (
  pushd "%DEPLOYMENT_SOURCE%"
  call :ExecuteCmd !NPM_CMD! install --only=dev
  IF !ERRORLEVEL! NEQ 0 goto error
  popd
)
echo =======  Installing npm dev packages: Finished at %TIME% =======

#4 Execute Gulp tasks at DEPLOYMENT_SOURCE instead of DEPLOYMENT_TARGET
IF EXIST "%DEPLOYMENT_SOURCE%\gulpfile.js" (
  pushd "%DEPLOYMENT_SOURCE%"
  echo "Building web site using Gulp" 
  #call :ExecuteCmd !GULP_CMD! release-uncompress
  call :ExecuteCmd ".\node_modules\.bin\gulp.cmd" build --env prod
  call :ExecuteCmd ".\node_modules\.bin\gulp.cmd" release
  IF !ERRORLEVEL! NEQ 0 goto error
  popd
)
"""

echo =======  Executing gulp task release: Starting at %TIME% ======= 
if [ -e "$DEPLOYMENT_SOURCE/gulpfile.js" ]; then
    echo "Running gulp start"
    cd "$DEPLOYMENT_SOURCE"
    eval './node_modules/.bin/gulp start'
    IF !ERRORLEVEL! NEQ 0 goto error
    popd
fi
echo =======  Executing Gulp task release: Finished at %TIME% =======


"""
if [ -e "$DEPLOYMENT_TARGET/gulpfile.js" ]; then
    echo "Running gulp tasks"
    cd "$DEPLOYMENT_TARGET"
    eval './node_modules/.bin/gulp build'
    exitWithMessageOnError "gulp failed"
    IF !ERRORLEVEL! NEQ 0 goto error
    popd
fi
"""