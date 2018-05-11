$(document).ready(function() {
     $('#gallery').modal({});

var images =  [
                {
                    link: "./images/facility/01.jpg"
                },
                {
                    link: "./images/facility/02.jpg"
                },
                {
                    link: "./images/facility/03.jpg"
                },
                {
                    link: "./images/facility/04.jpg"
                },
                {
                    link: "./images/facility/05.jpg"
                },
                {
                    link: "./images/facility/06.jpg"
                },
                {
                    link: "./images/facility/07.jpg"
                },
                {
                    link: "./images/facility/08.jpg"
                },
                {
                    link: "./images/facility/09.jpg"
                },
                {
                    link: "./images/facility/10.jpg"
                },
                {
                    link: "./images/facility/11.jpg"
                },
                {
                    link: "./images/facility/12.jpg"
                },
                {
                    link: "./images/facility/13.jpg"
                },
                {
                    link: "./images/facility/14.jpg"
                },
                {
                    link: "./images/facility/15.jpg"
                },
                {
                    link: "./images/facility/16.jpg"
                },
                {
                    link: "./images/facility/17.jpg"
                },
                {
                    link: "./images/facility/18.jpg"
                },
                {
                    link: "./images/facility/19.jpg"
                },
                {
                    link: "./images/facility/20.jpg"
                },
                {
                    link: "./images/facility/21.jpg"
                },
                {
                    link: "./images/facility/22.jpg"
                },
                {
                    link: "./images/facility/23.jpg"
                },
                {
                    link: "./images/facility/24.jpg"
                },
                 {
                    link: "./images/facility/25.jpg"
                },
                 {
                    link: "./images/facility/26.jpg"
                },
               {
                    link: "./images/facility/27.jpg"
                },
                 {
                    link: "./images/facility/28.jpg"
                },
                 {
                    link: "./images/facility/29.jpg"
                }
                ]
            
    
        
  function carouselInit() {
        console.log("Car Init")
         $('.carousel.carousel-slider').carousel({fullWidth: true});
    }
 
    var int;
    var carousel_interval = 3500;
    function autoPlay(){
        int = setInterval(function()
        { 
            $('.carousel').carousel('next');
        }, carousel_interval);
    }
    
    function pause(){
    clearInterval(int);
    }
    
    
function getPics(pics) {
    $('#carouselDiv').empty()
    let carousel = $("<div class='carousel carousel-slider'>");
    $("#carouselDiv").append(carousel);
    pics.forEach(function(result, index) {
        let pic = result.link;
        let newImage = $("<a class='carousel-item' href='#"+ index +"'>").append(
            "<img src='" + pic + "' class='productImage'></a>"
        );
         carousel.append(newImage);
    });
     setTimeout(()=>{
          carouselInit();
       }, 200);   
}


 $(document).on("click", "#facilityGal", function(event) {
        event.preventDefault();
        getPics(images);
        autoPlay();
    });
    
     $(document).on("click", "#close", function(event) {
        pause()
         $('#gallery').hide();
    });
    
    
     $(document).on("click", "#next", function(event) {
        pause()
         $('.carousel').carousel('next');
    });
    
     $(document).on("click", "#prev", function(event) {
        pause()
         $('.carousel').carousel('prev');
    });
    
     $(document).on("click", "#pause", function(event) {
        pause()
    });
    
    $(document).on("click", "#play", function(event) {
       $('.carousel').carousel('next');
       autoPlay()
    });
    
   
    
   
    
 
  
})