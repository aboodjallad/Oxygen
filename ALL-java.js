

window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    var mybutton = document.getElementById("myBtn");


    AOS.init({
      offset: 400, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000 // values from 0 to 3000, with step 50ms
    });

    $(".gym").click(function(){

      $(".gym").removeClass('active');
      $(this).addClass('active');
  
    });
    function changeborderpower() {
      if(document.getElementById("power").style.borderColor === "white"){
      document.getElementById("power").style.borderColor = "rgb(156, 252, 215)";
      return;
      }
      document.getElementById("power").style.borderColor = "white";
      return;
    }  function changebordersar() {
      if(document.getElementById("sar").style.borderColor === "white"){
      document.getElementById("sar").style.borderColor = "rgb(156, 252, 215)";
      return;
      }
      document.getElementById("sar").style.borderColor = "white";
      return;
    }  function changeborderih() {
      if(document.getElementById("ih").style.borderColor === "white"){
      document.getElementById("ih").style.borderColor = "rgb(156, 252, 215)";
      return;
      }
      document.getElementById("ih").style.borderColor = "white";
      return;
    }  function changebordereagle() {
      if(document.getElementById("eagle").style.borderColor === "white"){
      document.getElementById("eagle").style.borderColor = "rgb(156, 252, 215)";
      return;
      }
      document.getElementById("eagle").style.borderColor = "white";
      return;
    }
    function changeborderiron() {
      if(document.getElementById("iron").style.borderColor === "white"){
      document.getElementById("iron").style.borderColor = "rgb(156, 252, 215)";
      return;
      }
      document.getElementById("iron").style.borderColor = "white";
      return;
    }

    function changebordersvg() {
      if(document.getElementById("svg").style.borderColor === "white"){
      document.getElementById("svg").style.borderColor = "rgb(156, 252, 215)";
      return;
      }
      document.getElementById("svg").style.borderColor = "white";
      return;
    }

    function changebordersl() {
      if(document.getElementById("sl").style.borderColor === "white"){
      document.getElementById("sl").style.borderColor = "rgb(156, 252, 215)";
      return;
      }
      document.getElementById("sl").style.borderColor = "white";
      return;
    }


    function changeborderdy() {
      if(document.getElementById("dy").style.borderColor === "white"){
      document.getElementById("dy").style.borderColor = "rgb(156, 252, 215)";
      return;
      }
      document.getElementById("dy").style.borderColor = "white";
      return;
    }
    
    



  
  
