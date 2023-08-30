import Error from "../js/views/Error.js";
import Dashboard from "../js/views/Dashboard.js";
import Suspects from "../js/views/Suspects.js";
import Entries from "../js/views/Entries.js";
import Victims from "../js/views/Victims.js";
import Scenes from "../js/views/Scenes.js";
import Witnesses from "../js/views/Witnesses.js";

const routes = [
  {
    path: "/404",
    view: Error,
  },
  {
    path: "/",
    view: Dashboard,
  },
  {
    path: "/suspects",
    view: Suspects,
  },
  // {
  //   path: "/suspects/:id",
  //   view: ViewSuspect,
  // },
  {
    path: "/victims",
    view: Victims,
  },
  // {
  //   path: "/victims/:id",
  //   view: ViewVictim,
  // },
  {
    path: "/scenes",
    view: Scenes,
  },
  // {
  //   path: "/scenes/:id",
  //   view: ViewScene,
  // },
  {
    path: "/entries",
    view: Entries,
  },
  // {
  //   path: "/entries/:id",
  //   view: ViewEntries,
  // },
  {
    path: "/witnesses",
    view: Witnesses,
  },
  // {
  //   path: "/witnesses/:id",
  //   view: Witnesses,
  // },
]

export default routes;