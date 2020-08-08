$(function() {
    // enter
      
  // click ajax call
  const gamelist = document.getElementById('gamelist');
      $("#search").on("click", function() {
          var searchTerm = $("#searchTerm").val();
          var url = "https://api.rawg.io/api/games?page_size=25&ordering=-rating&search="+ searchTerm; 
          console.log(url);
          $.ajax({
              url: url,
              type: 'GET',
              contentType: "application/json; charset=utf-8",
              async: false,
              dataType: "json",
            // plop data
              success: function(data) {
                  
                var gamelist = data.results
                //console.log(gamelist);
                generategame(gamelist);
              }
          })
          .done(function(data) {
            console.log("done");
          })
          .fail(function() {
              console.log("error");
          })
          .always(function() {
              console.log("complete");
          });
          
          
      });
      const gameList = document.getElementById('#gameList');
      function generategame(gamelist){
        console.log(gamelist);
        
        const htmlstring = gamelist
        .map((gamelist) => {
            console.log(gamelist.stores);
            return `
            <li class="game">
                <h2><a href="https://www.google.com/search?-b-d&q=${gamelist.name}" target="_blank">${gamelist.name}</a></h2>
                <p>Rating: ${gamelist.rating}</p>

                <img src="${gamelist.background_image}"></img>
            </li>
        `;
        })
        .join('');
        
    gamelist.innerHTML = htmlstring;
    //console.log(gamelist.innerHTML);
    insertlist(htmlstring);
      }
    
    function insertlist(output){
        $("#gamelist").prepend(output);
    }
  });