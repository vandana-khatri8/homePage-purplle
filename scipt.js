function changeMode(){
    var mybody = document.body;
    mybody.classList.toggle ('mydark');
}

function loadCupon(){
    document.getElementById('cupon').style. visibility = 'visible';
    document.getElementById('slider').style.opacity= '0.5';

}
function closeCupon(){
    document.getElementById('cupon').style.visibility ='hidden';
    document.getElementById('slider').style.opacity = '1';

}