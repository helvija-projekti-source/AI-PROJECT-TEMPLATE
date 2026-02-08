export const notFoundRoute = {
  path: '/404',
  title: 'Not Found',
  render: () => `
    <section class="page">
      <h1 class="page-title">Page not found</h1>
      <p class="page-subtitle">The route you requested does not exist.</p>
      <a class="text-link" href="#/">Return home</a>
    </section>
  `
};
