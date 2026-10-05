// ============ EDIT YOUR CONTENT HERE ============

const education = [
  {
      degree: "B.Tech, specialization in AI/ML",
    school: "Uttaranchal University, Dehradun",
    schoolUrl: "https://www.uttaranchaluniversity.ac.in/",
    year: "2024 — Present",
    detail: "Currently pursuing a B.Tech in Artificial Intelligence & Machine Learning."
  },
  {
    degree: "Senior Secondary (XII)",
    school: "RP Public School, Telipara Farm, Kotdwar",
    schoolUrl: "https://rppublicschool.in/",
    year: "2021 — 2022",
    detail: "Completed Senior Secondary in the Science stream with Computer Science."
  }
];

const projects = [
  {
    name: "AI Job Impact",
    desc: "Developed a machine learning model to estimate the impact of AI on jobs, predicting the likelihood of role replacement.",
    tags: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "LightGBM", "Statsmodels", "Prophet", "Matplotlib", "Seaborn", "Requests"]
  },
  {
    name: "Car Price Prediction Model",
    desc: "Built a regression model to predict car prices based on multiple features, using NumPy, Pandas, Matplotlib, and Seaborn.",
    tags: ["Regression", "NumPy", "Pandas", "Matplotlib", "Seaborn"]
  },
  {
    name: "Portfolio Website",
    desc: "A personal portfolio built from scratch with HTML, CSS, and vanilla JS — the very page you're looking at.",
    tags: ["HTML", "CSS", "JavaScript"]
  }
];

const certifications = [
  {
    name: "Introduction to Large Language Models",
    issuer: "Simplilearn SkillUp",
    year: "Jul 2026",
    detail: "Certificate code: 10445858",
    fileUrl: "pdf/certi_2__26.pdf"
  },
  {
    name: "Generative AI for Beginners",
    issuer: "Simplilearn SkillUp",
    year: "Aug 2025",
    detail: "Certificate code: 8774292",
    fileUrl: "img/certi_1__25.png"
  }
  // Add more certifications in this same format:
  // {
  //   name: "Certificate Name",
  //   issuer: "Issuing Organization",
  //   issuerUrl: "https://example.com/verify",
  //   year: "2025",
  //   detail: "One line on what this certifies or covers.",
  //   fileUrl: "pdf/your-file.pdf"  // or "img/your-file.png"
  // }
];

const socials = [
  // Fill these in with your real profile links:
  { name: "LinkedIn", handle: "Add your LinkedIn URL", url: "#", icon: "in" },
  { name: "GitHub", handle: "Add your GitHub URL", url: "#", icon: "gh" },
  { name: "X", handle: "Add your X URL", url: "#", icon: "x" },
  { name: "Email", handle: "Add your email address", url: "#", icon: "@" }
];

const hobbies = [
  { icon: "🏃", name: "Trail Running", note: "I 've completed many remote trails , one of them is  the Vasudhara trail." },
  { icon: "🥾", name: "Hiking", note: "I've hiked parts of the historic Char Dham route near Kanvashram and completed the ABC North Camp trek." },
  { icon: "💻", name: "Coding", note: "I've worked with Web2 technologies and am now exploring opportunities in Web3." },
  { icon: "🔬", name: "Science", note: "I've researched scientific processes such as carbon sequestration." },
  { icon: "🧭", name: "Travel & Exploration", note: "I've journeyed through most parts of India." }
];

// ============ RENDER ============

function renderEducation() {
  const list = document.getElementById("educationList");
  list.innerHTML = education.map(item => `
    <li class="timeline-item">
      <div class="timeline-top">
        <span class="timeline-degree">${item.degree}</span>
        <span class="timeline-year">${item.year}</span>
      </div>
      <p class="timeline-school">${
        item.schoolUrl
          ? `<a href="${item.schoolUrl}" target="_blank" rel="noopener noreferrer" class="school-link">${item.school} ↗</a>`
          : item.school
      }</p>
      ${item.detail ? `<p class="timeline-detail">${item.detail}</p>` : ""}
    </li>
  `).join("");
}

function renderCertifications() {
  const list = document.getElementById("certificationList");
  if (!certifications.length) {
    list.innerHTML = `<li class="timeline-empty">Certifications coming soon.</li>`;
    return;
  }
  list.innerHTML = certifications.map(item => `
    <li class="timeline-item">
      <div class="timeline-top">
        <span class="timeline-degree">${item.name}</span>
        <span class="timeline-year">${item.year || ""}</span>
      </div>
      <p class="timeline-school">${
        item.issuerUrl
          ? `<a href="${item.issuerUrl}" target="_blank" rel="noopener noreferrer" class="school-link">${item.issuer} ↗</a>`
          : (item.issuer || "")
      }</p>
      ${item.detail ? `<p class="timeline-detail">${item.detail}</p>` : ""}
      ${item.fileUrl ? `<a href="${item.fileUrl}" target="_blank" rel="noopener noreferrer" class="cert-view-link">View certificate ↗</a>` : ""}
    </li>
  `).join("");
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = projects.map((p, i) => `
    <article class="project-card">
      <div class="project-top">
        <h3 class="project-name">${p.name}</h3>
        <span class="project-index">0${i + 1}</span>
      </div>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderHobbies() {
  const row = document.getElementById("hobbyRow");
  row.innerHTML = hobbies.map(h => `
    <div class="hobby-note">
      <div class="hobby-note-icon">${h.icon}</div>
      <div class="hobby-note-body">
        <p class="hobby-note-name">${h.name}</p>
        <p class="hobby-note-text">${h.note}</p>
      </div>
    </div>
  `).join("");
}

function renderSocials() {
  const grid = document.getElementById("socialGrid");
  grid.innerHTML = socials.map(s => `
    <a href="${s.url}" class="social-card" target="_blank" rel="noopener noreferrer">
      <span class="social-icon">${s.icon}</span>
      <span class="social-info">
        <span class="social-name">${s.name}</span>
        <span class="social-handle">${s.handle}</span>
      </span>
    </a>
  `).join("");
}

// ============ NAV: active link on scroll + mobile toggle ============

function setupNav() {
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".panel");
  const sidebarBg = document.getElementById("sidebarBg");
  const bgSections = ["about", "education", "certifications"];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(link => {
          link.classList.toggle("active", link.dataset.section === id);
        });
        if (sidebarBg) {
          sidebarBg.classList.toggle("visible", bgSections.includes(id));
        }
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

  sections.forEach(section => observer.observe(section));

  // Mobile menu toggle
  const toggle = document.getElementById("navToggle");
  const sidebar = document.getElementById("sidebar");

  toggle.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ============ CONTACT FORM ============

function setupForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cf-name").value.trim();

    // No backend wired up — this just gives visual confirmation.
    // Replace with a fetch() call to your form service / API if needed.
    status.textContent = `Thanks, ${name.split(" ")[0]} — message captured. (Connect this form to an email service to actually send it.)`;
    form.reset();
  });
}

// ============ INIT ============

document.addEventListener("DOMContentLoaded", () => {
  renderEducation();
  renderCertifications();
  renderProjects();
  renderHobbies();
  renderSocials();
  setupNav();
  setupForm();

  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;
  document.getElementById("year2").textContent = year;
});