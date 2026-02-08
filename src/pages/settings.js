export const settingsRoute = {
  path: '/settings',
  title: 'Settings',
  render: () => `
    <section class="page">
      <h1 class="page-title">Settings</h1>
      <p class="page-subtitle">Centralize configuration for your app.</p>
      <div class="card">
        <p class="card-title">Theme</p>
        <p class="card-body">Add toggles and preferences here.</p>
      </div>
    </section>
  `
};
