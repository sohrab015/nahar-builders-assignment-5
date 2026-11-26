// Projects page: filter buttons + details modal
function displayProjects(filter) {
  const grid = document.getElementById("projectGrid");
  const list = filter === "all" ? projects : projects.filter(p => p.group === filter);
  grid.innerHTML = list.map(projectCard).join("");
}

function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.remove("bg-ink", "text-white");
        b.classList.add("btn-outline");
      });
      btn.classList.remove("btn-outline");
      btn.classList.add("bg-ink", "text-white");
      displayProjects(btn.dataset.filter);
    });
  });
}

// View details buttons are links like projects.html?id=3, so they work from every page
function setupDetailsLinks() {
  document.getElementById("projectGrid").addEventListener("click", function (e) {
    const link = e.target.closest("a[href^='projects.html?id=']");
    if (!link) return;
    e.preventDefault();
    showDetails(Number(new URL(link.href).searchParams.get("id")));
  });
}

function showDetails(id) {
  const p = projects.find(item => item.id === id);
  if (!p) return;

  document.getElementById("modalStatus").innerText = p.status;
  document.getElementById("modalTitle").innerText = p.name;
  document.getElementById("modalType").innerText = p.type;
  document.getElementById("modalDesc").innerText = p.desc;
  document.getElementById("modalImg").innerHTML = `<img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover" onerror="this.remove()">`;

  let facts = `
    <div class="border-l-4 border-amber pl-3"><p class="text-xs text-slate-500">Location</p><p class="font-bold">${p.location}</p></div>
    <div class="border-l-4 border-amber pl-3"><p class="text-xs text-slate-500">Status</p><p class="font-bold">${p.status}</p></div>`;
  if (p.stories) {
    facts += `<div class="border-l-4 border-amber pl-3"><p class="text-xs text-slate-500">Storeys</p><p class="font-bold">${p.stories}</p></div>`;
  }
  document.getElementById("modalFacts").innerHTML = facts;

  // only the hospital has its own details page on the official site
  document.getElementById("modalPageLink").innerHTML = p.page
    ? `<a href="${p.page}" class="btn btn-sm bg-amber border-amber text-ink">Open full project page</a>`
    : "";

  document.getElementById("projectModal").showModal();
}

displayProjects("all");
setupFilters();
setupDetailsLinks();

// open a project directly when the URL has ?id=3
const startId = new URLSearchParams(window.location.search).get("id");
if (startId) showDetails(Number(startId));
