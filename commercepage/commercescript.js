let shopZone = document.getElementById("shop-zone");
// console.log(shopZone);
let productGrid = document.getElementById("product-grid");
// console.log(productGrid);
let boxes = document.getElementsByClassName("box");
// console.log(boxes);
let info = document.getElementsByClassName("info")[0];
// console.log(info);

let cartBox = document.getElementById("cart-box");
console.log(cartBox);
let cartScreen = document.getElementById("cart-screen");
console.log(cartScreen);
let shoppingCart = {
    items: [], //array of selected products
    cartTotal: 0, //add price of selected products to this 
    money: 0,
    change: 0,

    updateCart: function () {
        let itemList = this.items;
        console.log(itemList);
        let cart = "";
        for (item of itemList) {

            cart += "<div class='cart-item'>" + item.image + item.title + " : " + item.price + " </div>";

        }

        cart += "<div id='cart-total'>" + " total :" +
            this.cartTotal + "</div>"
        cart += "<div id='cart-change'>" + " Change :" +
            this.change + "</div>";
        cartScreen.innerHTML = cart;

    }
}

//clear chopping cart
function clearCart() {
    shoppingCart.items = [];
    shoppingCart.cartTotal = 0;
    shoppingCart.money = 0;
    shoppingCart.change = 0;
    cartScreen.innerHTML = "";

}
//11 objects
let products = [{
        title: "Yellow Shirt",
        type: "shirt",
        price: 25.00,
        inStock: true,
        image: "<img src='yellowshirt.jpg'>"
    }, {
        title: "Black Shirt",
        type: "shirt",
        price: 50.00,
        inStock: true,
        image: "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH08Q6JPuINUYHOB_E5MtUaiUV1NWzmVyVpQ&usqp=CAU'>"
    }, {
        title: "Red Shirt",
        type: "shirt",
        price: 25.00,
        inStock: true,
        image: "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS800SVgCW4lbf_yqmrYIV7c3fibq11hMHP4A&usqp=CAU'>",
    }, {
        title: "Green Belt",
        type: "belt",
        price: 12.00,
        inStock: true,
        image: "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExWcVu4tRR9xt6TG4duNBxqkgQrOXhsh75A&usqp=CAU'>"
    }, {
        title: "Blue Belt",
        type: "belt",
        price: 10.00,
        inStock: true,
        image: "<img src='https://media1.thenines.fr/26031-thickbox_default/reversible-navy-blue-belt-in-leather-and-nubuck-clint.jpg'>"
    }, {
        title: "Grills",
        type: "bling",
        price: 500.00,
        inStock: true,
        image: "<img src='data:image/jpeg;base64,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'>"
    }, {
        title: "Teal Pants",
        type: "pants",
        price: 74.00,
        inStock: true,
        image: "<img src='yellowshirt.jpg'>"
    }, {
        title: "Fur Pants",
        type: "pants",
        price: 80.00,
        inStock: true,
        image: "<img src='yellowshirt.jpg'>"
    }, {
        title: "Black Shoes",
        type: "shoes",
        price: 75.00,
        inStock: true,
        image: "<img src='yellowshirt.jpg'>"
    }, {
        title: "Red Shoes",
        type: "shoes",
        price: 75.00,
        inStock: true,
        image: "<img src='yellowshirt.jpg'>"
    }, {
        title: "White Shoes",
        type: "shoes",
        price: 100.00,
        inStock: true,
        image: "<img src='yellowshirt.jpg'>"
    },
    {

        title: "Necklace",
        type: "bling",
        price: 100.00,
        inStock: true,
        image: " <img src = 'stockpic.jpg' > "
    }
]

// finding the min and max prices
let minPrice = Number.POSITIVE_INFINITY;
let maxPrice = Number.NEGATIVE_INFINITY;
let price;

for (let item = products.length - 1; item >= 0; item--) {
    price = products[item].price;
    if (price < minPrice) minPrice = price;
    if (price > maxPrice) maxPrice = price;
}
console.log("Min: " + minPrice, "Max: " + maxPrice);

//----------------------------------------------------------------



/*let priceArray = []
for (item in products) {
    let price = products[item].price;
    priceArrays.push(price);
    console.log(price);
}*/
// let lowestPrice;
//arrays are pointed at by reference 

//need to grab index of both boxes and product.

function fillBoxes() { //using the product index to put in the corresponding box
    for (let i = 0; i < products.length; i++) {

        let title = products[i].title;
        // console.log(title);
        let price = products[i].price;
        // console.log(price);
        let type = products[i].type;
        // console.log(type);
        let image = products[i].image;

        let productInfo = title + " $" + price + " " /*+ type*/ + image
        console.log(productInfo);

        boxes[i].innerHTML = productInfo
        //get productInfo into the box
    }
}
fillBoxes();

//     i.innerHTML = /* info.outerHTML +*/ productInfo;
let inputAmount = 0;
let createCartbutton = document.getElementById("createCart");

createCartbutton.addEventListener("click", function howMuchMoney(inputAmount) {
    //clear cart
    clearCart();
    let walletCheck = prompt("How much?");

    if (!isNaN(walletCheck) && walletCheck >= minPrice) {


        inputAmount = walletCheck;
        //setting the money
        shoppingCart.money = inputAmount;
        console.log("input: " + walletCheck);

        let remainingAmount = walletCheck;
        let itemChoices = products.slice();
        console.log(itemChoices);

        //running loop to select item while there is still enough money to purchase an item
        //12 is the lowest priced item that we can buy
        while (remainingAmount >= minPrice && itemChoices.length > 0) {
            //declaring random number btw 0 and array length (products)
            let randomNum = Math.floor(Math.random() * itemChoices.length);
            let item = itemChoices[randomNum];
            console.log(randomNum + " " + item.title);

            if (remainingAmount >= item.price) {
                remainingAmount -= item.price;
                console.log("amount left: " + remainingAmount);


                //updating cart total
                shoppingCart.cartTotal += item.price;
                //updating shopping cart
                shoppingCart.change = remainingAmount;
                shoppingCart.items.push(item);
                shoppingCart.updateCart();


                //duplicates?: no
                if (item.price > minPrice || item.price < 501) {

                    itemChoices.splice(randomNum, 1);

                }
                //logging avail choices
                console.log(itemChoices);



            } else {
                //removing item from choices because too expensive
                itemChoices.splice(randomNum, 1);
                console.log(randomNum + "not enough money, skipped");
            }

        }
        // alert(shoppingCart.printCart() + remainingAmount + " currency left");






        //get the object
        // for (let i = 0; i < products[i])

        //     products[i]
        //need running total


        //need to check price


    } else {
        alert("Please try again with a number")
    }


})

console.log(inputAmount)