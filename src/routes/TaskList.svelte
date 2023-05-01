<script lang="ts">
	import { TasksStore } from "./TaskList"

	import Task from "./Task.svelte"
</script>

<fieldset class="tasks-list-wrapper">
	<legend class="sr-only">List of tasks</legend>

	<ul class="tasks-list">
		{#if $TasksStore.items.length > 0}
			{#each $TasksStore.items as task}
				<Task {...task} />
			{/each}
		{/if}
		<Task description="Finish the todo-app" id="1" />
		<Task description="Finish the todo-app" id="2" />
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
