console.log("Hello");

window.addEventListener("scroll",bringmenu);

function bringmenu(){
    if(document.body.scrollTop>400 || document.documentElement.scrollTop>500){
        document.getElementById("discount-offer-table").style.display = 'none';
        // document.getElementById("explain-trip").style.display='none';
        document.getElementById("offer-header-2").style.fontSize = '18px';
    }
    else{
        document.getElementById("discount-offer-table").style.display = 'block';
        // document.getElementById("explain-trip").style.display='block';
        document.getElementById("offer-header-2").style.fontSize = '20px';
    }
}

// About Us tabs functionality
// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});

document.getElementById("readMore").addEventListener("click",function(){
   var x =  document.getElementById("content");
   var y = document.getElementById('readMore');
    x.style.display = 'block';
    y.style.display = 'none';
})