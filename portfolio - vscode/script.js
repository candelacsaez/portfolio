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
        description: `Designed, prototyped, and produced an innovative product as part of a Kickstarter-style project. Covered all stages from initial concept and user research to CAD modeling and physical production. The project followed a structured approach to bring a product idea from concept to reality, managing timelines, resources, and deliverables throughout.`,
        images: [],
      },
      {
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
      },
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
        context: "Maison Durable De Vinci — Sewing Association",
        tools: ["Pattern Making", "Upcycling", "Slow Fashion", "Textiles", "Sewing"],
        description: `Exploring the intersection of craft and sustainability, these upcycling projects range from rewritten garments to original textile work. As an active member of the sewing association Maison Durable De Vinci, the focus is on sustainable fashion and textile reuse. Each piece transforms existing materials into new, functional designs — from a leopard-print top and blue striped skirt to a gingham halter top and handcrafted bags. The work emphasizes reducing textile waste while creating aesthetically pleasing, wearable pieces.`,
        images: [
          { src: "images/upcycling-leopard-top.png", alt: "Leopard print upcycled top held against a white background" },
          { src: "images/upcycling-blue-skirt.png", alt: "Blue striped upcycled skirt with button details" },
          { src: "images/upcycling-gingham-back.jpeg", alt: "Gingham halter top with tie-back detail, back view" },
          { src: "images/upcycling-gingham-front.jpeg", alt: "Gingham halter top with asymmetric neckline, front view" },
          { src: "images/upcycling-black-bag.jpeg", alt: "Black leather upcycled shoulder bag" },
          { src: "images/upcycling-lace-bag.jpeg", alt: "Burgundy lace upcycled tote bag" },
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
        title: "Bacterial Cellulose + Textile Waste",
        summary: "Developing a biomaterial from bacterial cellulose and textile waste with a design-driven approach.",
        role: "Material Researcher & Designer",
        context: "ESILV — Biomaterials Research (Ongoing)",
        tools: ["Bacterial Cellulose", "Textile Waste", "Material Design", "Sustainability"],
        description: `An ongoing research project creating a biomaterial from bacterial cellulose and textile waste. The approach is design-driven: the goal is to create a material that is aesthetically pleasing, with attention to touch and smell — not just functional. The vision is for this material to be used by people to make clothes, reducing textile waste, upcycling existing materials, and helping the fashion industry become more sustainable. The project sits at the intersection of material science, design, and sustainability.`,
        images: [],
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
        context: "Personal Project",
        tools: ["Python", "Machine Learning", "Creative Code", "UI/UX Experiment"],
        description: `A playful and unorthodox machine learning project exploring unconventional UI/UX interactions for phone number input using interactive machine learning models and creative code. The project challenges standard form design by introducing ML-driven interactions that make the mundane task of entering a phone number an engaging experience.`,
        images: [],
      },
      {
        id: "handwritten-text-recognition",
        title: "Handwritten Text Recognition",
        summary: "Computer vision model to recognize, process, and digitize handwritten text into structured format.",
        role: "ML Engineer",
        context: "Personal Project",
        tools: ["Python", "TensorFlow", "Computer Vision", "OCR"],
        description: `Computer vision model developed to recognize, process, and digitize handwritten text and custom scripts into structured text format. The project explores OCR (Optical Character Recognition) techniques and deep learning approaches to convert handwritten input into machine-readable text.`,
        images: [],
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
        context: "AMMA — MMA & Combat Sports Association",
        tools: ["Art Direction", "Social Media", "Instagram", "Graphic Design"],
        description: `As respo communication on the bureau of AMMA, my school's MMA and combat sports association, I am in charge of the association's artistic direction. I design the Instagram posts, stories, and other visuals that shape how the association presents itself and communicates with its community.`,
        images: [],
      },
      {
        id: "novalife",
        title: "NovaLife",
        summary: "A podcast community app designed to help refugees connect, share stories, and build community.",
        role: "UI/UX Designer & Developer",
        context: "ESILV — App Design Course",
        tools: ["Figma", "UI/UX", "Wireframing", "Prototyping", "User Research"],
        description: `NovaLife is a podcast community app designed to help refugees reconnect, belong, and thrive. The app provides a platform where users can share their stories, listen to others, and build a supportive community. The design process started with user research and wireframes, moving through high-fidelity UI mockups in Figma. Key features include a podcast feed, chat functionality, community profiles, and a map to locate nearby community members. The app aims to help refugees rebuild their lives by fostering connection and shared experience.`,
        images: [
          { src: "images/novalife-logo.png", alt: "NovaLife app logo and branding — Reconnect. Belong. Thrive" },
          { src: "images/novalife-screens.png", alt: "NovaLife app screens — podcast community, chat, map, and recording features" },
        ],
      },
    ],
  },
  {
    id: "hci",
    title: "HCI",
    projects: [
      {
        id: "dreamlogue",
        title: "DreamLogue",
        summary: "An interactive project blending prompt engineering, AI image generation, and custom display interfaces.",
        role: "Creative Technologist",
        context: "ESILV — HCI Course",
        tools: ["Prompt Engineering", "AI Image Generation", "React", "Hardware Integration", "Pop-up UI"],
        description: `DreamLogue is an interactive project blending prompt engineering, AI image generation, and custom display interfaces. Designed to turn personal journal entries and dreams into visual experiences through pop-up UI and hardware integration. The system takes written input — dreams, thoughts, journal entries — and transforms them into visual narratives using AI, creating a bridge between the written word and visual storytelling.`,
        images: [],
      },
      {
        id: "unity-haptics",
        title: "A Trip Through Emotions",
        summary: "A Unity environment with two contrasted worlds exploring how environmental design guides emotional experience.",
        role: "Environment Designer & Developer",
        context: "ESILV — HCI Course",
        tools: ["Unity", "C#", "3D Modeling", "Environmental Design", "Audio Design"],
        description: `A Unity environment with two contrasted worlds connected by a hidden portal. The first world is a hostile desert that creates an anxious ambiance and a feeling of being trapped. On the other side of the portal, there is a calm forest with a relaxed landscape that connects you to nature and a feeling of freedom. Each world has different music that matches the mood. The project explores how environmental design can be used to guide emotional experience, reflecting a personal appreciation for nature. The hidden portal rewards curiosity and exploration — crossing it symbolizes the effort of controlling your stress or emotions to get to a calmer place. Inspired by games like Journey and Firewatch, as well as research on stress recovery in natural environments.`,
        images: [
          { src: "images/hci-unity-forest.png", alt: "Unity forest environment — calm landscape with pine trees, water, and blue sky" },
          { src: "images/hci-unity-desert.png", alt: "Unity desert environment — harsh sand dunes with sandstorm and orange sky" },
        ],
      },
      {
        id: "video-editing-electronics",
        title: "Video Editing with Electronics",
        summary: "An interactive installation connecting electronic sensors to real-time video editing and playback.",
        role: "Interactive Media Designer",
        context: "ESILV — HCI Course",
        tools: ["Electronics", "Arduino", "Video Processing", "Interactive Media", "Sensors"],
        description: `An interactive installation connecting electronic sensors and custom physical controls to real-time video editing and playback manipulation. The project explores the intersection of physical computing and digital media, allowing users to manipulate video through tangible, electronic interfaces.`,
        images: [],
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
    const tags = folder.projects
      .map(p => `<span class="folder-project-tag">${p.title}</span>`)
      .join("");

    panel.setAttribute("aria-labelledby", `folder-tab-${folder.id}`);
    panel.innerHTML = `
      <div class="folder-fade">
        <div class="folder-top-row">
          <span class="folder-title">${folder.title}</span>
        </div>
        <div class="folder-projects">${tags}</div>
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

  // Sub-project navigation
  const navHtml = folder.projects.length > 1
    ? `<nav class="project-nav" aria-label="Project navigation">
        ${folder.projects.map((p, i) => `
          <button class="project-nav-btn ${i === activeIndex ? "active" : ""}" data-index="${i}" aria-pressed="${i === activeIndex}">
            ${p.title}
          </button>
        `).join("")}
      </nav>`
    : "";

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
  const infoHtml = `
    <div class="project-info">
      <h2>${project.title}</h2>
      <p class="project-summary">${project.summary}</p>
      <p class="project-description">${project.description}</p>
      <div class="project-details">
        <div class="project-detail-row">
          <span class="project-detail-label">Role</span>
          <span class="project-detail-value">${project.role}</span>
        </div>
        <div class="project-detail-row">
          <span class="project-detail-label">Context</span>
          <span class="project-detail-value">${project.context}</span>
        </div>
        <div class="project-detail-row">
          <span class="project-detail-label">Tools</span>
          <span class="project-detail-value">${project.tools.join(", ")}</span>
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
        <h1>${folder.title}</h1>
      </div>
      <div class="project-meta">
        <span class="project-meta-item"><strong>${folder.projects.length}</strong> project${folder.projects.length !== 1 ? "s" : ""}</span>
      </div>
    </header>

    ${navHtml}

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
