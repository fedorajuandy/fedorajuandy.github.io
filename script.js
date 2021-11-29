$(document).ready(function(){
    $(window).scroll(function(){
        // navigator bar on top stays there when scrolled
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button to show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // remove smooth scroll on slide-up when button clicked
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // activate smooth scroll on menu items clicked
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text
    var typed = new Typed(".typing", {
        strings: ["Student", "Software Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed1 = new Typed(".typing-1", {
        strings: ["Student", "Software Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});