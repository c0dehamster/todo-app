<script lang="ts">
	import { TasksStore } from "./TaskList"

	$: taskListLength = $TasksStore.items.length
</script>

<div class="controls">
	<div class="controls__items-left">
		<p>
			{`${taskListLength} ${
				taskListLength === 1 ? "item" : "items"
			} left`}
		</p>
	</div>

	<fieldset class="filter-by">
		<legend class="sr-only">Filter items</legend>

		<label for="" class="filter-by__label"> All </label>

		<input type="radio" class="hidden" />

		<label for="" class="filter-by__label"> Active </label>

		<input type="radio" class="hidden" />

		<label for="" class="filter-by__label"> Completed </label>

		<input type="radio" class="hidden" />
	</fieldset>

	<div class="controls__clear-completed">
		<button class="button"> Clear Completed </button>
	</div>
</div>

<style>
	.controls {
		margin-block-end: 2.25rem;

		display: grid;
		grid-template-areas: "items-left filter-by button-clear";
		align-items: center;
		row-gap: 1.5rem;

		color: var(--color-main-shaded);

		font-size: var(--font-size-100);
	}

	.controls__items-left,
	.filter-by,
	.controls__clear-completed {
		background-color: var(--color-background-card);
		width: 100%;
		height: 3rem;

		display: flex;
		align-items: center;
	}

	.controls__items-left {
		padding-inline-start: 1.5rem;
		grid-area: items-left;
		justify-self: baseline;
		border-bottom-left-radius: 0.25rem;
	}

	.filter-by {
		grid-area: filter-by;
		justify-self: center;

		justify-content: center;
		gap: 1.25rem;

		border: none;

		font-size: var(--font-size-200);
	}

	.filter-by__label {
		transition: color 100ms ease-in;
	}

	.controls__clear-completed {
		padding-inline-end: 1.5rem;
		grid-area: button-clear;

		justify-content: end;
		border-bottom-right-radius: 0.25rem;
	}

	.button {
		transition: color 100ms ease-in;

		color: var(--color-main-shaded);
	}

	/* Active states */

	.filter-by__label--active {
		color: var(--color-active);
	}

	.filter-by__label:hover,
	.filter-by__label:focus,
	.button:hover,
	.button:focus {
		color: var(--color-main-contrast-hover);
	}

	@media screen and (max-width: 32rem) {
		.controls {
			grid-template-areas:
				"items-left button-clear"
				"filter-by filter-by";
		}

		.filter-by {
			border-radius: 0.25rem;
		}
	}

	@media screen and (min-width: 40rem) {
		.filter-by {
			font-size: var(--font-size-300);
		}
	}
</style>
