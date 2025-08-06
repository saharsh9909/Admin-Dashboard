document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get input values
    const name = document.getElementById('username').value;
    const id = document.getElementById('userid').value;
  
    // Insert a new row in the table
    const table = document.getElementById('userTable').querySelector('tbody');
    const row = table.insertRow();
  
    const nameCell = row.insertCell(0);
    const idCell = row.insertCell(1);
  
    nameCell.textContent = name;
    idCell.textContent = id;
  
    // Clear form
    this.reset();
  });
  
