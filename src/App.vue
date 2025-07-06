<template>
	<div id="app">
		<tree :tree-data="treeData" />
		<!-- <tree-list :nodes="treeData" /> -->
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { defineComponent } from 'vue';
import Tree from './views/Tree.vue';
// import TreeList from './views/TreeList.vue';

const treeData = ref([
	{ name: 'Фрукты', children: [
		{ name: 'Яблоки' },
		{ name: 'Бананы', children: [
			{ name: 'Мини-бананы' }
		] },
		{ name: 'Груши' }
	]},
	{ name: 'Овощи', children: [
		{ name: 'Помидоры' },
		{ name: 'Огурцы' }
	]}
]);

defineComponent({
  components: {
    Tree
	// TreeList
  }
});
</script>

<style>
.appCon{
	display: flex;
	flex-direction: column;
}
</style>
