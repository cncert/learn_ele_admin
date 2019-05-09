/** When your routing table is too long, you can split it into small modules **/

import Layout from "@/layout";

const componentsRouter = {
  path: "/components",
  component: Layout,
  redirect: "noRedirect",
  name: "ComponentDemo",
  meta: {
    title: "组件",
    icon: "component"
  },
  children: [
    {
      path: "tinymce",
      component: () => import("@/views/components-demo/tinymce"),
      name: "TinymceDemo",
      meta: { title: "富文本" }
    },
    {
      path: "markdown",
      component: () => import("@/views/components-demo/markdown"),
      name: "MarkdownDemo",
      meta: { title: "Markdown" }
    },
    {
      path: "json-editor",
      component: () => import("@/views/components-demo/json-editor"),
      name: "JsonEditorDemo",
      meta: { title: "JSON Editor" }
    },
    {
      path: "split-pane",
      component: () => import("@/views/components-demo/split-pane"),
      name: "SplitpaneDemo",
      meta: { title: "SplitPane" }
    },
    {
      path: "avatar-upload",
      component: () => import("@/views/components-demo/avatar-upload"),
      name: "AvatarUploadDemo",
      meta: { title: "上传demo" }
    },
    {
      path: "dropzone",
      component: () => import("@/views/components-demo/dropzone"),
      name: "DropzoneDemo",
      meta: { title: "拖动上传" }
    },
    {
      path: "sticky",
      component: () => import("@/views/components-demo/sticky"),
      name: "StickyDemo",
      meta: { title: "固定组件" }
    },
    {
      path: "count-to",
      component: () => import("@/views/components-demo/count-to"),
      name: "Count To",
      meta: { title: "自动累加Demo" }
    },
    {
      path: "mixin",
      component: () => import("@/views/components-demo/mixin"),
      name: "ComponentMixinDemo",
      meta: { title: "混合小组件" }
    },
    {
      path: "back-to-top",
      component: () => import("@/views/components-demo/back-to-top"),
      name: "BackToTopDemo",
      meta: { title: "返回顶部" }
    },
    {
      path: "drag-dialog",
      component: () => import("@/views/components-demo/drag-dialog"),
      name: "DragDialogDemo",
      meta: { title: "可拖动的模态框" }
    },
    {
      path: "drag-select",
      component: () => import("@/views/components-demo/drag-select"),
      name: "DragSelectDemo",
      meta: { title: "选择项关联" }
    },
    {
      path: "dnd-list",
      component: () => import("@/views/components-demo/dnd-list"),
      name: "DndListDemo",
      meta: { title: "可拖动待办事项" }
    },
    {
      path: "drag-kanban",
      component: () => import("@/views/components-demo/drag-kanban"),
      name: "DragKanbanDemo",
      meta: { title: "可拖动待办事项看板" }
    }
  ]
};

export default componentsRouter;
