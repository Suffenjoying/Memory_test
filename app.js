const $docs = document;
let matches = 0;
let questionPanel = $docs.getElementsByClassName("question")[0];

async function getQuestions() {
  let result = await fetch("questions.json");
  let question_list = await result.json();

  return question_list;
}

function displayQuestions(question_list) {
  let questions = question_list.questions;

  for (let i = 0; i < questions.length; i++) {
    var question = questions[i].question;
    var answer = questions[i].answer;
    var choices = questions[i].fields;
    var choice1 = choices.a;
    var choice2 = choices.b;
    var choice3 = choices.c;
    var choice4 = choices.d;

    let div = $docs.createElement("div");
    if (i != questions.length - 1) {
      div.innerHTML = `
            <ul class="ul flex">
                <h3 class="argument">Q${i + 1}. ${question}</h3>
                <div class="li">
                    <li>A. <input type="button" class="option" value="${choice1}"></input></li>
                    <li>B. <input type="button" class="option" value="${choice2}"></input></li>
                    <li>C. <input type="button" class="option" value="${choice3}"></input></li>
                    <li>D. <input type="button" class="option" value="${choice4}"></input></li>
                </div>          

                <a href="#" class="btn-circle-fishy">Next</a>
            </ul>

            
            `;
      questionPanel.appendChild(div);
    } else {
      div.innerHTML = `
            <ul class="ul">
                <h3 class="argument">Q${i + 1}. ${question}</h3>
                <div class="li">
                    <li>A. <input type="button" class="option" value="${choice1}"></input></li>
                    <li>B. <input type="button" class="option" value="${choice2}"></input></li>
                    <li>C. <input type="button" class="option" value="${choice3}"></input></li>
                    <li>D. <input type="button" class="option" value="${choice4}"></input></li>
                </div>          

                <a href="#" class="btn-circle-fishy">Finish</a>
            </ul>
            
            `;
      questionPanel.appendChild(div);
    }
  }

  const ul = $docs.getElementsByClassName("ul")[0];
  const ul2 = $docs.getElementsByClassName("ul")[1];
  const ul3 = $docs.getElementsByClassName("ul")[2];
  const ul4 = $docs.getElementsByClassName("ul")[3];
  const ul5 = $docs.getElementsByClassName("ul")[4];

  ul.classList.add("pressed");

  let buttons1 = ul.getElementsByClassName("option");
  let next1 = ul.getElementsByClassName("btn-circle-fishy")[0];
  let answer1 = questions[0].answer;

  // first

  for (let i = 0; i < buttons1.length; i++) {
    buttons1[i].addEventListener("click", function () {
      doubleCheck();

      buttons1[i].classList.add("optionclicked");
      next1.addEventListener("click", function () {
        let clickedoption = $docs.querySelector(".optionclicked");
        if (answer1 == clickedoption.value) {
          matches += 1;
        }
        ul.remove();
        ul2.classList.add("pressed");
      });
    });
  }

  //second

  let buttons2 = ul2.getElementsByClassName("option");
  let next2 = ul2.getElementsByClassName("btn-circle-fishy")[0];
  let answer2 = questions[1].answer;

  for (let i = 0; i < buttons2.length; i++) {
    buttons2[i].addEventListener("click", function () {
      doubleCheck();

      buttons2[i].classList.add("optionclicked");
      next2.addEventListener("click", function () {
        let clickedoption = $docs.querySelector(".optionclicked");

        if (answer2 == clickedoption.value) {
          matches += 1;
        }

        ul2.remove();
        ul3.classList.add("pressed");
      });
    });
  }

  //third

  let buttons3 = ul3.getElementsByClassName("option");
  let next3 = ul3.getElementsByClassName("btn-circle-fishy")[0];
  let answer3 = questions[2].answer;

  for (let i = 0; i < buttons3.length; i++) {
    buttons3[i].addEventListener("click", function () {
      doubleCheck();

      buttons3[i].classList.add("optionclicked");
      next3.addEventListener("click", function () {
        let clickedoption = $docs.querySelector(".optionclicked");

        if ((answer3 = clickedoption.value)) {
          matches += 1;
        }

        ul3.remove();
        ul4.classList.add("pressed");
      });
    });
  }

  //fourth

  let buttons4 = ul4.getElementsByClassName("option");
  let next4 = ul4.getElementsByClassName("btn-circle-fishy")[0];
  let answer4 = questions[3].answer;

  for (let i = 0; i < buttons4.length; i++) {
    buttons4[i].addEventListener("click", function () {
      doubleCheck();

      buttons4[i].classList.add("optionclicked");
      next4.addEventListener("click", function () {
        let clickedoption = $docs.querySelector(".optionclicked");

        if (answer4 == clickedoption.value) {
          matches += 1;
        }
        ul4.remove();
        ul5.classList.add("pressed");
      });
    });
  }

  //fifht

  let buttons5 = ul5.getElementsByClassName("option");
  let next5 = ul5.getElementsByClassName("btn-circle-fishy")[0];
  let answer5 = questions[4].answer;

  for (let i = 0; i < buttons5.length; i++) {
    buttons5[i].addEventListener("click", function () {
      doubleCheck();

      buttons5[i].classList.add("optionclicked");
      next5.addEventListener("click", function () {
        let clickedoption = $docs.querySelector(".optionclicked");

        if (answer5 == clickedoption.value) {
          matches += 1;
        }
        ul5.remove();
        resultHtml();
      });
    });
  }
}

function doubleCheck() {
  if ($docs.querySelector(".optionclicked")) {
    let double = $docs.querySelector(".optionclicked");
    double.classList.remove("optionclicked");
  }
}

function resultHtml() {
  let score = matches;
  switch (score) {
    case 0:
      score = "Try again!";
      break;
    case 1:
      score = "You can do better!";
      break;
    case 2:
      score = "Not bad!";
      break;
    case 3:
      score = "You are smart!";
      break;
    case 4:
      score = "You are a genius!";
      break;
    case 5:
      score = "Conglaturations! You got them all correct!";
      break;
  }
  const result = $docs.getElementsByClassName("result")[0];
  const divresult = $docs.createElement("div");
  divresult.innerHTML = `
<h2>Here is your score!</h2>
<h2>You got ${matches}/5</h2>
<h2>${score}</h2>
<div class="back">
<a href="index.html" class="btn-text-3d">Back to Start</a>
</div>
`;
  result.appendChild(divresult);
}

$docs.addEventListener(
  "DOMContentLoaded",
  getQuestions().then((question_list) => displayQuestions(question_list))
);
