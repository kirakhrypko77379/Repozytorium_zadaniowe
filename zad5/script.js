
const themeBtn = document.getElementById("themeBtn");
const link = document.getElementById("themeStylesheet");

let isGreen = true;

themeBtn.addEventListener("click", () => {
    if (isGreen) {
        link.href = "red.css";
    } else {
        link.href = "green.css";
    }

    isGreen = !isGreen;
});


const toggleBtn = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("umiejetnosci");

toggleBtn.addEventListener("click", () => {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    } else {
        skillsSection.style.display = "none";
    }
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); 
    
    let isValid = true;

    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    
    const fields = [
        { id: 'firstName', errorId: 'firstNameError', label: 'Imię' },
        { id: 'lastName', errorId: 'lastNameError', label: 'Nazwisko' },
        { id: 'email', errorId: 'emailError', label: 'E-mail' },
        { id: 'message', errorId: 'messageError', label: 'Wiadomość' }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorSpan = document.getElementById(field.errorId);
        
        errorSpan.textContent = "";

        if (!input.value.trim()) {
            errorSpan.textContent = `Pole ${field.label} jest wymagane.`;
            isValid = false;
        } 
        
        else if ((field.id === 'firstName' || field.id === 'lastName') && !nameRegex.test(input.value)) {
            errorSpan.textContent = "To pole nie może zawierać cyfr.";
            isValid = false;
        }
       
        else if (field.id === 'email' && !emailRegex.test(input.value)) {
            errorSpan.textContent = "Proszę wpisać poprawny adres e-mail.";
            isValid = false;
        }
    });

    
    if (isValid) {
        document.getElementById("successMsg").style.display = "block";
        contactForm.reset(); 
        
        
        setTimeout(() => {
            document.getElementById("successMsg").style.display = "none";
        }, 5000);
    }
});