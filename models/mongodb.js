var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017' // 数据库地址

class DB {
    getDB() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    resolve(db)
                }
            })
        })
    }
    
    insertOne(collection, doc) {
        return new Promise((resolve, reject) => {
            this.getDB().then(db => {
                db.db('swagger')
                    .collection(collection)
                    .insertOne(doc, (err, res) => {
                        db.close()
                        if (err) {
                            console.log(err)
                            reject(err)
                        } else {
                            resolve()
                        }
                    })
            }, reject)
        })
    }
    insertMany(collection, docs) {
        return new Promise((resolve, reject) => {
            this.getDB().then(db => {
                db.db('swagger')
                    .collection(collection)
                    .insertMany(docs, (err, res) => {
                        db.close()
                        if (err) {
                            console.log(err)
                            reject(err)
                        } else {
                            resolve(res.insertedCount)
                        }
                    })
            }, reject)
        })
    }
}

module.exports = new DB()
