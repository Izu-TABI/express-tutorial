const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    // console.log('hello express');
    // res.send('こんにちは');
    
});

app.listen(PORT, () => console.log('サーバーが起動しました。'));
