
$(function(){
  $(".change-eaten").on("click", function (event) {
      event.preventDefault(); 
      const burgerId= $(this).data("id"); 
      const neweaten = $(this).data("neweaten"); 
      const newEatenState = {
        devoured: neweaten
      }; 

      $.ajax ("/api/burgers/" + burgerId, {
          type: "PUT",
          data: newEatenState
      }).then(() => {
            location.reload();  
        }
      )
  }); 

  $(".submitBtn").on("click", function(event){
      event.preventDefault(); 
      const newBurger= $("#newBurger").val().trim(); 
      const newBurgerObj = {newBurger: newBurger}; 
      $.ajax ("/api/burgers", {
          type: "POST",
          data: newBurgerObj
      }).then(() => {
            location.reload(); 
        }
      )
  }); 

  $(".deleteBtn").on("click", function(event){
      const burgerId = $(this).data("id"); 
      $.ajax("/api/burgers/" + burgerId, {
          type: "DELETE"
      }).then(() => { 
            location.reload(); 
        }
      )
  })
})