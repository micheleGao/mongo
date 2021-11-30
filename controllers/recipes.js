const express = require('express');
const router = express.Router();
const Recipes = require('../food');

//index
//get RECIPES
router.get('/', (req, res, next)=>{
    Recipes.find()
        .then((recipes)=>res.json(recipes))
        .catch(next);
});
//recipes/id
router.get('/:id', (req, res, next)=>{
    const id = req.params.id;
    Recipes.findById(id)
        .then((recipes)=>res.json((recipes)))
        .catch(next);
});

//create 
//post/recipes
router.post('/', (req, res, next)=>{
    const recipeData = req.body;
    Recipes.create(recipeData)
        .then((recipes)=>res.json((recipes)))
        .catch(next);
})

// UPDATE
// PATCH /recipes/:id
router.patch('/:id', (req, res, next) => {
	const id = req.params.id;
	const recipeData = req.body;
	Recipes.findOneAndUpdate({ _id: id }, recipeData, { new: true })
		.then((Recipes) => res.json(Recipes))
		.catch(next);
});

// DESTROY
// DELETE /recipes/:id
router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Recipes.findOneAndDelete({ _id: id })
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports= router;