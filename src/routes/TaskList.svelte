<script lang="ts">
	import { TasksStore, TasksFiltered } from "./TaskList"

	import Task from "./Task.svelte"

	const onDelete = (e: CustomEvent<string>) => TasksStore.removeItem(e.detail)
</script>

<fieldset class="tasks-list-wrapper">
	<legend class="sr-only">List of tasks</legend>

	<ul class="tasks-list">
		{#if $TasksFiltered.length > 0}
			{#each $TasksFiltered as task}
				<Task {...task} on:delete={onDelete} />
			{/each}
		{/if}
	</ul>
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
