
    var currentTime = new Date(); 
    var timeStamp = currentTime.getHours() + ":"  //current time//
                    + currentTime.getMinutes()



 let member1 = {
    name: 'Amy Adams',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_01.png" alt="amy">',
    message: '<h6 class="content__chat__metadata--amy">Amy Adams, '+timeStamp+'</h6>'
    + '<div class="clearfix">'
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat. </p>' + ' </div>'
}

let member2 ={
    name: 'Marc',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_02.png" alt="amy">',
    message: '<h6 class="content__chat__metadata--amy">Marc, '+timeStamp+'</h6>'
    + '<div class="clearfix">'
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>' 
}

let member3 ={
    name: 'Jacob',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_03.png" alt="amy">',
    message:'<h6 class="content__chat__metadata--amy">Jacob, '+timeStamp+'</h6>'
    + '<div class="clearfix">' 
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>' 
}

let member4 = {
    name: 'Chris Simth',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_04.png" alt="amy">',
    message: '<h6 class="content__chat__metadata--amy">Chris Smith, '+timeStamp+'</h6>'
    + '<div class="clearfix">'
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>' 
}
let member5 = {
    name: 'Mia Wong',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_05.png" alt="amy">',
    message: '<h6 class="content__chat__metadata--amy">Mia Wong, '+timeStamp+'</h6>'
    + '<div class="clearfix">'
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>' 
}
let member6= {
    name: 'Jaine',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_06.png" alt="amy">',
    message: '<h6 class="content__chat__metadata--amy">'+'Jaine, '+timeStamp+'</h6>'
    + '<div class="clearfix">'
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>' 

}


let objectArray=[member1,member2,member3,member4,member5,member6]


let membersArray=document.querySelectorAll(".sidebar__members")




let j=0
for(let i=0; i<membersArray.length;i++){

    
    $(membersArray[i]).click(function(){
        console.log("Ez a(z)"+i+".")
        console.log(objectArray)
        $(".content__chat__wrapper").empty();
        $(".content__chat__wrapper").append(objectArray[i].picture,objectArray[0].message);
        
        j=i
        
    });

    }



let myDiv = $(".content__chat__wrapper");
myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 300);








    $(".sidebar__members").click(function(){
        $(".sidebar__members").addClass("selected")
        $(".sidebar__members").css({"border-left":"0","padding-left": "15px"})
        $(this).closest(".selected").css({"border-left": "5px solid #6200EA", "padding-left": "10px"})

        

    });


    
    

  for( let k=j;k<objectArray.length;k++){
    
    $(".send-button").click(function () {
        let sendMessage = $("#message").val();
        if(sendMessage==""){}
        else{

        let typingIndicator="<h6 class="+"typing-indicator"+">"+objectArray[j].name+" is typing...</h6>"
        $(".content__chat__wrapper").append('<h6 class="content__chat__metadata--student">'+timeStamp+'</h6>'
        +'<div class="clearfix message"> <p class="content__chat__message--student short-message layout__item--floated--right">'
        + sendMessage + '</p>' 
        +'<img class="content__chat__image--student"' + 'src="assets/profil.jpg" alt="amy">'+'</div>')
        myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 300);
        
        setTimeout(function(){
            $(".content__chat__wrapper").append(typingIndicator)
            myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 300);
        },800);
        
        
        setTimeout(function(){
            $(".typing-indicator").css("display","none")
            $(".content__chat__wrapper").append('<h6 class="content__chat__metadata--amy">'+objectArray[j].name+', '+timeStamp+'</h6>'
            + '<div class="clearfix">' +objectArray[j].picture
            + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
            +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>' )
            myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 300);
        },2000);
        
        $("#message").val("")
    }
    
});
    
}


