window.onload = function() {
  
    function setCurrentSlide(ele,index){
      $(".swiper1 .swiper-slide").removeClass("selected");
      ele.addClass("selected");
      //swiper1.initialSlide=index;
    }
    
    var swiper1 = new Swiper('.swiper1', {
          slidesPerView: 5,
          paginationClickable: true,
          spaceBetween: 10,
          freeMode: true,
          loop: false,
          onTab:function(swiper){
            var n = swiper1.clickedIndex;
            alert(1);
          }
      });
    swiper1.slides.each(function(index,val){
      var ele=$(this);
      ele.on("click",function(){
        setCurrentSlide(ele,index);
        swiper2.slideTo(index, 500, false);
        //mySwiper.initialSlide=index;
      });
    });
    
    
  var swiper2 = new Swiper ('.swiper2', {
      direction: 'horizontal',
    // effect: 'fade',
      loop: false,
      autoHeight: true,
      onSlideChangeEnd: function(swiper){
        var n=swiper.activeIndex;
        setCurrentSlide($(".swiper1 .swiper-slide").eq(n),n);
        swiper1.slideTo(n, 500, false);
      }
    });
  //mySwiper.params.control = swiper;//需要在Swiper2初始化后，Swiper1控制Swiper2
  //swiper.params.control = mySwiper;//需要在Swiper1初始化后，Swiper2控制Swiper1

    
    
  }