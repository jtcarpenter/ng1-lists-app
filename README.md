
======== TODO ========

[X] Loading bar directive
[ ] Save lists in mongodb
[ ] Protect access with htaccess or other
[ ] Implement tests
[ ] Create users
[ ] Save lists locally for caching

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

-- DB --

brew install monogdb
mongod

- setup db -

mongo lists-app
db.addCollection('lists')

--- Unit testing ---

karma init

Add app files to karma.conf.js
Add Borwsers to karma.conf.js

Make sure you have vendor/angular-mocks.js etc.

karma start
karma run

--- Compilation ---

## Js

java -jar closure_compiler.jar --compilation_level SIMPLE_OPTIMIZATIONS --js path/to/file.js

## CSS

lessc -x styles.less styles.css
node watch-less.js

--- Other dependencies ---

brew update && brew install phantomjs

--- Debugging ---

Batarang (adds AngularJS knowledge to Chrome dev tools)

https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk

======== Bugs =============

======== Notes ===========

Have a main app controller which wraps around everthing, inside the listsController
and a usersController

http://blog.brunoscopelliti.com/deal-with-users-authentication-in-an-angularjs-web-app
http://www.egghead.io/
