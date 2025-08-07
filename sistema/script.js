document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const path = window.location.pathname;
  
    if (path.includes("index.html")) {
      if (!user) return window.location.href = "login.html";
      document.getElementById("user-info").innerText = "Usuário: " + user.email;
      loadTasks();
      document.getElementById("task-form").addEventListener("submit", addTask);
    } else if (path.includes("login.html")) {
      document.getElementById("login-form").addEventListener("submit", login);
    } else if (path.includes("cadastro.html")) {
      document.getElementById("register-form").addEventListener("submit", register);
    }
  });
  
  function register(e) {
    e.preventDefault();
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    localStorage.setItem("user_" + email, JSON.stringify({ email, password, tasks: [] }));
    alert("Cadastro realizado!");
    window.location.href = "login.html";
  }
  
  function login(e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const user = JSON.parse(localStorage.getItem("user_" + email));
    if (user && user.password === password) {
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "index.html";
    } else {
      alert("Email ou senha inválidos.");
    }
  }
  
  function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
  }
  
  function loadTasks() {
    const user = JSON.parse(localStorage.getItem("user"));
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    user.tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `${task.completed ? "<span class='completed'>" : ""}${task.text}${task.completed ? "</span>" : ""}
                      <button onclick="toggleTask(${index})">✔️</button>
                      <button onclick="removeTask(${index})">❌</button>`;
      taskList.appendChild(li);
    });
  }
  
  function addTask(e) {
    e.preventDefault();
    const input = document.getElementById("task-input");
    const user = JSON.parse(localStorage.getItem("user"));
    user.tasks.push({ text: input.value, completed: false });
    localStorage.setItem("user_" + user.email, JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
    input.value = "";
    loadTasks();
  }
  
  function toggleTask(index) {
    const user = JSON.parse(localStorage.getItem("user"));
    user.tasks[index].completed = !user.tasks[index].completed;
    localStorage.setItem("user_" + user.email, JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
    loadTasks();
  }
  
  function removeTask(index) {
    const user = JSON.parse(localStorage.getItem("user"));
    user.tasks.splice(index, 1);
    localStorage.setItem("user_" + user.email, JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
    loadTasks();
  }
  