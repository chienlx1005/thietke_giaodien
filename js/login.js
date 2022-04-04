    var $ = document.querySelector.bind(document);
    var $$ = document.querySelectorAll.bind(document);
    
    var over = document.getElementById("overlay");
    var mo = document.getElementById("modal");
    var btnReg = document.getElementById("btn__reg");
    var closeS = document.getElementById("close");
    var btnLogin = document.getElementById("btn__login");

    var tk = $('#email').value;
    var mk = $('#pass').value;
    console.log(tk,mk)

const app = {
    
    handleEvent: function(){
        // show modal dang ky
        function showModal (){
            over.classList.add("overlay--on")
            mo.classList.add("modal--on");
        }
    
        // remove modal
        function removeModal(){
            over.classList.remove("overlay--on");
            mo.classList.remove("modal--on");
        }
        // redirect qua home neu login success
        function redirectHome(){
            window.location.href = '/home.html'
        }

        btnReg.addEventListener('click',showModal)
        closeS.addEventListener('click', removeModal)
    
        // check data 
    
        // btnLogin.addEventListener('click',redirectHome);
    },
    start: function(){
        // xu ly su kien
        this.handleEvent()
    }
}
app.start();