// Home page: skyline, services preview, featured projects, why choose us
function displaySkyline() {
  const sky = document.getElementById("skyline");
  const tall = projects.filter(p => p.stories > 0).sort((a, b) => b.stories - a.stories);
  const max = tall[0].stories;

  tall.forEach(function (p, index) {
    const bar = document.createElement("a");
    bar.href = "projects.html?id=" + p.id;
    bar.className = "sky-bar flex-1 min-w-0 bg-steel hover:bg-amber hover:text-ink text-white rounded-t font-head font-bold text-sm pt-1 text-center transition-colors";
    bar.style.height = Math.round((p.stories / max) * 100) + "%";
    bar.style.animationDelay = index * 70 + "ms";
    bar.innerText = p.stories;
    bar.title = p.name + " (" + p.stories + " storeys)";
    bar.setAttribute("aria-label", p.name + ", " + p.stories + " storeys. Open details.");
    sky.appendChild(bar);
  });
}

function displayHome() {
  document.getElementById("servicesPreview").innerHTML = services.slice(0, 3).map(serviceCard).join("");

  // featured: hospital, Nakeeb Heights, Hotel Tower Inn (same three as the official home page)
  const featured = [11, 1, 3].map(id => projects.find(p => p.id === id));
  document.getElementById("featuredProjects").innerHTML = featured.map(projectCard).join("");

  document.getElementById("whyPreview").innerHTML = why.slice(0, 3).map(whyItem).join("");
}

displaySkyline();
displayHome();
