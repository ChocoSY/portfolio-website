// console.log("Hello! Welcome to my profile site!");
// alert("Hi! Welcome to my Portfolio Site!");

function menuToggle() {
    //Searches the doc for the element with given ID
    var x = document.getElementById('myNavtoggle');

    //Change the class of the object based on its status (open/closed)
    if (x.className === 'navtoggle') {
        //this line shows the menu (Add class name ' responsive')
        x.className += ' responsive'; //Need A SPACE before responsive for successful execute!
        //??? is it adding the name as a separate class or it is just changing the name of the class by adding this word at the end???
    } else { //in case of class name is both 'navtoggle' and ' reponsive'
        x.className = 'navtoggle'; //effectively hide menu
    }
    
}

$('#menu ul li a').on('click', function(){
    $('#menu ul li a.menu_current').removeClass('menu_current');
    $(this).addClass('menu_current');
});

