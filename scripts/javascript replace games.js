$(document).ready(function(){

  /////////////////////----------------PC-----------------------//////////////

    $(".PcSecondPage").click(function(){  //pc page 2

      if (  !( $("#pcPar1").text() == "Doom Eternal" )   ) { // do nothing if you already in second page

        $("#PcFirstRow").hide(2000, function(){   // because we want the effect to happen first

            //////////-------------1 ----------------------///////

        $("#pcLink1").attr("href", "Doom Eternal.html");
  
        $("#pcImg1").attr({
  
              "src" : "image/Doom Eternal.jpg",
  
              "alt" : "Doom Eternal"
              
        });
  
  
        $("#pcPar1").text("Doom Eternal"); 

        //////////-------------2 ----------------------///////

        $("#pcLink2").attr("href", "Team Fortress 2.html");
  
        $("#pcImg2").attr({
  
              "src" : "image/Team Fortress 2.jpg",
  
              "alt" : "Team Fortress 2"
              
        });
  
  
        $("#pcPar2").text("Team Fortress 2"); 


        //////////-------------3 ----------------------///////
    
        $("#pcLink3").attr("href", "Cyber Hunter.html");
  
        $("#pcImg3").attr({
  
              "src" : "image/Cyber Hunter.jpg",
  
              "alt" : "Cyber Hunter"
              
        });
  
  
        $("#pcPar3").text("Cyber Hunter"); 


        });
          

        $("#PcFirstRow").show(2000) ;   //////////-----first row --------////// 

        

        

        $("#PcSecondRow").hide(3000, function(){  //////////-----second row --------////// 

          //////////-------------4 ----------------------///////

          $("#pcLink4").attr("href", "Stay Out.html");
  
          $("#pcImg4").attr({
  
              "src" : "image/Stay Out.jpg",
  
              "alt" : "Stay Out"
              
          });
  
  
          $("#pcPar4").text("Stay Out"); 


          //////////-------------5 ----------------------///////

          $("#pcLink5").attr("href", "Star Conflict.html");
  
          $("#pcImg5").attr({
  
              "src" : "image/Star Conflict.jpg",
  
              "alt" : "Star Conflict"
              
          });
  
  
          $("#pcPar5").text("Star Conflict"); 


          //////////-------------6 ----------------------///////

          $("#pcLink6").attr("href", "Yu-Gi-Oh! Duel Links.html");
  
          $("#pcImg6").attr({
  
              "src" : "image/Yu-Gi-Oh!.jpg",
  
              "alt" : "Yu-Gi-Oh!"
              
          });
  
  
          $("#pcPar6").text("Yu-Gi-Oh!");

          });
          

          $("#PcSecondRow").show(3000) ;
 

      } 
      
    });









    $(".PcFirstPage").click(function(){  //pc page 1

      if (  !( $("#pcPar1").text() == "CS GO" )   ){ // do nothing if you already in first page

        $("#PcFirstRow").hide(2000, function(){

              //////////-------------1 ----------------------///////

         $("#pcLink1").attr("href", "Csgo.html");
  
         $("#pcImg1").attr({
  
              "src" : "image/cs go.jpg",
  
              "alt" : "CS GO"
              
         });
  
  
         $("#pcPar1").text("CS GO"); 
 
         //////////-------------2 ----------------------///////

         $("#pcLink2").attr("href", "Dota.html");
  
         $("#pcImg2").attr({
  
              "src" : "image/DOTA 2.jpg",
  
              "alt" : "DOTA 2"
              
         });
  
  
         $("#pcPar2").text("DOTA 2"); 


         //////////-------------3 ----------------------///////
    
         $("#pcLink3").attr("href", "Darksouls.html");
  
         $("#pcImg3").attr({
  
              "src" : "image/dark soul 3.jpg",
  
              "alt" : "Dark Soul 3"
              
         });
  
  
         $("#pcPar3").text("Dark Soul 3"); 

            });
          
         $("#PcFirstRow").show(2000) ;   //////////-----first row --------////// 

        

        $("#PcSecondRow").hide(3000, function(){  //////////-----second row --------////// 

          //////////-------------4 ----------------------///////

               $("#pcLink4").attr("href", "MonsterHunter.html");
  
         $("#pcImg4").attr({
  
              "src" : "image/monster hunter world .jpg",
  
              "alt" : "Monster Hunter World"
              
           });
  
  
          $("#pcPar4").text("Monster Hunter World"); 


           //////////-------------5 ----------------------///////

          $("#pcLink5").attr("href", "RedDeadRedemption.html");
  
           $("#pcImg5").attr({
  
               "src" : "image/Red Dead Redemption 2.jpg",
  
              "alt" : "Red Dead Redemption 2"
              
           });
  
  
           $("#pcPar5").text("Red Dead Redemption 2"); 


           //////////-------------6 ----------------------///////

           $("#pcLink6").attr("href", "RocketLeague.html");
  
           $("#pcImg6").attr({
  
              "src" : "image/rocket league.jpg",
  
              "alt" : "Rocket League"
              
          });
  
  
          $("#pcPar6").text("Rocket League");

            });
            
          
          $("#PcSecondRow").show(3000) ;
 

      } 
      
    });





    /////////////////////------------------mobile-----------------------//////////////




    $(".mobaSecondPage").click(function(){  //moba page 2

      if (  !( $("#mobaPar1").text() == "Alto's Odyssey" )   ) { // do nothing if you already in second page

        $("#MobaFirstRow").hide(2000, function(){   

            //////////-------------1 ----------------------///////

        $("#mobaLink1").attr("href", "Alto's Odyssey.html");
  
        $("#mobaImg1").attr({
  
              "src" : "image/Alto's Odyssey.jpg",
  
              "alt" : "Alto's Odyssey"
              
        });
  
  
        $("#mobaPar1").text("Alto's Odyssey"); 

        //////////-------------2 ----------------------///////

        $("#mobaLink2").attr("href", "Brawl Stars.html");
  
        $("#mobaImg2").attr({
  
              "src" : "image/Brawl Stars.jpg",
  
              "alt" : "Brawl Stars"
              
        });
  
  
        $("#mobaPar2").text("Brawl Stars"); 


        //////////-------------3 ----------------------///////
    
        $("#mobaLink3").attr("href", "Legends of Runeterra.html");
  
        $("#mobaImg3").attr({
  
              "src" : "image/Legends of Runeterra.jpg",
  
              "alt" : "Legends of Runeterra"
              
        });
  
  
        $("#mobaPar3").text("Legends of Runeterra"); 


        });
          

        $("#MobaFirstRow").show(2000) ;   //////////-----first row --------////// 

        

        

        $("#MobaSecondRow").hide(3000, function(){  //////////-----second row --------////// 

          //////////-------------4 ----------------------///////

          $("#mobaLink4").attr("href", "Mario Kart Tour.html");
  
        $("#mobaImg4").attr({
  
              "src" : "image/Mario Kart Tour.png",
  
              "alt" : "Mario Kart Tour"
              
        });
  
  
        $("#mobaPar4").text("Mario Kart Tour"); 


          //////////-------------5 ----------------------///////

          $("#mobaLink5").attr("href", "Roblox.html");
  
        $("#mobaImg5").attr({
  
              "src" : "image/Roblox.jpg",
  
              "alt" : "Roblox"
              
        });
  
  
        $("#mobaPar5").text("Roblox"); 

          //////////-------------6 ----------------------///////

          $("#mobaLink6").attr("href", "Smash Hit.html");
  
        $("#mobaImg6").attr({
  
              "src" : "image/Smash Hit.png",
  
              "alt" : "Smash Hit"
              
        });
  
  
        $("#mobaPar6").text("Smash Hit"); 

      });

      $("#MobaSecondRow").show(2000) ; 

      } 
      
    });





    $(".mobaFirstPage").click(function(){  //moba page 1

      if (  !( $("#mobaPar1").text() == "Call of Duty: Mobile" )   ) { // do nothing if you already in first page

        $("#MobaFirstRow").hide(2000, function(){   

            //////////-------------1 ----------------------///////

        $("#mobaLink1").attr("href", "CallofDuty.html");
  
        $("#mobaImg1").attr({
  
              "src" : "image/call-of-duty-mobile.jpg",
  
              "alt" : "Call of Duty: Mobile"
              
        });
  
  
        $("#mobaPar1").text("Call of Duty: Mobile"); 

        //////////-------------2 ----------------------///////

        $("#mobaLink2").attr("href", "Disorder.html");
  
        $("#mobaImg2").attr({
  
              "src" : "image/Disorder.jpg",
  
              "alt" : "Disorder"
              
        });
  
  
        $("#mobaPar2").text("Disorder"); 


        //////////-------------3 ----------------------///////
    
        $("#mobaLink3").attr("href", "AsphaltLegends.html");
  
        $("#mobaImg3").attr({
  
              "src" : "image/Asphalt 9 Legends.jpg",
  
              "alt" : "Asphalt 9 Legends"
              
        });
  
  
        $("#mobaPar3").text("Asphalt 9 Legends"); 


        });
          

        $("#MobaFirstRow").show(2000) ;   //////////-----first row --------////// 

        

        

        $("#MobaSecondRow").hide(3000, function(){  //////////-----second row --------////// 

          //////////-------------4 ----------------------///////

          $("#mobaLink4").attr("href", "PokemonGo.html");
  
        $("#mobaImg4").attr({
  
              "src" : "image/Pokemon GO.jpg",
  
              "alt" : "Pokemon GO"
              
        });
  
  
        $("#mobaPar4").text("Pokemon GO"); 


          //////////-------------5 ----------------------///////

          $("#mobaLink5").attr("href", "mobilelegends.html");
  
        $("#mobaImg5").attr({
  
              "src" : "image/mobile legends.jpg",
  
              "alt" : "mobile legends"
              
        });
  
  
        $("#mobaPar5").text("Mobile Legends"); 

          //////////-------------6 ----------------------///////

          $("#mobaLink6").attr("href", "Garenafreefire.html");
  
        $("#mobaImg6").attr({
  
              "src" : "image/Garena-Free-Fire2.jpg",
  
              "alt" : "Free Fire"
              
        });
  
  
        $("#mobaPar6").text("Garena Free Fire"); 

      });

      $("#MobaSecondRow").show(3000) ; 

      } 
      
    });




    
  });