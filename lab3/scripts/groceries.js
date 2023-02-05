// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [

	{
		name: "Apple 🍎",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "produce",
		price: 0.79
	},
	{
		name: "Bread 🍞",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category: "bakery",
		price: 1.97
	},
	{
		name: "Broccoli 🥦",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "produce",
		price: 2.29
	},
	{
		name: "Butter 🧈",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "dairy",
		price: 3.48
	},
	{
		name: "Eggs 🥚",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "dairy",
		price: 3.68
	},
	{
		name: "Avocado 🥑",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "produce",
		price: 4.97
	},
	{
		name: "Bacon 🥓",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "meat",
		price: 5.97
	},
	{
		name: "Cheese 🧀",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "dairy",
		price: 7.97
	},
	{
		name: "Sushi 🍣",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "meat",
		price: 6.99
	},
	{
		name: "Steak 🥩",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "meat",
		price: 18.58
	},

];
	

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	let filters;
	for (let i=0; i<prods.length; i+=1) {
		filters = true;
		if (restriction.length > 0){
			if ((restriction.includes("Vegetarian")) && (!prods[i].vegetarian)){
				filters = false;
			}
			if ((restriction.includes("GlutenFree")) && (!prods[i].glutenFree)){
				filters = false;
			}
			if ((restriction.includes("Organic")) && (!prods[i].organic)){
				filters = false;
			}
			if ((restriction.includes("None")) && (!prods[i].organic)){
				filters = true;
			}
		}
		if (filters){
			product_names.push(prods[i]);
		}
	}
	product_names.sort((a,b) => a.price - b.price);
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