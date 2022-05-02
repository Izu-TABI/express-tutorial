const express = require('express');
const app = express();
const userRouter = require('./routes/user.js');

const PORT = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    // console.log('hello express');
    // res.send('こんにちは');

});

//ルーティング
app.use('/user', userRouter);

app.listen(PORT, () => console.log('サーバーが起動しました。'));
