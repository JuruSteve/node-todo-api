    const {MongoClient, ObjectID} = require('mongodb');

    MongoClient.connect('mongodb://localhost:27017', (err, db)=>{
        if(err){
            console.log('unable to connect to the database')
        }
        console.log('Connected To the Database')

        db.collection('Users').find().toArray().then((docs)=>{
            console.log('Users')
            console.log(JSON.stringify(docs, undefined, 2))
        }, (err)=>{
            console.log('Unable to fetch Todos', err)
        })

        db.close()
    })

    // db.collection('Users').find({
    //     name: 'Juru'
    // }).toArray().then((docs)=>{
    //     console.log('Users')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err)=>{
    //     console.log('Unable to fetch Todos', err)
    // })