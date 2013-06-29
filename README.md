======== TODO ========

[X] Loading bar directive
[X] Save lists in mongodb
[X] Add completion to items
[X] Protect access with htaccess or other
[ ] Add loading/synching status directive (that works)
[ ] Implement tests

[ ] Styles
[ ] Deployment

[ ] Create users
[ ] Save lists locally for caching

======== CONFIG ========

--- Get latest version of node with NVM ---

$ nvm ls-remote
$ nvm install *.**.*
$ nvm alias default *.**.*

--- NPM modules ---

$ npm install -g less
$ npm install -g karma
$ npm install -g htdigest

$ npm install

-- Users --

# New user and new file
$ htdigest -c htpasswd "private area" user

# Extra users
$ htdigest htpasswd "private area" user

-- Dev tools ---

$ node watch-less.js
$ node web-server.js

-- Server Config --

$ cp config.default.json config.json

# Set config vars

-- DB --

$ brew install monogdb
$ mongod

- setup db -

$ mongo lists-app
> db.addCollection('lists')

-- seed data --

> db.lists.drop()
> db.createCollection('lists')
> db.lists.insert([
  {
    title: 'Films',
    items: [
      {
        text: 'Jaws',
        done: false
      }, 
      {
        text: 'Tron',
        done: false
      },
       {
        text: 'Star Wars',
        done: true
      }
    ]
  },
  {
    title: 'Games',
    items: [
      {
        text: 'GTA4',
        done: false
      }
    ]
  }
])

--- Unit testing ---

$ karma init

Add app files to karma.conf.js
Add Borwsers to karma.conf.js

Make sure you have vendor/angular-mocks.js etc.

$ karma start
$ karma run

--- Compilation ---

## Js

$ java -jar closure_compiler.jar --compilation_level SIMPLE_OPTIMIZATIONS --js path/to/file.js

## CSS

$ lessc -x styles.less styles.css
$ node watch-less.js

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
