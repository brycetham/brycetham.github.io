// function showLabel(e, text) {
//   console.log(e);
//   var textnode = document.createTextNode(text);
//   e.appendChild(textnode);
// }

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function(){
          window.location.hash = hash;
        });
      }
    });
});
