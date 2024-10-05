function seeSign(){
  document.getElementById("signup-container").style.display ="flex";
}

function dontSeeSign(){
    document.getElementById("signup-container").style.display ="none";
  }

  function seeLog(){
    document.getElementById("login-container").style.display ="flex";
  }

  function dontSeeLog(){
    document.getElementById("login-container").style.display ="none";
  }


  function hideAcc(){
    document.getElementById("acc").style.display ="none";
    document.getElementById("btns").style.display ="flex";
  }

  function showNav(){
    document.getElementById("nav").style.display ="flex";
    document.getElementById("acc").style.display ="none";
    document.getElementById("btns").style.display ="flex";
    document.getElementById("last").style.display ="flex";
  }
  function hideNav(){
    document.getElementById("nav").style.display ="none";
    document.getElementById("acc").style.display ="flex";
    document.getElementById("btns").style.display ="none";
    document.getElementById("last").style.display ="none";
  }
