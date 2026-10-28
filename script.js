/* =============================================
   PORTFOLIO — Candela Cortezon Saez
   Folder navigation, project data, and rendering
   ============================================= */

// ── Project Data ──────────────────────────────

const FOLDERS = [
  {
    id: "product-design",
    title: "Product Design",
    projects: [
      {
        id: "quickstarter",
        title: "Quickstarter",
        summary: "Designed, prototyped, and produced an innovative product as part of a Kickstarter-style project.",
        role: "Product Designer & Project Lead",
        context: "ESILV — Project Management Course",
        tools: ["CAD", "Prototyping", "Project Management", "User Research"],
        description: `Quickstarter was an accelerated, Kickstarter-inspired course project in which we had to take a product from idea to market-ready pitch in a very short time. Our team designed a recycled-plastic outlet cover (cache prise) that protects young children without looking like the usual childproofing hardware.
        
        We started with user research and ideation, then moved to conception, balancing child-safety constraints with a minimal design. We built and tested physical prototypes, iterating on fit and ease of use. In parallel, we developed the brand identity and a crowdfunding-style pitch, and managed the project as a team, with defined roles and milestones under a tight deadline.`,
        images: [{ src: "images/kickstarter1.jpeg", alt: "The Glacier Pen Project — 3D printed bolt action pen" },
          { src: "images/kickstarter2.jpeg", alt: "First steps in 3D modeling — Rhino interface with geometric forms" },
          { src: "images/kickstarter3.jpeg", alt: "Laser cutting task — geometric paper forms and sketches" },
          ],
      },
     /* {
        id: "digital-fabrication",
        title: "Digital Fabrication",
        summary: "Hands-on exploration of 3D modeling, laser cutting, CNC machining, and rapid prototyping techniques.",
        role: "Designer & Fabricator",
        context: "ESILV — How to Make (Almost) Anything Course",
        tools: ["Rhino", "Fusion 360", "3D Printing", "Laser Cutting", "Cricut", "Onshape"],
        description: `Hands-on exploration in 3D modeling, laser cutting, CNC machining, and rapid prototyping techniques to craft functional physical components and design prototypes. The course covered the digital fabrication workflow from 3D modeling to physical making, using tools like Rhino, Fusion 360, and Cricut. Projects included designing and 3D printing a bolt action pen, creating geometric forms with laser cutting, and learning to visualize and manipulate 3D space digitally.`,
        images: [
          { src: "images/fab-pen-project.png", alt: "The Glacier Pen Project — 3D printed bolt action pen" },
          { src: "images/fab-3d-modeling.png", alt: "First steps in 3D modeling — Rhino interface with geometric forms" },
          { src: "images/fab-laser-cut.png", alt: "Laser cutting task — geometric paper forms and sketches" },
          { src: "images/fab-sketch.png", alt: "Sketching exercise — 3D visualization practice" },
          { src: "images/fab-reconstruct.png", alt: "Reconstructing a piece from an image — 3D modeling exercise" },
        ],
      },*/
    ],
  },
  {
    id: "upcycling",
    title: "Upcycling",
    projects: [
      {
        id: "upcycling-projects",
        title: "Upcycling Projects",
        summary: "Exploring the intersection of craft and sustainability through rewritten garments and original textile work.",
        role: "Designer & Maker",
        context: "Personal Project",
        tools: ["Upcycling", "Slow Fashion", "Textiles", "Sewing"],
        description: `I’ve always been drawn to working with my hands, and learning to sew has turned that into a real passion: designing and making clothes from garments that already exist.

Rather than starting from new fabric, I start from what’s already there. I take apart, rethink, and reassemble clothes into new pieces, which means every project begins with a question: what can this garment become? Working this way teaches me to read materials, understand how a garment is constructed, and solve problems with the constraints I have, from fabric quality to seams and proportions.

For me, fashion and sustainability can’t be separated. Giving a second life to clothing is a practical way to reduce waste and rethink how we consume, and it pushes me to design with intention rather than excess.`,
        images: [
          { src: "images/upcycling1.jpeg", alt: "Leopard print upcycled top held against a white background" },
          { src: "images/upcycling2.jpeg", alt: "Blue striped upcycled skirt with button details" },
          { src: "images/upcycling3.jpeg", alt: "Gingham halter top with tie-back detail, back view" },
          { src: "images/upcycling4.jpeg", alt: "Gingham halter top with asymmetric neckline, front view" },
          { src: "images/upcycling5.jpeg", alt: "Black leather upcycled shoulder bag" },
        
        ],
      },
    ],
  },
  {
    id: "biomaterials",
    title: "Biomaterials",
    projects: [
      {
        id: "bacterial-cellulose",
        title: "Bacterial Cellulose × Textile Waste",
        summary: "A design-driven biomaterial for fashion (ongoing)",
        role: "Material Researcher & Designer",
        context: "ESILV — Biomaterials Research (Ongoing)",
        tools: ["Bacterial Cellulose", "Textile Waste", "Material Design", "Sustainability"],
        description: `I’m developing a fully biodegradable, sewable material made from bacterial cellulose (BC), grown from kombucha, combined with 100% cotton textile waste. The BC comes from Vivant, a kombucha producer in Paris, and the cotton scraps from the Institut Français de la Mode. Both are material that would otherwise be discarded.

Existing research already shows that BC and textile fibres can be combined. My focus is the step that decides whether fashion can actually use the result: making the material pleasant in feel, smell and appearance, and testing its mechanical properties so it can become real garments. I’m working at the intersection of biomaterials and textile design, with the guidance of an expert in BC and kombucha-based clothing.`,
        images: [ { src: "images/biomaterials1.jpeg",}],
      },
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    projects: [
      {
        id: "impractical-phone-number",
        title: "Impractical Phone Number",
        summary: "A playful ML project exploring unconventional UI/UX interactions for phone number input.",
        role: "Creative Developer",
        context: "How to Make Almost Anything class",
        tools: [ "Machine Learning", "Creative Code", "UI/UX Experiment"],
        description: `We created a program in which the user had to introduce their phone number in an unpractical way, using machine learning and p5.js.
         We used Teachable Machine to train a model with the recordings of each note. We trained the audio classifier with 11 classes: Background noise, do, do#, re, re#, mi, fa, fa#, sol, sol#, la. Then we went to editor.p5js.org and did the  mapping: do→0, do#→1, re→2, re#→3, mi→4, fa→5, fa#→6, sol→7, sol#→8, la→9.
         
         If you want to try it click here: https://editor.p5js.org/Mahel/sketches/rQJhqABpX`,
        images: [{ src: "images/phone1.png",}],
      },
      {
        id: "handwritten-text-recognition",
        title: "Handwritten Text Recognition",
        summary: "Handwritten recognition to digital text",
        role: "ML Engineer",
        context: "Personal Project",
        tools: ["Handwriting recognition", "Computer Vision", "OCR"],
        description: `I made a web site that transforms handwritten journal entries into digital text using deep learning OCR technology. Built with FastAPI and EasyOCR, the app features a custom canvas interface designed to mimic the aesthetic of a vintage journal. I deployed the application using Docker containerization on Hugging Face Spaces.
        
        Try it out here: https://candelacsaez-handwriting-recognition.hf.space/`,
        images: [{ src: "images/hand1.png",}],
      },
    ],
  },
  {
    id: "digital-design",
    title: "Digital Design",
    projects: [
      {
        id: "graphic-design-amma",
        title: "Graphic Design",
        summary: "Artistic direction and social media visuals for AMMA, my school's MMA and combat sports association.",
        role: "Respo Communication (Bureau Member)",
        context: `AMMA — MMA & Combat Sports Association 
        Personal Projects`,
        tools: ["Art Direction", "Social Media", "Instagram", "Graphic Design"],
        description: `As respo communication on the bureau of AMMA, my school's MMA and combat sports association, I am in charge of the association's artistic direction. I design the Instagram posts, stories, and other visuals that shape how the association presents itself and communicates with its community.
        
        @amma_devinvi
        
        I also have a deep interest in graphic design and make posters as a hobby.`,
        images: [{ src: "images/ama1.png",},
          { src: "images/ama2.jpeg",},
           { src: "images/ama3.jpeg",}
        ],
      },
      {
        id: "novalife",
        title: "Order Management Web Site",
        summary: "A web site built to manage the orders of the research institute IFT ",
        role: "UI/UX Designer & Developer",
        context: "ESILV — Web Tech Course",
        tools: ["Firebase", "Vue.js", "GitHub"],
        description: `I developped an order management web site for a research institute using Firebase (Backend-as-a-Service) as a database to store orders, and to handle user login/authentication, and Vue for the frontend.
        
        Check it out: https://candelacsaez.github.io/lab-order-system/login`,
        images: [
          { src: "images/site1.png", alt: "NovaLife app logo and branding — Reconnect. Belong. Thrive" },
          
        ],
      },
    ],
  },
  {
    id: "hci",
    title: "HCI - Human Computer Interaction",
    projects: [
      {
        id: "dreamlogue",
        title: "DreamLogue",
        summary: "An interactive project blending prompt engineering, AI image generation, and custom display interfaces.",
        role: "Creative Technologist",
        context: "ESILV — HCI Course",
        tools: [ "Image Generation", "Human-Computer Interaction", "UI/UX"],
        description: `DreamLogue is an interactive project aiming at enhancing users' introspection by creating an immersive experience where they can remember their dreams. It is a journal where you can keep track of your all your dreams and find patterns or repressed emotions.`,
        images: [{ type: "video", src: "images/dreamlog1.mp4"},
          { src: "images/dreamlog2.jpeg"},
          { src: "images/dreamlog3.jpeg"},
          { src: "images/dreamlog4.jpeg"}
        ],
      },
      {
        id: "unity-haptics",
        title: "A Trip Through Emotions",
        summary: "A Unity environment with two contrasted worlds exploring how environmental design guides emotional experience.",
        role: "Environment Designer & Developer",
        context: "ESILV — HCI Course",
        tools: ["Unity", "Haptics", "Electronics"],
        description: `A Unity environment with two contrasted worlds connected by a hidden portal. The first world is a hostile desert that creates an anxious ambiance and a feeling of being trapped. On the other side of the portal, there is a calm forest with a relaxed landscape that connects you to nature and a feeling of freedom. Each world has different music that matches the mood. The project explores how environmental design can be used to guide emotional experience, reflecting a personal appreciation for nature. 
        
        In the context of a class about haptics, I created a vibrating device that activates when you get close to this invisible portal.`,
        images: [
          { src: "images/hci-unity-forest.png", alt: "Unity forest environment — calm landscape with pine trees, water, and blue sky" },
          { src: "images/hci-unity-desert.png", alt: "Unity desert environment — harsh sand dunes with sandstorm and orange sky" },
          { src: "images/unity.mp4"}
        ],
        
      },
      {
        id: "video-editing-electronics",
        title: "Video Editing with Electronics",
        summary: "Electronics to real-time video editing and playback.",
        role: "Interactive Media Designer",
        context: "ESILV — How to Make Almost Anything Course",
        tools: ["Electronics", "Video Processing", "Interactive Media"],
        description: `In the context of the class HOW TO MAKE ALMOST ANYTHING, we created a PCB allowing us to glitch, edit, and play with videos and images. With potenciometers, we changed the colors of an image, we made our own pixeled animations and played with videos from an SD card.`,
        images: [  { src: "images/elec1.jpg"},
          { src: "images/elec2.jpg"},
          { src: "images/elec3.jpg"},
          { src: "images/elec4.mp4"}
        ],
      },
    ],
  },
];


// ── Homepage: Render Folder List ──────────────

function renderFolderList() {
  const container = document.getElementById("folder-list");
  if (!container) return;

  let activeIndex = 0;

  const tabsHtml = FOLDERS.map((folder, index) => `
    <button class="folder-tab ${index === 0 ? "is-active" : ""}" role="tab"
      aria-selected="${index === 0}" data-index="${index}" id="folder-tab-${folder.id}"
      aria-controls="folder-panel" tabindex="${index === 0 ? "0" : "-1"}">
      ${folder.title}
    </button>
  `).join("");

  container.innerHTML = `
    <div class="folder-stack animate-in">
      <div class="folder-tabs" role="tablist" aria-label="Themes">
        ${tabsHtml}
      </div>
      <div class="folder-body" id="folder-panel" role="tabpanel" aria-labelledby="folder-tab-${FOLDERS[0].id}" tabindex="0">
      </div>
    </div>
  `;

  const panel = container.querySelector("#folder-panel");
  const tabs = Array.from(container.querySelectorAll(".folder-tab"));

  function renderBody(index) {
    const folder = FOLDERS[index];
    const projectLines = folder.projects
      .map(p => `
        <div class="folder-project-line">
          <span class="folder-project-line-title">${p.title}</span>
          <span class="folder-project-line-desc">${p.summary}</span>
        </div>`)
      .join("");

    panel.setAttribute("aria-labelledby", `folder-tab-${folder.id}`);
    panel.innerHTML = `
      <div class="folder-fade">
        <div class="folder-top-row">
          <span class="folder-title">${folder.title}</span>
        </div>
        <div class="folder-projects-list">${projectLines}</div>
        <a href="project.html?folder=${folder.id}" class="folder-open" aria-label="Open ${folder.title} folder">
          Open folder
          <svg class="folder-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    `;
  }

  function setActive(index) {
    if (index === activeIndex) return;
    activeIndex = (index + FOLDERS.length) % FOLDERS.length;
    tabs.forEach((tab, i) => {
      const isActive = i === activeIndex;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.setAttribute("tabindex", isActive ? "0" : "-1");
    });
    renderBody(activeIndex);
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => setActive(index));
    tab.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setActive(index + 1);
        tabs[activeIndex].focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActive(index - 1);
        tabs[activeIndex].focus();
      }
    });
  });

  renderBody(0);
}


