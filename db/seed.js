const mongoose = require("./connection");
// const Recipe = require("../models/recipe.js");
const Drinks= require('../models/drinks.js')

// const RecipeData = [
//   {
//     dishName: "Creamy vegan pasta",
//     ingredients: [
//       "creamy vegan pasta sauce",
//       "2.5 cups small shell pasta",
//       "1tablespoon extra virgin olive oil",
//       "1 small chopped yellow onion",
//       "5 cups broccoli florets",
//       ".25 cup of tasted pine nuts",
//       "lemon wedges, for serving”, “sea salt and ground pepper",
//     ],
//     Instructions:
//       "Make the sauce.Bring a large pot of salted water to a boil. Prepare the pasta according to the instructions on the package, cooking until al dente. Drain and set aside.Heat 1 tablespoon of olive oil in a large skillet over medium heat. Add the onion and sauté until soft, about 5 minutes.Stir in the chopped broccoli stems and cook for another 3 to 5 minutes or until tender. Add the broccoli florets and leaves and a splash of water or vegetable broth. Cover and turn off the heat. Allow the broccoli to steam for 2 to 3 minutes or until tender but still bright green. Add the pasta, then stir in ¾ of the sauce, adding more broth if the sauce is too dry.Season to taste with more salt, pepper and lemon juice, as desired, and portion into bowls. Divide the remaining sauce onto each bowl. Top with the pine nuts and serve with lemon wedges on the side.",
//     Img: "https://cdn.loveandlemons.com/wp-content/uploads/2019/09/dinner-564x674.jpg",
//   },
//   {
//     dishName: "Zucchini noodles",
//     ingredients: [
//       " 3 medium zucchini”, “lemon, olive oil, sea salt, and parmesan",
//     ],
//     Instructions:
//       "Choose the type of noodle you would like to make and follow the instructions for each option below.For curly spaghetti noodles using a countertop spiralizer: Clamp the spiralizer to your countertop. Trim off the tip of the zucchini and secure it between the blade and the teeth of the spiralizer. Turn the handle to make the noodles.For straight angel hair noodles using a julienne peeler: Simply hold the zucchini with one hand and pull the julienne peeler across the zucchini to make strips.For fettucine noodles using a mandoline and a knife: Slice thin zucchini planks with the mandoline, and then cut those planks into fettuccine-sized strips.For pappardelle noodles using a regular vegetable peeler: Use the peeler to simply peel thin strips of zucchini. Serve the zucchini noodles raw with a warm sauce (the heat of the sauce will gently cook the noodles without making them mushy). Or heat a skillet to medium heat, brush with olive oil, add the noodles and heat 1 minute, or until just warmed through. Remove and serve with desired sauces and toppings",
//     Img: "https://cdn.loveandlemons.com/wp-content/uploads/2019/08/zucchini-noodles.jpg",
//   },
//   {
//     dishName: "Grilled Eggplant",
//     ingredients: [
//       "2 medium eggplants, sliced into ¼-inch thick rounds",
//       "Extra-virgin olive oil, for drizzling sea salt",
//     ],
//     Instructions:
//       " make Couscous Salad Topping first, ½ cup dry Israeli couscoug first,  ½ teaspoon extra-virgin olive oil, more for drizzling first, 1 garlic clove, grateg first, 1 tablespoon lemon juice, plus 1/2 teaspoon zesg first, 3 tablespoons chopped dried apricots or Medjool dateg first, heaping 1/4 teaspoon sea saltg first, Freshly ground black peppeg first, Pinches red pepper flakeg first, ¼ cup finely chopped parsleg first, 3 tablespoons chopped or sliced almondg first,  ¼ cup mint leaves, for garnishing first, Cook the couscous in a pot of salted boiling water until al dente, about 7 to 8 minutes. Drain and transfer to a medium bowl. Add the olive oil, garlic, lemon juice, lemon zest, dried apricots, salt, pepper, and red pepper flakes. Stir in the parsley and almonds and season to taste.Grill the eggplant. Heat a grill to medium-high heat. Drizzle the eggplant with olive oil and sprinkle with salt and pepper. Grill 2 to 3 minutes per side, until well-charred and tender. Assemble the eggplant on a platter and top with the couscous salad. Garnish with fresh mint. Drizzle with olive oil and season to taste. Serves 4 as a side dish, or 2 as a main.",
//     Img: "https://cdn.loveandlemons.com/wp-content/uploads/2020/08/IMG_30161.jpg",
//   },
// ];

