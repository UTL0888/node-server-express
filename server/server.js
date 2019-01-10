const express =require('express');
const bodyParser =require('body-parser');   
const cors =require('cors');

const PORT =4000 ;

const app =express();
app.use(bodyParser.json());

app.use(cors());


app.get('/',function(req,res){
    res.send('heloo from server');
});

app.post('/enroll',function(req,res){
    console.log(req.body);
    res.status(401).send({"massage":'Dtaa Receved'});
})
app.listen(PORT,function(){

    console.log('server running on this port:' + PORT);

})