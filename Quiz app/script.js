const quizData = [
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "What does CSS stands for?",
      a: "Central Style sheet",
      b: "Cascading style sheet",
      c: "Cascading simple sheet",
      d: "Car SUV Sailboats",
      correct: "b",
    },
    {
      question: "What does HTML stands for?",
      a: "Hypertext Markup Language",
      b: "Hyperloop Musk Limited",
      c: "Helicoptor Terminal Malaya Limited",
      d: "Hypertext marks language",
      correct: "a",
    },
    {
      question: "What year was Javascript launched?",
      a: "1996",
      b: "1995",
      c: "2000",
      d: "2030",
      correct: "b",
    },
  ];
  
  const quiz = document.getElementById('quiz');
  const answerEls = document.querySelectorAll('.answer');
  const questionEl = document.getElementById('question');
  const a_text = document.getElementById('a_text');
  const b_text = document.getElementById('b_text');
  const c_text = document.getElementById('c_text');
  const d_text = document.getElementById('d_text');
  const submitBtn = document.getElementById('submit');
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
   
    const currentQuizData = quizData[currentQuiz];
   
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
  }
  
  function getSelected() {
    let answer;
   
    answerEls.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    })
    return answer;
  }
  
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected();
   
    if(answer) {
      if(answer === quizData[currentQuiz].correct) {
        score++;
      }
     
      currentQuiz++;
     
      if(currentQuiz < quizData.length) {
        loadQuiz();
      }
      else{
        quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
        `
      }
    }
  })