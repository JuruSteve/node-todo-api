const { MongoClient, ObjectID }= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to the MondoDB server');
    } 
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b9e7fe08bcb1bd40214d4db')
    }, {
        $set: {
            text: 'Juru',
            site: 'google.com'
        },
        $inc: {
            age:4
        }
    }, {
        returnOriginal: false
    }).then((res)=>{
        console.log(res);
        
    })

    // db.close();
});