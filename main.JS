var images =
["Buttercup.jfif","Butch.jfif","Bubble.jfif","Boomer.jfif","blossom.png","brick.ong"]
var names =["Family Book", "Buttercup" ,"Butch","Bubbles","Boomer","brick","blossom"];

var i = 0;
function update()
    {
        i++;
        var numbers_of_family_member_in_array =5
        if(
            (i > numbers_of_family_member_in_array   )     
             )
             {
                 i = 0;

             }
             var updatedImage = images[i];
             var updatedName = names[i];
             document.getElementById("family_member_images").scr = updatedImage;
             document.getElementById("family_member_name").innerHTML = updatedName;
    }