<script lang="ts"></script>

<from class="form">
	<button class="checkbox-circle checkbox-circle--checked">
		<span class="sr-only"> Add todo </span>
	</button>

	<input type="text" class="form__input" placeholder="Create a new todo..." />
</from>

<style>
	.form {
		padding: 1rem;

		display: flex;
		align-items: center;
		gap: 1rem;

		border-radius: 0.25rem;

		background-color: var(--color-background-card);
	}

	.form__input {
		border: none;
		outline: none;

		background-color: transparent;
		color: var(--color-main-contrast);

		/* I did non know it is possible to style the caret at all */
		caret-color: var(--color-primary-400);

		font-size: var(--font-size-100);
	}

	.form__input::placeholder {
		color: var(--color-main-shaded);
	}
</style>
