$(document).ready(function() {
    console.log("JS")
    $("#typeView").hide();
    $("#marketView").hide();
    $(".productImageMain").hide();
    $('#footer').hide();
    var screenWidth = window.innerWidth;
   
    var products = [{
            name: "Petroleum",
            button: "petGal",
            target: "Targeting: <br> Convenience Stores · Grocery Stores · Truck Stops/Travel Plazas · Government · Commercial · Car Rental Agencies",
            info: "McGee Corporation has been a national supplier of petroleum canopies for over 40 years to various retail, commercial, and governmental agencies requiring canopy structures for their fueling operations. Our list of customers and markets include but are not limited to the following well known brands:<br>Major Oil Companies: Exxon/Mobil, Shell, Chevron/Texaco, BP, Marathon<br>Convenience Store chains: 7-Eleven, Circle K, Sheetz, The Pantry<br>ruck Stops/Travel Plazas: Marathon, Wilco Hess<br>Hypermarket, Grocery & Retail stores: Sam's Club, Kroger, Ingles<br>Car Rental/Fleet Fueling: Enterprise<br>Commercial/Governmental Agencies: fueling sites/toll operations<br><br>Our canopy systems are designed to provide superior branding image, identification, and functionality that enhance our customer's fueling facilities and image standards. Engineering designs meet or exceed local zoning and architectural requirements that are site specific to insure compliance with all governmental codes and regulations.<br><br>As the premier provider of fueling services for your retail, commercial, or governmental locations, McGee Corporation's Commitment to Excellence is sure to deliver a quality, engineered petroleum canopy designed to meet all your brand and image needs.",
            images: [
                {
                    link: "./images/pet/01.jpg"
                },
                {
                    link: "./images/pet/02.jpg"
                },
                {
                    link: "./images/pet/03.jpg"
                },
                {
                    link: "./images/pet/04.jpg"
                },
                {
                    link: "./images/pet/05.jpg"
                },
                {
                    link: "./images/pet/06.jpg"
                },
                {
                    link: "./images/pet/07.jpg"
                },
                {
                    link: "./images/pet/08.jpg"
                },
                {
                    link: "./images/pet/09.jpg"
                },
                {
                    link: "./images/pet/10.jpg"
                },
                {
                    link: "./images/pet/11.jpg"
                },
                {
                    link: "./images/pet/12.jpg"
                },
                {
                    link: "./images/pet/13.jpg"
                },
                {
                    link: "./images/pet/14.jpg"
                },
                {
                    link: "./images/pet/15.jpg"
                },
                {
                    link: "./images/pet/16.jpg"
                },
                {
                    link: "./images/pet/17.jpg"
                },
                {
                    link: "./images/pet/18.jpg"
                },
                {
                    link: "./images/pet/19.jpg"
                },
                {
                    link: "./images/pet/20.jpg"
                },
                {
                    link: "./images/pet/21.jpg"
                },
                {
                    link: "./images/pet/22.jpg"
                },
                {
                    link: "./images/pet/23.jpg"
                },
                {
                    link: "./images/pet/24.jpg"
                },
              
                ]
            
        },
        {
            name: "Banking / Financial Institutions",
            button: "bankGal",
            target: "Targeting: <br>Banks · Credit Unions · Financial Institutions",
            info: "McGee Corporation knows that financial facilities must have an architectural image that attracts customers. With over 40 years of canopy experience, our company creates dynamic, highly-visible drive-thru canopy systems that enhance your financial institution's products and services. Our design teams create classical architectural canopy systems which expressed integrity, endurance and confidence.<br><br>As a bank or financial institution, McGee Corporation's 'Commitment to Excellence' will provide you with drive-thru canopy systems are designed to provide superior market image, identification, and functionality that delivers your brand message day or night",
            images: [
                {
                    link: "./images/bank/01.jpg"
                },
                {
                    link: "./images/bank/02.jpg"
                },
                {
                    link: "./images/bank/03.jpg"
                },
                {
                    link: "./images/bank/04.jpg"
                },
                {
                    link: "./images/bank/05.jpg"
                },
                {
                    link: "./images/bank/06.jpg"
                },
                {
                    link: "./images/bank/07.jpg"
                },
                ]

        },
        {
            name: "Retail",
            button: "retailGal",
            target: "Hotels · Carwashes · Home Building Product Centers · Mini-Storage Locations",
            info: "McGee Corporation knows that retail businessesmust have canopies that increases visibility and curb appeal to attract more customers. With over 40 years of canopy experience, our company creates dynamic, highly-visible canopy systems that enhance and protect your location's products and services.<br><br>As a retail business, McGee Corporation's 'Commitment to Excellence' will provide you with canopy systems are designed to provide superior market image, identification, and functionality that delivers your brand message throughout your facility.",
             images: [
                {
                    link: "./images/retail/01.jpg"
                },
                {
                    link: "./images/retail/02.jpg"
                },
                {
                    link: "./images/retail/03.jpg"
                },
                {
                    link: "./images/retail/04.jpg"
                },
                {
                    link: "./images/retail/05.jpg"
                }
                ]

        },
        {
            name: "Miscellaneous",
            button: "miscGal",
            target: "Providing: <br> Structural Steel · Metal Roofing · Bollards · Dumpster Framing · Custom Projects",
            info: "Structural Building Components are specialized structural building products designed, engineered and manufactured under controlled conditions for a specific application. They are incorporated into the overall building structural system by a Building Designer. In addition to our structural steel components, McGee Corporation also offers gutters, flashings, building sheet metal components, building facade materials, and design services.<br><br>As a contractor or building designer, McGee Corporation's 'Commitment to Excellence' will provide you with structural building components that are designed to provide cost-effective and functional materials that will meet your project's construction requirements.",
             images: [
                {
                    link: "./images/misc/01.jpg"
                },
                {
                    link: "./images/misc/02.jpg"
                },
                {
                    link: "./images/misc/03.jpg"
                },
                {
                    link: "./images/misc/04.jpg"
                },
                {
                    link: "./images/misc/05.jpg"
                }
                ]
        }

    ]


    function getInfo(product) {
        $("#productInfo").empty();
        var div = $("<div class='card'>").append(

            "<div class='card dynamicCard'>" + "<div class='card-content'>" +
            "<h4>" + product.name + "</h4>" + "<h6>" + product.target + "</h6>"+
            "<p id='productTitle' style='font-size: 12px;'>" + product.info + "</p><br>" +
            "<button data-target='gallery' class='btn modal-trigger view red darken-2'  id='" + product.button + "'>View Gallery</button>" +
            "</div>"
        );
        $("#productInfo").append(div);
    }
    
    function carouselInit() {
        console.log("Car Init")
         $('.carousel.carousel-slider').carousel({fullWidth: true});
    }
    
    function spy(id) {
    return 'a[href="#' + id + '"]';
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
    
    
function getPics(product) {
    $('#carouselDiv').empty()
    let carousel = $("<div class='carousel carousel-slider'>"); //create brand new carousel div element
    $("#carouselDiv").append(carousel);
    let images = product.images
    images.forEach(function(result, index) {
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

    $("#petroleum").on("click", function(event) {
        document.getElementById("productCard").style.marginRight = "0%";
        document.getElementById("displayCard").style.marginLeft = "0%";
        event.preventDefault();
        getInfo(products[0]);
       setTimeout(()=>{
         location.hash = "#productTitle";
       }, 200);  
    });

    $("#petroleum2").on("click", function(event) {
        document.getElementById("productCard").style.marginRight = "0%";
        document.getElementById("displayCard").style.marginLeft = "0%";
        event.preventDefault();
        getInfo(products[0]);
         setTimeout(()=>{
         location.hash = "#productTitle";
       }, 200);  
    });

    $("#banking").on("click", function(event) {
        document.getElementById("productCard").style.marginRight = "0%";
        document.getElementById("displayCard").style.marginLeft = "0%";
        event.preventDefault();
        getPics(products[1]);
        getInfo(products[1]);
         setTimeout(()=>{
         location.hash = "#productTitle";
       }, 200);  
    });

    $("#banking2").on("click", function(event) {
        document.getElementById("productCard").style.marginRight = "0%";
        document.getElementById("displayCard").style.marginLeft = "0%";
        event.preventDefault();
        getInfo(products[1]);
         setTimeout(()=>{
         location.hash = "#productTitle";
       }, 200);  
    });

    $("#misc").on("click", function(event) {
        document.getElementById("productCard").style.marginRight = "0%";
        document.getElementById("displayCard").style.marginLeft = "0%";
        event.preventDefault();
        getInfo(products[3]);
         setTimeout(()=>{
         location.hash = "#productTitle";
       }, 200);  
    });

    $("#misc2").on("click", function(event) {
        document.getElementById("productCard").style.marginRight = "0%";
        document.getElementById("displayCard").style.marginLeft = "0%";
        event.preventDefault();
        getInfo(products[3]);
         setTimeout(()=>{
         location.hash = "#productTitle";
       }, 200);  
    });

    $("#retail").on("click", function(event) {
        document.getElementById("productCard").style.marginRight = "0%";
        document.getElementById("displayCard").style.marginLeft = "0%";
        event.preventDefault();
        getInfo(products[2]);
        setTimeout(()=>{
         location.hash = "#productTitle";
       }, 200);  
    });

    $("#retail2").on("click", function(event) {
        document.getElementById("productCard").style.marginRight = "0%";
        document.getElementById("displayCard").style.marginLeft = "0%";
        event.preventDefault();
        getInfo(products[2]);
         setTimeout(()=>{
         location.hash = "#productTitle";
       }, 200);  
    });

    $("#market").on("click", function(event) {
        if (screenWidth > 1025) {
            document.getElementById("displayCard").style.height = "900px";
        }
        document.getElementById("productCard").style.marginRight = "0%";
        document.getElementById("displayCard").style.marginLeft = "0%";
        
        event.preventDefault();
        getInfo(products[0]);
        $("#typeView").hide();
        $("#marketView").show();
        $(".productImageMain").show();
        $('#footer').show();

    });

    $("#type").on("click", function(event) {
         if (screenWidth > 1025) {
            document.getElementById("displayCard").style.height = "900px";
        }
        document.getElementById("productCard").style.marginRight = "0%";
        document.getElementById("displayCard").style.marginLeft = "0%";
        event.preventDefault();
        getInfo(products[0]);
        $("#marketView").hide();
        $("#typeView").show();
        $(".productImageMain").show();
        $('#footer').show();

    });
    
    
    $(document).on("click", "#bankGal", function(event) {
        event.preventDefault();
        getPics(products[1]);
        setTimeout(()=>{
          autoPlay()
       }, 2000); 
    });
    
     $(document).on("click", "#retailGal", function(event) {
        event.preventDefault();
        getPics(products[2]);
        setTimeout(()=>{
          autoPlay()
       }, 2000); 
    });
    
     $(document).on("click", "#petGal", function(event) {
        event.preventDefault();
        getPics(products[0]);
        setTimeout(()=>{
          autoPlay()
       }, 2000); 
    });
    
     $(document).on("click", "#miscGal", function(event) {
        event.preventDefault();
        getPics(products[3]);
        autoPlay();
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