// ── Project Page: Render Project ──────────────

function renderProjectPage() {
  const root = document.getElementById("project-root");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const folderId = params.get("folder") || params.get("project");
  const subIndex = parseInt(params.get("sub") || "0", 10);

  const folder = FOLDERS.find(f => f.id === folderId);

  if (!folder) {
    root.innerHTML = `
      <div class="project-header">
        <a href="index.html" class="project-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to portfolio
        </a>
      </div>
      <div class="project-content">
        <p style="color: var(--text-muted);">Folder not found. <a href="index.html" style="color: var(--accent);">Return to portfolio</a></p>
      </div>
    `;
    return;
  }

  document.title = `${folder.title} — Candela Cortezon Saez`;

  const activeIndex = Math.max(0, Math.min(subIndex, folder.projects.length - 1));
  const project = folder.projects[activeIndex];

  // Projects navigation & highlighting inside the folder
  /*const projectsNavHtml = folder.projects.length > 1
    ? `<div class="project-nav-bar">
        <div class="project-nav-header">
          <span class="project-nav-label">Projects in this folder</span>
          <span class="project-nav-count">${activeIndex + 1} / ${folder.projects.length}</span>
        </div>
        <nav class="project-nav" aria-label="Projects in this folder">
          ${folder.projects.map((p, i) => `
            <button class="project-nav-btn ${i === activeIndex ? "active" : ""}" data-index="${i}" aria-pressed="${i === activeIndex}">
              <span class="project-nav-num">0${i + 1}</span>
              <span class="project-nav-name">${p.title}</span>
              ${i === activeIndex ? `<span class="project-nav-tag">Active</span>` : ""}
            </button>
          `).join("")}
        </nav>
      </div>`
    : `<div class="project-nav-bar">
        <div class="project-nav-header">
          <span class="project-nav-label">Project in this folder</span>
        </div>
        <div class="project-nav-single">
          <span class="project-nav-num">01</span>
          <span class="project-nav-name">${project.title}</span>
        </div>
      </div>`; */

    const projectsNavHtml = folder.projects.length > 1
    ? `<div class="project-nav-bar">
      
        <nav class="project-nav" aria-label="Projects in this folder">
          ${folder.projects.map((p, i) => `
            <button class="project-nav-btn ${i === activeIndex ? "active" : ""}" data-index="${i}" aria-pressed="${i === activeIndex}">
              <span class="project-nav-num">0${i + 1}</span>
              <span class="project-nav-name">${p.title}</span>
              ${i === activeIndex ? `<span class="project-nav-tag">Active</span>` : ""}
            </button>
          `).join("")}
        </nav>
      </div>`
    : `<div class="project-nav-bar">
        <nav class="project-nav" aria-label="Project in this folder">
          <button class="project-nav-btn active" data-index="0" aria-pressed="true">
            <span class="project-nav-num">01</span>
            <span class="project-nav-name">${project.title}</span>
          </button>
        </nav>
      </div>`;

  // Image gallery
  const galleryHtml = project.images.length > 0
    ? `<div class="project-gallery">
        <div class="gallery-main">
          <img src="${project.images[0].src}" alt="${project.images[0].alt}" id="gallery-main-img" />
        </div>
        ${project.images.length > 1 ? `
          <div class="gallery-thumbs" role="tablist" aria-label="Image gallery">
            ${project.images.map((img, i) => `
              <button class="gallery-thumb ${i === 0 ? "active" : ""}" data-index="${i}" role="tab" aria-selected="${i === 0}" aria-label="View image ${i + 1}: ${img.alt}">
                <img src="${img.src}" alt="" />
              </button>
            `).join("")}
          </div>
        ` : ""}
      </div>`
    : `<div class="project-gallery">
        <div class="gallery-main">
          <div class="gallery-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <p>Images coming soon</p>
          </div>
        </div>
      </div>`;

  // Project info
  const descParagraphs = project.description
    .split(/\n\s*\n/)
    .map(para => `<p class="project-description">${para.trim()}</p>`)
    .join("");

  const infoHtml = `
    <div class="project-info">
      <h2>${project.title}</h2>
      ${project.summary ? `<p class="project-summary">${project.summary}</p>` : ""}
      <div class="project-descriptions">
        ${descParagraphs}
      </div>
      <div class="project-details">
        <div class="project-detail-row">
          <span class="project-detail-label">Context</span>
          <span class="project-detail-value">${project.context}</span>
        </div>
      </div>
      <div class="project-tags">
        ${project.tools.map(t => `<span class="project-tag">${t}</span>`).join("")}
      </div>
    </div>
  `;

  root.innerHTML = `
    <a href="index.html" class="project-back">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 5l-7 7 7 7" />
      </svg>
      Back to portfolio
    </a>

    <header class="project-header">
      <div class="project-folder-tab">
        <span class="project-folder-badge">Folder</span>
        <h1>${folder.title}</h1>
      </div>
      ${projectsNavHtml}
    </header>

    <div class="project-content">
      ${galleryHtml}
      ${infoHtml}
    </div>
  `;

  // Attach gallery thumbnail handlers
  const mainImg = document.getElementById("gallery-main-img");
  const thumbs = root.querySelectorAll(".gallery-thumb");
  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      const idx = parseInt(thumb.dataset.index, 10);
      if (project.images[idx] && mainImg) {
        mainImg.src = project.images[idx].src;
        mainImg.alt = project.images[idx].alt;
      }
      thumbs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      thumb.classList.add("active");
      thumb.setAttribute("aria-selected", "true");
    });
  });

  // Attach sub-project navigation handlers
  const navBtns = root.querySelectorAll(".project-nav-btn");
  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index, 10);
      if (idx !== activeIndex) {
        const newUrl = `project.html?folder=${folder.id}&sub=${idx}`;
        window.history.pushState({ folder: folder.id, sub: idx }, "", newUrl);
        renderProjectPage();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
}


// ── Initialize ────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderFolderList();
  renderProjectPage();
});

window.addEventListener("popstate", () => {
  if (document.getElementById("project-root")) {
    renderProjectPage();
  }
});
