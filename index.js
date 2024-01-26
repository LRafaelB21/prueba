import express from 'express';
const app = express();
// const port = 3005;

app.listen(3005)
app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

console.log("Hello World!")