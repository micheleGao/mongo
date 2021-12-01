const express = require('express');
const recipeRoutes = express.Router();
const Recipes = require('../models/recipe.js');

//index
//get RECIPES
// router.get('/', (req, res, next)=>{
//     Recipes.findAll()
//         .then((recipes)=>res.json(recipes))
//         .catch(next);
// });
// //recipes/id
// router.get('/:id', (req, res, next)=>{
//     const id = req.params.id;
//     Recipes.findById(id)
//         .then((recipes)=>res.json((recipes)))
//         .catch(next);
// });

// //create 
// //post/recipes
// router.post('/', (req, res, next)=>{
//     const recipeData = req.body;
//     Recipes.create(recipeData)
//         .then((recipes)=>res.json((recipes)))
//         .catch(next);
// })

// // UPDATE
// // PATCH /recipes/:id
// router.patch('/:id', (req, res, next) => {
// 	const id = req.params.id;
// 	const recipeData = req.body;
// 	Recipes.findOneAndUpdate({ _id: id }, recipeData, { new: true })
// 		.then((Recipes) => res.json(Recipes))
// 		.catch(next);
// });

// // DESTROY
// // DELETE /recipes/:id
// router.delete('/:id', (req, res, next) => {
// 	const id = req.params.id;
// 	Recipes.findOneAndDelete({ _id: id })
// 		.then(() => res.sendStatus(204))
// 		.catch(next);
// });



// module.exports= router;
// const Tweet = require('../models/tweet.js');

// Index
recipeRoutes.get('/', async (req, res) => {
	try {
		const allRecipe = await Recipes.find();
		res.json(allRecipe);
	} catch (err) {
		console.log(err);
	}
});

// Create
recipeRoutes.post('/', (req, res) => {
	Recipes.create(req.body, (err, recipe) => {
		if (err) {
			res.sendStatus(400);
		} else {
			res.status(201).json(recipe);
		}
	});
});

// Show
recipeRoutes.get('/:id', async (req, res) => {
	try {
		const currentRecipe = await Recipes.findById(req.params.id, (err, recipe) => {
			if (!recipe) {
				res.sendStatus(404);
			} else {
				res.json(recipe);
			}
		});
	} catch (err) {
		console.log(err);
	}
});

// Update
recipeRoutes.put('/:id', async (req, res) => {
	try {
		const updatedRecipeData = await Recipes.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true },
			(err, recipe) => {
				if (err) {
					console.log(err);
				} else if (!recipe) {
					res.sendStatus(404);
				} else {
					res.json(recipe);
				}
			}
		);
	} catch (err) {
		console.log(err);
	}
});

// Delete
recipeRoutes.delete('/:id', async (req, res) => {
	try {
		const deletedRecipe = await Recipes.findByIdAndDelete(
			req.params.id,
			(err, recipe) => {
				if (err) {
					console.log(err);
				} else if (!recipe) {
					res.sendStatus(404);
				} else {
					res.sendStatus(204);
				}
			}
		);
	} catch (err) {
		console.log(err);
	}
});

module.exports = recipeRoutes;