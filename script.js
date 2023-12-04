let buttonSend = document.querySelector(".send");


buttonSend.onclick = function (event) {
  event.preventDefault();

  let inputMessage = document.querySelector('.input');
  


  let newMessage = document.createElement("li");
  newMessage.classList.add("message-from-person");

  let personAndMessage = document.createElement("div");
  personAndMessage.classList.add("personAndMessage");

  let avaInChat = document.createElement("img");
  avaInChat.src = './img/voice.svg'
  avaInChat.classList.add("ava-in-chat");
  avaInChat.alt = "AVA";

  let nameAndMessage = document.createElement("div");
  nameAndMessage.classList.add("nameAndMessage");

  let nickname = document.createElement("p");
  nickname.classList.add("niknameinchat");
  nickname.textContent = "BOB";

  let message = document.createElement("p");
  message.classList.add("message");
  message.textContent = inputMessage.value;
  inputMessage.textContent = ''

  nameAndMessage.appendChild(nickname);
  nameAndMessage.appendChild(message);

  personAndMessage.appendChild(avaInChat);
  personAndMessage.appendChild(nameAndMessage);

  newMessage.append(personAndMessage);

  let listMessage = document.querySelector(".chat-message");
  listMessage.classList.add("chat-message");
  listMessage.append(newMessage);
  
};


// let password = document.querySelector('.password');
// let showPassword = document.querySelector('.show-password');

// showPassword.onchange = function () {
//   if (showPassword.checked) {
//     password.type = 'text';
//     }else {
//       password.type = 'password';
//       }
  
// };
