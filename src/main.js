import './App.css';
import { APP_NAME, APP_VERSION } from './app/config';
import { createRouter } from './app/router';
import { homeRoute } from './pages/home';
import { newRoute } from './pages/new';
import { openRoute } from './pages/open';
import { settingsRoute } from './pages/settings';
import { notFoundRoute } from './pages/notfound';

const app = document.getElementById('app');
app.innerHTML = `
  <div class="app-shell">
    <header class="topnav">
      <div class="brand">${APP_NAME}</div>
      <nav class="nav-actions">
        <a class="nav-link" data-path="/" href="#/">Home</a>
        <a class="nav-link" data-path="/open" href="#/open">Open</a>
        <a class="nav-link" data-path="/settings" href="#/settings">Settings</a>
      </nav>
    </header>

    <main class="main-area" id="route-root"></main>

    <footer class="site-footer">Version ${APP_VERSION}</footer>
  </div>
`;

const routeRoot = document.getElementById('route-root');

const routes = {
  [homeRoute.path]: homeRoute,
  [newRoute.path]: newRoute,
  [openRoute.path]: openRoute,
  [settingsRoute.path]: settingsRoute
};

const router = createRouter({
  routes,
  notFound: notFoundRoute,
  onRoute: (route, path) => {
    routeRoot.innerHTML = route.render();
    updateTitle(route.title);
    updateActiveNav(path);
  }
});

routeRoot.addEventListener('click', (event) => {
  const target = event.target.closest('[data-nav]');
  if (!target) return;
  router.navigate(target.getAttribute('data-nav'));
});

function updateTitle(title) {
  document.title = title ? `${title} · ${APP_NAME}` : APP_NAME;
}

function updateActiveNav(path) {
  document.querySelectorAll('.nav-link').forEach((link) => {
    const isActive = link.dataset.path === path;
    link.classList.toggle('active', isActive);
  });
}

router.start();
