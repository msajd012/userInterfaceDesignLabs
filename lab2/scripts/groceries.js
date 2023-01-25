// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [

	{
		name: "apple 🍎",
		vegetarian: true,
		glutenFree: true,
		price: 0.79
	},
	{
		name: "bread 🍞",
		vegetarian: true,
		glutenFree: false,
		price: 1.97
	},
	{
		name: "broccoli 🥦",
		vegetarian: true,
		glutenFree: true,
		price: 2.29
	},
	{
		name: "butter 🧈",
		vegetarian: true,
		glutenFree: true,
		price: 3.48
	},
	{
		name: "eggs 🥚",
		vegetarian: true,
		glutenFree: true,
		price: 3.68
	},
	{
		name: "avacado 🥑",
		vegetarian: true,
		glutenFree: true,
		price: 4.97
	},
	{
		name: "bacon 🥓",
		vegetarian: false,
		glutenFree: true,
		price: 5.97
	},
	{
		name: "cheese 🧀",
		vegetarian: true,
		glutenFree: true,
		price: 7.97
	},
	{
		name: "sushi 🍣",
		vegetarian: false,
		glutenFree: true,
		price: 6.99
	},
	{
		name: "steak 🥩",
		vegetarian: false,
		glutenFree: true,
		price: 18.58
	},

];
	

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	// returns the price rounded to 2 decimal places -ms
	return totalPrice.toFixed(2);
}