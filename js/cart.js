// user _ control
var user = document.getElementById("user");
var logout =document.getElementById("logout");
var userinfo = document.getElementById("user__info");

function user_control(){
    alert("Không có gì đâu mà ấn ^^");
}
function userLogout(){
    window.location.href = '/login.html';
}
user.addEventListener('click',user_control);
logout.addEventListener('click',userLogout);
userinfo.addEventListener('click',function(){
    window.location.href = '/userInfo.html';
})

//cart control
var cart = document.getElementById("cart");
function cartControl(){
    window.location.href = '/cart.html'
}
cart.addEventListener('click',cartControl);

// back to home
var logo__title = document.getElementById("logo__title");
function backToHome(){
    window.location.href = '/index.html';
}
logo__title.addEventListener('click',backToHome);


// choose cart 
var cartform = document.getElementsByClassName("cart-form");
var check_radio = document.getElementsByName("price");
var check_cart = document.getElementsByClassName("check-cart");

// function checkRadio(){
//     for (let i = 0; i < check_radio.length; i++) {
//         check_radio[i].addEventListener('click',function(){
//                 cartform[i].classList.add("cart-form-check");
//                 console.log(check_radio[i].value);
//         })
        
//     }
// }
// checkRadio()
// su kien nhap ma giam gia
// var sale =document.getElementById("apply-sale");
// var salecode = document.getElementsByClassName("salecode");

// function typecode(){
//     salecode.addEventListener('keyup',function(){
//         sale.style.cursor = "pointer";
//         sale.style.backgroundColor = "#000";
//         sale.style.color = "#fff";
//     })
// }
// typecode()
// search__icon:hover
var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

const app = {
    handleCart: function(){

        // back to home
        var logo__title = document.getElementById("logo__title");
        function backToHome(){
            window.location.href = '/index.html';
        }
        logo__title.addEventListener('click',backToHome);

        // chon hinh thuc thanh toan
        let choseRad = $$('.check-cart')
        let cartForm = $$('.cart-form')

        cartForm.forEach( (cart, index) => {
            cart.onclick = function(){
                $('.cart-form.cart-form-check').classList.remove('cart-form-check')
                this.classList.add('cart-form-check')

            }
        })
        console.log(cartForm)

        // xu ly so luong
        let soluong = $('#soluong')
        let tru = $('#giamxuong')
        let cong = $('#tanglen')
        let count = 1;
        tru.onclick = function(){
            if(count != 0){
                count --;
                soluong.innerText = count;
            }else{
                
            }
        }
        cong.onclick = function(){
            count++;
            soluong.innerText = count;
        }
        // sale code
        let saleCode = $('#salecode')
        let btnSale = $('.apply-sale')
        
        // console.log(btnSale)
        console.log(saleCode)
        // if(saleCode.value == null){
        //     btnSale.classList.remove('apply-sale_active')
        // }else{
            
        //     btnSale.classList.add('apply-sale_active')
            
        // }
        saleCode.onchange = function(){
            btnSale.classList.add('apply-sale_active')
        }


        // xu ly thanh toan
        let thanhToan = $('.checkout-btn')
        console.log(thanhToan)
        thanhToan.onclick = function(){
            alert("Chức năng này cần có backend để xử lý dữ liệu!");
        }

    },
    start: function(){
        this.handleCart()
    }
}
app.start()