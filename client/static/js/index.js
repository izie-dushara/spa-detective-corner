import routes from "../data/routes.js";

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
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  // Render the route
  const view = new match.route.view();
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
