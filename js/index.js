// search__icon:hover
var search__icon = document.getElementById("search__icon");
var search__input = document.getElementById("search");
var logo__title = document.getElementById("logo__title");
var user = document.getElementById("user");
var logout =document.getElementById("logout");
var userinfo = document.getElementById("user__info");
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var outfitParent = $('.outfit_parent')

var app = {
    outfits: [
        {
            description: 'Chân ngắn đi biển mặc gì? Chọn ngay quần short jean',
            dess: 'Kết hợp với bikini: những chiếc quần short jean mix cùng áo bikini hay bikini liền đều mang đến cho nàng một vẻ đẹp năng động nhưng vẫn vô cùng gợi cảm. Đặc biệt với những cô nàng chân ngắn, short jean như vị “cứu tinh” hack chân cực dài.',
            image: '/assets/img/outfit/outfit1.jpg'
        },
        {
            description:'Đi biển mặc váy gì?',
            dess: 'Váy trễ vai: với những cô nàng mi nhon thì váy trễ vai sẽ làm toát lên mọi ưu điểm trên cơ thể. Tuy nhiên, mẫu váy này nếu biết cách chọn kiểu dáng thì vẫn hoàn toàn phù hợp với nàng nào hơi mũm mĩm, có vai thô đó nhé. Chỉ cần chọn những màu sắc hoặc hoạ tiết phù hợp với da đảm bảo bạn sẽ thật lung linh trên bãi biển nắng vàng.',
            image: '/assets/img/outfit/outfit2.jpg'
        },
        {
            description:'Đi biển mặc gì cho chất? Cách phối đồ đi biển với bikini',
            dess: 'Bikini + áo ren lưới: áo ren lưới thoáng mát và gợi cảm, mix cùng bikini khiến cho bạn quyến rũ và nổi bật hơn. Sự kết hợp này từng là hot trend một thời và đến bây giờ chúng vẫn luôn được ưa chuộng.',
            image: '/assets/img/outfit/outfit3.jpg'
        },
        {
            description:'Đi biển mặc gì? Váy midi dáng xòe',
            dess: 'Thêm một gợi ý cho các bạn có thân hình mũm mĩm đó là váy midi dáng xòe. Những chiếc váy midi không chỉ “hack” dáng mà còn che những khuyết điểm phần mông và chân rất tốt. Nhưng bạn đừng quên chọn một chiếc váy trơn từ trên xuống dưới, tạo cảm giác thân hình dài và gọn. Đặc biệt, bạn không nên chọn váy midi họa tiết hay thiết kế quá cầu kỳ.',
            image: '/assets/img/outfit/outfit4.jpg'
        },
        {
            description:'Áo phông và chân váy xếp ly',
            dess: 'Áo phông mix với chân váy xếp ly không hề đơn điệu nếu nàng biết chọn chất liệu để mặc đi biển nhé. Một chiếc áo phông mềm mại cùng chân váy xếp ly dài chất voan sẽ là một set đồ hoàn hảo.',
            image: '/assets/img/outfit/outfit5.jpg'
        }
    ]
    ,
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
            alert('Liên hệ 035.030.xxx để được hỗ trợ!\n Xin cảm ơn');
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

        // control mac hang ngay
        let line = $('.dash')
        let panes = $$('.home__tab')
        let tabs = $$('.item__tab')

        tabs.forEach( (tab,index) => {
            const pane = panes[index]

            tab.onclick = function(){
                $('.item__tab.item_active').classList.remove('item_active')
                $('.home__tab.home__tab_active').classList.remove('home__tab_active')

                this.classList.add('item_active')
                pane.classList.add('home__tab_active')

                line.style.left = tab.offsetLeft + 'px'
                line.style.width = tab.offsetWidth + 'px'
            }
        })

        // scroll head
        let headcroll = $('.header')
        console.log(headcroll)
        
    },
    renderOutfit: function(){
        const check = function(x){
            if(x%2 === 0){
                return true
            }
            return false
        }
        const htmls = this.outfits.map( (outfit,index) => {
            return `<div class="outfit_content ${check(index)? '':'outfit_content_reverse'}">
            <div class="description">
              <span>${outfit.description}</span>
              <ul>
                <li>    
                ${outfit.dess}
                <a href="/Product.html">Xem thêm...</a>
                </li>
              </ul>
              
            </div>
            <a href="/Product.html"><img src="${outfit.image}" alt="outfitmuahe" /></a>
            
          </div>`
        })
        outfitParent.innerHTML = htmls.join("");
    },
    start: function(){
        this.handleHome()
        this.renderOutfit()
    }
    
}
app.start()

