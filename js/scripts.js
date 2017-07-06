$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var genre = $("input:radio[name=genre]:checked").val();

    if (gender === 'male') {
      if (genre === 'action' && age >= 30) {
        $("#image").attr("src","img/angelina.jpg");
      }
      else if (genre === 'comedy' && age >= 30) {
        $("#image").attr("src","img/angelina.jpg");
      }
      else if (genre === 'tragedy' && age >= 30) {
        $("#image").attr("src","img/angelina.jpg");
      }
      else if (genre === 'action' && age < 30) {
        $("#image").attr("src","img/fox.jpg");
      }
      else if (genre === 'comedy' && age < 30) {
        $("#image").attr("src","img/fox.jpg");
      }
      else if (genre === 'tragedy' && age < 30) {
        $("#image").attr("src","img/fox.jpg");
      }

    }
    else if (gender === 'female') {
      if (genre === 'action' && age >= 30) {
        $("#image").attr("src","img/dwayne.jpg");
      }
      else if (genre === 'comedy' && age >= 30) {
        $("#image").attr("src","img/dwayne.jpg");
      }
      else if (genre === 'tragedy' && age >= 30) {
        $("#image").attr("src","img/dwayne.jpg");
      }
      else if (genre === 'action' && age < 30) {
        $("#image").attr("src","img/zack.jpg");
      }
      else if (genre === 'comedy' && age < 30) {
        $("#image").attr("src","img/zack.jpg");
      }
      else if (genre === 'tragedy' && age < 30) {
        $("#image").attr("src","img/zack.jpg");
      }
    }
    else {
      $("#image").attr("src","img/binary.jpg");
    }
  event.preventDefault();
  });
});
