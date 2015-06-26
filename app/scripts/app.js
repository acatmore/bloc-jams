 $(document).ready(function() { 
   $('.hero-content h3').click(function(){
      var subText = $(this).text();
      $(this).text(subText + "!");
   });
});