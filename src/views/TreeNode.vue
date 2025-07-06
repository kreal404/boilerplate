<template>
  <li>
    {{ node.name }}
    <tree-list v-if="node.children" :nodes="node.children" />
  </li>
</template>

<script setup>
import { defineComponent } from 'vue';
import TreeList from './TreeList.vue';

defineComponent({
  components: {
    TreeList
  },
  props: {
    node: Object
  }
});
</script>
