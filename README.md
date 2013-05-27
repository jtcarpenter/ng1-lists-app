
======== TODO ========

[ ] Save lists locally
[ ] Save lists in mongodb
[ ] Protect access with htaccess or other
[ ] Create users

======== CONFIG ========

--- Get latest version of node with NVM ---

nvm ls-remote
nvm install *.**.*
nvm alias default *.**.*

--- NPM modules ---

npm install -g less
npm install
npm install -g karma

-- Dev tools ---

node watch-less.js
node server.js || node web-server.js

--- Unit testing ---

karma init

Add app files to karma.conf.js

karma start
karma run

--- Compilation ---

java -jar closure_compiler.jar --compilation_level SIMPLE_OPTIMIZATIONS --js path/to/file.js


--- Debugging ---

Batarang (adds AngularJS knowledge to Chrome dev tools)

https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk

--- Other dependencies ---

brew update && brew install phantomjs

======== DEV ========

lessc -x styles.less styles.css

======== Bugs =============

[ ] New list created won't display items until other list has already
    been displayed
[ ] Click first list, remove, click second list: won't open
    (This won'd work because we don't use a find by id to get the list,
    instead we are just trying to find it by it's array index ,which
    won't be accurate after the array has been updated)

======== Notes ===========

Have a main app controller which wraps around everthing, inside the listsController
and a usersController

http://blog.brunoscopelliti.com/deal-with-users-authentication-in-an-angularjs-web-app
http://www.egghead.io/
