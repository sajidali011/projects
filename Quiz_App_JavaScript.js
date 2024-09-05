const questions = [
  {
    'que': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
  },
  {
    'que': 'Which language is primarily used for styling web pages?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'SQL',
    'correct': 'b'
  },
  {
    'que': 'Which language is used for structuring web content?',
    'a': 'JavaScript',
    'b': 'CSS',
    'c': 'HTML',
    'd': 'Python',
    'correct': 'c'
  },
  {
    'que': 'Which of the following is not a programming language?',
    'a': 'Python',
    'b': 'Java',
    'c': 'HTML',
    'd': 'C++',
    'correct': 'c'
  },
  {
    'que': 'Which language is commonly used for backend development?',
    'a': 'JavaScript',
    'b': 'HTML',
    'c': 'PHP',
    'd': 'CSS',
    'correct': 'c'
  }
];

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;

const queBox = document.getElementById("queBox");
const optionsinputs = document.querySelectorAll('input[name="option"]');

const loadquestions = () => {
  if (index === total) {
      return endquiz();  // End the quiz if all questions have been answered
  }
  reset();  // Reset the options for the next question

  const data = questions[index];
  queBox.innerText = `${index + 1}) ${data.que}`; 

  optionsinputs[0].nextElementSibling.innerText = data.a;
  optionsinputs[1].nextElementSibling.innerText = data.b;
  optionsinputs[2].nextElementSibling.innerText = data.c;
  optionsinputs[3].nextElementSibling.innerText = data.d;
};

const submitquiz = () => {
  if (index >= total) {
      return endquiz();  // Ensure no further processing if quiz has ended
  }

  const data = questions[index];
  const ans = getanswers();

  if (ans === data.correct) {
      right++;
  } else {
      wrong++;
  }

  index++;
  loadquestions();
};

const getanswers = () => {
  let answer;
  optionsinputs.forEach((input) => {
      if (input.checked) {
          answer = input.value;  
      }
  });
  return answer;  
};

const reset = () => {
  optionsinputs.forEach((input) => {
      input.checked = false;  
  });
};

const endquiz = () => {
  document.getElementById("box").innerHTML = `
    <h3>Quiz Completed!</h3>
    <p> ${right} / ${total} are correct</p>
    <p>Wrong Answers: ${wrong}</p>
    <p>Score: ${(right / total) * 100}%</p>
  `;
};

loadquestions();  // Initialize the quiz by loading the first question
