document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-btn");
  const restartButton = document.getElementById("restart-btn");
  const scoreDisplay = document.getElementById("score");
  const resultContainer = document.getElementById("result-container");
  const nextButton = document.getElementById("next-btn");
  const choicesList = document.getElementById("choices-list");
  const questionText = document.getElementById("question-text");
  const questionContainer = document.getElementById("question-container");

  const questions = [
    {
      question: "Who is known as the 'Master Blaster' of Indian cricket?",
      choices: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Rohit Sharma"],
      answer: "Sachin Tendulkar",
    },
    {
      question: "Who captained India to victory in the 2011 Cricket World Cup?",
      choices: ["Virat Kohli", "Kapil Dev", "MS Dhoni", "Sourav Ganguly"],
      answer: "MS Dhoni",
    },
    {
      question: "Who is popularly known as the 'Hitman'?",
      choices: ["Shikhar Dhawan", "Rohit Sharma", "KL Rahul", "Hardik Pandya"],
      answer: "Rohit Sharma",
    },
    {
      question: "Which Indian bowler is known as the 'Yorker King'?",
      choices: [
        "Jasprit Bumrah",
        "Mohammed Shami",
        "Ravichandran Ashwin",
        "Bhuvneshwar Kumar",
      ],
      answer: "Jasprit Bumrah",
    },
    {
      question: "Who captained India to victory in the 1983 Cricket World Cup?",
      choices: [
        "Sunil Gavaskar",
        "Kapil Dev",
        "Mohinder Amarnath",
        "Ravi Shastri",
      ],
      answer: "Kapil Dev",
    },
    {
      question: "Which Indian cricketer is known as 'The Wall'?",
      choices: [
        "Rahul Dravid",
        "VVS Laxman",
        "Cheteshwar Pujara",
        "Gautam Gambhir",
      ],
      answer: "Rahul Dravid",
    },
    {
      question:
        "Who was the first Indian to score a double century in men's ODI cricket?",
      choices: [
        "Virender Sehwag",
        "Sachin Tendulkar",
        "Rohit Sharma",
        "Virat Kohli",
      ],
      answer: "Sachin Tendulkar",
    },
    {
      question: "Which Indian spinner is nicknamed 'Jumbo'?",
      choices: [
        "Harbhajan Singh",
        "Anil Kumble",
        "Ravindra Jadeja",
        "Kuldeep Yadav",
      ],
      answer: "Anil Kumble",
    },
    {
      question:
        "Who captained India to victory in the 2024 Men's T20 World Cup?",
      choices: [
        "Rohit Sharma",
        "Virat Kohli",
        "Hardik Pandya",
        "Suryakumar Yadav",
      ],
      answer: "Rohit Sharma",
    },
    {
      question: "Which Indian wicketkeeper is nicknamed 'Captain Cool'?",
      choices: ["Rishabh Pant", "Dinesh Karthik", "MS Dhoni", "KL Rahul"],
      answer: "MS Dhoni",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", nextQuestion);
  restartButton.addEventListener("click", restartQuiz);

  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }

  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  }

  function startQuiz() {
    startButton.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextButton.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; //clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }
    nextButton.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} / ${questions.length}`;
  }
});
