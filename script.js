let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode");

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", 'disabled');
};

if (darkMode === "enabled") {
    enableDarkMode();
};

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    }else {
        disableDarkMode();
    }

});

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
  const option1 = grabId("option1");
  const option2 = grabId("option2");
  let nextBtn = grabId("btn-next");
  let prevBtn = grabId("btn-prev");
  const quiz = grabId("quiz");
  const question = document.querySelector("h3");
  const answears = document.querySelectorAll(".answear");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  function loadQuiz() {
    unCheckAnswear();
    let nextOption = Data[currentQuiz];
    question.innerText = nextOption.question;
    option1.innerText = nextOption.a;
    option2.innerText = nextOption.b;
    nextBtn.addEventListener("click", nextQuestion);
    prevBtn.addEventListener("click", PreviousQuestion);
  };
  function nextQuestion() {
    const answear = getValue();
    if (answear) {
      if (answear === Data[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      
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
  function PreviousQuestion() {
    if (currentQuiz.valueOf() === 0) {
      alert("");
    } else {
      initialQuiz--;
      loadQuiz();
    }
  };
  
  function getValue() {
    let value = undefined;
    answears.forEach((answear) => {
      if (answear.checked) {
        value = answear.id;
      };
    });
    return value;
  };
  
  function unCheckAnswear() {
    answears.forEach((answear) => {
      answear.checked = false;
    });
  };