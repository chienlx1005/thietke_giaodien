// search__icon:hover
var search__icon = document.getElementById("search__icon");
var search__input = document.getElementById("search");
var logo__title = document.getElementById("logo__title");
var user = document.getElementById("user");
var logout =document.getElementById("logout");
var userinfo = document.getElementById("user__info");


var app = {
    handleHome: function(){
        // show checksearchbox
        function showSearchBox (){
            alert("chưa có backend! Không thể tìm ")
        }
        search__icon.addEventListener('click',showSearchBox);
        // hide searchbox
        function hideSearchBox (){
            search__input.style.display = 'none';
        }
        // back to home
    
        function backToHome(){
            window.location.href = '/index.html';
        }
        logo__title.addEventListener('click',backToHome);

        var myIndex = 0;
       
            // slide + autodot
        autoSlide()
        function autoSlide (){
            var i;
            var slide = document.getElementsByClassName("mySlide")
            var dot = document.getElementsByClassName("dot__slide");
            var itemshirt = document.getElementsByClassName("item__shirt");
            for(i = 0 ; i < slide.length ; i++){
                slide[i].style.display = 'none';
                dot[i].classList.add("dots");
            }
            myIndex++;
            if(myIndex > slide.length){
                myIndex = 1; 
            }
            slide[myIndex-1].style.display = 'block';
            dot[myIndex-1].classList.remove("dots");
            setTimeout(autoSlide,2000)
        }
        // auto slide 
        

        // user _ control
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

        // btn tim hieu them
        var btnContact = document.getElementById("btn__aboutme");
        function contact(){
            window.location.href = 'https://www.facebook.com/xinchaobannho';
        }
        btnContact.addEventListener('click',contact);
        
        // redirect 
        var itemTitle = document.getElementsByClassName("item__title");
        
        function redirectContainer(){
            for(var i = 0; i< itemTitle.length ; i++){
                itemTitle[i].addEventListener('click',function(){
                    window.location.href =  'Product.html';
                })
            }
        }
        redirectContainer()
    },
    start: function(){
        this.handleHome()
    }
    
}
app.start()

