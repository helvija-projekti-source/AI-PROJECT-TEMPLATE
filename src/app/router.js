function normalize(path) {
  if (!path) return '/';
  if (!path.startsWith('/')) return `/${path}`;
  return path;
}

export function createRouter({ routes, notFound, onRoute }) {
  const handle = () => {
    const raw = window.location.hash.replace(/^#/, '');
    const path = normalize(raw);
    const route = routes[path] || notFound;
    onRoute(route, path);
  };

  const navigate = (path) => {
    window.location.hash = `#${normalize(path)}`;
  };

  const start = () => {
    if (!window.location.hash) {
      navigate('/');
      return;
    }
    handle();
  };

  window.addEventListener('hashchange', handle);
  window.addEventListener('load', start);

  return { navigate, start };
}
