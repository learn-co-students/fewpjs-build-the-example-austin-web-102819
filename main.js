// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const likeButtons = document.getElementsByClassName("like");
const error = document.getElementById("modal");
for (let i = 0; i < likeButtons.length; i++) {
  let button = likeButtons[i];
  button.addEventListener("click", () => {
    mimicServerCall("bogusURL")
      .then(serverMessage => {
        button.classList.add("activated-heart");
        button.innerText = "Like! " + FULL_HEART;
      })
      .catch(() => {
        error.className = "";
        setTimeout(() => {
          error.className = "hidden";
        }, 5000);
      });
  });
}

//
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
