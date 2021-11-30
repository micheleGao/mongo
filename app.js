//dependencies
const mongoose = require("mongoose");
const Food = require("./food.js");
require("dotenv").config();

//seeding
// const myFirstFood = {
//   dishName: "Meatballs",
//   ingredients: "ground turkey",
//   instructions: "mix ground turkey with the breadcrumb then shape into balls.",
// };

// Food.create(myFirstFood, (error, food) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(food);
//   }
//   //get control of terminal back and close
//   db.close();
// });

// const manyFood = [
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
//   {
//     dishName: "Beet Salad with Goat Cheese and Balsamic",
//     ingredients:[
//       " 4 to 5 medium beets",
//       "Extra-virgin olive oil, for drizzling",
//       "2 cups salad greens arugula or spring mix",
//       "½ shallot, thinly sliced",
//       "½ green apple, thinly sliced",
//       "¼ cup toasted walnuts",
//       "2 ounces goat cheese, torn",
//       "Microgreens, optional",
//       "Balsamic Vinaigrette",
//       "Flaky sea salt",
//       "Freshly ground black pepper",
//     ],
//     Instructions:
//       "Preheat the oven to 400°F. Wrap each beet in a piece of aluminum foil and drizzle generously with olive oil and pinches of salt and pepper. Place the beets on a baking sheet and roast for 40 to 90 minutes, or until soft and fork-tender. The time will depend on the size and freshness of the beets. Remove the beets from the oven, remove the foil, and set aside to cool. When they are cool to the touch, peel the skins. I like to hold them under running water and slide the skins off with my hands.Let the beets cool and chill them in the fridge until ready to use.Assemble the salad with the greens, shallots, apples, walnuts, cheese, and microgreens, if using. Drizzle with balsamic vinaigrette. Season with flaky sea salt and pepper and serve.",
//     Img: "https://cdn.loveandlemons.com/wp-content/uploads/2021/11/beet-salad-1.jpg",
//   },
//   {
//     dishName: "Green Beans Almondine Recipe",
//     ingredients: [
//       "Fresh green beans, of course! French haricots verts are best here, as they’re more tender than other varieties of string beans.Sliced almonds – Their nutty crunch contrasts perfectly with the grassy, tender green beans.Shallot and garlic – For savory depth of flavor.Extra-virgin olive oil – For sautéing the shallot and green beans. It adds a nice richness that ties the whole dish together.Fresh lemon juice – Its bright flavor balances this simple recipe.And salt and pepper – To make all the flavors pop!",
//     ],
//     Instructions:
//       "Bring a large pot of salted water to a boil and set a large bowl of ice water nearby. Drop the green beans into the boiling water and blanch for 2 minutes. Drain, and immediately immerse in the ice water to stop the cooking process. Drain, and transfer to a towel to dry.Heat a cast-iron skillet over medium heat. Add the almonds to the dry skillet and toast until golden brown, 2 to 3 minutes. Remove the almonds from the pan and set aside.Add the oil to the pan (turn down the heat down if necessary), then add the shallot and the salt and sauté for 2 minutes. Add the green beans and sauté, 2 to 4 more minutes, until the green beans are warmed through and tender. Remove the pan from the heat, add the garlic and lemon juice and toss. Season to taste with salt and pepper and transfer to a serving dish. Top with the almonds and serve.",
//     Img: "https://cdn.loveandlemons.com/wp-content/uploads/2021/11/green-beans-almondine-1.jpg",
//   },
//   {
//     dishName: "Instant Pot Lentil Soup",
//     ingredients: [
//       "2 tablespoons extra-virgin olive oil,1 medium yellow onion, chopped,2 celery stalks, chopped2 cups chopped carrots, about 4 medium,6 kale leaves, stems finely diced, leaves chopped,4 garlic cloves, grated,1 (14-ounce) can diced fire-roasted tomatoes,¾ cup uncooked green lentils, 2 tablespoons white wine vinegar, 12 fresh thyme sprigs, bundled, 1½ teaspoons sea salt, Heaping ½ teaspoon ground cumin, Freshly ground black pepper, 6 cups vegetable broth, Red pepper flakes, ½ cup chopped fresh parsley, for garnish, Grated Parmesan, for serving, optional, Crusty bread, for serving",
//     ],
//     Instructions:
//       "Select the Sauté function on your Instant Pot. Set the level to medium and set the time to 8 minutes. When the Instant Pot is preheated, drizzle the oil into the pot and add the onion, celery, and carrots. Cook for the 8 minutes, or until the vegetables soften.Add the kale stems, garlic, tomatoes, lentils, vinegar, thyme bundle, salt, cumin and several grinds of pepper to the pot and stir. Pour in the vegetable broth and secure the lid on the Instant Pot. Pressure cook on high for 15 minutes.Allow the Instant Pot to release pressure naturally. This will take 20 to 30 minutes. When the float valve drops, remove the lid and stir in the kale leaves. Add a pinch of red pepper flakes and season to taste with salt and pepper.Remove the thyme bundle, and garnish with the parsley and grated Parmesan, if desired. Serve with crusty bread.",
//     Img: "https://cdn.loveandlemons.com/wp-content/uploads/2021/10/instant-pot-lentil-soup-1.jpg",
//   },
//   {
//     dishName: "Vegan Broccoli Soup",
//     ingredients: [
//       "2 tablespoons extra-virgin olive oil, more for drizzling,1 small yellow onion, diced,½ cup chopped celery,⅓ cup chopped carrots,1 lb. broccoli, stems diced, florets choppe,1 small yukon gold potato, diced (1 cup),4 garlic cloves, minced,4 cups vegetable broth,3 cups cubed bread, for croutons,½ cup raw cashews,1½ teaspoons apple cider vinegar,1/2 teaspoon Dijon mustard,¼ cup fresh dill,1 tablespoon fresh lemon juice,3/4 teaspoon sea salt,freshly ground black pepper",
//     ],
//     Instructions:
//       "Preheat the oven to 350°F and line 2 small baking sheets with parchment paper.Heat the oil in a large pot or Dutch oven over medium heat. Add the onion, celery, carrots, broccoli stems, salt, and pepper and sauté until softened, about 10 minutes. Add the potatoes and garlic and stir, then add the broth and simmer for 20 minutes until the potatoes are soft. Let cool slightly.Set aside 1 cup of the broccoli florets to roast as a topping for the soup. Place the remaining florets in a steamer basket, and set over a pot with 1-inch of water. Bring the water to a simmer, cover, and let steam 5 minutes, until the broccoli is tender.Meanwhile, place the reserved broccoli florets and the bread cubes on the baking sheets. Toss with a drizzle of olive oil and a pinch of salt and roast until the bread is crispy and the broccoli is tender and browned around the edges, 10 to 15 minutes.Transfer the soup to the blender and add the cashews, apple cider vinegar, and mustard, and blend until creamy. Work in batches, if necessary. Add the steamed broccoli florets, dill, and lemon juice, and pulse until the broccoli is incorporated but still chunky. The soup should be thick; if it's too thick, add 1/2 cup water to thin to your desired consistency.Season to taste and serve the soup in bowls with the roasted broccoli and croutons on top",
//     Img: "https://cdn.loveandlemons.com/wp-content/uploads/2017/11/vegan-broccoli-soup.jpg",
//   },
// ];

// Food.insertMany(manyFood, (error, food) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log(food);
// 	}
// 	db.close();
// });


//global configs
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  },
  () => {
    console.log("connection with Mongo is established!");
  }
);

//connect to Mongo
// mongoose.connect(
//   () => {
//     console.log("connection with Mongo is established!");
//   }
// );

// Connection Error/Success
// Define callback functions for various events
// db.on("error", (err) => console.log(err.message + " is MongoDB not running?"));
db.on("connected", () => console.log("MongoDB connected on: ", mongoURI));
// db.on("disconnected", () => console.log("MongoDB disconnected"));

// Automatically close after 5 seconds
// for demonstration purposes to see that you must use `db.close()` in order to regain control of Terminal tab
// setTimeout(() => {
//   db.close();
// }, 5000);

modole.exports= mongoose;