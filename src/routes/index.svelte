<script lang="ts">
	import { todoStore } from '$lib/stores/todoStore';
	import { onMount } from 'svelte';
	import type { Todo } from '$lib/types/Todo';
	import TodoList from '$lib/components/TodoList.svelte';
	import InputForm from '$lib/components/InputForm.svelte';

	let todos: Todo[] = [];
	$: todos = $todoStore.filter((todo) => !todo.done);
	function onItemChange() {
		todos = $todoStore.filter((todo) => !todo.done);
	}
	onMount(() => {
		const todoItems = JSON.parse(localStorage.getItem('todoItems'));
		$todoStore = todoItems ?? [];
		todos = $todoStore.filter((todo) => todo.done);
	});
</script>

<InputForm />

<div class="w-full px-3">
	{#if todos.length <= 0}
		<div class="text-center font-bold text-2xl mt-4">There's nothing todo!</div>
	{:else}
		<TodoList {todos} on:onChange={onItemChange} />
	{/if}
</div>
