// === RIVESCRIPT BOT ===
let bot = new RiveScript();
let botReady = false;

// Charger les fichiers RiveScript
console.log("Loading RiveScript files...");

bot.loadFile(["begin.rive", "dialogue.rive"]).then(() => {
  console.log("Files loaded, sorting replies...");
  bot.sortReplies();
  botReady = true;
  console.log("GenBot is ready!");
}).catch((err) => {
  console.error("RiveScript loading error:", err);
  console.error("Details:", err.message);
});

// === ELEMENTS DOM ===
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const suggestions = document.querySelectorAll('.suggestion');

// === FONCTIONS ===
function formatBotMessage(text) {
  // Convertir les *actions* en italique
  return text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.className = `message ${sender}`;

  if (sender === 'bot') {
    msg.innerHTML = formatBotMessage(text);
  } else {
    msg.textContent = text;
  }

  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
  const typing = document.createElement('div');
  typing.className = 'message bot typing';
  typing.innerHTML = '<em>GenBot is typing...</em>';
  typing.id = 'typing-indicator';
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTyping() {
  const typing = document.getElementById('typing-indicator');
  if (typing) typing.remove();
}

async function sendMessage(text) {
  if (!text) text = userInput.value.trim();
  if (!text) return;

  addMessage(text, 'user');
  userInput.value = '';

  if (!botReady) {
    addMessage("*wakes up* Hold on, I'm getting ready... (check console for errors)", 'bot');
    return;
  }

  // Afficher indicateur de frappe
  showTyping();

  // Petit delai pour simuler la reflexion
  await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));

  try {
    let reply = await bot.reply("user", text);
    hideTyping();
    addMessage(reply, 'bot');
  } catch (err) {
    console.error("Erreur bot:", err);
    hideTyping();
    addMessage("*bug* Oops, something went wrong... Try again!", 'bot');
  }
}

// === EVENT LISTENERS ===
sendBtn.addEventListener('click', () => sendMessage());

userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

// Suggestions cliquables
suggestions.forEach(suggestion => {
  suggestion.addEventListener('click', () => {
    const text = suggestion.dataset.text;
    sendMessage(text);
  });
});

// Focus sur l'input au chargement
userInput.focus();
