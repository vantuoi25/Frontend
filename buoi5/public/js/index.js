console.log('Frontend basic buoi5');

console.log($);

var btn = document.getElementById('btn');
console.log(btn);

function handleClickBtn(){
    var h1Title = document.getElementById('title');
    h1Title.style.color = 'red';
    //console.log(h1Title);
    var pTags = document.getElementsByClassName('p-1');
    console.log(pTags);
    pTags[0].style.color = 'green';
    pTags[1].style.color = 'blue';
    
}
// javascrip valina
function hideH1Title(){
    //let h1Title = document.getElementById('title');
    //h1Title.style.display = 'none';
    document.getElementById('title').style.display ='none';

   
    
}
function toggleH1TitileJavaScrip(){
    if(document.getElementById('title').style.display === 'none'){
        document.getElementById('title').style.display = 'initial';
}else document.getElementById('title').style.display = 'nene';
}
