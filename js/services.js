// Services page
function displayServices() {
  document.getElementById("servicesGrid").innerHTML = services.map(serviceCard).join("");

  document.getElementById("supplyGrid").innerHTML = supply.map(s => `
    <div>
      <h4 class="font-head font-bold text-amber">${s.title}</h4>
      <p class="text-sm">${s.text}</p>
    </div>`).join("");

  document.getElementById("fleetList").innerHTML = fleet.map(f => `<span class="badge badge-lg bg-ink2 text-white border-0">${f}</span>`).join("");
}

displayServices();
