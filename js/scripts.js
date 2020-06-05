//users face
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    
    
    const spiritAnimal =  $("input:radio[name=animal]:checked").val();
    const season =  $("input:radio[name=season]:checked").val();

  if (season === 'summer' && spiritAnimal === 'bear') {
    $("#paulNewman").show();
    } else if (season === 'spring' && spiritAnimal === 'hudson') {
    $("#kateHudson").show();
    }  
  });
});