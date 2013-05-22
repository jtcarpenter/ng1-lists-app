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


