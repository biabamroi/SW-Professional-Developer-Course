// jQuery
// .addClass(className)

// $('h1').addClass('abc');
// $('h1').addClass('ab cd ef');

// $(document).ready(funciton(){
//  $('h1').addClass('bg');
//  $('h1').addClass('bg bd');
// });

// .removeClass()
// .toggleClass()


// const sidebarMenuButton = document.querySelector('.gnb-icon-button')
const sidebarMenuButton = $('.gnb-icon-button');
// const sidebar = document.querySelector('.sidebar')
const sidebar = $('.sidebar');
// const sidebarOverlay = document.querySelector('.overlay')
const sidebarOverlay = $('.overlay');

// console.log(sidebarMenuButton)
// console.log(sidebar)
// console.log(sidebarOverlay)

function openSidebar(){
  // sidebar.classList.add('is-active');
  // sidebarOverlay.classList.add('is-active');
  sidebar.addClass('is-active');
  sidebarOverlay.addClass('is-active');
}

// sidebarMenuButton.addEventListener('click', openSidebar)
sidebarMenuButton.on('click', openSidebar)


function closeSidebar() {
  // sidebar.classList.remove('is-active')
  // sidebarOverlay.classList.remove('is-active')
  sidebar.removeClass('is-active')
  sidebarOverlay.removeClass('is-active')
}

// sidebarOverlay.addEventListener('click', closeSidebar)
sidebarOverlay.on('click', closeSidebar)
