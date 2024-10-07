
function showProductForm() {
    document.getElementById('productForm').style.display = 'block';  
}
class Product{
    constructor(id,image,title,quatity,price)
    {   this.id=id
       this.image=image
       this.title=title
       this.like=false;
       this.quantity=quantity
       this.price=price
 }
 updateQuantity(newQuantity){
     this.quantity=newQuantity
 }
 calculateTotalPrice(){
     return this.quantity*this.price;
 }
 
}
function addCustomProduct() {
     let name=document.getElementById('productName').value
     let price=document.getElementById('productPrice').value
     let quantity = document.getElementById('productQuantity').value
     let image = document.getElementById('productImage').value

     const product=new Product(name,image,parseInt(quantity),parseFloat(price))
      
    categories.push(product)


}


let categories =[];
let logos =[];
console.log(logos);
function addQuantity(id) {
    let found = categories.findIndex(obj => obj.id === id);
    categories[found].quantity++;
    displaycart();
}
function removeQuantity(id) {
    let found = categories.findIndex(obj => obj.id === id);
    categories[found].quantity = Math.max(0, categories[found].quantity - 1);
    displaycart();
}


function change(id) {
    console.log(id);
    let found = categories.findIndex(obj => obj.id === id);
    categories[found].like = !categories[found].like;
    console.log(categories[found]);
    displaycart();
}

function delElement(a) {
    const element = categories.find((element) => element.id == a);
    categories.splice(categories.indexOf(element), 1);

    console.log(element.image);
    logos.splice(logos.indexOf(element.image), 1, "");
    console.log(logos);
    displaycart();
}

function checkoutFunction() {
    alert(document.getElementById("totalA").innerText);
}

function displaycart() {
    let j = 0; total = 0;
    document.getElementById("itemA").innerHTML = categories.length + " Items";
    document.getElementById("itemB").innerHTML = categories.length + " Items";
    if (categories.length == 0) {

        document.getElementById("totalA").innerHTML = "0.0";
        document.getElementById("totalB").innerHTML = "0.0";
        document.getElementById("root").innerHTML = "EMPTY";
        document.getElementById("basket").innerHTML = `<img id="basket" class="img3" src="icons/shopping-basket.png" />`;

    } else {
        document.getElementById("basket").innerHTML =
            `<img id="basket" class="img3" src="icons/shopping-basket.png" />
                <img class="img4" src="${logos[0]}" />
                <img class="img5" src="${logos[1]}" />
                <img class="img6" src="${logos[2]}" />
                <img class="img7" src="${logos[3]}" />
                <img class="img8" src="${logos[4]}" />
                <img class="img9" src="${logos[5]}" />
                <img class="img10" src="${logos[6]}" />
                <img class="img11" src="${logos[7]}" />
                `;

        document.getElementById("root").innerHTML = categories.map((items) => {
            let { id, image, title, like, quantity, price } = items;
            price = price * quantity;
            total = total + price;
            document.getElementById("totalA").innerHTML = total + " DT";
            document.getElementById("totalB").innerHTML = total + " DT";

            return (
                `<tr>
                     <td style="display:none;">${id}</td>
                     <td style="width:10%;"><div class="img-box"><img class="img" src=${image}></div></td>
                     <td style="width:30%;"><p style='font-size:15px;'>${title}</p></td>
                     <td style="width:10%;"><img id="black-heart" class="heart" onclick="change(${id})" src=${(like) ? "icons/heart.png" : "icons/heart2.png"}></td>
                    
                     <td  style="width:5%;"><img style="width:25px;" id="plus" src="icons/plus1.png" onclick="addQuantity(${id})"/></td>
                     <td  style="width:20%;"><output style="font-size:15px;font-weight:bold;">${quantity}</output></td>
                     <td  style="width:5%;"><img style="width:25px;" id="minus" src="icons/minus1.png" onclick="removeQuantity(${id})"/></td>
                     
                     <td  style="width:20%;"><h2 style='font-size:15px;color:red;'>${price} DT</h2></td>
                     
                     <td  style="width:10%;"><img style="width:25px;" id="delete" src="icons/remove.png" onclick="delElement(${id})"/></td>
                </tr>`
            );

        }).join('');
    }
} displaycart();

function showProductForm() {
    document.getElementById('productForm').style.display = 'block';  // Show the form
}
function addCustomProduct() {
    // Get values from the form fields
    let name = document.getElementById('productName').value;
    let price = document.getElementById('productPrice').value;
    let quantity = document.getElementById('productQuantity').value;
    let image = document.getElementById('productImage').value || 'icons/default.png';  // Default image if none is provided
    
    // Validate form data (if any fields are empty, show an error)
    if (!name || !price || !quantity) {
        alert("Please fill out all fields.");
        return;
    }

    // Create a new product object
    const newProduct = {
        id: categories.length + 1,  // Auto-increment ID
        image: image,
        title: name,
        like: false,  // Default not liked
        quantity: parseInt(quantity),  // Convert to a number
        price: parseFloat(price)       // Convert to a number
    };

    // Add the new product to the categories array
    categories.push(newProduct);

    // Hide the form again
    document.getElementById('productForm').style.display = 'none';
    
    // Clear the form fields for the next use
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productQuantity').value = '1';
    document.getElementById('productImage').value = '';

    // Update the cart display
    displaycart();
}
