/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from "vue";
import App from "../app.vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

// document.addEventListener("DOMContentLoaded", () => {
//   const el = document.body.appendChild(document.createElement("hello"));
//   const app = new Vue({
//     vuetify: new Vuetify(),
//     el,
//     render: (h) => h(App),
//   });

//   console.log(app);
// });

document.addEventListener("DOMContentLoaded", () => {
  const app = new Vue({
    vuetify: new Vuetify(),
    render: (h) => h(App),
  }).$mount();
  document.body.appendChild(app.$el);

  console.log(app);
});
