//**********---CREATE "membersArray" VARIABLE AND PUT INSIDE ALL OF THE MEMEBERS FROM THE SIDEBAR---**********//
  
let membersArray=document.querySelectorAll(".sidebar__members")


  
//**********---PUT THE CURRENT TIME TO THE "timeStamp"---**********//

var currentTime = new Date(); 
var timeStamp = currentTime.getHours() + ":"  //current time//
+ currentTime.getMinutes()


//**********---CREATE THE MEMEBER'S OBJECTS WITH MAIN VALUES AND PUT THEESE INSIDE THE "objectArray"---**********//

let member1 = {
    name: 'Amy Adams',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_01.png" alt="amy">',
    message:
    '<div class="clearfix">'
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat. </p>' + ' </div>'
}

let member2 ={
    name: 'Marc',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_02.png" alt="amy">',
    message:
    '<div class="clearfix">'
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>' 
}

let member3 ={
    name: 'Jacob',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_03.png" alt="amy">',
    message:
    '<div class="clearfix">' 
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>' 
}

let member4 = {
    name: 'Chris Smith',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_04.png" alt="amy">',
    message:
    '<div class="clearfix">'
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>' 
}
let member5 = {
    name: 'Mia Wong',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_05.png" alt="amy">',
    message: 
    '<div class="clearfix">'
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>' 
}
let member6= {
    name: 'Jane',
    picture: '<img class="content__chat__image--amy" src="assets/user_avatar_06.png" alt="amy">',
    message: 
    '<div class="clearfix">'
    + '<p class="content__chat__message--amy"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.</p>' + ' </div>'
    
}





let objectArray=[member1,member2,member3,member4,member5,member6]
let j=0


// *************MAIN PAGE NÉV ÉS AVATAR MEGADÁSA************* //


$(".message-editor").css("display","none")  // így nem látszódik az input alol, így nem tudunk beleírni addig amég nem választottunk nevet és avatart
$(".sidebar").css("display","none")  // így nem látszódik a baloldali sidebar, így nem tudunk beleírni addig amég nem választottunk nevet és avatart
$(".avatar__img__succes__button").css("display","none")
   

let avatarArray=document.querySelectorAll(".avatar__img") // egy tömbbe beleteszi a 3 avatart, hogy tudjak az index-szel számolni tovább
let p=0; //  ez a másik kép indexéhez kell, mivel nem stringként tette bele az előző


let userAvatar=['<img class="content__chat__image--student"' + 'src="assets/batman_hero_avatar_comics-512.webp" alt="amy">',
'<img class="content__chat__image--student"' + 'src="assets/iconfinder_indian_woman_hindi_avatar_4043259.png" alt="amy">',
'<img class="content__chat__image--student"' + 'src="assets/iconfinder_sloth_lazybones_sluggard_avatar_4043272.png" alt="amy">']

for(let l=0;l<avatarArray.length;l++){     // for ciklus hogy körbe tudjam járni a képek indexeit
$(avatarArray[l]).click(function(){   // ha a képre kattintok adok egy kis bordert neki
        $(".avatar__img").css("border","none")   // az előző bordert lenullázom, így mindig csak azon marad meg amelyikre kattintok
        $(this).closest(".avatar__img").css("border","1px solid #6200ea")  // a választott kép megkapja a bordert
        $(".avatar__img__succes__button").css("display","block")

        p=l
    });
}

        $(".avatar__img__succes__button").click(function(){ 
            
            if($(".chat__user__input").val()=="") {
                alert("Please enter your name!")
            }
           

           
            else{
      /*  // kitörlöm a képet ami ott volt eleve */


      $(".student__name").empty()     //le nullázza és nem hozzáadja az új nevet
      $(".student__name").append($(".chat__user__input").val()) // hozzáadja az inputba beírt nevet

        $(".student__img").remove(); 
        $(".content__header__student__wrapper").append(avatarArray[p]); 
        
        $(".avatar__img").addClass("student__img")    // hozzzá adom a student image-t hogy megkapja a rá vonatkozó css szabályokat
        $(".avatar__img").removeClass("avatar__img")  // elveszem ezt a class-t hogy ne kapja meg a rá vonatkozó css szabályokat
        

        $(".content__chat__wrapper").empty();   // végül kiüríti az eddigi tartalmakat és hozzáadja az Amy-t
         $(".content__header__amy").empty();
         $(membersArray[0]).click();
         
        
       
        
        $(".message-editor").css("display","block")  // az elrejtett input mezőt vissza rakja
        $(".sidebar").css("display","block")
    }
}); 

        

   


