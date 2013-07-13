function merge(arrs) {
  arrs  = Array.prototype.slice.call(arguments);
  var o = {};
  var items = [];
  for (var i = 0, l = arrs.length; i < l; i++) {
    for (var j = 0, m = arrs[i].length; j < m; j++) {
      var item = arrs[i][j];
      if (!o.hasOwnProperty(item.text)) {
        o[item.text] = item;
      } else {
        if (new Date(item.modified).getTime() > new Date(o[item.text].modified).getTime()) {
          o[item.text] = item;
        }
      }
    }
  }
  for (p in o) {
    items.push(o[p]);
  }
  return items;
}

// TODO: Put this in a test
var obj1 = {
    title: 'Films',
    items: [
      {
        text: 'Jaws',
        done: false,
        created: 'Sat Jul 13 2013 14:47:50 GMT+0100 (BST)',
        modified: 'Sat Jul 13 2013 14:47:50 GMT+0100 (BST)',
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
  };
var obj2 = {
    title: 'Films',
    items: [
      {
        text: 'Jaws',
        done: true,
        created: 'Sat Jul 14 2013 14:47:50 GMT+0100 (BST)',
        modified: 'Sat Jul 14 2013 14:47:50 GMT+0100 (BST)'
      },
      {
        text: 'Bad Taste',
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
  }
//console.log(merge(obj1.items, obj2.items));

exports.merge = merge;
