<script lang="ts">
	import { createEventDispatcher } from "svelte"

	export let id: string
	export let description: string
	export let completed = false
	export let isDndShadowItem = false

	const dispatch = createEventDispatcher()

	const onDelete = () => dispatch("delete", id)

	$: {
		dispatch("toggleCompleted", { id, completed })
	}

	$: taskDescriptionClass = `task__description ${
		completed ? "task__description--completed" : ""
	}`

	$: checkboxCircleClass = `checkbox-circle ${
		completed ? "checkbox-circle--completed" : ""
	}`
</script>

<li class="task">
	<input
		type="checkbox"
		{id}
		name={id}
		class="hidden"
		bind:checked={completed} />

	<label for={id} class={taskDescriptionClass}>
		<div class={checkboxCircleClass}>
			<span class="sr-only">Mark as completed</span>
		</div>
		{description}
	</label>

	<button class="button" on:click={onDelete}>
		<svg
			class="button__icon"
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			><path
				fill="#494C6B"
				fill-rule="evenodd"
				d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
	</button>
</li>

<style>
	.task,
	.task__description {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.task {
		padding: 1rem;

		background-color: var(--color-background-card);
		border-bottom: 1px solid var(--color-main-shaded);

		--icon-color: var(--color-main-shaded);
	}

	.task__description {
		flex: 1;

		color: var(--color-main-contrast);
		transition: color 100ms ease-in;

		font-size: var(--font-size-100);
	}

	.button {
		height: 1.125rem;
	}

	.button__icon path {
		fill: var(--icon-color);
		transition: fill 100ms ease-in;
	}

	/* Active states */

	.task__description:hover,
	.task__description:hover {
		color: var(--color-main-contrast-hover);
	}

	.task__description--completed {
		text-decoration: line-through;
		color: var(--color-main-shaded);
	}

	@media screen and (min-width: 40rem) {
		.task {
			padding: 1.5rem;

			--icon-color: transparent;
		}

		.task:hover,
		.task:focus-within {
			--icon-color: var(--color-main-shaded);
		}

		.task__description {
			font-size: var(--font-size-500);
		}
	}
</style>
