const MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/jinweiDB';
MongoClient.connect(url, function (err, db) {
  if (err) throw err

  const dbase = db.db('jinweiDB'); //选择一个数据库

 /* dbase.createCollection('address', function (err, res) { //创建集合
    if (err) {
      throw err
    }



    db.close();
    console.info("关闭数据库");
  });*/

  console.info(dbase);

})
