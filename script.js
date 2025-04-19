// FORM VALIDATION FOR REGISTER
function validateRegisterForm(e) {
  e.preventDefault();

  const name = document.querySelector('input[type="text"]');
  const email = document.querySelector('input[type="email"]');
  const password = document.querySelector('input[type="password"]');
  const role = document.querySelector('select');

  if (!name.value || !email.value || !password.value || !role.value) {
    alert("Please fill out all required fields.");
    return;
  }

  alert("Registration successful! 🎉");
  e.target.reset();
}

// FORM VALIDATION FOR LOGIN
function validateLoginForm(e) {
  e.preventDefault();

  const email = document.querySelector('input[type="email"]');
  const password = document.querySelector('input[type="password"]');

  if (!email.value || !password.value) {
    alert("Please enter your email and password.");
    return;
  }

  alert("Login successful! ✅");
  e.target.reset();
}

// MESSAGE BUTTON HANDLING
function setupMessageButtons() {
  const replyButtons = document.querySelectorAll(".cta-button");
  replyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const user = btn.parentElement.querySelector("strong")?.innerText;
      alert(`Replying to ${user}`);
    });
  });
}

// MAIN LOGIC
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector("form[action='register']");
  const loginForm = document.querySelector("form[action='login']");

  if (window.location.href.includes("register.html")) {
    document.querySelector("form").addEventListener("submit", validateRegisterForm);
  }

  if (window.location.href.includes("login.html")) {
    document.querySelector("form").addEventListener("submit", validateLoginForm);
  }

  if (window.location.href.includes("messages.html")) {
    setupMessageButtons();
  }
});

// DASHBOARD TASK LIST
function loadTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
  
    const tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
  
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;
      li.className = "task-item";
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑️";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = () => {
        tasks.splice(index, 1);
        localStorage.setItem("myTasks", JSON.stringify(tasks));
        loadTasks();
      };
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }
  
  function handleTaskForm() {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
  
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const task = taskInput.value.trim();
      if (task === "") return;
  
      const tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
      tasks.push(task);
      localStorage.setItem("myTasks", JSON.stringify(tasks));
      taskInput.value = "";
      loadTasks();
    });
  
    loadTasks();
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (window.location.href.includes("dashboard.html")) {
      handleTaskForm();
    }
  });