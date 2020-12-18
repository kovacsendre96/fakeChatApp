var currentdate = new Date(); 
var timeStamp = 
+ currentdate.getHours() + ":"  
+ currentdate.getMinutes()

let myDiv = $(".content__chat__wrapper");
myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 300);


$(document).ready(function () {


    $(".sidebar__members").click(function () {
        $(".sidebar__members").addClass("selected")
        $(".sidebar__members").css({ "border-left": "0", "padding-left": "15px" })
        $(this).closest(".selected").css({ "border-left": "5px solid #6200EA", "padding-left": "10px" })
    });

               



    $(".send_button").click(function () {
        let send_message = $("#message").val();
        let typing_indicator="<h6  class="+"typing_indicator"+">Amy is typing...</h6>"
        $(".content__chat__wrapper").append( '<h6 class="content__chat__metadata--student">'+timeStamp+'</h6>'+'<div class="clearfix message"> <p class="content__chat__message--student short-message layout__item--floated--right">' + send_message + '</p>' +
            '<img class="content__chat__image--student"' + 'src="assets/user_avatar_07.png" alt="amy">' +
            '</div>')
        
           
            myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 300);
          
          
            
            
            setTimeout(function(){
                
                
                myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 30);
                $(".content__chat__wrapper").append(typing_indicator)
            },800);
     
            setTimeout(function(){
                
                myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 30);
                $(".typing_indicator").css("display","none")
                $(".content__chat__wrapper").append('<h6 class="content__chat__metadata--amy">Amy, '+timeStamp+'</h6>' + '<div class="clearfix">' + ' <img class="content__chat__image--amy" src="assets/user_avatar_01.png" alt="amy">' + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>' )
            },2000);
          
        
            $("#message").val("")

    });

});

