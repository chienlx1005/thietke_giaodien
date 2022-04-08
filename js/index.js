// search__icon:hover
var search__icon = document.getElementById("search__icon");
var search__input = document.getElementById("search");
var logo__title = document.getElementById("logo__title");
var user = document.getElementById("user");
var logout =document.getElementById("logout");
var userinfo = document.getElementById("user__info");
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
var slide = document.getElementsByClassName("mySlide")
var dot = document.getElementsByClassName("dot__slide");
var itemshirt = document.getElementsByClassName("item__shirt");


var slider = $('.slider')
var header = $('.header')


var outfitParent = $('.outfit_parent')
const outlet1 = $('#outlet1')
const outlet2 = $('#outlet2')

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
        }
    ]
    ,
    thoitrangs:[
        {
            pic_1: '/assets/img/img/hang_ngay/ao1.jpeg',
            pic_2: '/assets/img/img/hang_ngay/ao1_1.jpg',
            title: 'Áo Pôt nam Cafe - Khử mùi hiệu quả',
            price: 300000,
            sale: 20
        },
        {
            pic_1: '/assets/img/img/hang_ngay/ao2_2.jpg',
            pic_2: '/assets/img/img/hang_ngay/ao2.jpeg',
            title: 'Quần Jeans Basic Slim V2',
            price: 450000,
            sale: 10
        },
        {
            pic_1: '/assets/img/img/hang_ngay/ao3.png',
            pic_2: '/assets/img/img/hang_ngay/ao3_3.jpg',
            title: 'Quần nam Daily Pants - sợi Sorona, nhuộm Cleandye',
            price: 600000,
            sale: 20
        },
        {
            pic_1: '/assets/img/img/hang_ngay/ao4.jpg',
            pic_2: '/assets/img/img/hang_ngay/ao4.jpg',
            title: 'Áo sơ mi nam dài tay Café-DriS khử mùi hiệu quả',
            price: 500000,
            sale: 20
        },
        {
            pic_1: '/assets/img/img/hang_ngay/ao5.jpg',
            pic_2: '/assets/img/img/hang_ngay/ao5_5.jpg',
            title: 'Hoodie thời trang China hàng hiệu',
            price: 350000,
            sale: 10
        },
        {
            pic_1: '/assets/img/img/hang_ngay/ao6.jpg',
            pic_2: '/assets/img/img/hang_ngay/ao6_6.jpg',
            title: 'Áo kẻ sọc đen trắng',
            price: 200000,
            sale: 25
        },
        {
            pic_1: '/assets/img/img/hang_ngay/ao7.jpg',
            pic_2: '/assets/img/img/hang_ngay/ao7_7.jpg',
            title: 'Váy nữ',
            price: 700000,
            sale: 30
        },
        {
            pic_1: '/assets/img/img/hang_ngay/ao8.jpg',
            pic_2: '/assets/img/img/hang_ngay/ao8_8.jpg',
            title: 'Váy ngắn thời trang',
            price: 900000,
            sale: 10
        },
        {
            pic_1: '/assets/img/img/hang_ngay/ao1.jpeg',
            pic_2: '/assets/img/img/hang_ngay/ao1_1.jpg',
            title: 'Áo Pôt nam Cafe - Khử mùi hiệu quả',
            price: 300000,
            sale: 20
        },
        {
            pic_1: '/assets/img/img/hang_ngay/ao2_2.jpg',
            pic_2: '/assets/img/img/hang_ngay/ao2.jpeg',
            title: 'Quần Jeans Basic Slim V2',
            price: 450000,
            sale: 10
        },
        {
            pic_1: '/assets/img/img/hang_ngay/ao3.png',
            pic_2: '/assets/img/img/hang_ngay/ao3_3.jpg',
            title: 'Quần nam Daily Pants - sợi Sorona, nhuộm Cleandye',
            price: 600000,
            sale: 20
        },
        {
            pic_1: '/assets/img/img/hang_ngay/ao4.jpg',
            pic_2: '/assets/img/img/hang_ngay/ao4.jpg',
            title: 'Áo sơ mi nam dài tay Café-DriS khử mùi hiệu quả',
            price: 500000,
            sale: 20
        },
        {
            pic_1: '/assets/img/img/hang_ngay/ao5.jpg',
            pic_2: '/assets/img/img/hang_ngay/ao5_5.jpg',
            title: 'Hoodie thời trang China hàng hiệu',
            price: 350000,
            sale: 10
        },
        {
            pic_1: '/assets/img/img/hang_ngay/ao6.jpg',
            pic_2: '/assets/img/img/hang_ngay/ao6_6.jpg',
            title: 'Áo kẻ sọc đen trắng',
            price: 200000,
            sale: 25
        },
        {
            pic_1: '/assets/img/img/hang_ngay/ao7.jpg',
            pic_2: '/assets/img/img/hang_ngay/ao7_7.jpg',
            title: 'Váy nữ',
            price: 700000,
            sale: 30
        },
        // {
        //     pic_1: '/assets/img/img/hang_ngay/ao8.jpg',
        //     pic_2: '/assets/img/img/hang_ngay/ao8_8.jpg',
        //     title: 'Váy ngắn thời trang',
        //     price: 900000,
        //     sale: 0
        // },
    ]
    ,
    thoitrangsHoodie:[
        {
            pic_1: '/assets/img/img/hang_ngay/hodi1.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi1_1.jpg',
            title: 'Áo Hoodie in hình sau lưng',
            price: 800000,
            sale: 15
        },
        {
            pic_1: '/assets/img/img/hang_ngay/hodi2.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi2_2.jpg',
            title: 'Áo Hoodie in hình sau lưng nhưng ngầu hơn',
            price: 590000,
            sale: 10
        },
        {
            pic_1: '/assets/img/img/hang_ngay/hodi3.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi3_3.jpg',
            title: 'Bộ Akasuki làng lá 2 màu đen trắng',
            price: 680000,
            sale: 20
        },
        {
            pic_1: '/assets/img/img/hang_ngay/hodi4.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi4_4.jpg',
            title: 'Áo Hokage đệ tứ tỏa sáng',
            price: 999999,
            sale: 0
        },
        {
            pic_1: '/assets/img/img/hang_ngay/hodi5.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi5_5.jpg',
            title: 'Thời trang đường phố China hàng hiệu',
            price: 350000,
            sale: 10
        },
        {
            pic_1: '/assets/img/img/hang_ngay/hodi6.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi6_6.jpg',
            title: 'Quần ngắn kết hợp siêu đẹp',
            price: 400000,
            sale: 5
        },
        {
            pic_1: '/assets/img/img/hang_ngay/hodi7.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi7_7.jpeg',
            title: 'Cổ trang & Hiện đại',
            price: 700000,
            sale: 8
        },
        {
            pic_1: '/assets/img/img/hang_ngay/hodi8.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi8_8.jpg',
            title: 'Thể thao lành mạnh mà sang chảnh',
            price: 1200000,
            sale: 10
        },{
            pic_1: '/assets/img/img/hang_ngay/hodi1.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi1_1.jpg',
            title: 'Áo Hoodie in hình sau lưng',
            price: 800000,
            sale: 15
        },
        {
            pic_1: '/assets/img/img/hang_ngay/hodi2.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi2_2.jpg',
            title: 'Áo Hoodie in hình sau lưng nhưng ngầu hơn',
            price: 590000,
            sale: 10
        },
        {
            pic_1: '/assets/img/img/hang_ngay/hodi3.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi3_3.jpg',
            title: 'Bộ Akasuki làng lá 2 màu đen trắng',
            price: 680000,
            sale: 20
        },
        {
            pic_1: '/assets/img/img/hang_ngay/hodi4.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi4_4.jpg',
            title: 'Áo Hokage đệ tứ tỏa sáng',
            price: 999999,
            sale: 0
        },
        {
            pic_1: '/assets/img/img/hang_ngay/hodi5.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi5_5.jpg',
            title: 'Thời trang đường phố China hàng hiệu',
            price: 350000,
            sale: 10
        },
        {
            pic_1: '/assets/img/img/hang_ngay/hodi6.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi6_6.jpg',
            title: 'Quần ngắn kết hợp siêu đẹp',
            price: 400000,
            sale: 5
        },
        {
            pic_1: '/assets/img/img/hang_ngay/hodi7.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi7_7.jpeg',
            title: 'Cổ trang & Hiện đại',
            price: 700000,
            sale: 8
        },
        {
            pic_1: '/assets/img/img/hang_ngay/hodi8.jpg',
            pic_2: '/assets/img/img/hang_ngay/hodi8_8.jpg',
            title: 'Thể thao lành mạnh mà sang chảnh',
            price: 1200000,
            sale: 10
        },
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
        
        // console.log(headcroll)
        // auto hide header if you scroll down, 
        window.onscroll = function(){
            scrollHeader();
            imgShow()
            if(window.pageYOffset === 0){
                // header.style.backgroundColor = 'none';
                // console.log(header.offsetTop)
                $('.navbar').classList.remove('scroll-back')
            }
            
        }
        let last_scroll =0
        let scrollHeader = function(){
            let scroll_top = window.scrollY
            let head = $('.navbar')
            if(scroll_top < last_scroll){
                head.classList.remove('scroll-down')
                head.classList.add('scroll-up')
                head.classList.add('scroll-back')
                
                
                // console.log(header)
            }else{
                head.classList.add('scroll-down')
                head.classList.remove('scroll-up')
            }
            last_scroll = scroll_top
        }
        // show img if scroll down
        let imgShow = function(){
            let items = $$('.item')
            let outfitShows = $$('.outfit_content')
            items.forEach(item => {
                if(window.pageYOffset > (item.offsetTop - 900)){
                    item.classList.add('item_slideRight')
                }
            });
            outfitShows.forEach( outfitShow => {
                if(window.pageYOffset > (outfitShow.offsetTop + 1500)){
                    outfitShow.classList.add('outfit_slideShow')
                }
               
            })
        }

        
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
    renderOutlet: function(){
        const checkSale = function(x){
            if(x> 0){
                return true
            }
            else{
                return false
            }
        }
        const priceSale = function(price,sale){
            return (price -(price*sale) / 100)
        }
        // do mac hang ngay
        const htmls1 = this.thoitrangs.map((thoitrang,index) => {
            return `<div class="item">
            <div class="item__pic">
              <a href="/Product.html">
                <img
                  src="${thoitrang.pic_1}"
                  alt="áo nam"
                  class="item__shirt"
                />
                <img
                  src="${thoitrang.pic_2}"
                  alt="ao thun nam"
                  class="item__shirt1"
                />
              </a>

              <div class="item__size">
                <div class="item__sub">M</div>
                <div class="item__sub">L</div>
                <div class="item__sub">XL</div>
                <div class="item__sub">2XL</div>
              </div>
              <div class="item__sale">${checkSale(thoitrang.sale)? 'Sale':'New'}</div>
              
              
            </div>

            <div class="item__title">${thoitrang.title}</div>
            <div class="item__price">
              <span>${priceSale(thoitrang.price,thoitrang.sale)}</span>
              <del>${thoitrang.price}</del>
              <span>${thoitrang.sale}%</span>
            </div>
          </div>
            `           
        })
        outlet1.innerHTML = htmls1.join("")
        // do thoi trang
        const htmls2 = this.thoitrangsHoodie.map((thoitrang,index)=>{
            return `<div class="item">
            <div class="item__pic">
              <a href="/Product.html">
                <img
                  src="${thoitrang.pic_1}"
                  alt="áo nam"
                  class="item__shirt"
                />
                <img
                  src="${thoitrang.pic_2}"
                  alt="ao thun nam"
                  class="item__shirt1"
                />
              </a>

              <div class="item__size">
                <div class="item__sub">M</div>
                <div class="item__sub">L</div>
                <div class="item__sub">XL</div>
                <div class="item__sub">2XL</div>
              </div>
              <div class="item__sale">${checkSale(thoitrang.sale)? 'Sale':'New'}</div>
            
              
            </div>

            <div class="item__title">${thoitrang.title}</div>
            <div class="item__price">
              <span>${priceSale(thoitrang.price,thoitrang.sale)}</span>
              <del>${thoitrang.price}</del>
              <span>${thoitrang.sale}%</span>
            </div>
          </div>
        `   
        })
        outlet2.innerHTML = htmls2.join("");
    }
    ,
    start: function(){
        this.handleHome()
        this.renderOutfit()
        this.renderOutlet()
    }
    
}
app.start()

