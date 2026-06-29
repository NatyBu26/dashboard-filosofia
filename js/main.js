const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const courseNames = {
  primero: "Primero",
  segundo: "Segundo",
  tercero: "Tercero"
};

const STATUS_STORAGE_KEY = "philosophyDashboardStatuses";
const statusOptions = [
  { value: "pendiente", label: "Pendiente" },
  { value: "realizada", label: "Realizada" },
  { value: "recuperada", label: "Recuperada" },
  { value: "sin clase", label: "Sin clase" },
  { value: "adaptada", label: "Adaptada" },
  { value: "cierre", label: "Cierre" }
];

function safeImage(src, alt, className = "card__image") {
  return `<img class="${className}" src="${src}" alt="${alt}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'), {className: '${className} placeholder', textContent: '✦'}))">`;
}

function statusLabel(status) {
  if (status === "pendiente") return "Pendiente";
  if (status === "sin clase") return "Sin clase";
  if (status === "recuperada") return "Recuperada";
  if (status === "adaptada") return "Adaptada";
  if (status === "cierre") return "Cierre";
  return "Realizada";
}

function statusClass(status) {
  return `chip--${status.replace(" ", "-")}`;
}

function themeLabel(theme) {
  return theme.toUpperCase() === "LSA" ? "LSA" : theme;
}

function statusKey(weekId, course) {
  return `semana-${weekId}-${course}`;
}

