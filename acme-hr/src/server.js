const express = require ('express');
const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send(`<h1>Bucket List!</h1>`);
});

app.get('/employees', (req, res, next) => {
    res.send([
        {
          id: 1,
					name: "Bob Evans",
					admin: true,
        },

				{
          id: 2,
					name: "Taco Bowdet",
					admin: false,
        },

				{
          id: 3,
					name: "Burger Queen",
					admin: true,
        },
				
				{
          id: 4,
					name: "Pandemic Bread",
					admin: false,
        },

				{
          id: 5,
					name: "Chick Felicia",
					admin: true,
        },
    ])
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`)});


export default Server;