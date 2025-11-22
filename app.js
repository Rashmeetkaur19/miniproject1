const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Import JSON data
const books = require('./data/books.json');

// Serve static files (CSS, images, HTML)
app.use('/site', express.static(path.join(__dirname, 'public')));

// API route to send JSON data
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Handle 404
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/site/index.html`);
});