function getSavedStatuses() {
  try {
    return JSON.parse(localStorage.getItem(STATUS_STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveStatus(weekId, course, status) {
  const saved = getSavedStatuses();
  saved[statusKey(weekId, course)] = status;
  localStorage.setItem(STATUS_STORAGE_KEY, JSON.stringify(saved));
}

function getEffectiveStatus(weekId, course, classData) {
  return getSavedStatuses()[statusKey(weekId, course)] || classData.status || "pendiente";
}

function renderStatusOptions(currentStatus) {
  return statusOptions.map((option) => `
    <option value="${option.value}" ${option.value === currentStatus ? "selected" : ""}>${option.label}</option>
  `).join("");
}

function renderHelpers() {
  $("#helpersGrid").innerHTML = helpersData.map((helper) => `
    <article class="helper-card">
      ${safeImage(helper.image, helper.name, "helper-card__image")}
      <div class="helper-card__body">
        <h3>${helper.name}</h3>
        <p class="helper-card__role">${helper.role}</p>
        <p class="quote">“${helper.phrase}”</p>
        <p>${helper.description}</p>
      </div>
    </article>
  `).join("");
}

function renderBreathing() {
  $("#breathingGrid").innerHTML = breathingData.map((item, index) => `
    <article class="card breathing-card" tabindex="0" role="button" aria-expanded="false" data-breathing="${index}">
      ${safeImage(item.image, item.name)}
      <div class="card__body">
        <h3>${item.name}</h3>
        <p><strong>Ayuda a:</strong> ${item.helps}</p>
        <div class="breathing-details">
          <p><strong>Cómo se hace:</strong> ${item.how}</p>
          <p><strong>Repeticiones:</strong> ${item.repetitions}</p>
        </div>
        <span class="detail-link breathing-toggle-label">Ver respiración</span>
      </div>
    </article>
  `).join("");

  $$(".breathing-card").forEach((card) => {
    const setExpanded = (expanded) => {
      card.setAttribute("aria-expanded", String(expanded));
      const label = card.querySelector(".breathing-toggle-label");
      if (label) label.textContent = expanded ? "Cerrar respiración" : "Ver respiración";
    };
    const toggle = () => setExpanded(card.getAttribute("aria-expanded") !== "true");
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });
}

function renderDoors() {
  $("#doorsGrid").innerHTML = doorsData.map((door) => `
    <article class="card door-card">
      ${safeImage(door.image, door.name)}
      <div class="card__body">
        <h3>${door.name}</h3>
        <p>${door.description}</p>
        <p><strong>Nos invita a:</strong> ${door.invitation}</p>
      </div>
    </article>
  `).join("");
}

function classMatches(classData, course, filters, weekId) {
  const effectiveStatus = getEffectiveStatus(weekId, course, classData);
  const haystack = [
    course,
    classData.title,
    effectiveStatus,
    classData.eje,
    classData.ayudante,
    classData.respiracion,
    classData.puertas,
    classData.recurso,
    classData.proposito,
    classData.inicio,
    classData.desarrollo,
    classData.cierre,
    classData.recursos,
    classData.observacion,
    ...(classData.preguntas || []),
    ...(classData.tags || [])
  ].join(" ").toLowerCase();

  return (
    (filters.course === "todos" || filters.course === course) &&
    (filters.status === "todos" || effectiveStatus === filters.status) &&
    (filters.theme === "todos" || haystack.includes(filters.theme)) &&
    (!filters.query || haystack.includes(filters.query))
  );
}

function weekMatches(week, filters) {
  const weekText = `${week.title} ${week.summary} ${week.theme}`.toLowerCase();
  return Object.entries(week.classes).some(([course, classData]) => {
    const queryHitsWeek = !filters.query || weekText.includes(filters.query);
    return classMatches(classData, course, { ...filters, query: queryHitsWeek ? "" : filters.query }, week.id);
  });
}

function getFilters() {
  return {
    query: $("#searchInput").value.trim().toLowerCase(),
    course: $("#courseFilter").value,
    status: $("#statusFilter").value,
    theme: $("#themeFilter").value.toLowerCase()
  };
}

function renderWeeks() {
  const filters = getFilters();
  const visibleWeeks = weeksData.filter((week) => weekMatches(week, filters));
  $("#resultsCount").textContent = `${visibleWeeks.length} semana${visibleWeeks.length === 1 ? "" : "s"} visibles`;

  $("#weeksGrid").innerHTML = visibleWeeks.map((week) => {
    const weekQueryHit = filters.query && `${week.title} ${week.summary}`.toLowerCase().includes(filters.query);
    const actions = Object.entries(week.classes)
      .filter(([course, classData]) => classMatches(classData, course, filters, week.id) || weekQueryHit)
      .map(([course, classData]) => {
        const effectiveStatus = getEffectiveStatus(week.id, course, classData);
        return `
        <div class="course-row">
          <button class="course-button" type="button" data-week="${week.id}" data-course="${course}">
            <span class="course-button__name">${courseNames[course]}</span>
          </button>
          <label class="status-control ${statusClass(effectiveStatus)}">
            <span class="sr-only">Cambiar estado de ${courseNames[course]}, semana ${week.id}</span>
            <select class="status-select" data-week="${week.id}" data-course="${course}" aria-label="Cambiar estado de ${courseNames[course]}, semana ${week.id}">
              ${renderStatusOptions(effectiveStatus)}
            </select>
          </label>
        </div>
      `;
      })
      .join("");

    return `
      <article class="week-card">
        <div class="week-card__top">
          <div class="week-number" aria-label="Semana ${week.id}">${week.id}</div>
          <div>
            <p class="eyebrow">${week.dates}</p>
            <h3>${week.title}</h3>
          </div>
        </div>
        <p class="week-card__summary">${week.summary}</p>
        <div class="week-card__theme">${themeLabel(week.theme)}</div>
        <div class="course-actions">${actions}</div>
      </article>
    `;
  }).join("");

  $$(".course-button").forEach((button) => {
    button.addEventListener("click", () => openClass(Number(button.dataset.week), button.dataset.course));
  });

  $$(".status-select").forEach((select) => {
    select.addEventListener("click", (event) => event.stopPropagation());
    select.addEventListener("change", (event) => {
      event.stopPropagation();
      saveStatus(Number(select.dataset.week), select.dataset.course, select.value);
      renderWeeks();
    });
  });
}

function detailItem(label, value) {
  if (!value) return "";
  return `<div class="detail-item"><strong>${label}</strong><span>${value}</span></div>`;
}

function renderText(value) {
  if (!value) return "";
  const blocks = String(value)
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block) => {
    const lines = block.split(/\n/).map((line) => line.trim()).filter(Boolean);
    if (lines.length > 1 && lines.every((line) => line.length < 180)) {
      return `<ul>${lines.map((line) => `<li>${line}</li>`).join("")}</ul>`;
    }
    return `<p>${lines.join("<br>")}</p>`;
  }).join("");
}

function section(label, value) {
  if (!value || Array.isArray(value) && value.length === 0) return "";
  const content = Array.isArray(value)
    ? `<ul>${value.map((item) => `<li>${item}</li>`).join("")}</ul>`
    : renderText(value);
  return `<section class="content-section"><h3>${label}</h3>${content}</section>`;
}

function openClass(weekId, course) {
  const week = weeksData.find((item) => item.id === weekId);
  const classData = week.classes[course];
  const effectiveStatus = getEffectiveStatus(weekId, course, classData);
  $("#modalMeta").textContent = `Semana ${week.id} · ${week.dates} · ${courseNames[course]}`;
  $("#modalTitle").textContent = classData.title;

  const sinClase = classData.status === "sin clase";
  $("#modalBody").innerHTML = `
    <div class="class-overview">
      <div>
        <span class="overview-label">Semana</span>
        <strong>${week.id}</strong>
      </div>
      <div>
        <span class="overview-label">Curso</span>
        <strong>${courseNames[course]}</strong>
      </div>
      <div>
        <span class="overview-label">Estado</span>
        <strong>${statusLabel(effectiveStatus)}</strong>
      </div>
    </div>
    <div class="detail-grid">
      ${detailItem("Fecha prevista", classData.date)}
      ${sinClase ? detailItem("Motivo", "Feriado nacional") : ""}
      ${detailItem("Eje", classData.eje)}
      ${detailItem("Ayudante", classData.ayudante)}
      ${detailItem("Respiración sugerida", classData.respiracion)}
      ${detailItem("Puertas trabajadas", classData.puertas)}
      ${detailItem("Recurso central", classData.recurso)}
    </div>
    ${sinClase ? section("Mensaje", classData.observacion) : `
      ${section("Propósito", classData.proposito)}
      ${section("Inicio", classData.inicio)}
      ${section("Desarrollo", classData.desarrollo)}
      ${section("Preguntas para pensar", classData.preguntas)}
      ${section("Cierre", classData.cierre)}
      ${section("Recursos", classData.recursos)}
      ${section("Observación de planificación", classData.observacion)}
    `}
  `;

  $("#classModal").showModal();
}

function renderResources() {
  $("#resourcesGrid").innerHTML = resourcesData.map((resource) => `
    <button class="resource-card" type="button" data-resource="${resource.id}">
      ${resource.image ? safeImage(resource.image, resource.name, "resource-card__image") : `<div class="resource-card__placeholder">✦</div>`}
      <span class="chip resource-card__status">${resource.status || "En construcción"}</span>
      <h3>${resource.name}</h3>
      <p>${resource.description}</p>
      <span class="detail-link">Ver recurso</span>
    </button>
  `).join("");

  $$(".resource-card").forEach((card) => {
    card.addEventListener("click", () => openResource(card.dataset.resource));
  });
}

function openResource(resourceId) {
  const resource = resourcesData.find((item) => item.id === resourceId);
  $("#resourceModalTitle").textContent = resource.name;
  $("#resourceModalMeta").textContent = resource.status || "En construcción";

  const gallery = resource.items && resource.items.length
    ? `<div class="resource-gallery">${resource.items.map((item) => `
        <article class="resource-gallery__item">
          ${safeImage(item.image, item.title, "resource-gallery__image")}
          <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `).join("")}</div>`
    : `<div class="empty-resource"><strong>En construcción</strong><p>${resource.description}</p></div>`;

  $("#resourceModalBody").innerHTML = `
    <section class="resource-detail">
      <p>${resource.description}</p>
      ${gallery}
      ${resource.emptyMessage ? `<p class="resource-empty-message">${resource.emptyMessage}</p>` : ""}
    </section>
  `;

  $("#resourceModal").showModal();
}

function bindFilters() {
  ["searchInput", "courseFilter", "statusFilter", "themeFilter"].forEach((id) => {
    $(`#${id}`).addEventListener("input", renderWeeks);
  });

  $("#clearFilters").addEventListener("click", () => {
    $("#searchInput").value = "";
    $("#courseFilter").value = "todos";
    $("#statusFilter").value = "todos";
    $("#themeFilter").value = "todos";
    renderWeeks();
  });

  $("#resetStatuses").addEventListener("click", () => {
    const confirmed = confirm("¿Querés restablecer todos los estados al valor original de las planificaciones?");
    if (!confirmed) return;
    localStorage.removeItem(STATUS_STORAGE_KEY);
    renderWeeks();
  });
}

function bindModals() {
  $("#closeModal").addEventListener("click", () => $("#classModal").close());
  $("#classModal").addEventListener("click", (event) => {
    if (event.target === $("#classModal")) $("#classModal").close();
  });

  $("#closeResourceModal").addEventListener("click", () => $("#resourceModal").close());
  $("#resourceModal").addEventListener("click", (event) => {
    if (event.target === $("#resourceModal")) $("#resourceModal").close();
  });
}

function bindBackToTop() {
  const button = $("#backToTop");
  window.addEventListener("scroll", () => {
    button.classList.toggle("is-visible", window.scrollY > 640);
  });
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function init() {
  renderHelpers();
  renderBreathing();
  renderDoors();
  renderWeeks();
  renderResources();
  bindFilters();
  bindModals();
  bindBackToTop();
}

document.addEventListener("DOMContentLoaded", init);
