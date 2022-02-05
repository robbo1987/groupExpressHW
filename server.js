const express = require('express');
const app = express();
const port = 3001

console.log('hello world')

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

app.get('/homepage', (req,res) => {
    const rob = "is robby the best";
    res.send(`
    <style>
    h1{
        color:blue;
    }
    </style>
    <html>
    <body>
    
    <h1>robbo was here</h1>
    <h2>${rob}</h2>
    </body>
    </html>`)
})