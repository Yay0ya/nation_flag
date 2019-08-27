// 源代码中需要以320px宽、500px高为标准进行设置
scaleW=window.innerWidth/320;
scaleH=window.innerHeight/500;

var resizes = document.querySelectorAll('.resize');

for (var j=0; j<resizes.length; j++) {
  // console.log(resizes[j].style)
  // console.log('width:', resizes[j].style.width);
  resizes[j].style.width=parseInt(resizes[j].style.width)*scaleW+'px';
  // console.log('resize width:', resizes[j].style.width);
  // console.log('height:', resizes[j].style.height);
  resizes[j].style.height=parseInt(resizes[j].style.height)*scaleH+'px';
  // console.log('resize height:', resizes[j].style.height);
  resizes[j].style.top=parseInt(resizes[j].style.top)*scaleH+'px';
  resizes[j].style.left=parseInt(resizes[j].style.left)*scaleW+'px';
  resizes[j].style.bottom=parseInt(resizes[j].style.bottom)*scaleH+'px';
  resizes[j].style.right=parseInt(resizes[j].style.right)*scaleW+'px';

  resizes[j].style.fontSize=parseInt(resizes[j].style.fontSize)*scaleW+'px';
  resizes[j].style.lineHeight=parseInt(resizes[j].style.lineHeight)*scaleH+'px';
}

// 初始化Swiper
var mySwiper = new Swiper ('.swiper-container', {
  direction : 'vertical',
  pagination: '.swiper-pagination',
  mousewheelControl : true,
  onInit(swiper) {
    // 隐藏动画元素 
    swiperAnimateCache(swiper);
    // 初始化完成开始动画
    swiperAnimate(swiper);
  },
  onSlideChangeEnd(swiper) {
    // 每个slide切换结束时也运行当前slide动画
    swiperAnimate(swiper);
    // console.log(swiper);
    console.log(swiper.activeIndex);
  },
  onTransitionEnd(swiper) {
    swiperAnimate(swiper);
  },
  watchSlidesProgress: true,
  onProgress(swiper) {
    for (var i = 0; i < swiper.slides.length; i++) {
      var slide = swiper.slides[i];
      var progress = slide.progress;
      var translate = progress*swiper.height/4;  
      scale = 1 - Math.min(Math.abs(progress * 0.5), 1);
      var opacity = 1 - Math.min(Math.abs(progress/2),0.5);
      slide.style.opacity = opacity;
      es = slide.style;
      es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,'+translate+'px,-'+translate+'px) scaleY(' + scale + ')';
    }
  },
  onSetTransition(swiper, speed) {
    for (var i = 0; i < swiper.slides.length; i++) {
      es = swiper.slides[i].style;
      es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
    }
  }
})

$("body").on("touchstart", function(e) {
  e.preventDefault();
  var startX = e.originalEvent.changedTouches[0].pageX;
  var startY = e.originalEvent.changedTouches[0].pageY;
});

$("body").on("touchmove", function(e) {
  e.preventDefault();
  let moveEndX = e.originalEvent.changedTouches[0].pageX;
  let moveEndY = e.originalEvent.changedTouches[0].pageY;
  let X = moveEndX - startX;
  let Y = moveEndY - startY;
    
  if ( X > 0 ) {
    console.log("left 2 right");
  }
  else if ( X < 0 ) {
    console.log("right 2 left");
  }
  else if ( Y > 0) {
    console.log("top 2 bottom");
  }
  else if ( Y < 0 ) {
    console.log("bottom 2 top");
  }
  else{
    console.log("just touch");
  }
})