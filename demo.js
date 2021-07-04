const express=require('express')
const app=express();

var courses=[{id:1,name: 'cp1',price : 2847},{id:2,name: 'cp2',price : 2887},{id:3,name: 'cp3',price : 2840}];
app.get('/',(req ,response)=>{
    response.send('hellooo');
    console.log('hellooo');
});
app.post('/',(req,response)=>{
    const c={
        id:6,name:req.body.name
    }
    courses.push(c);
    response.send(courses);

})
var port;

if(process.env.port)
    port=process.env.port;
else
    port=3010;

app.listen(port,()=>{
    console.log(`listining at port ${port}`);
});