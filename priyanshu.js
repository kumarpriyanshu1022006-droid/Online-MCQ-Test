const QUESTION_BANK = [
      {
        id: 1,
        questionText: "Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        correctOption: "A",
      },
      {
        id: 2,
        questionText: "Which CSS property is used to change text color?",
        options: ["font-style", "text-color", "color", "font-color"],
        correctOption: "C",
      },
      {
        id: 3,
        questionText: "Bootstrap is mainly used for?",
        options: ["Backend logic", "Database design", "Responsive UI", "Compilers"],
        correctOption: "C",
      },
      {
        id: 4,
        questionText: "Which symbol is used for comments in JavaScript (single line)?",
        options: ["<!-- -->", "//", "/* */", "#"],
        correctOption: "B",
      },
      {
        id: 5,
        questionText: "Which HTML tag is used to include JavaScript code?",
        options: ["<javascript>", "<js>", "<script>", "<code>"],
        correctOption: "C",
      },
      {
        id: 6,
        questionText: "Which keyword declares a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        correctOption: "C",
      },
      {
        id: 7,
        questionText: "Which CSS unit is relative to the root HTML font-size?",
        options: ["px", "em", "rem", "%"],
        correctOption: "C",
      },
      {
        id: 8,
        questionText: "Which of these is NOT a JavaScript data type?",
        options: ["Number", "String", "Boolean", "Character"],
        correctOption: "D",
      },
      {
        id: 9,
        questionText: "Which method is used to select an element by ID in JS?",
        options: [
          "getElementById()",
          "querySelectorAll()",
          "getElementsByClassName()",
          "getElementByName()",
        ],
        correctOption: "A",
      },
      {
        id: 10,
        questionText: "Which attribute is used in HTML to apply CSS inline?",
        options: ["class", "style", "css", "design"],
        correctOption: "B",
      },
      {
        id: 11,
        questionText: "Which Bootstrap class makes a button look primary?",
        options: [".btn-main", ".btn-blue", ".btn-primary", ".btn-main-primary"],
        correctOption: "C",
      },
      {
        id: 12,
        questionText: "Which HTML tag is used to define a table row?",
        options: ["<tr>", "<td>", "<th>", "<row>"],
        correctOption: "A",
      },
      {
        id: 13,
        questionText: "In CSS, which property controls the size of text?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        correctOption: "C",
      },
      {
        id: 14,
        questionText: "Which JavaScript method converts JSON to an object?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.toObject()",
          "JSON.convert()",
        ],
        correctOption: "A",
      },
      {
        id: 15,
        questionText: "Which tag is used for the largest heading in HTML?",
        options: ["<h1>", "<heading>", "<head>", "<title>"],
        correctOption: "A",
      },
      {
        id: 16,
        questionText: "Which Bootstrap class creates a responsive grid column?",
        options: [".grid-col", ".row-col", ".col-md-6", ".grid-md-6"],
        correctOption: "C",
      },
      {
        id: 17,
        questionText: "Which HTML element is used to display an image?",
        options: ["<image>", "<pic>", "<img>", "<src>"],
        correctOption: "C",
      },
      {
        id: 18,
        questionText: "Which CSS property controls the background color?",
        options: ["bg-color", "background-color", "color-background", "background-style"],
        correctOption: "B",
      },
      {
        id: 19,
        questionText: "Which JavaScript function is used to write in the console?",
        options: [
          "console.write()",
          "console.log()",
          "console.print()",
          "log.console()",
        ],
        correctOption: "B",
      },
      {
        id: 20,
        questionText: "Which Bootstrap class makes text center-aligned?",
        options: [".text-left", ".text-center", ".text-middle", ".text-align-center"],
        correctOption: "B",
      },
      {
        id: 21,
        questionText: "Which HTML tag defines a hyperlink destination?",
        options: ["href", "src", "link", "url"],
        correctOption: "A",
      },
      {
        id: 22,
        questionText: "Which CSS property adds space inside an element border?",
        options: ["margin", "padding", "spacing", "border-gap"],
        correctOption: "B",
      },
      {
        id: 23,
        questionText: "Which JavaScript method shows an alert box?",
        options: ["alert()", "prompt()", "log()", "show()"],
        correctOption: "A",
      },
      {
        id: 24,
        questionText: "Which Bootstrap class gives margin at bottom?",
        options: [".mb-3", ".mt-3", ".ml-3", ".mr-3"],
        correctOption: "A",
      },
      {
        id: 25,
        questionText: "In HTML5, which tag is used for navigation links?",
        options: ["<nav>", "<navigate>", "<links>", "<menu>"],
        correctOption: "A",
      },
      {
        id: 26,
        questionText: "Which CSS property controls the outer space of an element?",
        options: ["padding", "margin", "gap", "border-spacing"],
        correctOption: "B",
      },
      {
        id: 27,
        questionText: "Which JavaScript keyword is used to declare a variable (ES6)?",
        options: ["var", "let", "variable", "define"],
        correctOption: "B",
      },
      {
        id: 28,
        questionText: "Which Bootstrap class makes an element full-width on small screens?",
        options: [".col-12", ".col-sm-full", ".col-full", ".col-small-12"],
        correctOption: "A",
      },
      {
        id: 29,
        questionText: "Which HTML tag is used to create a list with bullets?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        correctOption: "B",
      },
      {
        id: 30,
        questionText: "Which CSS property is used to make text bold?",
        options: ["font-weight", "font-bold", "text-weight", "text-bold"],
        correctOption: "A",
      },
    ];

    
    const TOTAL_QUESTIONS_IN_TEST = 15;
    const TEST_DURATION_SECONDS = 15 * 60; 

    let quizQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = {}; 
    let timerInterval = null;
    let timeLeft = TEST_DURATION_SECONDS;
    let quizSubmitted = false;

    
    const startScreen = document.getElementById("start-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const resultScreen = document.getElementById("result-screen");

    const btnStart = document.getElementById("btnStart");
    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");
    const btnSubmit = document.getElementById("btnSubmit");
    const btnRetake = document.getElementById("btnRetake");

    const questionTextEl = document.getElementById("question-text");
    const questionCountEl = document.getElementById("question-count");
    const timerEl = document.getElementById("timer");

    const optionInputs = document.getElementsByName("option");
    const labelA = document.getElementById("labelA");
    const labelB = document.getElementById("labelB");
    const labelC = document.getElementById("labelC");
    const labelD = document.getElementById("labelD");

    const resTotal = document.getElementById("res-total");
    const resAttempted = document.getElementById("res-attempted");
    const resCorrect = document.getElementById("res-correct");
    const resWrong = document.getElementById("res-wrong");
    const resPercentage = document.getElementById("res-percentage");
    const resultMessage = document.getElementById("result-message");

    

    function shuffleArray(array) {
      const arr = array.slice();
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      const mm = mins < 10 ? "0" + mins : mins;
      const ss = secs < 10 ? "0" + secs : secs;
      return mm + ":" + ss;
    }

    
    function startTimer() {
      timeLeft = TEST_DURATION_SECONDS;
      timerEl.textContent = formatTime(timeLeft);

      if (timerInterval) {
        clearInterval(timerInterval);
      }

      timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = formatTime(timeLeft);
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          timerEl.textContent = "00:00";
          submitQuiz(true); 
        }
      }, 1000);
    }

   
    function startQuiz() {
      
      quizSubmitted = false;
      userAnswers = {};
      currentQuestionIndex = 0;

      const shuffled = shuffleArray(QUESTION_BANK);
      quizQuestions = shuffled.slice(0, TOTAL_QUESTIONS_IN_TEST);

     
      startScreen.classList.add("d-none");
      resultScreen.classList.add("d-none");
      quizScreen.classList.remove("d-none");

     
      startTimer();

      
      showQuestion(currentQuestionIndex);
    }

    function showQuestion(index) {
      const q = quizQuestions[index];
      if (!q) return;

      questionTextEl.textContent = q.questionText;
      questionCountEl.textContent =
        "Question " + (index + 1) + " of " + quizQuestions.length;

      labelA.textContent = q.options[0];
      labelB.textContent = q.options[1];
      labelC.textContent = q.options[2];
      labelD.textContent = q.options[3];

      
      optionInputs.forEach((opt) => (opt.checked = false));

      
      const savedAnswer = userAnswers[q.id];
      if (savedAnswer) {
        const radioToCheck = document.querySelector(
          'input[name="option"][value="' + savedAnswer + '"]'
        );
        if (radioToCheck) {
          radioToCheck.checked = true;
        }
      }

    
      btnPrev.disabled = index === 0;
      btnNext.disabled = index === quizQuestions.length - 1;

      
    }

    function saveSelectedAnswer() {
      const q = quizQuestions[currentQuestionIndex];
      if (!q) return;

      const selected = document.querySelector('input[name="option"]:checked');
      if (selected) {
        userAnswers[q.id] = selected.value;
      } else {
        delete userAnswers[q.id];
      }
    }

    function nextQuestion() {
      saveSelectedAnswer();
      if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
      }
    }

    function prevQuestion() {
      saveSelectedAnswer();
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
      }
    }

    function submitQuiz(isAuto = false) {
      if (quizSubmitted) return; 
      quizSubmitted = true;

     
      saveSelectedAnswer();

      
      if (timerInterval) {
        clearInterval(timerInterval);
      }

      const total = quizQuestions.length;
      let correct = 0;
      let attempted = 0;

      quizQuestions.forEach((q) => {
        const userAns = userAnswers[q.id];
        if (userAns) {
          attempted++;
          if (userAns === q.correctOption) {
            correct++;
          }
        }
      });

      const wrong = attempted - correct;
      const percentage = ((correct / total) * 100).toFixed(2);

      
      resTotal.textContent = total;
      resAttempted.textContent = attempted;
      resCorrect.textContent = correct;
      resWrong.textContent = wrong;
      resPercentage.textContent = percentage;

      if (isAuto) {
        resultMessage.textContent =
          "Time is over! Your test has been submitted automatically.";
      } else {
        resultMessage.textContent = "You have submitted the test successfully.";
      }

      
      quizScreen.classList.add("d-none");
      startScreen.classList.add("d-none");
      resultScreen.classList.remove("d-none");
    }

    function retakeQuiz() {
      
      resultScreen.classList.add("d-none");
      quizScreen.classList.add("d-none");
      startScreen.classList.remove("d-none");

     
      timeLeft = TEST_DURATION_SECONDS;
      timerEl.textContent = formatTime(timeLeft);
    }

    
    btnStart.addEventListener("click", startQuiz);
    btnPrev.addEventListener("click", prevQuestion);
    btnNext.addEventListener("click", nextQuestion);
    btnSubmit.addEventListener("click", () => submitQuiz(false));
    btnRetake.addEventListener("click", retakeQuiz);