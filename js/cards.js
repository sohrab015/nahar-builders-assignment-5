// Card builders shared by several pages
function projectCard(p) {
  const badgeColor = p.status === "Ongoing" ? "bg-amber text-ink" : "badge-neutral";
  return `
    <div class="card bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
      <figure class="relative aspect-[16/10] bg-gradient-to-br from-steel to-ink2">
        <img src="${p.img}" alt="${p.name}, ${p.type.toLowerCase()} project" class="w-full h-full object-cover" loading="lazy" onerror="this.remove()">
        <span class="badge ${badgeColor} border-0 absolute top-3 left-3">${p.status}</span>
      </figure>
      <div class="card-body">
        <p class="text-sm text-slate-500">${p.type}</p>
        <h3 class="card-title font-head">${p.name}</h3>
        <p class="text-slate-600">${p.desc}</p>
        <div class="flex gap-4 text-sm font-semibold border-t border-slate-200 pt-3 mt-2">
          <span class="flex items-center gap-1"><span class="material-symbols-outlined" style="font-size:18px">location_on</span>${p.location}</span>
          ${p.stories ? `<span>${p.stories} storeys</span>` : ""}
        </div>
        <div class="card-actions mt-2">
          <a href="projects.html?id=${p.id}" class="btn btn-sm btn-outline">View details</a>
        </div>
      </div>
    </div>`;
}

function serviceCard(s) {
  return `
    <div class="card bg-white border-b-4 border-transparent hover:border-amber transition">
      <div class="card-body">
        <span class="material-symbols-outlined text-steel" style="font-size:44px">${s.icon}</span>
        <h3 class="card-title font-head">${s.title}</h3>
        <p class="text-slate-600">${s.text}</p>
        <ul class="list-disc pl-5 text-sm">${s.points.map(p => `<li>${p}</li>`).join("")}</ul>
      </div>
    </div>`;
}

function whyItem(w) {
  return `
    <div class="border-t-2 border-amber pt-4">
      <span class="material-symbols-outlined text-amber">${w.icon}</span>
      <h3 class="font-head font-bold text-lg text-white mb-1">${w.title}</h3>
      <p>${w.text}</p>
    </div>`;
}
