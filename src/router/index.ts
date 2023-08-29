import { createRouter, createWebHistory } from "vue-router";
import TreeParent from '../components/tree/TreeParent.vue';
import HelloWorld from '../components/HelloWorld.vue';
import ComponentsIndex from '../components/components/Index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/tree",
        name: "index",
        component: TreeParent,
        // children: [
        //   {
        //     path: "",
        //     name: "home",
        //     component: Tree,
        //   },
        //   {
        //     path: "template/:id",
        //     name: "template",
        //     component: HelloWorld,
        //     meta: {
        //       withHeader: true,
        //     },
        //   },
        // ],
      },
      {
        path: "/components",
        name: "components",
        component: ComponentsIndex,
      },
    ],
  });
  
  export default router;