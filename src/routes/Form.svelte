<script lang="ts">
	import { TasksStore } from "./TaskList"

	let newTaskDescription = ""
	let buttonClass = "checkbox-circle"

	const onSubmit = () => {
		TasksStore.addItem(newTaskDescription)
		newTaskDescription = ""
	}

	const onClick = () => {
		buttonClass = "checkbox-circle checkbox-circle--completed"
		onSubmit()

		setTimeout(() => (buttonClass = "checkbox-circle"), 1000)
	}

	$: disabled = newTaskDescription === ""
</script>

<!-- The submit event is not registered therefore handling on:click -->
<from class="form" on:submit|preventDefault={onSubmit}>
	<button class={buttonClass} {disabled} on:click={onClick}>
		<span class="sr-only"> Add todo </span>
	</button>

	<input
		type="text"
		class="form__input"
		name="taskDescription"
		placeholder="Create a new todo..."
		bind:value={newTaskDescription}
		on:keydown={e => {
			if (e.key === "Enter") onClick() // Same here
		}} />
</from>

<style>
	.form {
		padding: 1rem;

		margin-block-end: 1.5rem;

		display: flex;
		align-items: center;
		gap: 1rem;

		border-radius: 0.25rem;

		background-color: var(--color-background-card);
	}

	.form__input {
		border: none;
		outline: none;

		flex: 1;

		background-color: transparent;
		color: var(--color-main-contrast);

		/* I did not know it is possible to style the caret at all */
		caret-color: var(--color-primary-400);

		font-size: var(--font-size-100);
	}

	.form__input::placeholder {
		color: var(--color-main-shaded);
	}

	@media screen and (min-width: 40rem) {
		.form {
			padding-inline: 1.5rem;
		}

		.form__input {
			font-size: var(--font-size-500);
		}
	}
</style>
