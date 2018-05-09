$(document).ready(function() {
    
    $("#marketView").hide();
   
    var products = [
        {
            name: "petrolium",
            button: "petGal",
            info: "McGee Corporation has been a national supplier of petroleum canopies for over 40 years to various retail, commercial, and governmental agencies requiring canopy structures for their fueling operations. Our list of customers and markets include but are not limited to the following well known brands:<br>Major Oil Companies: Exxon/Mobil, Shell, Chevron/Texaco, BP, Marathon<br>Convenience Store chains: 7-Eleven, Circle K, Sheetz, The Pantry<br>ruck Stops/Travel Plazas: Marathon, Wilco Hess<br>Hypermarket, Grocery & Retail stores: Sam's Club, Kroger, Ingles<br>Car Rental/Fleet Fueling: Enterprise<br>Commercial/Governmental Agencies: fueling sites/toll operations<br><br>Our canopy systems are designed to provide superior branding image, identification, and functionality that enhance our customer's fueling facilities and image standards. Engineering designs meet or exceed local zoning and architectural requirements that are site specific to insure compliance with all governmental codes and regulations.<br><br>As the premier provider of fueling services for your retail, commercial, or governmental locations, McGee Corporation's Commitment to Excellence is sure to deliver a quality, engineered petroleum canopy designed to meet all your brand and image needs."
            
        },
        {
            name: "banking",
            button: "bankGal",
            info: "McGee Corporation knows that financial facilities must have an architectural image that attracts customers. With over 40 years of canopy experience, our company creates dynamic, highly-visible drive-thru canopy systems that enhance your financial institution's products and services. Our design teams create classical architectural canopy systems which expressed integrity, endurance and confidence.<br><br>As a bank or financial institution, McGee Corporation's 'Commitment to Excellence' will provide you with drive-thru canopy systems are designed to provide superior market image, identification, and functionality that delivers your brand message day or night"
        },
        {
            name: "retail",
            button: "retailGal",
            info: "McGee Corporation knows that retail businessesmust have canopies that increases visibility and curb appeal to attract more customers. With over 40 years of canopy experience, our company creates dynamic, highly-visible canopy systems that enhance and protect your location's products and services.<br><br>As a retail business, McGee Corporation's 'Commitment to Excellence' will provide you with canopy systems are designed to provide superior market image, identification, and functionality that delivers your brand message throughout your facility."
        },
        {
            name: "misc",
            button: "miscGal",
            info: "Structural Building Components are specialized structural building products designed, engineered and manufactured under controlled conditions for a specific application. They are incorporated into the overall building structural system by a Building Designer. In addition to our structural steel components, McGee Corporation also offers gutters, flashings, building sheet metal components, building facade materials, and design services.<br><br>As a contractor or building designer, McGee Corporation's 'Commitment to Excellence' will provide you with structural building components that are designed to provide cost-effective and functional materials that will meet your project's construction requirements."
        }
        
        ]
        
        
        
        function getInfo(product) {
            $("#productInfo").empty();
        var div = $("<div class='card'>").append(
            
            "<div class='card-stacked'>" + "<div class='card-content'>" +
          "<h4>" + product.name + "</h4>" +
          "<p style='font-size: 10px;'>" + product.info + "</p>" +
          "<button data-target='viewGallery' class='btn modal-trigger view red darken-2'  data-id='" + product.button+ "'>View Gallery</button>" +
          "</div>" 
          );
        
        $("#productInfo").append(div);
            
        }
        
    
    
     $("#petroleum").on("click", function(event) {
         document.getElementById('displayCard').style.margin-left = 0.ToString() + '%';
        event.preventDefault();
        getInfo(products[0]);
    });
    
    $("#petroleum2").on("click", function(event) {
        event.preventDefault();
        getInfo(products[0]);
    });

    $("#banking").on("click", function(event) {
        event.preventDefault();
        getInfo(products[1]);
    });
    
    $("#banking2").on("click", function(event) {
        event.preventDefault();
        getInfo(products[1]);
    });

    
    
})