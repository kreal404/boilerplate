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
