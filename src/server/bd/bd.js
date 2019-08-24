
const MongoClient = require('mongodb').MongoClient;
const url = process.env.DB_URL
const db_name = process.env.DB_DB
let connect = () => {
   console.log(url)
   return new Promise((resolve, reject) => {
      const client = new MongoClient(url);
      client.connect((err) => {
         if(err) {
            console.log("[DB] Unable to connect to server: " + err.message);
            reject(err);
         } else {
            console.log("[DB]connected to BD");
            exports.db = client.db(db_name)
            resolve(exports.db)
         }
      })
   }) 
}

const countUsers = (db) => {
   return new Promise((resolve, reject) => {
      const collectionUsers = db.collection('users')
      collectionUsers.countDocuments().then((count) => {
         resolve(count)
      }).catch((err) => {
         reject(err)
      })
   })
} 

const insertUser = (db, lastName, firstName) => {
   return new Promise((resolve, reject) => {
      const collectionUsers = db.collection('users')
      collectionUsers.insertOne({
         firstName: firstName,
         lastName: lastName
      }).then(resp => {
         resolve(resp)
      }).catch(err => {
         reject(err)
      })
   })
}

const findOneUser = (db) => {
   return new Promise((resolve, reject) => {
      const collectionUsers = db.collection('users')
      collectionUsers.findOne({}).then(user => {
         resolve(user)
      }).catch(err => {
         reject(err)
      })
   })
}

exports.findOneUser = findOneUser
exports.insertUser = insertUser
exports.countUsers = countUsers
exports.connect = connect
exports.client = null