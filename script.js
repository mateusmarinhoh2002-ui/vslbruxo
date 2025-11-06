console.log("🔥 script.js carregado — modo BRUXO ativo");

const questions = [
  "Qual estilo de tatuagem você mais gosta?",
  "Já tem alguma tatuagem ou será a primeira?",
  "Qual tamanho aproximado da tatuagem?",
  "Em qual parte do corpo pretende tatuar?",
  "Tem alguma referência ou imagem em mente?",
  "Prefere colorida ou preto e cinza?",
  "Quer um orçamento ou apenas agendar uma conversa?",
  "Qual dia ou período é melhor pra você?",
  "Você é de qual cidade/bairro?",
  "Qual seu nome completo?"
];

let current = 0;
let answers = [];

function startQuiz() {
  current = 0;
  answers = [];
  showQuestion();
}

function showQuestion() {
  const card = document.getElementById("card");
  card.innerHTML = `
    <div class="fade-in">
      <h2 class="title-glow">Pergunta ${current + 1}</h2>
      <p>${questions[current]}</p>
      <input type="text" id="answer" placeholder="Digite sua resposta..." />
      <button id="nextBtn">Próxima</button>
    </div>
  `;
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
}

function nextQuestion() {
  const answerField = document.getElementById("answer");
  if (!answerField) return;

  const answer = answerField.value.trim();
  if (answer === "") {
    alert("Por favor, responda antes de continuar.");
    return;
  }

  answers.push(answer);
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const card = document.getElementById("card");
  const msg = encodeURIComponent(
    `Olá! Aqui estão minhas respostas do questionário:\n\n${questions
      .map((q, i) => `${i + 1}. ${q}\n👉 ${answers[i]}`)
      .join("\n\n")}`
  );

  const whatsappURL = `https://wa.me/5599999999999?text=${msg}`;

  card.innerHTML = `
    <div class="fade-in">
      <h2 class="title-glow">Perfeito! 🎯</h2>
      <p>Obrigado por responder! Clique abaixo para enviar suas respostas no WhatsApp e agendar seu horário.</p>
      <a href="${whatsappURL}" target="_blank">
        <button>Enviar pelo WhatsApp</button>
      </a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  if (startBtn) startBtn.addEventListener("click", startQuiz);
});