const drinkData =[
            {
            strDrink: 'Afterglow',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg',
            strIngredient1: ["Grenadine","Orange juice", "Pineapple juice"],
            strInstructions: "Mix. Serve over ice.",
        },
        {
            strDrink: 'Alice Cocktail',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg',
            strIngredient1: ["Grenadine","Orange juice","Pineapple juice","Cream"],
            strInstructions: "Shake well, strain into a large cocktail glass.",
        },
        {
            strDrink: 'Aloha Fruit punch',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg',
            strIngredient1: ["Water","Ginger","Guava juice", "Lemon juice", "Pineapple","Sugar", "Pineapple juice"],
            strInstructions: "Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.",
        },
        {
            strDrink: 'Apello',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg',
            strIngredient1:["Orange juice","Grapefruit juice","Apple juice", "Maraschino cherry"],
            strInstructions: "Stirr. Garnish with maraschino cherry."
        },
        {
            strDrink: 'Apple Berry Smoothie',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg',
            strIngredient1:["Berries","Apple"],
            strInstructions: "Throw everything into a blender and liquify.",
        },
        {
            strDrink: 'Apple Karate',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg',
            strIngredient1: ["Apple juice","Carrot"],
            strInstructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up."
        },
        {
            strDrink: 'Banana Cantaloupe Smoothie',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/uqxqsy1468876703.jpg',
            strIngredient1:["Cantaloupe", "Banana"],
            strInstructions: "Juice cantaloupe, pour juice into blender, add banana, and liquify.",
        },
        {
            strDrink: 'Banana Milk Shake',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg',
            strIngredient1: ["Strawberries", "Banana", "Yoghurt", "Milk", "Honey"],
            strInstructions: "Blend all together in a blender until smooth.",
        },
        {
            strDrink: 'Banana Strawberry Shake',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/vqquwx1472720634.jpg',
            strIngredient1: ["Milk","Orange juice","Sugar syrup","Banana"],
            strInstructions:"Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana.",
        },
        {
            strDrink: 'Banana Strawberry Shake Daiquiri',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg',
            strIngredient1:["Strawberries","Banana","Apple juice"],
            strInstructions: "Blend all together in a blender until smooth."

        },
        {
            strDrink: 'Bora Bora',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/xwuqvw1473201811.jpg',
            strIngredient:["Pineapple juice", "Passion fruit juice","Lemon juice", "Grenadine"],
            strInstructions: "Prepare in a blender or shaker, serve in a highball glass on the rocks. Garnish with 1 slice of pineapple and one cherry.",

        },
        {
            strDrink: 'Castillian Hot Chocolate',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg',
            strIngredient1: ["Cocoa powder", "Sugar", "Cornstarch","Water","Milk"],
            strInstructions:"Shift the cocoa and sugar together into a medium-sized saucepan. Dissolve the cornstarch in the water, and stir into the cocoa and sugar until it is a smooth paste. Begin heating the mixture, stirring it with a whisk, and gradually pour in the milk. Continue stirring with the whisk as you bring the liquid to a simmer. Allow the chocolate to simmer for about 10 minutes, stirring often, until it is thick, glossy and completely smooth. Serve steaming hot in coffee mug. Serves six.",
        },
        {
            strDrink: 'Chocolate Beverage',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/jbqrhv1487603186.jpg',
            strIngredient1: ["Milk", "Chocolate", "Cinnamon", "Egg"],
            strInstructions: "Boil milk in the top of a deep double boiler five minutes. Remove from fire and add chocolate, mixed with the cinnamon, a little at a time, beating with molinillo or egg beater after each addition. When the chocolate is thoroughly blended, heat to the boiling point. Place over bottom of double boiler and add eggs, whipping constantly, until they are thoroughly blended and the mixture is frothing. Serve in coffee mug. Serves eight.",
        },
        {
            strDrink: 'Chocolate Drink',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/q7w4xu1487603180.jpg',
            strIngredient1: ["Chocolate", "Milk", "Water"],
            strInstructions: "Melt the bar in a small amount of boiling water. Add milk. Cook over low heat, whipping gently (with a whisk, i would assume) until heated well. Don't let it boil! Serve in coffee mug.",
        },
        {
            strDrink: 'Coke and Drops',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/yrtxxp1472719367.jpg',
            strIngredient1: ["Coca-Cola","Lemon juice"],
            strInstructions: "Take a glass, pour the Coke in the glass, then you take 7 drops of lemon juice. Granish with a lemon slice on the rim of the glass.",
        },
]

Drinks.insertMany(manyFood, (error, food) => {
	if (error) {
		console.log(error);
	} else {
		console.log(food);
	}
	db.close();
});

// Recipe.deleteMany({})
//   .then(() => Recipe.insertMany(RecipeData))
//   .then((recipes) => {
//     console.log("recipe deleted");
//     console.log("seed recipes added to database: " + recipes);
//   })
//   .catch(console.error)
//   .finally(() => process.exit());

// module.exports = RecipeData;

module.exports = drinkData;
