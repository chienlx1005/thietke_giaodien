
// script  select item
var search__icon = document.getElementById("search__icon");
var search__input = document.getElementById("search");
var back__icon = document.getElementById("back__icon");

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document)
const app = {
    handleProduct: function(){
        // 
      
        
        
        // back to home
        var logo__title = document.getElementById("logo__title");
        function backToHome(){
            window.location.href = '/index.html';
        }
        logo__title.addEventListener('click',backToHome);
        
        // add to cart 
        
        var addCart = document.getElementById("add__to__cart");
        
        addCart.addEventListener("click",function (){
            window.location.href = '/cart.html'
        })
        
        // user control
        var user = document.getElementById("user");
        var logout =document.getElementById("logout");
        var userinfo = document.getElementById("user__info");
        
        
        function user_control(){
            alert("Chức năng chưa hoàn thiện!");
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


        // chonj màu
        let chooseColor = $$('.size__color');
        let mauSac = $('#mausac')
        let mau = ['Xanh nước biển', 'Xanh rêu','Tím mộng mơ']
        // console.log(chooseColor)
        chooseColor.forEach((chose,index) => {
            chose.onclick = function(){
                $('.size__color.active_color').classList.remove('active_color');
                this.classList.add('active_color')
                mauSac.innerText = mau[index]

            }
        })

        // xu ly chon size 
        let chooseSize  = $$('.select__size');
        let chonSize = $('#size_luachon')
        let size_chon = [29,30,31,32]
        chooseSize.forEach((chose,index) => {
            chose.onclick = function(){
                $('.select__size.active_size').classList.remove('active_size');
                this.classList.add('active_size')
                chonSize.innerText = size_chon[index]
            }
        })
        // console.log(chonSize)

        // item_img_show

        let item_img = $$('.item__img__show')
        let item_img_show = $$('.img__show')
        console.log(item_img)
        // console.log(item_img_show)
        item_img_show.forEach( (chose,index) => {
            chose.onclick = function(){
                $('.item__img__show.item__img__show--on').classList.remove('item__img__show--on')
                $('.img__show.img--click').classList.remove('img--click')
                this.classList.add('img--click')
                item_img[index].classList.add('item__img__show--on')
            }
        })
        
    },
    start: function(){
        this.handleProduct()
    }
}
app.start()
