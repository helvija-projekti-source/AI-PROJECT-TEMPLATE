import './App.css';
import pkg from '../package.json';

const app = document.getElementById('app');
app.innerHTML = `
  <div class="app-shell">
    <header class="topnav">
      <div class="brand">AI Project Template</div>
      <nav class="nav-actions" aria-hidden="true"></nav>
    </header>

    <main class="main-area">
      <div class="button-grid">
        <button id="new-project" class="big-btn">New Project</button>
        <button id="open-project" class="big-btn">Open Project</button>
        <button id="settings" class="big-btn">Settings</button>
      </div>
    </main>

    <footer class="site-footer">Version ${pkg.version}</footer>
  </div>
`;

document.getElementById('new-project').addEventListener('click', () => {
  console.log('New Project clicked');
  alert('New Project - not implemented yet');
});

document.getElementById('open-project').addEventListener('click', () => {
  console.log('Open Project clicked');
  alert('Open Project - not implemented yet');
});

document.getElementById('settings').addEventListener('click', () => {
  console.log('Settings clicked');
  alert('Settings - not implemented yet');
});

console.log('Starter UI initialized');
