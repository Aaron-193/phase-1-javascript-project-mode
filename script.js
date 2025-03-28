
document.getElementById("login").addEventListener("click", function () {
    
    document.getElementById("form-container").style.display = "block";
});

document.getElementById("save").addEventListener("click", function () {
    
    const surname = document.getElementById("surname").value;
    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML = `
        <p>Surname: ${surname}</p>
        <p>First Name: ${firstname}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
        <button id="edit">Edit</button>
        <button id="delete">Delete</button>
    `;

    
    setTimeout(() => {
        const userData = { surname, firstname, email, password };
        localStorage.setItem("userData", JSON.stringify(userData));
    }, 60000);

    
    alert("Login is successful. Welcome!");

    
    document.getElementById("edit").addEventListener("click", function () {
        formContainer.innerHTML = '';
        document.getElementById("form-container").style.display = "block";
    });

    
    document.getElementById("delete").addEventListener("click", function () {
        localStorage.removeItem("userData");
        formContainer.innerHTML = '';
        document.getElementById("form-container").style.display = "none";
    });
});


window.addEventListener("load", function () {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
        const { surname, firstname, email, password } = JSON.parse(savedData);
        document.getElementById("form-container").innerHTML = `
            <p>Surname: ${surname}</p>
            <p>First Name: ${firstname}</p>
            <p>Email: ${email}</p>
            <p>Password: ${password}</p>
            <button id="edit">Edit</button>
            <button id="delete">Delete</button>
        `;
        document.getElementById("form-container").style.display = "block";
    }
});




window.addEventListener('load', () => {
  const savedDetails = JSON.parse(localStorage.getItem('userDetails'));
  if (savedDetails) {
    document.getElementById('surname').value = savedDetails.surname;
    document.getElementById('firstName').value = savedDetails.firstName;
    document.getElementById('email').value = savedDetails.email;
    document.getElementById('password').value = savedDetails.password;
  }
});
  

document.getElementById("buyButton").addEventListener("click", function() {
   
    alert("Request for a ticket has been made.");
    
   
    const mPesaAccount = "0721337491";
    const cost = "1000 ksh";
    alert(`M-pesa Account Number: ${mPesaAccount}\nCost: ${cost}`);
    

    setTimeout(function() {
        alert("Transaction successful. Ticket costing 1000 ksh has been purchased. Enjoy!");
    }, 45000); 
});