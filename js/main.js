$(document).ready(function() {
    var lastHoveredIndex = 0; // Variable to store the index of the last hovered link
  
    // Function to show the mega-menu and content
    function showMegaMenu() {
        $("#megaMenu").addClass("show");
        $(".main-megaMenu .menuWrapper").addClass("show");
      }
      
  
    // Function to hide the mega-menu and content
    function hideMegaMenu() {
        $("#megaMenu").removeClass("show");
        $(".main-megaMenu .menuWrapper").removeClass("show");
      }
      
  
    // Show the mega-menu and content when hovering over the megaMenuContainer
    $("#megaMenuContainer").hover(showMegaMenu, hideMegaMenu);
  
    // Show the content immediately when hovering over a category link in categoryLinks
    $(".categoryLinks li").hover(
      function() {
        lastHoveredIndex = $(this).index() - 1; // Update the last hovered index
        $(".main-megaMenu .menuWrapper").hide().eq(lastHoveredIndex).show();
        showMegaMenu(); // Show the mega-menu when hovering over a category link in categoryLinks
      },
      function() {
        // You can add any additional actions when the mouse leaves the category link
      }
    );
  
    // Show the content immediately when hovering over a category link in ul-list
    $(".ul-list li").hover(
      function() {
        lastHoveredIndex = $(this).index();
        $(".main-megaMenu .menuWrapper").hide().eq(lastHoveredIndex).show();
        showMegaMenu(); // Show the mega-menu when hovering over a category link in ul-list
      },
      function() {
        // You can add any additional actions when the mouse leaves the category link
      }
    );
  
    // Hide the mega-menu and content when the mouse leaves the mega-menu container
    $("#megaMenuContainer").mouseleave(hideMegaMenu);
  
    // Show the content of categoryContent1 by default
    $(".main-megaMenu .menuWrapper#categoryContent1").show();
  });
  


  const slider = document.querySelector('.slider');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let isTransitioning = false;
  
  function nextSlide() {
    if (!isTransitioning) {
      isTransitioning = true;
      slider.style.transition = 'transform 1s ease-in-out';
      slider.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        slider.appendChild(slider.firstElementChild);
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(0)';
        isTransitioning = false;
      }, 1000);
    }
  }
  
  function prevSlide() {
    if (!isTransitioning) {
      isTransitioning = true;
      slider.style.transition = 'transform 1s ease-in-out';
      slider.style.transform = 'translateX(100%)';
      setTimeout(() => {
        slider.prepend(slider.lastElementChild);
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(0)';
        isTransitioning = false;
      }, 1000);
    }
  }
  
  setInterval(nextSlide, 4000);
  