


const recordBtn = document.querySelector(".record"),
  result = document.querySelector(".result"),

  inputLanguage = document.querySelector("#language"),
  clearBtn = document.querySelector(".clear");

let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition,
  recognition,
  recording = false;

function populateLanguages() {
  languages.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang.code;
    option.innerHTML = lang.name;
    inputLanguage.appendChild(option);
  });
}

populateLanguages();

function speechToText() {
  try {
    recognition = new SpeechRecognition();
    recognition.lang = inputLanguage.value;
    recognition.interimResults = true;
    recordBtn.classList.add("recording");
    recordBtn.querySelector("p").innerHTML = "Listening...";
    recognition.start();
    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      //detect when intrim results
      if (event.results[0].isFinal) {
        result.innerHTML += " " + speechResult;
        
        // result.querySelector("p").remove();
      } else {
        //creative p with class interim if not already there
        if (!document.querySelector(".interim")) {
          const interim = document.createElement("p");
          interim.classList.add("interim");
          result.appendChild(interim);
        }
        //update the interim p with the speech result
        document.querySelector(".interim").innerHTML = " " + speechResult;
      }
      //console.log('text', speechResult);
      if (speechResult == "mở tivi"){
        console.log('text', speechResult);
        firebase.database().ref("/TT_IoT/").update({
          "BULB_02":"ON"
       })
      }
      else if(speechResult == "tắt tivi"){
        console.log('text', speechResult);
        firebase.database().ref("/TT_IoT/").update({
          "BULB_02":"OFF"
       })
      }

      else if (speechResult == "mở wifi"){
        console.log('text', speechResult);
        firebase.database().ref("/TT_IoT/").update({
          "BULB_01":"ON"
       })
      }
      else if(speechResult == "tắt wifi"){
        console.log('text', speechResult);
        firebase.database().ref("/TT_IoT/").update({
          "BULB_01":"OFF"
       })
      }      

      else if(speechResult == "tắt podcast"){
        console.log('text', speechResult);
        firebase.database().ref("/TT_IoT/").update({
          "BULB_03":"OFF"
       })
      }   
      else if (speechResult == "mở podcast"){
        console.log('text', speechResult);
        firebase.database().ref("/TT_IoT/").update({
          "BULB_03":"ON"
       })
      }
      
      
    };
    recognition.onspeechend = () => {
      speechToText();
      
    };
    recognition.onerror = (event) => {
      stopRecording();
      if (event.error === "no-speech") {
        alert("No speech was detected. Stopping...");
      } else if (event.error === "audio-capture") {
        alert(
          "No microphone was found. Ensure that a microphone is installed."
        );
      } else if (event.error === "not-allowed") {
        alert("Permission to use microphone is blocked.");
      } else if (event.error === "aborted") {
        alert("Listening Stopped.");
      } else {
        alert("Error occurred in recognition: " + event.error);
      }
    };
  } catch (error) {
    recording = false;

    console.log(error);
  }
}

recordBtn.addEventListener("click", () => {
  if (!recording) {
    speechToText();
    recording = true;
  } else {
    stopRecording();
  }
});

function stopRecording() {
  recognition.stop();
  recordBtn.querySelector("p").innerHTML = "Start";
  recordBtn.classList.remove("recording");
  recording = false;
}



clearBtn.addEventListener("click", () => {
  result.innerHTML = "";

});
