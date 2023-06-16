// Open Sidebar Pannel
    function OpenSidebar(){
        var element = document.getElementById('Sidebar');
        element.classList.add('Active-Sidebar');
    }

// Close Sidebar Pannel
    function CloseSidebar(){
        var element = document.getElementById('Sidebar');
        element.classList.remove('Active-Sidebar');
    }

// Sticky Navbar on Scroll
// window.addEventListener("scroll", function(){
//     var nav = document.querySelector("nav");
//     nav.classList.toggle("sticky", window.scrollY > 50);
// })