export const homeRoute = {
  path: '/',
  title: 'Home',
  render: () => `
    <section class="page">
      <h1 class="page-title">Start a project</h1>
      <p class="page-subtitle">Choose a path to continue.</p>
      <div class="button-grid">
        <button class="big-btn" data-nav="/new">New Project</button>
        <button class="big-btn" data-nav="/open">Open Project</button>
        <button class="big-btn" data-nav="/settings">Settings</button>
      </div>
    </section>
  `
};
