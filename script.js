const socket = io();

document.getElementById('authForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Mock authentication
  if (username && password) {
    document.getElementById('auth').style.display = 'none';
    document.getElementById('products').style.display = 'block';
    document.getElementById('chat').style.display = 'block';
  } else {
    document.getElementById('authStatus').innerText = 'Please enter valid credentials.';
  }
});

// Chat functionality
const chatInput = document.getElementById('chatInput');
const messages = document.getElementById('messages');

document.getElementById('sendBtn').addEventListener('click', () => {
  const message = chatInput.value;
  socket.emit('chatMessage', message);
  chatInput.value = '';
});

socket.on('chatMessage', (message) => {
  const msg = document.createElement('p');
  msg.innerText = message;
  messages.appendChild(msg);
});

                                                    
