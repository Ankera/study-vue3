import { createRouter, createWebHistory } from "vue-router";
import TreeParent from '../components/tree/TreeParent.vue';
import ParentSon from '../components/parentSon/index.vue';
import ComponentsIndex from '../components/components/Index.vue'
import EventBus from '../components/eventBus/index.vue'
import UseAttrs from '../components/useAttrs/index.vue'
import VModel from '../components/vModel/index.vue'

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
      {
        path: "/parentSon",
        name: "parentSon",
        component: ParentSon,
      }, 
      {
        path: "/eventBus",
        name: "eventBus",
        component: EventBus,
      },
      {
        path: "/useAttrs",
        name: "useAttrs",
        component: UseAttrs,
      },
      {
        path: "/vModel",
        name: "vModel",
        component: VModel,
      },
    ],
  });
  
  export default router;