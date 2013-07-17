# Tools
## Node
Get latest version of node with NVM

```
$ nvm ls-remote
$ nvm install *.**.*
$ nvm alias default *.**.*
```
## NPM Dependencies
Install Global NPM modules

```
$ npm install -g less
$ npm install -g karma
$ npm install -g htdigest
```
Install local NPM modules

```
$ npm install
```
## CSS/LESS
Compile LESS file

```
$ lessc -x styles.less styles.css
```
Run Script to autocomile LESS files

```
$ node watch-less.js
```
## JavaScript Compilation
Run Google Closure compiler

```
$ java -jar closure_compiler.jar --compilation_level SIMPLE_OPTIMIZATIONS --js path/to/file.js
```
##  PhantomJS (Testing)
Install Phantom with Homebrew

```
$ brew update && brew install phantomjs
```
## Debugging
Batarang (adds AngularJS knowledge to Chrome dev tools)

<https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk>
# Config
## DB
Install and start MongDB

```
$ brew install monogdb
$ mongod
```
Set up DB

```
$ mongo lists-app
> db.addCollection('lists')
```

Add seed data

```
db.lists.drop()
db.createCollection('lists')
db.lists.insert([
  {
    title: 'Films',
    items: [
      {
        text: 'Jaws',
        done: false,
        created: new Date(),
        modified: new Date()
      }, 
      {
        text: 'Tron',
        done: false,
        created: new Date(),
        modified: new Date()
      },
       {
        text: 'Star Wars',
        done: true,
        created: new Date(),
        modified: new Date()
      }
    ],
    created: new Date(),
    modified: new Date()
  },
  {
    title: 'Games',
    items: [
      {
        text: 'GTA4',
        done: false,
        created: new Date(),
        modified: new Date()
      }
    ],
    created: new Date(),
    modified: new Date()
  }
])
```
## Users
Add user and new file

```
$ htdigest -c htpasswd "private area" user
```
Add extra user

```
$ htdigest htpasswd "private area" user
```
## Server
Create config.json file

```
$ cp config.default.json config.json
```
Set Installation specific vars

Start server

```
$ node web-server.js
```

## Unit testing
Initialise Karma

```
$ karma init
```
Add app files to karma.conf.js

Add Borwsers to karma.conf.js

Make sure you have vendor/angular-mocks.js etc.

Start Karma

```
$ karma start
$ karma run
```
# Notes

* Have a main app controller which wraps around everthing, inside the listsController
and a usersController

* Authentication Tutorial <http://blog.brunoscopelliti.com/deal-with-users-authentication-in-an-angularjs-web-app>

* Various AngularJS tutorials <http://www.egghead.io/>

* Unix permissions:

(work) Mac ~/sites:                     drwxr-xr-x+   66 jason        staff  
edf.acknowledgement.co.uk /home/sites:  drwxrwsr-x    21 tomh         devteam  
edf live 4 /home/sites: 4               drwxrwsr-x     6 jameswalton  devteam  

* Raspberry PI setup

Install MongoDB  
Set up sites directory for app  
Get local app running  
Get SHH access working  
Make app accessible on network  
Make app accessible on Web  

* We could use an angular factory to define a list object (see example in book)

* Use example in book to see how to test angulary controllers an directives in respective chapters

* Flash directive can probably use $compile instead of $link, because it does't need a scope

* Look into angular animate API for flash directive <http://code.angularjs.org/1.1.4/docs/api/ng.directive:ngAnimate>