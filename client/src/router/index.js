import { createWebHistory, createRouter } from "vue-router";

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Beerbets from '../views/Beerbets.vue'
import CreateBeerbet from '../views/CreateBeerbet.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/beerbets',
      name: 'Beerbets',
      component: Beerbets
    },
    {
      path: '/create-beerbet',
      name: 'CreateBeerbet',
      component: CreateBeerbet
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


// module.exports = router;

export default router;


// export default function(history) {
//     return createRouter({
//         history,
//         routes
//     });
// }