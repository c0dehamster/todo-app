<script lang="ts"></script>

<div class="controls">
	<p class="controls__items-left">5 items left</p>

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
		padding-block: 1rem;
		width: 100%;
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

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.25rem;

		border: none;

		font-size: var(--font-size-200);
	}

	.controls__clear-completed {
		padding-inline-end: 1.5rem;
		grid-area: button-clear;
		display: flex;
		align-items: center;
		justify-content: end;
		border-bottom-right-radius: 0.25rem;
	}

	.button {
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
</style>
