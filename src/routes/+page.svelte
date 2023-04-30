<script lang="ts">
	import backgroundMobileDark from "../lib/images/bg-mobile-dark.jpg"
	import backgroundMobileLight from "../lib/images/bg-mobile-light.jpg"
	import backgroundDesktopDark from "../lib/images/bg-desktop-dark.jpg"
	import backgroundDesktopLight from "../lib/images/bg-desktop-light.jpg"
	import iconSun from "../lib/images/icon-sun.svg"
	import iconMoon from "../lib/images/icon-moon.svg"

	import Form from "./Form.svelte"
	import Task from "./Task.svelte"
	import Controls from "./Controls.svelte"
</script>

<svelte:head>
	<title>Frontend Mentor | Todo app</title>
</svelte:head>

<div
	class="app"
	style="--background-mobile-dark: url({backgroundMobileDark});
--background-mobile-light: url({backgroundMobileLight});
--background-desktop-dark: url({backgroundDesktopDark});
--background-desktop-light: url({backgroundDesktopLight})">
	<div class="wrapper">
		<header class="header">
			<h1 class="heading">Todo</h1>

			<!-- Do I even need an aria label for a theme switch? -->
			<button class="button" aria-label="light">
				<img src={iconSun} alt="" class="button__icon" />
			</button>
		</header>

		<main class="main">
			<Form />

			<fieldset class="tasks-list-wrapper">
				<legend class="sr-only">List of tasks</legend>

				<ul class="tasks-list">
					<Task description="Finish the todo-app" />
				</ul>
			</fieldset>

			<Controls />

			<p class="instruction">Drag and drop to reorder list</p>
		</main>
	</div>
</div>

<style>
	.app {
		height: 100vh;

		background-color: var(--color-background-app);
		background-image: var(--background-mobile-dark);
		background-size: contain;
		background-repeat: no-repeat;
	}

	.wrapper,
	.main,
	.tasks-list-wrapper,
	.tasks-list {
		display: grid;
	}

	.wrapper {
		max-width: 37rem;
		padding-inline: 1.5rem;
		padding-block: 4.5rem 3rem;

		gap: 2.5rem;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.main {
		gap: 1.5rem;
	}

	.instruction {
		align-self: center;
		text-align: center;
	}
</style>
