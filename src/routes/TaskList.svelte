<script lang="ts">
	import { flip } from "svelte/animate"

	import { dndzone } from "svelte-dnd-action"
	import { TasksStore, TasksFiltered } from "./TaskList"

	import Task from "./Task.svelte"
	import type { ListItem } from "./TaskList"

	const flipDurationMs = 200

	$: items = $TasksFiltered

	const handleSort = (e: CustomEvent<DndEvent<ListItem>>) =>
		(items = e.detail.items)

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
			use:dndzone={{ items }}
			on:consider={handleSort}
			on:finalize={handleSort}>
			{#each items as task (task.id)}
				<div
					class="dnd-item"
					animate:flip={{ duration: flipDurationMs }}>
					<Task
						{...task}
						on:delete={onDelete}
						on:toggleCompleted={onToggleCompleted} />
				</div>
			{/each}
		</ul>
	{/if}
</fieldset>

<style>
	.tasks-list-wrapper,
	.tasks-list {
		display: grid;
		border: none;
	}
</style>
