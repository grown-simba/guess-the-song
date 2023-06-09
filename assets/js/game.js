// Make array for questions

// Make rng for selecting lyrics

// Select elements from game.html

// Prompt question to game.html

// Create user selections

// Setting variables to the elements in the html 

var score = 0;
var score_track = document.getElementById("count");
var questionHeading = document.getElementById("questionHeading");
var buttons = document.getElementsByTagName("button");
var iframe = document.getElementById("video");
var previous = document.getElementById("answer");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");

// Loading the songs and video links


// Randomly number generator choices
function rand(max) {
  return Math.floor(Math.random() * max);
}


save("song_q", load("song_o"));
save("song_a", load("song_o"));
save("video_link", load("video_link_o"));

// Generates the questions and the iframe
function generate_questions() {
  // Setting up local variables
  // Song question
  var song_q = load("song_q");;
  // Song link
  var id_img = load("video_link");
  // Song options
  var song_a = load("song_a");
  // Song answers
  var options = [];
  for (var i = 0; i < 3; i++) {
    // Gets a random number from the song question array length
    var ran = rand(song_q.length);
    // Set the iframe attribute to the correct attribute
    iframe.setAttribute("src", id_img[ran]);
    // The option array takes in the correct answer
    options.push(song_q[ran]);
    var answer = song_q[ran];
    // Removes the question asked so it doesn't repeat
    song_q = song_q.filter(item => item != song_q[ran]);
    // Removes the link so it doesn't repeat
    id_img = id_img.filter(item => item != id_img[ran]);
    // Removes the answer so it doesn't repeat
    song_a = song_a.filter(item => item != song_a[ran]);
    // Concats the 2 array together 
    options = options.concat(generate_3questions(song_a));
    options = randomize(options);
    for (var i = 0; i < 4; i++) {
      buttons[i].textContent = options[i];
      if (buttons[i].textContent === answer) {
        buttons[i].setAttribute("data-answer", "correct");
      } else {
        buttons[i].setAttribute("data-answer", "incorrect");
      }
    }


    if (song_q.length === 0) {
      scoreSaveHandler(score, song_q.length);
      window.location.replace("./score.html");
    }
    save("song_q", song_q);
    save("video_link", id_img);
    score_track.textContent = "Your current score is: " + score + "⭐";
  }
}

function scoreSaveHandler(s, sq) {
  var scores = load('score')
  console.log(s, sq)
  if (scores) {
    scores.push(s)
  } else {
    scores = []
    scores.push(s)
  }
  save('score', scores)
  score = 0;
}

// Picks out the other 3 options
function generate_3questions(answer) {
  // Makes empty option
  var options = [];
  var song_a = answer;
  // Makes the 3 other options and stores in array
  for (var i = 0; i < 3; i++) {
    var ran = rand(song_a.length);
    options.push(song_a[ran]);
    song_a = song_a.filter(item => item != song_a[ran]);
  }
  return options;
}

function randomize(array) {
  var sort = array;
  var options = [];
  for (var i = 0; i < array.length; i++) {
    var num = rand(sort.length);
    options.push(sort[num]);
    sort = sort.filter(item => item != sort[num]);
  }
  return options;
}



// //Append variables to HTML button

//Event Listener for Buttons

answerA.addEventListener('click', function (event) {
  event.preventDefault();
  if (answerA.getAttribute("data-answer") === "correct") {
    score = score + 100;
    generate_questions();
    previous.innerHTML = "Your Previous Answer Was Correct 👌👌👌";
  } else {
    score;
    generate_questions();
    previous.innerHTML = "Your Previous Answer Was Incorrect 😒😒😒";
  }

})

answerB.addEventListener('click', function (event) {
  event.preventDefault();
  if (answerB.getAttribute("data-answer") === "Correct") {
    score = score + 100;
    generate_questions();
    previous.innerHTML = "Your Previous Answer Was Correct 👌👌👌";
  } else {
    score;
    generate_questions();
    previous.innerHTML = "Your Previous Answer Was Incorrect 😒😒😒";
  }
})

answerC.addEventListener('click', function (event) {
  event.preventDefault();
  if (answerC.getAttribute("data-answer") === "correct") {
    score = score + 100;
    generate_questions();
    previous.innerHTML = "Your Previous Answer Was Correct 👌👌👌";
  } else {
    score;
    generate_questions();
    previous.innerHTML = "Your Previous Answer Was Incorrect 😒😒😒";
  }
})

answerD.addEventListener('click', function (event) {
  event.preventDefault();
  if (answerD.getAttribute("data-answer") === "correct") {
    score = score + 100;
    generate_questions();
    previous.innerHTML = "Your Previous Answer Was Correct 👌👌👌";
  } else {
    score;
    generate_questions();
    previous.innerHTML = "Your Previous Answer Was Incorrect 😒😒😒";
  }
})

function init() {
  generate_questions();
}

init();

