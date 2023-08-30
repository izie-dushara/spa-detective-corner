import routes from "../data/routes.js";

// Handle sub-route path
const pathToTegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  // get index as values
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  // key-value pairs return
  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};
// Navigation history
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
// Routing
const router = async () => {
  // call routes
  routes;

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    
    return {
      route: route,
      result: location.pathname.match(pathToTegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  console.log(match);

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  // Render the route
  const view = new match.route.view(getParams(match));
  document.querySelector("#app").innerHTML = await view.getHtml();
};

// Use the button to navigate between pages
window.addEventListener("popstate", router);

// Load Content to HTML
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
