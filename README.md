[X] Make items belong to lists
[ ] Make items tickable
[X] Create new lists
[X] Create new items
[ ] Save lists locally
[ ] Save lists in mongodb
[ ] Protect access with htaccess or other
[ ] Create users
[X] Fix bug cannot add items to new list


nvm ls-remote
nvm install *.**.*
nvm alias default *.**.*
npm install -g less
npm install
node watch-less.js
node server.js



lessc -x styles.less styles.css


======== Notes ===========

Have a main app controller which wraps around everthing, inside the listsController
and a usersController

