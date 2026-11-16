/* =============================================
   PORTFOLIO — Candela Cortezon Saez
   Folder navigation, project data, and rendering
   ============================================= */

// ── Project Data ──────────────────────────────

const FOLDERS = [
  {
    id: "biomaterials",
    title: "Biomaterials",
    projects: [
      {
        id: "bacterial-cellulose",
        title: "Bacterial Cellulose × Textile Waste",
        summary: "A <strong class=\"highlight-green\">design-driven biomaterial</strong> for <strong class=\"highlight-green\">fashion</strong> (ongoing)",
        role: "Material Researcher & Designer",
        context: "ESILV — Biomaterials Research (Ongoing)",
        tools: ["Bacterial Cellulose", "Textile Waste", "Material Design", "Sustainability"],
        description: `I’m developing a <strong class=\"highlight-green\">fully biodegradable, sewable material</strong> made from <strong class=\"highlight-green\">bacterial cellulose (BC)</strong>, grown from kombucha, combined with <strong class=\"highlight-green\">100% cotton textile waste</strong>. The BC comes from Vivant, a kombucha producer in Paris, and the cotton scraps from the Institut Français de la Mode. Both are material that would otherwise be discarded.

Existing research already shows that BC and textile fibres can be combined. My focus is the step that decides whether fashion can actually use the result: making the material <strong class=\"highlight-green\">pleasant in feel, smell and appearance</strong>, and <strong class=\"highlight-green\">testing its mechanical properties</strong> so it can become real garments. I’m working at the intersection of <strong class=\"highlight-green\">biomaterials and textile design</strong>, with the guidance of an expert in BC and kombucha-based clothing.`,
        images: [ { src: "images/biomaterials1.jpeg",}],
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
        summary: "Exploring the intersection of <strong class=\"highlight-green\">craft and sustainability</strong> through <strong class=\"highlight-green\">rewritten garments</strong> and <strong class=\"highlight-green\">original textile work</strong>.",
        role: "Designer & Maker",
        context: "Personal Project",
        tools: ["Upcycling", "Slow Fashion", "Textiles", "Sewing"],
        description: `I’ve always been drawn to working with my hands, and learning to sew has turned that into a real passion: <strong class=\"highlight-green\">designing and making clothes</strong> from garments that already exist.

Rather than starting from new fabric, I start from what’s already there. I <strong class=\"highlight-green\">take apart, rethink, and reassemble</strong> clothes into new pieces, which means every project begins with a question: what can this garment become? Working this way teaches me to <strong class=\"highlight-green\">read materials</strong>, understand how a garment is constructed, and solve problems with the constraints I have, from fabric quality to seams and proportions.

For me, <strong class=\"highlight-green\">fashion and sustainability</strong> can’t be separated. Giving a <strong class=\"highlight-green\">second life to clothing</strong> is a practical way to <strong class=\"highlight-green\">reduce waste</strong> and rethink how we consume, and it pushes me to design with intention rather than excess.`,
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
    id: "product-design",
    title: "Product Design",
    projects: [
      {
        id: "quickstarter",
        title: "Quickstarter",
        summary: "<strong class=\"highlight-green\">Designed, prototyped, and produced</strong> an innovative product as part of a <strong class=\"highlight-green\">Kickstarter-style project</strong>.",
        role: "Product Designer & Project Lead",
        context: "ESILV — Project Management Course",
        tools: ["CAD", "Prototyping", "Project Management", "User Research"],
        description: `Quickstarter was an accelerated, Kickstarter-inspired course project in which we had to take a product from <strong class=\"highlight-green\">idea to market-ready pitch</strong> in a very short time. Our team designed a <strong class=\"highlight-green\">recycled-plastic outlet cover</strong> (cache prise) that protects young children without looking like the usual childproofing hardware.
        
We started with <strong class=\"highlight-green\">user research and ideation</strong>, then moved to conception, balancing child-safety constraints with a <strong class=\"highlight-green\">minimal design</strong>. We built and tested <strong class=\"highlight-green\">physical prototypes</strong>, iterating on fit and ease of use. In parallel, we developed the <strong class=\"highlight-green\">brand identity</strong> and a crowdfunding-style pitch, and managed the project as a team, with defined roles and milestones under a tight deadline.`,
        images: [{ src: "images/kickstarter1.jpeg", alt: "The Glacier Pen Project — 3D printed bolt action pen" },
          { src: "images/kickstarter2.jpeg", alt: "First steps in 3D modeling — Rhino interface with geometric forms" },
          { src: "images/kickstarter3.jpeg", alt: "Laser cutting task — geometric paper forms and sketches" },
          ],
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
        summary: "A playful <strong class=\"highlight-green\">ML project</strong> exploring <strong class=\"highlight-green\">unconventional UI/UX interactions</strong> for phone number input.",
        role: "Creative Developer",
        context: "How to Make Almost Anything class",
        tools: [ "Machine Learning", "Creative Code", "UI/UX Experiment"],
        description: `We created a program in which the user had to introduce their phone number in an unpractical way, using <strong class=\"highlight-green\">machine learning and p5.js</strong>.
        
We used <strong class=\"highlight-green\">Teachable Machine</strong> to train a model with the recordings of each note. We trained the <strong class=\"highlight-green\">audio classifier</strong> with 11 classes: Background noise, do, do#, re, re#, mi, fa, fa#, sol, sol#, la. Then we went to editor.p5js.org and did the mapping: do→0, do#→1, re→2, re#→3, mi→4, fa→5, fa#→6, sol→7, sol#→8, la→9.
         
If you want to try it click here: <a href="https://editor.p5js.org/Mahel/sketches/rQJhqABpX" target="_blank" rel="noopener noreferrer">https://editor.p5js.org/Mahel/sketches/rQJhqABpX</a>`,
        images: [{ src: "images/phone1.png",}],
      },
      {
        id: "handwritten-text-recognition",
        title: "Handwritten Text Recognition",
        summary: "<strong class=\"highlight-green\">Handwritten recognition</strong> to <strong class=\"highlight-green\">digital text</strong> using deep learning OCR.",
        role: "ML Engineer",
        context: "Personal Project",
        tools: ["Handwriting recognition", "Computer Vision", "OCR"],
        description: `I made a web site that transforms <strong class=\"highlight-green\">handwritten journal entries into digital text</strong> using <strong class=\"highlight-green\">deep learning OCR technology</strong>. Built with <strong class=\"highlight-green\">FastAPI and EasyOCR</strong>, the app features a custom canvas interface designed to mimic the aesthetic of a vintage journal. I deployed the application using <strong class=\"highlight-green\">Docker containerization</strong> on <strong class=\"highlight-green\">Hugging Face Spaces</strong>.
        
Try it out here: <a href="https://candelacsaez-handwriting-recognition.hf.space/" target="_blank" rel="noopener noreferrer">https://candelacsaez-handwriting-recognition.hf.space/</a>`,
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
        summary: "<strong class=\"highlight-green\">Artistic direction</strong> and <strong class=\"highlight-green\">social media visuals</strong> for AMMA, my school's MMA and combat sports association.",
        role: "Respo Communication (Bureau Member)",
        context: `AMMA — MMA & Combat Sports Association 
        Personal Projects`,
        tools: ["Art Direction", "Social Media", "Instagram", "Graphic Design"],
        description: `As <strong class=\"highlight-green\">respo communication</strong> on the bureau of AMMA, my school's MMA and combat sports association, I am in charge of the association's <strong class=\"highlight-green\">artistic direction</strong>. I design the <strong class=\"highlight-green\">Instagram posts, stories, and other visuals</strong> that shape how the association presents itself and communicates with its community.
        
@amma_devinvi
        
I also have a deep interest in <strong class=\"highlight-green\">graphic design</strong> and make posters as a hobby.`,
        images: [{ src: "images/ama1.png",},
          { src: "images/ama2.jpeg",},
           { src: "images/ama3.jpeg",}
        ],
      },
      {
        id: "novalife",
        title: "Order Management Web Site",
        summary: "A web site built to <strong class=\"highlight-green\">manage the orders</strong> of the <strong class=\"highlight-green\">research institute IFT</strong>",
        role: "UI/UX Designer & Developer",
        context: "ESILV — Web Tech Course",
        tools: ["Firebase", "Vue.js", "GitHub"],
        description: `I developed an <strong class=\"highlight-green\">order management web site</strong> for a research institute using <strong class=\"highlight-green\">Firebase (Backend-as-a-Service)</strong> as a database to store orders, and to handle user login/authentication, and <strong class=\"highlight-green\">Vue for the frontend</strong>.
        
Check it out: <a href="https://candelacsaez.github.io/lab-order-system/login" target="_blank" rel="noopener noreferrer">https://candelacsaez.github.io/lab-order-system/login</a>`,
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
        summary: "An interactive project blending <strong class=\"highlight-green\">prompt engineering</strong>, <strong class=\"highlight-green\">AI image generation</strong>, and <strong class=\"highlight-green\">custom display interfaces</strong>.",
        role: "Creative Technologist",
        context: "ESILV — HCI Course",
        tools: [ "Image Generation", "Human-Computer Interaction", "UI/UX"],
        description: `DreamLogue is an <strong class=\"highlight-green\">interactive project</strong> aiming at enhancing users' introspection by creating an <strong class=\"highlight-green\">immersive experience</strong> where they can remember their dreams. It is a journal where you can <strong class=\"highlight-green\">keep track of all your dreams</strong> and find patterns or repressed emotions.`,
        images: [{ type: "video", src: "images/dreamlog1.mp4"},
          { src: "images/dreamlog2.jpeg"},
          { src: "images/dreamlog3.jpeg"},
          { src: "images/dreamlog4.jpeg"}
        ],
      },
      {
        id: "unity-haptics",
        title: "A Trip Through Emotions",
        summary: "A <strong class=\"highlight-green\">Unity environment</strong> with two contrasted worlds exploring how <strong class=\"highlight-green\">environmental design</strong> guides <strong class=\"highlight-green\">emotional experience</strong>.",
        role: "Environment Designer & Developer",
        context: "ESILV — HCI Course",
        tools: ["Unity", "Haptics", "Electronics"],
        description: `A <strong class=\"highlight-green\">Unity environment</strong> with two contrasted worlds connected by a hidden portal. The first world is a hostile desert that creates an anxious ambiance and a feeling of being trapped. On the other side of the portal, there is a calm forest with a relaxed landscape that connects you to nature and a feeling of freedom. Each world has different music that matches the mood. The project explores how <strong class=\"highlight-green\">environmental design</strong> can be used to <strong class=\"highlight-green\">guide emotional experience</strong>, reflecting a personal appreciation for nature. 
        
In the context of a class about haptics, I created a <strong class=\"highlight-green\">vibrating device</strong> that activates when you get close to this invisible portal.`,
        images: [
          { src: "images/hci-unity-forest.png", alt: "Unity forest environment — calm landscape with pine trees, water, and blue sky" },
          { src: "images/hci-unity-desert.png", alt: "Unity desert environment — harsh sand dunes with sandstorm and orange sky" },
          { type: "video", src: "images/unity.mp4" }
        ],
      },
      {
        id: "video-editing-electronics",
        title: "Video Editing with Electronics",
        summary: "<strong class=\"highlight-green\">Electronics</strong> to <strong class=\"highlight-green\">real-time video editing</strong> and playback.",
        role: "Interactive Media Designer",
        context: "ESILV — How to Make Almost Anything Course",
        tools: ["Electronics", "Video Processing", "Interactive Media"],
        description: `In the context of the class HOW TO MAKE ALMOST ANYTHING, we created a <strong class=\"highlight-green\">PCB</strong> allowing us to <strong class=\"highlight-green\">glitch, edit, and play</strong> with videos and images. With <strong class=\"highlight-green\">potentiometers</strong>, we changed the colors of an image, we made our own <strong class=\"highlight-green\">pixeled animations</strong> and played with videos from an SD card.`,
        images: [  { src: "images/elec1.jpg"},
          { src: "images/elec2.jpg"},
          { src: "images/elec3.jpg"},
          { type: "video", src: "images/elec4.mp4"}
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


// ── Media Helpers ──────────────────────────────

function isVideoMedia(item) {
  if (!item) return false;
  return item.type === "video" || (typeof item.src === "string" && /\.(mp4|webm|ogg|mov)$/i.test(item.src));
}

function renderMainMedia(item) {
  if (!item) return "";
  if (isVideoMedia(item)) {
    return `<video src="${item.src}" controls autoplay muted loop playsinline class="gallery-media gallery-video" id="gallery-main-media"></video>`;
  }
  return `<img src="${item.src}" alt="${item.alt || ''}" class="gallery-media gallery-img" id="gallery-main-media" />`;
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
        <a href="index.html#work" class="project-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to portfolio
        </a>
      </div>
      <div class="project-content">
        <p style="color: var(--text-muted);">Folder not found. <a href="index.html#work" style="color: var(--accent);">Return to portfolio</a></p>
      </div>
    `;
    return;
  }

  document.title = `${folder.title} — Candela Cortezon Saez`;

  const activeIndex = Math.max(0, Math.min(subIndex, folder.projects.length - 1));
  const project = folder.projects[activeIndex];

  const adaptFolders = ["machine-learning", "digital-design", "hci"];
  const shouldAdaptFrame = adaptFolders.includes(folder.id);
  const adaptClass = shouldAdaptFrame ? "gallery-main--adapt" : "";

  const projectsNavHtml = folder.projects.length > 1
    ? `<div class="project-nav-bar">
        <nav class="project-nav" aria-label="Projects in this folder">
          ${folder.projects.map((p, i) => `
            <button class="project-nav-btn ${i === activeIndex ? "active" : ""}" data-index="${i}" aria-pressed="${i === activeIndex}">
              <span class="project-nav-num">0${i + 1}</span>
              <span class="project-nav-name">${p.title}</span>
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

  // Image/Video gallery
  const galleryHtml = project.images.length > 0
    ? `<div class="project-gallery">
        <div class="gallery-main ${adaptClass}">
          ${renderMainMedia(project.images[0])}
        </div>
        ${project.images.length > 1 ? `
          <div class="gallery-thumbs" role="tablist" aria-label="Media gallery">
            ${project.images.map((img, i) => {
              const isVid = isVideoMedia(img);
              return `
                <button class="gallery-thumb ${i === 0 ? "active" : ""}" data-index="${i}" role="tab" aria-selected="${i === 0}" aria-label="View media ${i + 1}: ${img.alt || ''}">
                  ${isVid ? `
                    <div class="thumb-video-container">
                      <video src="${img.src}#t=0.001" muted playsinline preload="metadata"></video>
                      <span class="thumb-video-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                          <polygon points="6 4 20 12 6 20"></polygon>
                        </svg>
                      </span>
                    </div>
                  ` : `
                    <img src="${img.src}" alt="${img.alt || ''}" />
                  `}
                </button>
              `;
            }).join("")}
          </div>
        ` : ""}
      </div>`
    : `<div class="project-gallery">
        <div class="gallery-main ${adaptClass}">
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
    <a href="index.html#work" class="project-back">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 5l-7 7 7 7" />
      </svg>
      Back to portfolio
    </a>

    <header class="project-header">
      <div class="project-folder-tab">
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
  const mainGalleryContainer = root.querySelector(".gallery-main");
  const thumbs = root.querySelectorAll(".gallery-thumb");
  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      const idx = parseInt(thumb.dataset.index, 10);
      const mediaItem = project.images[idx];
      if (mediaItem && mainGalleryContainer) {
        mainGalleryContainer.innerHTML = renderMainMedia(mediaItem);
        const vid = mainGalleryContainer.querySelector("video");
        if (vid) {
          vid.play().catch(() => {});
        }
      }
      thumbs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      thumb.classList.add("active");
      thumb.setAttribute("aria-selected", "true");
    });
  });

  // Autoplay initial video if present
  const initialVid = root.querySelector(".gallery-main video");
  if (initialVid) {
    initialVid.play().catch(() => {});
  }

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
