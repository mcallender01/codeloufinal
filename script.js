//JS stuff


//Images that will be added on
var moreImgs = [
    '<img src="../travelingbard/bwchicago.jpg" alt="A photo of Chicago while it is snowing" class="set">',
    '<img src="../travelingbard/about-photo.jpg" alt="Picture of photgrapher standing on bench" class="set">',
    '<img src="../travelingbard/bbq.jpg" alt="Close up of shrimp being grilled" class="set">',
    '<img src="../travelingbard/waffle.jpg" alt="Close up of a waffle with a church in the background" class="set">',
    '<img src="../travelingbard/bridge.jpg" alt="Picture of a bridge" class="set">',
    '<img src="../travelingbard/stpete.jpg" alt="Inside photo of Saint Peters Basilica" class="set">',
    '<img src="../travelingbard/reykstr.jpg" alt="Image of a street with houses aligned" class="set">',
    '<img src="../travelingbard/rocks.jpg" alt="Close up of rocks" class="set">',
    '<img src="../travelingbard/icevalley.jpg" alt="Scenic image of a valley" class="set">',
    '<img src="../travelingbard/skeleton%20leaf.jpg" alt="Image of a dying leaf" class="set">',
    '<img src="../travelingbard/bamboo.jpg" alt="Image of a bamboo grove" class="set">',
    '<img src="../travelingbard/spiderweb.jpg" alt="Image of a spiderweb" class="set">',
    '<img src="../travelingbard/flower.jpg" alt="Close up image of a flower" class="set">',
    '<img src="../travelingbard/beach%20sunset.jpg" alt="Image of a sunset on the beach" class="set">',
    '<img src="../travelingbard/alcoholreal.jpg" alt="Image of a glass with interesting background lighting" class="set">',
    '<img src="../travelingbard/puddle.jpg" alt="Roman structure reflected in puddle" class="set">',
    '<img src="../travelingbard/twinspires.jpg" alt="Image of Twin Spires at Churchill Downs" class="set">',
    '<img src="../travelingbard/waterdroplets.jpg" alt="Image of waterdroplets on a leaf" class="set">',
    '<img src="../travelingbard/hallgrim.jpg" alt="Image of a church in Reykjavik" class="set">',
];
 


//Counter used to identify sets for modification 
var counter = 1


//initially hides the show less button
$(function() {
    if (counter == 1) {
        $("#less").hide();
    }
});


//Function appends images to page
//Assigns the set a number for future modification
//Shows the show less button
//And hides the show more button at limit to prevent too many images from being added
$("#more").click(function() {
    $("#photos").append(moreImgs);
    $("img.set").addClass("set"+counter).removeClass("set");
    counter =  (counter + 1);
    console.log(counter);
    if (counter >= 2) {
        $("#less").show();
    };
    if (counter >= 4) {
        $("#more").hide();
    }
});



//Identifies set based on set number
//Removes most recently added set
//Shows the show more button if it was hidden
//Hides the show less button when only oroginaly set of images is left
$("#less").click(function() {
    counter =  (counter - 1);
    $("img.set"+(counter)).remove();
    console.log(counter);
    if (counter >= 1) {
        $("#more").show();
    };
    if (counter == 1) {
        $("#less").hide();
    };
});


