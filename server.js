const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// const users = [
//     { id: 1, username: "Alex", email: "alex@mail.com" },
//     { id: 2, username: "Ivan", email: "ivan@mail.com" },
//     { id: 3, username: "Maria", email: "maria@mail.com" }
// ];

// app.get('/users', (req, res) => {
//     res.render('users', { users });
// });

// app.get('/users/:id', (req, res) => {
//     const userId = Number(req.params.id);
//     const user = users.find(u => u.id === userId);
    
//     if (!user) {
//         return res.status(404).send("User not found");
//     }
    
//     res.render('user', { user });
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

const movies = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        director: "Christopher Nolan",
        genre: "Sci-Fi"
    },
    {
        id: 2,
        title: "The Shawshank Redemption",
        year: 1994,
        director: "Frank Darabont",
        genre: "Drama"
    },
    {
        id: 3,
        title: "Pulp Fiction",
        year: 1994,
        director: "Quentin Tarantino",
        genre: "Crime"
    },
    {
        id: 4,
        title: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan",
        genre: "Action"
    },
    {
        id: 5,
        title: "Forrest Gump",
        year: 1994,
        director: "Robert Zemeckis",
        genre: "Drama"
    }
];

app.get('/movies', (req, res) => {
    res.render('movies', { movies });
});

app.get('/movies/:id', (req, res) => {
    const movieId = Number(req.params.id);
    const movie = movies.find(m => m.id === movieId);
    
    if (!movie) {
        return res.status(404).send("Movie not found");
    }
    
    res.render('movie', { movie });
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});