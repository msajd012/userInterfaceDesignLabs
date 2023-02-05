// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function pageLoad(){
	openInfo(event, "Shop");
	populateListProductChoices();
}

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices() {
    var s2 = document.getElementById("displayProduct");
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions

	let selectedOptions = [];

	if (document.getElementById("Vegetarian").checked){
		selectedOptions.push(document.getElementById("Vegetarian").name);
	}

	if (document.getElementById("GlutenFree").checked){
		selectedOptions.push(document.getElementById("GlutenFree").name);
	}

    var optionArray = restrictListProducts(products, selectedOptions);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>

	var categories = [];

	for (i=0;i<optionArray.length;i++){
		if (!(categories.includes(optionArray[i].category))){
			categories.push(optionArray[i].category);
		}
	}

	for (j=0;j<categories.length;j++){
		var e = document.createElement('h2');
		e.innerHTML = (categories[j].charAt(0).toUpperCase() + categories[j].slice(1));
		s2.appendChild(e);
		for (i = 0; i < optionArray.length; i++) {
			if (optionArray[i].category == categories[j]){
				var productName = optionArray[i].name;
				let productPrice = optionArray[i].price;
				// create the checkbox and add in HTML DOM
				var checkbox = document.createElement("input");
				checkbox.type = "checkbox";
				checkbox.name = "product";
				checkbox.value = productName;
				s2.appendChild(checkbox);
				
				// create a label for the checkbox, and also add in HTML DOM
				var label = document.createElement('label')
				label.htmlFor = productName;
				label.appendChild(document.createTextNode(productName));
				s2.appendChild(label);
		
				var label = document.createElement('label')
				label.htmlFor = productPrice;
				label.appendChild(document.createTextNode("$" + productPrice));
				s2.appendChild(label);
				
				// create a breakline node and add in HTML DOM
				s2.appendChild(document.createElement("br"));    
			}
		}
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));

	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	// provides feedback to user when trying to add items to cart -ms
	if(chosenProducts.length == 0){
		alert("No items selected");
	} else{
		alert("Items added to cart");
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
		
}