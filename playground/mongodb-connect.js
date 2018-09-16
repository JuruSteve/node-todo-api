const { MongoClient, ObjectID }= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to the MondoDB server');
    } 
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b9e693cfa7d7533e2eb6280')
    // }).toArray().then((docs)=>{
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err)=>{
    //     console.log('Unable to fetch Todos', err)
    // })

    db.collection('Users').find({
        name: 'Juru'
    }).toArray().then((docs)=>{
        console.log('Users')
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err)=>{
        console.log('Unable to fetch Todos', err)
    })

    // db.close();
});