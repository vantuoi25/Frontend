$(document).ready(function(){
    console.log('Demo jquery');

console.log($);
 
var h1Title =$('#title');
h1Title.css({
    color: 'red',
    fontSize: '40px',
    textAlign: 'center'

});
console.log(h1Title);

var pTags = $('.p-1');
console.log(pTags);

pTags.css({color : 'green'});

console.log($('#btn-jquery'));


$('#btn-jquery').click(function(){
    //alert('123btn');
    //$('#title').hide();
    $('#title').toggle();
    //$('.p-3').show();

})
$('#btn-jquery-2').click(function(){
    $('.p-3').show(3000, function(){
        alert('p-3 showed')
    });
})

// Jquery event
$('#btn-jquery-2').on('dbclick',function(){
    $('.p-3').css(color = 'green' );
})

})



