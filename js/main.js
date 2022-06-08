let questions = [];
let answers = [];
let main = document.getElementById('main');
let behavioralButton = document.getElementById('behavioralButton');
behavioralButton.addEventListener('click', carAPIRequest);
let htmlButton = document.getElementById('htmlButton');
htmlButton.addEventListener('click', htmlAPIRequest);
let cssButton = document.getElementById('cssButton');
cssButton.addEventListener('click', cssAPIRequest);

function populate() {
  for (let i = 0; i < questions.length; i++) {
    let q = questions[i];
    let a = answers[i];
    let h6Q = document.createElement('h6');
    h6Q.innerText = q;
    let h6A = document.createElement('h6');
    h6A.innerText = a;

    let front = document.createElement('div');
    front.classList.add('flash-card');
    front.classList.add('front');
    front.appendChild(h6Q);

    let back = document.createElement('div');
    back.classList.add('flash-card');
    back.classList.add('back');
    back.appendChild(h6A);

    let card = document.createElement('div');
    card.classList.add('card');

    //   card.style.transform = `rotateX(${Math.random() * 10}deg)`;

    card.appendChild(front);
    card.appendChild(back);

    let cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');
    cardWrapper.appendChild(card);

    main.appendChild(cardWrapper);
  }
  document.querySelectorAll('.card').forEach((item) =>
    item.addEventListener('click', () => {
      let randy = Math.random() * 4 - 2;
      if (item.classList.contains('click')) {
        let crap = item.parentNode;
        crap.parentNode.removeChild(crap);
        item.classList.remove('click');
        //   card.style.zIndex = parseInt(Math.random() * 100) + 1;
      } else item.classList.add('click');
    })
  );
}

async function carAPIRequest() {
  const response = await fetch(
    'https://study-api-100Devs.herokuapp.com/API/car/all'
  );
  const data = await response.json();
  console.log(data);
  for (let item in data) {
    questions.push(data[item].question);
    answers.push(data[item].answer);
  }
  questions.pop();
  answers.pop();

  questions = questions.reverse();
  answers = answers.reverse();
  populate();
}
async function htmlAPIRequest() {
  const response = await fetch(
    'https://study-api-100Devs.herokuapp.com/API/html/all'
  );
  const data = await response.json();
  console.log(data);
  for (let item in data) {
    questions.push(data[item].question);
    answers.push(data[item].answer);
  }
  questions.pop();
  answers.pop();

  questions = questions.reverse();
  answers = answers.reverse();
  populate();
}
async function cssAPIRequest() {
  const response = await fetch(
    'https://study-api-100Devs.herokuapp.com/API/css/all'
  );
  const data = await response.json();
  console.log(data);
  for (let item in data) {
    questions.push(data[item].question);
    answers.push(data[item].answer);
  }
  questions.pop();
  answers.pop();

  questions = questions.reverse();
  answers = answers.reverse();
  populate();
}
