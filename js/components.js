// Shared navbar and footer, so every page uses the same markup
const navLinks = [
  { name: "Home", url: "index.html" },
  { name: "About", url: "about.html" },
  { name: "Services", url: "services.html" },
  { name: "Projects", url: "projects.html" },
  { name: "Contact", url: "contact.html" }
];



function loadNavbar() {
  // which menu item is active on this page
  const page = document.body.dataset.page;
  const active = (name) => page === name
    ? "text-yellow-600 font-bold"
    : "text-white font-semibold";

  document.getElementById("navbar").innerHTML = `
    <header>

      <nav class="fixed left-0 right-0 top-0 z-50 bg-ink">

        <div class="relative mx-auto navbar
            shadow-lg px-5 max-w-6xl
            grid grid-cols-[1fr_auto_1fr]">

          <!-- logo -->
          <a href="index.html"
            class="flex items-center gap-2 text-xl font-head font-bold justify-self-start">

            <span class="flex items-end gap-0.5 h-6" aria-hidden="true">
              <i class="w-1.5 h-3 bg-amber"></i>
              <i class="w-1.5 h-6 bg-amber"></i>
              <i class="w-1.5 h-4 bg-amber"></i>
            </span>

            <span class="text-white">Nahar</span>
            <span class="text-amber">Builders</span>

          </a>


          <!-- desktop and large devices main menus -->
          <div class="hidden md:flex justify-self-center">

            <ul class="menu menu-horizontal px-1">

              <!-- Home -->
              <li>
                <a href="index.html" class="${active("index.html")}">Home</a>
              </li>

              <!-- about Us -->
              <li class="dropdown dropdown-hover">
                <a tabindex="0" href="about.html" class="${active("about.html")}">About Us</a>

                <ul tabindex="0" class="dropdown-content menu bg-gray-200 rounded-lg shadow p-2 w-52">
                  <li>
                    <a href="about.html">Company Overview</a>
                  </li>
                  <li>
                    <a href="about.html#credentials">Certificates & Licenses</a>
                  </li>
                </ul>
              </li>

              <!-- services -->
              <li class="dropdown dropdown-hover">
                <a tabindex="0" href="services.html" class="${active("services.html")}">Services</a>

                <ul tabindex="0" class="dropdown-content menu bg-gray-200 rounded-lg shadow p-2 w-52">
                  <li>
                    <a href="services.html">All Services</a>
                  </li>
                  <li>
                    <a href="services.html#fleet">Machinery & Equipment</a>
                  </li>
                </ul>
              </li>

              <!-- projects -->
              <li class="dropdown dropdown-hover">
                <a tabindex="0" href="projects.html" class="${active("projects.html")}">Projects</a>

                <ul tabindex="0" class="dropdown-content menu bg-gray-200 rounded-lg shadow p-2 w-60">
                  <li>
                    <a href="projects.html">All Projects Portfolio</a>
                  </li>
                  <li>
                    <a href="hospital.html">Nahar Specialized Hospital</a>
                  </li>
                </ul>
              </li>

              <!-- contact -->
              <li>
                <a href="contact.html" class="${active("contact.html")}">Contact</a>
              </li>

            </ul>

          </div>


          <!-- desktop right buttons -->
          <div class="hidden md:flex items-center justify-self-end">

            <!-- notification icon -->
            <span class="material-symbols-outlined cursor-pointer text-white"
              aria-label="Notifications">
              notifications
            </span>

            <!-- search icon -->
            <span class="ml-5 material-symbols-outlined cursor-pointer text-white"
              aria-label="Search">
              search
            </span>

            <div class="ml-3">
              <a href="contact.html"
                class="btn btn-sm bg-amber border-amber text-ink hover:bg-yellow-300">
                Request an estimate
              </a>
            </div>

          </div>


          <!-- mobile menu -->
          <div class="navbar-end md:hidden col-start-3 justify-self-end">

            <div class="dropdown dropdown-end">

              <!-- menu icon -->
              <div tabindex="0" role="button"
                class="btn btn-ghost text-xl text-white"
                aria-label="Open menu">

                <span class="material-symbols-outlined">menu</span>

              </div>

              <!-- mobile menu -->
              <ul tabindex="0"
                class="menu menu-sm dropdown-content mt-3 z-50 p-3 shadow bg-ink rounded-box w-56">

                <!-- home -->
                <li>
                  <a href="index.html" class="${active("index.html")}">Home</a>
                </li>

                <!-- about us -->
                <li>
                  <details>
                    <summary class="text-white font-semibold">About Us</summary>
                    <ul>
                      <li>
                        <a href="about.html" class="text-white">Company Overview</a>
                      </li>
                      <li>
                        <a href="about.html#credentials" class="text-white">Certificates & Licenses</a>
                      </li>
                    </ul>
                  </details>
                </li>

                <!-- services -->
                <li>
                  <details>
                    <summary class="text-white font-semibold">Services</summary>
                    <ul>
                      <li>
                        <a href="services.html" class="text-white">All Services</a>
                      </li>
                      <li>
                        <a href="services.html#fleet" class="text-white">Machinery & Equipment</a>
                      </li>
                    </ul>
                  </details>
                </li>

                <!-- projects -->
                <li>
                  <details>
                    <summary class="text-white font-semibold">Projects</summary>
                    <ul>
                      <li>
                        <a href="projects.html" class="text-white">All Projects Portfolio</a>
                      </li>
                      <li>
                        <a href="hospital.html" class="text-white">Nahar Specialized Hospital</a>
                      </li>
                    </ul>
                  </details>
                </li>

                <!-- contact -->
                <li>
                  <a href="contact.html" class="${active("contact.html")}">Contact</a>
                </li> 

                <!-- get a quote -->
                <li class="mt-2">
                  <a href="contact.html"
                    class="btn bg-yellow-600 text-white hover:bg-blue-950 justify-center">
                    GET A QUOTE
                  </a>
                </li>

              </ul>

            </div>

          </div>

        </div>

      </nav>

    </header>

    <!-- navbar spacer -->
    <div class="h-16"></div>`;
}



function loadFooter() {
  document.getElementById("footer").innerHTML = `
    <footer class="bg-ink text-slate-300 pt-12 pb-6">
      <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <p class="font-head font-bold text-xl text-white mb-2">Nahar <span class="text-amber">Builders</span></p>
          <p class="text-sm">A civil construction and real estate development company in Chattogram, Bangladesh, dedicated to structural safety and client trust.</p>
        </div>
        <div>
          <h3 class="font-head font-bold text-white mb-2">Quick links</h3>
          <ul class="text-sm space-y-1">
            ${navLinks.map(l => `<li><a class="hover:text-amber" href="${l.url}">${l.name}</a></li>`).join("")}
            <li><a class="hover:text-amber" href="hospital.html">Nahar Specialized Hospital</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-head font-bold text-white mb-2">Head office</h3>
          <p class="text-sm">Nahar Square (1st Floor), Holding No. 6/6, Arakan Road, Bahaddarhat, Chattogram<br>+880 1811 44 77 52<br>info@naharbuilders.com</p>
        </div>
      </div>
      <p class="max-w-6xl mx-auto px-4 mt-8 pt-4 border-t border-white/10 text-xs">&copy; 2026 Nahar Builders. Student redesign for coursework; company information is sourced from naharbuilders.com. No official social media links are published on the source site.</p>
    </footer>`;
}

loadNavbar();
loadFooter();
