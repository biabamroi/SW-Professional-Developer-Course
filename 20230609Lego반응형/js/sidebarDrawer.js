const drawer = document.querySelector('.drawer');
const drawerOpener = document.querySelector('.drawer-opener');
const drawer2 = document.querySelector('.drawer2');
const drawerOpener2 = document.querySelector('.drawer-opener2');
const drawer3 = document.querySelector('.drawer3');
const drawerOpener3 = document.querySelector('.drawer-opener3');

drawerOpener.addEventListener('click', function(){
    drawer.style.display = 'block';
    .style.color = 'rgb(255, 204, 0)';

})
drawerOpener2.addEventListener('click', function(){
    drawer2.style.display = 'block';
})
drawerOpener3.addEventListener('click', function(){
    drawer3.style.display = 'block';
})






var theParent = document.querySelector("#theDude");
theParent.addEventListener("click", doSomething, false);
 
function doSomething(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        alert("Hello " + clickedItem);
    }
    e.stopPropagation();
}



var theParent = document.querySelector("#theDude");
 
for (var i = 0; i < theParent.children.length; i++) {
    var childElement = theParent.children[i];
    childElement.addEventListener('click', doSomething, false);
}
 
function doSomething(e) {
    var clickedItem = e.target.id;
    alert("Hello " + clickedItem);
}





// drawerOpener.addEventListener('click', function(){
//     drawer.classList.remove('.drawer-active');
// })
// document.getElementById('open-btn').addEventListener('click', function(){
//     document.getElementById('alert').style.display = 'flex';
//   })
  
//   function clossAlert(){
//     document.getElementById('alert').style.display = 'none';
//   }