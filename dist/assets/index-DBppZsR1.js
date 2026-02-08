(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const s="0.1.0",c={version:s},l=document.getElementById("app");l.innerHTML=`
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

    <footer class="site-footer">Version ${c.version}</footer>
  </div>
`;document.getElementById("new-project").addEventListener("click",()=>{console.log("New Project clicked"),alert("New Project - not implemented yet")});document.getElementById("open-project").addEventListener("click",()=>{console.log("Open Project clicked"),alert("Open Project - not implemented yet")});document.getElementById("settings").addEventListener("click",()=>{console.log("Settings clicked"),alert("Settings - not implemented yet")});console.log("Starter UI initialized");
