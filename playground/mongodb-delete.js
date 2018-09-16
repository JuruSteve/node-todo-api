const { MongoClient, ObjectID }= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to the MondoDB server');
    } 
    console.log('Connected to MongoDB server');

    // db.collection('Users').deleteMany({name: 'Juru'}).then((res)=>{
    //     console.log(res);
    // })

    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((done)=>{
    //     console.log(done);
    // })
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b9e6c62843f293480c4b095')}).then((done)=>{
        console.log(done);
    })


    // db.close();
});