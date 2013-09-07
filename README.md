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
$ lessc -x app/styles/less/main.less app/styles/css/main.css
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
> db.createCollection('lists')
```

Add seed data

```
db.lists.drop()
db.createCollection('lists')
db.lists.insert()
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

* [http://www.befundoo.com/university/tutorials/angularjs-directives-tutorial/](http://www.befundoo.com/university/tutorials/angularjs-directives-tutorial/)

* Unix permissions:

```
(work) Mac ~/sites:                     drwxr-xr-x+   66 jason        staff  
edf.acknowledgement.co.uk /home/sites:  drwxrwsr-x    21 tomh         devteam  
edf live 4 /home/sites: 4               drwxrwsr-x     6 jameswalton  devteam  
```

* Raspberry PI setup

Install MongoDB  
Set up sites directory for app (see Unix permissions above) 
Get local app running  
Get SHH access working  
Make app accessible on network  
Make app accessible on Web (make sure mongodb is not available on network)     

* Mongodb backups

You can make simple backups with

```
$ mongod
$ mongodump --db lists-app

connected to: 127.0.0.1
Sat Aug 10 15:05:06.450 DATABASE: test	 to 	dump/test
```

They can be resotored with *mongorestore*  

```
$ mongorestore --collection lists --db lists-app dump/foo/lists.bson 
```
