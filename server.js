import express from 'express';
import bodyParser from 'body-parser';
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());



app.get('/calculator/greeting', (req, res) => {
  // send status code 200 with Helo word as response
    res.status(200).send('Hello world!');
});


app.post('/calculator/add', (req, res) => {

    // getting first and second number from request body

    const { first, second } = req.body;
    const result = first + second;
    res.status(200).json({ result });
});


app.post('/calculator/subtract', (req, res) => {
    // getting first and second number from request body
    const { first, second } = req.body;
    const result = first - second;
    // send status code 200 with result as response
    res.status(200).json({ result });
});


app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});