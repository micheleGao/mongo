//=============================================================================
// Basic Config
//=============================================================================
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

//=============================================================================
// Middleware
//=============================================================================
// app.use(express.urlencoded({ extended: false }));
app.use(cors());
// `express.json` parses application/json request data and
//  adds it to the request object as request.body
app.use(express.json());
// `express.urlencoded` parses x-ww-form-urlencoded request data and
//  adds it to the request object as request.body
app.use(express.urlencoded({ extended: true }));

//=============================================================================
// ROUTES
//=============================================================================

// Redirect
app.get('/', (req, res) => {
	res.redirect('/recipes');
});
// Tweet Routes
const tweetRoutes = require('./controllers/recipes.js');
app.use('/recipes', tweetRoutes);

//=============================================================================
// START SERVER
//=============================================================================

app.listen(PORT, () => {
	console.log(`✅  app listening on port: ${PORT}`);
});