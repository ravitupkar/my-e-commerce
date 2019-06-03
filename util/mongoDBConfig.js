const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ravitupkar01:ravitupkar01@cluster0ravi-flkid.mongodb.net/shop?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
let _db;
const mongoConnect = () =>{
    client.connect()    
    .then(client =>{
        // console.log(client); 
        // console.log('Connected ');
        _db = client.db();
    })
    .catch(err => {
        console.log(err);
    });
}

const getdb = () =>{
    if(_db){
        return _db;
    }
    throw 'database Not Found';
}

mongodbConnect = MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    return dbo;
  });

exports.mongodbConnect  =   mongodbConnect;

exports.mongoConnect  = mongoConnect;

exports.getdb  = getdb;