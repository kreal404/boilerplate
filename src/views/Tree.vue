<template>
  <ul>
    <li v-for="(item, index) in treeData" :key="index">
      {{ item.name }}
      
      <component :is="dynamicTree" v-if="item.children" :tree-data="item.children" />
    </li>
  </ul>
</template>

<script setup>

import { defineAsyncComponent, defineComponent, toRefs } from 'vue';

const dynamicTree = defineAsyncComponent(() => import('./Tree.vue'));

defineComponent({
  components: {
    dynamicTree
  },
  props: {
    treeData: Array
  }
});

const props = defineProps({
  treeData: Array
});

const { treeData } = toRefs(props);

</script>
