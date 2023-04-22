const firebaseConfig = {
    apiKey: "AIzaSyALb_NY9v_5287AiGNHlhKUA25ktgTCnA0",
    authDomain: "htniot.firebaseapp.com",
    databaseURL: "https://htniot-default-rtdb.firebaseio.com",
    projectId: "htniot",
    storageBucket: "htniot.appspot.com",
    messagingSenderId: "172341413",
    appId: "1:172341413:web:acd5985ba646f407bd754c",
    measurementId: "G-CTHFTD959R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var s = 20;

  
  firebase.database().ref("/TT_IoT/nhietdo").on("value",function(snapshot){
    
    var nd = snapshot.val();  
    s = Number(nd);
    console.log(s);
    document.getElementById("nhietdo").innerHTML = String(nd)+"°C";
  });
  
  
  $(document).ready(function(){
    for(var i = 0;i<42;i++){
      $('.container1').append('<div class="seconds" />');
    }
  

    var deg = 140;
    for(var i = 1;i<43;i++){
      deg=deg+6;
      console.log(deg+" : "+i);
      $('.seconds:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg+'deg) translatex(100px)',
        'opacity' : '0.1'
      }); 
    }  
    


      for(var i = 1;i<=s+1;i++){

        $('.seconds:nth-child('+i+')').css({
  
          'opacity' : '1'
        }); 
      } 

    });
    
  function updatedata(var1,var2){
    firebase.database().ref("/TT_IoT/"+ var1).on("value",function(snapshot){
        if(snapshot.exists()){
          console.log(snapshot.val())
      
          var bulb_01_status = snapshot.val()
          if (bulb_01_status == "ON"){
            document.getElementById(var2).checked = true
            
          }
          else{
            document.getElementById(var2).checked = false;
          }
        }
        else
          console.log("No data available!")
      });

  }

updatedata("BULB_01","switch1");
updatedata("BULB_02","switch2");
updatedata("LOOK","switch3");
updatedata("BULB_04","switch4");
updatedata("BULB_05","switch5");
updatedata("BULB_06","switch6");
updatedata("BULB_07","switch7");
updatedata("BULB_08","switch8");
  

document.getElementById("switch1").onclick = function(e){
    if (this.checked == true){   

      firebase.database().ref("/TT_IoT/").update({
       "BULB_01":"ON"
    })
    }
    else{  
      firebase.database().ref("/TT_IoT/").update({
        "BULB_01":"OFF"
      })
    }
};
document.getElementById("switch2").onclick = function(e){
    if (this.checked == true){   

      firebase.database().ref("/TT_IoT/").update({
       "BULB_02":"ON"
    })
    }
    else{  
      firebase.database().ref("/TT_IoT/").update({
        "BULB_02":"OFF"
      })
    }
};
document.getElementById("switch3").onclick = function(e){
    if (this.checked == true){   

      firebase.database().ref("/TT_IoT/").update({
       "LOOK":"ON"
    })
    }
    else{  
      firebase.database().ref("/TT_IoT/").update({
        "LOOK":"OFF"
      })
    }
};
document.getElementById("switch4").onclick = function(e){
    if (this.checked == true){   

      firebase.database().ref("/TT_IoT/").update({
       "BULB_04":"ON"
    })
    }
    else{  
      firebase.database().ref("/TT_IoT/").update({
        "BULB_04":"OFF"
      })
    }
};
document.getElementById("switch5").onclick = function(e){
    if (this.checked == true){   

      firebase.database().ref("/TT_IoT/").update({
       "BULB_05":"ON"
    })
    }
    else{  
      firebase.database().ref("/TT_IoT/").update({
        "BULB_05":"OFF"
      })
    }
};
document.getElementById("switch6").onclick = function(e){
    if (this.checked == true){   

      firebase.database().ref("/TT_IoT/").update({
       "BULB_06":"ON"
    })
    }
    else{  
      firebase.database().ref("/TT_IoT/").update({
        "BULB_06":"OFF"
      })
    }
};
document.getElementById("switch7").onclick = function(e){
    if (this.checked == true){   

      firebase.database().ref("/TT_IoT/").update({
       "BULB_07":"ON"
    })
    }
    else{  
      firebase.database().ref("/TT_IoT/").update({
        "BULB_07":"OFF"
      })
    }
};
document.getElementById("switch8").onclick = function(e){
    if (this.checked == true){   

      firebase.database().ref("/TT_IoT/").update({
       "BULB_08":"ON"
    })
    }
    else{  
      firebase.database().ref("/TT_IoT/").update({
        "BULB_08":"OFF"
      })
    }
};


var video = document.getElementById("video");

document.getElementById("switch9").onclick = function(e){
  if (this.checked == true){   
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(stream) {
      video.srcObject = stream;
    })
    .catch(function(error) {
      console.log("Không thể truy cập camera: " + error);
    });

  }
  else{  
    var stream = video.srcObject;
    var tracks = stream.getTracks();
  
    tracks.forEach(function(track) {
      track.stop();
    });
  
    video.srcObject = null;
  }
};