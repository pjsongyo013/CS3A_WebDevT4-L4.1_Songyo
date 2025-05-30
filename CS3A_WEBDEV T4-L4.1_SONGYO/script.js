const credentials = {
    "Department Head": "SiEsD3ptH34d",
    "Faculty": "SiEsF4cu1ty",
    "Student Officer": "#CCSOAko",
    "Student": "3SapatNa!"
  };

  const form = document.getElementById('authForm');
  const resultDiv = document.getElementById('result');

  function checkCredentialsIfElse(role, password) {
    if (role === "Department Head") {
      if (password === "SiEsD3ptH34d") {
        return { success: true, message: "If-Else: Department Head authenticated successfully." };
      } else {
        return { success: false, message: "If-Else: Invalid password for Department Head." };
      }
    } else if (role === "Faculty") {
      if (password === "SiEsF4cu1ty") {
        return { success: true, message: "If-Else: Faculty authenticated successfully." };
      } else {
        return { success: false, message: "If-Else: Invalid password for Faculty." };
      }
    } else if (role === "Student Officer") {
      if (password === "#CCSOAko") {
        return { success: true, message: "If-Else: Student Officer authenticated successfully." };
      } else {
        return { success: false, message: "If-Else: Invalid password for Student Officer." };
      }
    } else if (role === "Student") {
      if (password === "3SapatNa!") {
        return { success: true, message: "If-Else: Student authenticated successfully." };
      } else {
        return { success: false, message: "If-Else: Invalid password for Student." };
      }
    } else {
      return { success: false, message: "If-Else: Unknown role selected." };
    }
  }

  function checkCredentialsSwitchCase(role, password) {
    switch (role) {
      case "Department Head":
        if (password === "SiEsD3ptH34d") {
          return { success: true, message: "Switch-Case: Department Head authenticated successfully." };
        } else {
          return { success: false, message: "Switch-Case: Invalid password for Department Head." };
        }
      case "Faculty":
        if (password === "SiEsF4cu1ty") {
          return { success: true, message: "Switch-Case: Faculty authenticated successfully." };
        } else {
          return { success: false, message: "Switch-Case: Invalid password for Faculty." };
        }
      case "Student Officer":
        if (password === "#CCSOAko") {
          return { success: true, message: "Switch-Case: Student Officer authenticated successfully." };
        } else {
          return { success: false, message: "Switch-Case: Invalid password for Student Officer." };
        }
      case "Student":
        if (password === "3SapatNa!") {
          return { success: true, message: "Switch-Case: Student authenticated successfully." };
        } else {
          return { success: false, message: "Switch-Case: Invalid password for Student." };
        }
      default:
        return { success: false, message: "Switch-Case: Unknown role selected." };
    }
  }

  form.addEventListener('submit', e => {
    e.preventDefault();

    const selectedRole = form.role.value;
    const enteredPass = form.password.value;

    // Run both methods
    const ifElseResult = checkCredentialsIfElse(selectedRole, enteredPass);
    const switchCaseResult = checkCredentialsSwitchCase(selectedRole, enteredPass);

    // Rendering the results
    const lines = [];

    lines.push(
      `<p class="${ifElseResult.success ? 'success' : 'error'}">${ifElseResult.message}</p>`
    );
    lines.push(
      `<p class="${switchCaseResult.success ? 'success' : 'error'}">${switchCaseResult.message}</p>`
    );

    resultDiv.innerHTML = lines.join('');

    // Optional: Clear password field after submission
    form.password.value = '';
  });