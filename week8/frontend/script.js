const API_URL = "http://localhost:5000/api/employees";

const employeeForm = document.getElementById("employeeForm");
const employeeList = document.getElementById("employeeList");
const clearBtn = document.getElementById("clearBtn");

async function fetchEmployees() {
  try {
    const response = await fetch(API_URL);
    const employees = await response.json();

    employeeList.innerHTML = "";

    if (employees.length === 0) {
      employeeList.innerHTML = "<p>No employees found.</p>";
      return;
    }

    employees.forEach((employee) => {
      const employeeCard = document.createElement("div");
      employeeCard.className = "employee-card";

      employeeCard.innerHTML = `
        <h3>${employee.firstName} ${employee.lastName}</h3>
        <p><strong>Email:</strong> ${employee.email}</p>
        <p><strong>Position:</strong> ${employee.position}</p>
        <p><strong>Department:</strong> ${employee.department}</p>
        <p><strong>Salary:</strong> $${employee.salary}</p>
        <button onclick="editEmployee('${employee._id}')">Edit</button>
        <button onclick="viewEmployee('${employee._id}')">View Details</button>
        <button onclick="deleteEmployee('${employee._id}')">Delete</button>
      `;

      employeeList.appendChild(employeeCard);
    });
  } catch (error) {
    console.error("Error fetching employees:", error);
    employeeList.innerHTML = "<p>Could not load employees.</p>";
  }
}

employeeForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const employeeId = document.getElementById("employeeId").value;

  const employeeData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    position: document.getElementById("position").value,
    department: document.getElementById("department").value,
    salary: Number(document.getElementById("salary").value),
  };

  try {
    let response;

    if (employeeId) {
      response = await fetch(`${API_URL}/${employeeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
      });
    } else {
      response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
      });
    }

    const result = await response.json();

    if (!response.ok) {
      alert("Error: " + result.message);
      return;
    }

    alert(employeeId ? "Employee updated successfully!" : "Employee added successfully!");

    clearForm();
    fetchEmployees();
  } catch (error) {
    console.error("Error saving employee:", error);
    alert("Could not save employee.");
  }
});

async function editEmployee(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const employee = await response.json();

    document.getElementById("employeeId").value = employee._id;
    document.getElementById("firstName").value = employee.firstName;
    document.getElementById("lastName").value = employee.lastName;
    document.getElementById("email").value = employee.email;
    document.getElementById("position").value = employee.position;
    document.getElementById("department").value = employee.department;
    document.getElementById("salary").value = employee.salary;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } catch (error) {
    console.error("Error loading employee for edit:", error);
    alert("Could not load employee for editing.");
  }
}

async function viewEmployee(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const employee = await response.json();

    alert(
      `Employee Details:\n\n` +
        `Name: ${employee.firstName} ${employee.lastName}\n` +
        `Email: ${employee.email}\n` +
        `Position: ${employee.position}\n` +
        `Department: ${employee.department}\n` +
        `Salary: $${employee.salary}`
    );
  } catch (error) {
    console.error("Error viewing employee:", error);
    alert("Could not load employee details.");
  }
}

async function deleteEmployee(id) {
  const confirmDelete = confirm("Are you sure you want to delete this employee?");

  if (!confirmDelete) {
    return;
  }

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();

    if (!response.ok) {
      alert("Error deleting employee: " + result.message);
      return;
    }

    alert("Employee deleted successfully!");
    fetchEmployees();
  } catch (error) {
    console.error("Error deleting employee:", error);
    alert("Could not delete employee.");
  }
}

function clearForm() {
  employeeForm.reset();
  document.getElementById("employeeId").value = "";
}

clearBtn.addEventListener("click", clearForm);

fetchEmployees();