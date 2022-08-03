let cart_btn = document.getElementsByClassName('cart-btn')
let main_container = document.getElementsByTagName('tbody')[0]
// let quantity = document.getElementById('quantity_feild').value;
// let quantityFields = document.getElementsById('quantity-feild').value
let quantity = document.getElementById('quantity-feild')


?

let close = document.getElementById('close_btn').addEventListener('click', displayclose)
function displayclose(){
    document.querySelector('.all').style.display='none';
}
console.log(display);

for(let i=0 ; i < cart_btn.length; i++){
    cart_btn[i].addEventListener('click',addTocart)
}

function addTocart(event){
    btn = event.target
    let bookName = document.getElementById('Bookname').innerText
    let bookImage = document.getElementById('bookimage').src
    let bookPrice = document.getElementById('bookprice').innerText
    

    let itemContainer = document.createElement('tr')
    itemContainer.innerHTML=`
    <tr>
        <td><i class="fa-solid fa-xmark"></i></td>
        <td><img src="${bookImage}" height="110" alt=""></td>
        <td><h4>${bookName}</h3></td>
        <td><label id="price_feild">${bookPrice}</label></td>
        <td><input id="quantity-feild" type="number" value="1"></td>
        <td><label id="total_feild">${bookPrice}</label></td>
    </tr>
    `;
     main_container.append(itemContainer)
     alert(bookName + "  added to cart")
     
    //  for(let i = 0; i < quantity.length; i++){
    //     // quantity[i].value = 1
    //      quantity[i].addEventListener('change', updateTotal)
                 
    //  }
    // let display = document.getElementById('tbody')
    // console.log(display)


    // updateTotal();
    grandTotal();
    // showtotal()

}





// function totalCost(event){
//     quantity = event.target
//     let quantity = document.getElementById('quantity-feild').value
//     let price = document.getElementById('price_feild').innerText
//     let total = document.getElementById('total_feild').innerText
//     let price_feild = price.children[0].innerText.replace('$', '')
//     let total_feild = "$" + quantity * price_feild
//     total = total_feild.value

//     console.log(total)
    
    

// }

// for(let i = 0; i < quantity.length; i++){
//     // quantity[i].value = 1
//      quantity[i].addEventListener('change', updateTotal)
             
//  }


// function updateTotal(){
//     let total = 0
//     let total_feild = document.getElementById('total_feild')[0]
//     let quantity = document.getElementById('quantity-feild').value
//     let price = document.getElementById('price_feild').innerText
//     for(let i = 0 ; i < quantity.length; i++){
//         // quantity[i].addEventListener('change' )
//         // price_content = number(price.innerText.replace('$', ''))
//         total = quantity * price
//     }
//     total = quantity * price
//     total_feild = '$' + total
    

//     console.log(total)

// }

function showTotals(){
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');

    items.forEach(function(item){
        total.push(parseFloat(item.textContent));

    })

    // console.log(total)
    const totalMoney = total.reduce(function(total,item){
    total += item;
    
        return total;
    },0);
    const finalMoney = totalMoney.toFixed(2);
    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length;

    console.log(finalMoney)
}


function showtotal(){
    const total =[];
    const item = document.querySelectorAll('.total_feild');

    item.forEach(function(item){
        total.push(item);
    })

    document.getElementsByClassName('all-total').textContent = total;

    console.log(total)

}




function grandTotal(){
    let total = 0;
    let grand_total = document.getElementsByClassName('all-total')
    let total_price = document.getElementById('total_feild')
    // for(let i =0 ; total_price.length ; i++){
    //     total_price_content = number(total_price[i].innerText.replace('$', ''))
    //     total += total_price_content
    // }
    // total_price.forEach(function(total){
    //      total_price.push(total);
    // })
    // let toootal = grand_total.innerText = total_price.innerText;

    // total_price.innerText =  grand_total.innerText;

    console.log(grand_total)

    


    // grand_total.children[0].innerText = '$' + total

    // console.log(total)
}
