    var i=0,text;
    
    var text = " <Hello> </World> ! ";
    
    function typing() {
        if(i<text.length){
            document.getElementById("text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing,80);
        }
    }
    typing();


    mybutton = document.getElementById("scroll-top-btn");

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
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.getElementsByClassName('html') == "scroll-behavior : smooth;";
}
    
