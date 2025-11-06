const questions = [
  {
    text: "Você já tem uma ideia do desenho que quer tatuar?",
    options: [
      "Sim, já sei exatamente o que quero",
      "Tenho uma ideia, mas quero ajuda pra definir",
      "Ainda não sei, quero ver ideias do Studio"
    ]
  },
  {
    text: "Onde você pretende fazer essa tatuagem?",
    options: ["Braço", "Perna", "Costas", "Peito", "Outra região"]
  },
  {
    text: "Qual estilo mais te representa?",
    options: [
      "Blackwork / Preto e Cinza",
      "Realismo",
      "Fine line",
      "Old school",
      "Místico / Bruxaria"
    ]
  },
  {
    text: "Você gostaria de receber um orçamento e conceito exclusivo criado pelo Studio?",
    options: [
      "Sim, quero algo exclusivo",
      "Quero conversar antes",
      "Só quero saber o preço médio"
    ]
  },
  {
    text: "Por onde prefere que a equipe entre em contato?",
    options: ["WhatsApp", "Instagram", "E-mail"]
  }
];

let currentQuestion = 0;
let answers = [];

const questionBox = document.getElementById("question-box");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionBox.innerHTML = `
    <div class="fade">
      <p class="question">${q.text}</p>
      <div class="options">
        ${q.options
          .map(
            (opt) => `<button class="option" onclick="selectOption('${opt}')">${opt}</button>`
          )
          .join("")}
      </div>
    </div>
  `;
}

function selectOption(option) {
  answers.push({ question: questions[currentQuestion].text, answer: option });
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  questionBox.innerHTML = `
    <p class="final-message fade">Finalizando seu orçamento exclusivo...</p>
  `;

  const message = answers
    .map((a, i) => `Pergunta ${i + 1}: ${a.question}\nResposta: ${a.answer}`)
    .join("\n\n");

  // 🔻 Substitua o número abaixo pelo seu WhatsApp com DDI (ex: 55 + DDD + número)
  const phone = "5599999999999";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá, vim do questionário do Studio Bruxo!\n\n" + message
  )}`;

  setTimeout(() => {
    window.location.href = url;
  }, 1500);
}
