import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import ToolPage from '../views/ToolPage.vue';
import AddToolPage from '../views/AddToolPage.vue';
import UpdateToolPage from '../views/UpdateToolPage.vue';
import IngredientPage from '../views/IngredientPage.vue';
import AddIngredientPage from '../views/AddIngredientPage.vue';
import UpdateIngredientPage from '../views/UpdateIngredientPage.vue';
import DecorPage from '../views/DecorPage.vue';
import AddDecorPage from '../views/AddDecorPage.vue';
import UpdateDecorPage from '../views/UpdateDecorPage.vue';
import OrderPage from '../views/OrderPage.vue';
import AddOrderPage from '../views/AddOrderPage.vue';
import FailPage from '../views/FailPage.vue';
import AddFailPage from '../views/AddFailPage.vue';
import UpdateFailPage from '../views/UpdateFailPage.vue';
import ControlPage from '../views/ControlPage.vue';
import AddControlPage from '../views/AddControlPage.vue';
import SpecPage from '../views/SpecPage.vue';
import RatePage from '../views/RatePage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      // {
      //   path: '/login',
      //   name: 'login',
      //   component: LoginView
      // },
      { path: '/', component: LoginPage },
      { path: '/register', component: RegisterPage },
      { path: '/tool', component: ToolPage },
      { path: '/addtool', component: AddToolPage },
      { path: '/updatetool', component: UpdateToolPage },
      { path: '/ingredient', component: IngredientPage },
      { path: '/addingredient', component: AddIngredientPage },
      { path: '/updateingredient', component: UpdateIngredientPage },
      { path: '/decor', component: DecorPage },
      { path: '/adddecor', component: AddDecorPage },
      { path: '/updatedecor', component: UpdateDecorPage },
      { path: '/order', component: OrderPage },
      { path: '/addorder', component: AddOrderPage },
      { path: '/fail', component: FailPage },
      { path: '/addfail', component: AddFailPage },
      { path: '/updatefail', component: UpdateFailPage },
      { path: '/control', component: ControlPage },
      { path: '/addcontrol', component: AddControlPage },
      { path: '/spec', component: SpecPage },
      { path: '/rate', component: RatePage },
    
    ]})

export default router