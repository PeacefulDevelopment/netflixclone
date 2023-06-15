/*SSS Function*/
window.addEventListener("DOMContentLoaded", ()=>{
    var liItem = document.querySelectorAll("main .sss .container ul li");
    var liKapat = document.querySelectorAll("main .sss .container ul li h3 i");
    for(var i = 0; i<liItem.length; i++){
        liItem[i].addEventListener("click", function(){
            this.classList.toggle("active");
            if(this.classList[0]=="active"){
                gsap.to(this, {height:"auto", duration:.5});
                gsap.to(liKapat[i], {rotate:45+"deg", duration:.5});
            }else{
                gsap.to(this, {height:100+"px", duration:.5});
                gsap.to(liKapat[i], {rotate:0+"deg", duration:.5});
            }
        });
    }
});

/*Film Slider*/
window.addEventListener("DOMContentLoaded", ()=>{
    var leftBtn = document.querySelector(".filmler .sliders .wrapper .navigation .fa-angle-left");
    var rightBtn = document.querySelector(".filmler .sliders .wrapper .navigation .fa-angle-right");
    var slider = document.querySelector(".filmler .sliders .wrapper .slider");
    let sliderItem = document.querySelectorAll(".filmler .sliders .wrapper .slider .slider-item");
    var width = sliderItem[0].offsetWidth;
    var current = 0;
    var itemCount = sliderItem.length;
    var index = 0;

    rightBtn.addEventListener("click", function(){
        console.log(current);
        if(index<=itemCount-6){
            index++;
            current = current + width;
            gsap.to(slider, {x:-current, duration:1})
        }
    });
    leftBtn.addEventListener("click", function(){
        console.log(current, index);
        if(index>0){
            index--;
            current = current - width;
            gsap.to(slider, {x:-current, duration:1})
        }
    });
});

/*Baslik Hover Effect*/
window.addEventListener("DOMContentLoaded", ()=>{
    var baslik = document.querySelector(".filmler h2");
    var gosterilecek = document.querySelector(".filmler h2 span");
    var gosterilecekI = document.querySelector(".filmler h2 i");

    baslik.addEventListener("mouseenter", function(){
        gsap.from(gosterilecek, {x:-100+"px", duration:.5});
        gsap.from(gosterilecekI, {x:-100+"px", duration:1});
        gsap.to(gosterilecek, {opacity:1, duration:.3});
        gsap.to(gosterilecekI, {opacity:1, duration:.3});
    });
    baslik.addEventListener("mouseout", function(){
        gsap.to(gosterilecek, {opacity:0, duration:.3});
        gsap.to(gosterilecekI, {opacity:0, duration:.3});
    });
});