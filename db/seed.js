const mongoose = require("./connection");
const Recipe = require("../models/recipe.js");

const RecipeData = [
  {
    dishName: "Creamy vegan pasta",
    ingredients: [
      "creamy vegan pasta sauce",
      "2.5 cups small shell pasta",
      "1tablespoon extra virgin olive oil",
      "1 small chopped yellow onion",
      "5 cups broccoli florets",
      ".25 cup of tasted pine nuts",
      "lemon wedges, for serving”, “sea salt and ground pepper",
    ],
    Instructions:
      "Make the sauce.Bring a large pot of salted water to a boil. Prepare the pasta according to the instructions on the package, cooking until al dente. Drain and set aside.Heat 1 tablespoon of olive oil in a large skillet over medium heat. Add the onion and sauté until soft, about 5 minutes.Stir in the chopped broccoli stems and cook for another 3 to 5 minutes or until tender. Add the broccoli florets and leaves and a splash of water or vegetable broth. Cover and turn off the heat. Allow the broccoli to steam for 2 to 3 minutes or until tender but still bright green. Add the pasta, then stir in ¾ of the sauce, adding more broth if the sauce is too dry.Season to taste with more salt, pepper and lemon juice, as desired, and portion into bowls. Divide the remaining sauce onto each bowl. Top with the pine nuts and serve with lemon wedges on the side.",
    Img: "https://cdn.loveandlemons.com/wp-content/uploads/2019/09/dinner-564x674.jpg",
  },
  {
    dishName: "Zucchini noodles",
    ingredients: [
      " 3 medium zucchini”, “lemon, olive oil, sea salt, and parmesan",
    ],
    Instructions:
      "Choose the type of noodle you would like to make and follow the instructions for each option below.For curly spaghetti noodles using a countertop spiralizer: Clamp the spiralizer to your countertop. Trim off the tip of the zucchini and secure it between the blade and the teeth of the spiralizer. Turn the handle to make the noodles.For straight angel hair noodles using a julienne peeler: Simply hold the zucchini with one hand and pull the julienne peeler across the zucchini to make strips.For fettucine noodles using a mandoline and a knife: Slice thin zucchini planks with the mandoline, and then cut those planks into fettuccine-sized strips.For pappardelle noodles using a regular vegetable peeler: Use the peeler to simply peel thin strips of zucchini. Serve the zucchini noodles raw with a warm sauce (the heat of the sauce will gently cook the noodles without making them mushy). Or heat a skillet to medium heat, brush with olive oil, add the noodles and heat 1 minute, or until just warmed through. Remove and serve with desired sauces and toppings",
    Img: "https://cdn.loveandlemons.com/wp-content/uploads/2019/08/zucchini-noodles.jpg",
  },
  {
    dishName: "Grilled Eggplant",
    ingredients: [
      "2 medium eggplants, sliced into ¼-inch thick rounds",
      "Extra-virgin olive oil, for drizzling sea salt",
    ],
    Instructions:
      " make Couscous Salad Topping first, ½ cup dry Israeli couscoug first,  ½ teaspoon extra-virgin olive oil, more for drizzling first, 1 garlic clove, grateg first, 1 tablespoon lemon juice, plus 1/2 teaspoon zesg first, 3 tablespoons chopped dried apricots or Medjool dateg first, heaping 1/4 teaspoon sea saltg first, Freshly ground black peppeg first, Pinches red pepper flakeg first, ¼ cup finely chopped parsleg first, 3 tablespoons chopped or sliced almondg first,  ¼ cup mint leaves, for garnishing first, Cook the couscous in a pot of salted boiling water until al dente, about 7 to 8 minutes. Drain and transfer to a medium bowl. Add the olive oil, garlic, lemon juice, lemon zest, dried apricots, salt, pepper, and red pepper flakes. Stir in the parsley and almonds and season to taste.Grill the eggplant. Heat a grill to medium-high heat. Drizzle the eggplant with olive oil and sprinkle with salt and pepper. Grill 2 to 3 minutes per side, until well-charred and tender. Assemble the eggplant on a platter and top with the couscous salad. Garnish with fresh mint. Drizzle with olive oil and season to taste. Serves 4 as a side dish, or 2 as a main.",
    Img: "https://cdn.loveandlemons.com/wp-content/uploads/2020/08/IMG_30161.jpg",
  },
];

Recipe.deleteMany({})
  .then(() => Recipe.insertMany(RecipeData))
  .then((recipes) => {
    console.log("recipe deleted");
    console.log("seed recipes added to database: " + recipes);
  })
  .catch(console.error)
  .finally(() => process.exit());

module.exports = RecipeData;