// *************MAIN FUNCTION FOR THE AUTO ANSWER************* //

function main(){
    
//***---Search bar---***//

    for(let k=0; k<membersArray.length; k++){
        $(".sidebar__search__icon").click(function search(){
         

            if ($(".sidebar__search__input").val() == objectArray[k].name) {
                $(membersArray[k]).click()

            } 
        });
    }
    
    
 
    
    
    for(let i=0; i<membersArray.length;i++){  
      
    
        $(membersArray[i]).click(function(){
            
            
            j=i
            $(".content__chat__wrapper").empty();
            $(".content__chat__wrapper").append('<h6 class="content__chat__metadata--amy">'+objectArray[j].name+', '+timeStamp+'</h6>',objectArray[i].picture,objectArray[i].message);
            
            
        });
    
    }

//***---Auto scrolling content---***//

    let myDiv = $(".content__chat__wrapper");
    myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 300);


//***---Auto scrolling sidebar---***//

let sideDiv = $(".sidebar__members__wrapper");
    sideDiv.animate({ scrollTop: sideDiv.prop("scrollHeight") - 1 }, 300);







/***---Selected effects of the sidebar elements---***/

    $(".sidebar__members").click(function(){
        $(".sidebar__members").addClass("selected")
        $(".sidebar__members").css({"border-left":"0","padding-left": "15px","background":"none"})
        $(this).closest(".selected").css({"border-left": "5px solid #6200EA", "padding-left": "10px","background":"rgba(213, 184, 255, 1)"})
        
        $(".content__header__amy").empty();
        $(".content__header__amy").append(objectArray[j].name);
        
        
    });






//***---Send your message with this function and get your auto answer from the bot with animate scrolling---***/

    $(".send-button").click(function () {
        let sendMessage = $("#message").val();
        if(sendMessage==""){}
        else{
            
        
            let typingIndicator="<h6 class="+"typing-indicator"+">"+objectArray[j].name+" is typing...</h6>"
            $(".content__chat__wrapper").append('<h6 class="content__chat__metadata--student">'+timeStamp+'</h6>'
            +'<div class="clearfix message"> <p class="content__chat__message--student short-message layout__item--floated--right">'
            + sendMessage + '</p>' 
            +userAvatar[p]+'</div>')
            myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 300);
            
            setTimeout(function(){
                $(".content__chat__wrapper").append(typingIndicator)
                myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 300);
            },800);
            
            
            setTimeout(function(){
                $(".typing-indicator").css("display","none")
                $(".content__chat__wrapper").append('<h6 class="content__chat__metadata--amy">'+objectArray[j].name+', '+timeStamp+'</h6>'
                +objectArray[j].picture
                +objectArray[j].message   )
                myDiv.animate({ scrollTop: myDiv.prop("scrollHeight") - 1 }, 300);
            },2000);
            
            $("#message").val(""); //clear the textarea after sent your message//
        }
    });
}
main();


$(".button").click(function(){
    
        $(".sidebar__members__wrapper").append('<div class="sidebar__members clearfix">'+
        '<div class="sidebar__members__images__wrapper layout__item--floated--left">'+
        '<img class="sidebar__members__images" src="assets/new_user_avatar.png" alt="member">'+
        '</div>'+
        '<h6 class="sidebar__memebers__names">'+'<input class="input-name" placeholder="Your friends name"></input>'+
        '<a class="add-new-name" href="#">Add</a></h6>'+
        '<p class="sidebar__members__text"></p>'+
        '</div>');

    $(".add-new-name").click(function(){
        let newName = $(".input-name").val();
        if(newName==""){
            alert("Please type your friend's name!")
        }
        else{
        $(this).closest(".sidebar__memebers__names").append(newName);
        $(".input-name").remove();
        $(".add-new-name").remove();
        $(".button").css("visibility","unset")
        
        
        let newmember= {
            name: newName,
            picture: '<img class="content__chat__image--amy" src="assets/new_user_avatar.png" alt="amy">',
            message: 
            '<div class="clearfix">'
            + '<p class="content__chat__message--amy"> Szia '+newName+' vagyok!</p>' + ' </div>'
            
        }
        
        
      
        
        objectArray.push(newmember);
           }   
    });
    membersArray=document.querySelectorAll(".sidebar__members");
  
    
    if(membersArray.length >= 6){
        main();
    }
    $(".button").css("visibility","hidden")
    $(".button").css("transition","none")
});

