
 $(document).ready(function() { 
   $('.hero-content h3').click(function(){
      var subText = $(this).text();
      $(this).text(subText + "!");
   });
   var onHoverAction = function(event) {
     console.log('Hover action triggered.');
     $(this).animate({'margin-top': '10px'});
     $(this).animate({'font-size': '200px'});
   };
 
   var offHoverAction = function(event) {
     console.log('Off-hover action triggered.');
     $(this).animate({'margin-top': '0px'});
     $(this).animate({'font-size': '70px'})
   };
   $('.selling-points .point').hover(onHoverAction, offHoverAction);
});