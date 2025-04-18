  // Codice per prevenire lo scroll automatico e tornare in cima
  window.addEventListener('load', function() {
    // Scorre comunque in cima alla pagina al caricamento
    window.scrollTo(0, 0);
    
    // Controlla se c'è un hash nell'URL
    if (window.location.hash) {
        // Rimuove il # dall'URL senza ricaricare la pagina
        setTimeout(function() {
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }, 10);
    }
    
    // Aggiungi una classe al body che controlla le animazioni più lunghe
    document.body.classList.add('page-loaded');
});
//Script per sezione processo
document.addEventListener('DOMContentLoaded', function() {
    const processSteps = document.querySelectorAll('.process-step');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200); // Staggered delay
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    processSteps.forEach(step => {
        observer.observe(step);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200); // Staggered delay
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    teamMembers.forEach(member => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(30px)';
        member.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(member);
    });
});

//form contatti
document.addEventListener('DOMContentLoaded', function() {
    // Animazione per input e textarea quando ricevono il focus
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.animation = 'pulse 1s infinite';
        });
        
        input.addEventListener('blur', function() {
            this.style.animation = 'none';
        });
    });
    
    // Effetto invio messaggio
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Invio in corso...';
        submitBtn.style.animation = 'sendMessage 0.5s ease';
        
        // Simulazione invio (rimuovere in produzione)
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Messaggio inviato!';
            submitBtn.style.backgroundColor = '#4CAF50';
            
            // Ripristino form dopo 3 secondi (rimuovere in produzione)
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Invia Messaggio</span><i class="fas fa-paper-plane"></i>';
                submitBtn.style.backgroundColor = '#51a0a2';
                submitBtn.style.animation = 'none';
                contactForm.reset();
            }, 3000);
        }, 2000);
    });
    
    // Animazioni al scroll per elementi della sezione contatti
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('contact-info-item')) {
                    let delay = 0.2 * Array.from(entry.target.parentNode.children).indexOf(entry.target);
                    entry.target.style.animation = `fadeRightIn 0.7s ease-out forwards ${delay}s`;
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    const contactItems = document.querySelectorAll('.contact-info-item');
    contactItems.forEach(item => {
        item.style.opacity = '0';
        observer.observe(item);
    });
});

//Email JS

function sendEmail(){
    const templateParams = {
        nome : document.querySelector("#nome").value ,
        cognome : document.querySelector("#cognome").value ,
        email : document.querySelector("#email").value ,
        oggetto : document.querySelector("#oggetto").value ,
        messaggio : document.querySelector("#messaggio").value ,
};

    emailjs.send("service_4ynaejr","template_jhxfxo9",templateParams)
}