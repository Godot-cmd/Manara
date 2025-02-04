
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

// Toggle dropdown on button click
toggleBtn.onclick = function () {
  dropdownMenu.classList.toggle('open');

  const isOpen = dropdownMenu.classList.contains('open');
  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

// Handle window resize to reset dropdown state
window.addEventListener('resize', () => {
  if (window.innerWidth > 992) {
    dropdownMenu.classList.remove('open');
    toggleBtnIcon.classList = 'fa-solid fa-bars';
  }
});


document.getElementById('action_btn').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth'
  });
});

document.querySelectorAll('.scroll-link').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Get the current year and set it in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("details-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeButton = document.querySelector(".close-button");

  const detailsContent = {
    "AER CONDITIONAT": {
      title: "AER CONDIȚIONAT",
      description: `
            <ul>
              <li><strong>Instalare profesională:</strong> Configurare și montaj optim pentru toate tipurile de aparate de aer condiționat (split, multisplit, duct, VRF).</li>
              <li><strong>Întreținere periodică:</strong> Curățarea filtrelor, verificarea presiunii freonului și funcționalității sistemului.</li>
              <li><strong>Reparații rapide:</strong> Diagnosticare și remediere pentru orice defecțiuni.</li>
              <li><strong>Consultanță personalizată:</strong> Alegerea celei mai bune soluții în funcție de dimensiunea și necesitățile spațiului.</li>
            </ul>
          `
    },
    "INSTALATII SANITARE": {
      title: "INSTALAȚII SANITARE",
      description: `
            <ul>
              <li><strong>Montaj echipamente:</strong> Chiuvete, vase de WC, baterii, cabine de duș, boilere, și sisteme de filtrare a apei.</li>
              <li><strong>Reparații urgente:</strong> Remedierea scurgerilor, înlocuirea țevilor sau reparația robinetelor defecte.</li>
              <li><strong>Întreținere preventivă:</strong> Desfundare țevi și curățare instalații pentru evitarea problemelor majore.</li>
              <li><strong>Rețele complexe:</strong> Proiectare și instalare completă a instalațiilor sanitare pentru construcții noi.</li>
            </ul>
          `
    },
    "SERVICII ELECTRICE": {
      title: "SERVICII ELECTRICE",
      description: `
            <ul>
              <li><strong>Instalare:</strong> Prize, întrerupătoare, corpuri de iluminat și tablouri electrice.</li>
              <li><strong>Modernizare:</strong> Actualizarea instalațiilor electrice pentru siguranță și eficiență energetică.</li>
              <li><strong>Diagnosticare și reparații:</strong> Remedierea problemelor precum scurtcircuitele sau defecțiunile la circuite.</li>
              <li><strong>Sisteme complexe:</strong> Instalarea și întreținerea sistemelor de supraveghere video, automatizări și case inteligente.</li>
            </ul>
          `
    },
    "ZUGRAVIT": {
      title: "ZUGRĂVIT",
      description: `
            <ul>
              <li><strong>Consultanță în alegerea culorilor:</strong> Recomandări de culori și finisaje potrivite pentru fiecare spațiu.</li>
              <li><strong>Pregătirea suprafețelor:</strong> Curățare, gletuire și grunduire pentru o aplicare perfectă.</li>
              <li><strong>Finisaje speciale:</strong> Tapet, vopsele decorative, tencuieli lavabile.</li>
              <li><strong>Lucrări rapide și curate:</strong> Respectarea termenelor și menținerea spațiilor curate în timpul lucrărilor.</li>
            </ul>
          `
    }
  };


  // Handle link click
  document.querySelectorAll(".details-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const service = link.getAttribute("data-service");
      if (detailsContent[service]) {
        modalTitle.textContent = detailsContent[service].title;
        modalDescription.innerHTML = detailsContent[service].description;
        modal.style.display = "block";
      }
    });
  });

  // Handle modal close
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


