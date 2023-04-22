function clickHandler() {
    if (document.getElementById("exampleInputEmail").value === "minhtuan@gmail.com" && document.getElementById("exampleInputPassword").value === '123'){
      console.log("redirect to chat.html");
       window.location.replace("index_main.html");
    } else {
      alert('Wrong!');
    }
  }