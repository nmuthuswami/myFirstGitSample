const express = require('express');
const app = new express();

app.get('/', (req,res)=>{
    res.send('Hi Jeeya, I Love You!!!');
});

app.listen(3000, ()=>{
    console.log('Server listening to port 3000');
});