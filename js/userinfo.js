
var user = document.getElementById("user");
var logout =document.getElementById("logout");
var userinfo = document.getElementById("user__info");
var cart = document.getElementById("cart");
var logo__title = document.getElementById("logo__title");
var btnupdate = document.getElementById("btn__update");
const app = {
    handleUser: function(){
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
       
        function cartControl(){
            window.location.href = '/cart.html'
        }
        cart.addEventListener('click',cartControl);

        // back to home
        
        function backToHome(){
            window.location.href = '/index.html';
        }
        logo__title.addEventListener('click',backToHome);

        // su kien thay doi thogn tin
        
        btnupdate.addEventListener('click',function(){
            alert("Bạn đã ấn vào nút đổi thông tin !")
        })

    },
    start: function(){
        this.handleUser()
    }
}
app.start()


