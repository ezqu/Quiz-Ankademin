// spara cookie, hämta btn
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode");
//  addera darkmode, slå på
const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", 'enabled');
};
// slå av / remove
const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", 'disabled');
};
// ha samma current 
if (darkMode === "enabled") {
    enableDarkMode();
};
// evenlistener till btn, om inte på - slå på / om på - slå av
darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    }else {
        disableDarkMode();
    }

});

// array med frågor och val
const Data = [
    {
        question: "Is it true that rabbits have four legs?",
        a: "Yes",
        b: "No",
        correct: "a",
    },
    {
        question: "Is 5+5= 10?",
        a: "Yes it's 10",
        b: "Cant be!",
        correct: "a",
    },
    {
        question: "Can a human live forever?",
        a: "Ofcurse!!",
        b: "Nope",
        correct: "b",
    },
    {
        question: "Does Pinocchio have a big nose?",
        a: "Yes",
        b: "no, in fact he doesnt have a nose",
        correct: "a",
    },
    {
        question: "1+1 = ?",
        a: "2",
        b: "11",
        correct: "a",
    },
    {
        question: "Can Iron-man fly?",
        a: "Yes",
        b: "No",
        correct: "a",
    },
    {
        question: "Was donald trump a president?",
        a: "Yes",
        b: "No",
        correct: "a",
    },
    {
        question: "Can a dog bark?",
        a: "Yes",
        b: "No",
        correct: "a",
    },
    {
        question: "Can a cat meow?",
        a: "Yes",
        b: "No",
        correct: "a",
    },
    {
        question: "Can a cow speak?",
        a: "No",
        b: "Yes",
        correct: "a",
    },
    
  ];

  const grabId = (idName) => {
    const ElementId = document.getElementById(idName);
    if (ElementId) 
    return ElementId;
  };

  // id av varje label 
  const option1 = grabId("option1");
  const option2 = grabId("option2");
  // hämta knapparna 
  let nextBtn = grabId("btn-next");
  let prevBtn = grabId("btn-prev");
  const quiz = grabId("quiz");
  // h3 som ska manipuleras 
  const question = document.querySelector("h3");
  const answears = document.querySelectorAll(".answear");
  // initiera varibler
  let currentQuiz = 0;
  let score = 0;
  
  // kollar svar / val
  loadQuiz();
  function loadQuiz() {
    unCheckAnswear();
  // val
    let nextOption = Data[currentQuiz];
    question.innerText = nextOption.question;
    option1.innerText = nextOption.a;
    option2.innerText = nextOption.b;
  // klick funk
    nextBtn.addEventListener("click", nextQuestion);
    prevBtn.addEventListener("click", PreviousQuestion);
  };
  // svar och få värde
  function nextQuestion() {
    const answear = getValue();
    // om rätt svar = ++ värde
    if (answear) {
      if (answear === Data[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      // print poäng + färg
      if (currentQuiz < Data.length) {
        loadQuiz();
      } else 
      if (score > 7) {
        quiz.innerHTML = `<h2> Congratulations <br/>You scored ${score}/${Data.length}</h2>`;
        quiz.style.color = "green";
      } else if (score >= 5) {
        quiz.innerHTML = `<h2> You scored ${score}/${Data.length}`;
        quiz.style.color = "orange";
      } else {
        quiz.innerHTML = `<h2> You scored ${score}/${Data.length}`;
        quiz.style.color = "red";
      }
    
    }
  };
  // -------------------
  function PreviousQuestion() {
    if (currentQuiz.valueOf() === 0) {
      alert("");
    } else {
      initialQuiz--;
      loadQuiz();
    }
  };

  // få värde, för varje svar ++ till värde och få tbx värde
  function getValue() {
    let value = undefined;
    answears.forEach((answear) => {
      if (answear.checked) {
        value = answear.id;
      };
    });
    return value;
  };
  
  // --------------------
  function unCheckAnswear() {
    answears.forEach((answear) => {
      answear.checked = false;
    });
  };