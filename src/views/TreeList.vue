<template>
  <ul>
    <tree-node v-for="(node, index) in nodes" :key="index" :node="node" />
  </ul>
</template>

<script setup>
import { defineComponent } from 'vue';
import TreeNode from './TreeNode.vue';

defineComponent({
  components: {
    TreeNode
  },
  props: {
    nodes: Array
  }
});
</script>

<!-- App.vue -->
 <!-- <template>
  <div id="app">
    <tree-list :nodes="treeData" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TreeList from './TreeList.vue';

const treeData = ref([
  // здесь ваш исходный массив данных
]);

defineComponent({
  components: {
    TreeList
  }
});
</script> -->
