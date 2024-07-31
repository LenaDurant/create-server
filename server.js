const exporess = require ('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send(`<h1>Bucket List!</h1>`);
});

app.get('/bunnies', (req, res, next) => {
    res.send(`Bucket Kicked...</h1>`);
});

app.listen(3000, () => { console.log(`listening on port`)

});