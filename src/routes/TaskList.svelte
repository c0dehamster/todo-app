<script lang="ts">
	import { dndzone } from "svelte-dnd-action"
	import { TasksStore, TasksFiltered } from "./TaskList"

	import Task from "./Task.svelte"
	import type { ListItem } from "./TaskList"

	const handleSort = (e: CustomEvent<DndEvent<ListItem>>) =>
		($TasksStore.items = e.detail.items)

	const onToggleCompleted = (
		e: CustomEvent<{ id: string; completed: boolean }>
	) => TasksStore.toggleCompleted(e.detail.id, e.detail.completed)

	const onDelete = (e: CustomEvent<string>) => TasksStore.removeItem(e.detail)
</script>

<fieldset class="tasks-list-wrapper">
	<legend class="sr-only">List of tasks</legend>
	{#if $TasksFiltered.length > 0}
		<ul
			class="tasks-list"
			use:dndzone={{ items: $TasksStore.items }}
			on:consider={handleSort}
			on:finalize={handleSort}>
			{#each $TasksStore.items as task (task.id)}
				<Task
					{...task}
					on:delete={onDelete}
					on:toggleCompleted={onToggleCompleted} />
			{/each}
		</ul>
	{/if}
</fieldset>

<style>
	.tasks-list-wrapper {
		display: grid;
		border: none;
	}

	.tasks-list {
		display: grid;

		border-radius: 0.25rem 0.25rem 0 0;
		overflow: hidden;
	}
</style>
