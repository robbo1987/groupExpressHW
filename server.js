const express = require('express');
const app = express();
const port = 3001

console.log('hello world')

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

app.get('/', (req,res) => {
    res.send(`<h1>robbo was here</h1>`)
})