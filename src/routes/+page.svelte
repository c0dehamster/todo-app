<script lang="ts">
	import backgroundMobileDark from "../lib/images/bg-mobile-dark.jpg"
	import backgroundMobileLight from "../lib/images/bg-mobile-light.jpg"
	import backgroundDesktopDark from "../lib/images/bg-desktop-dark.jpg"
	import backgroundDesktopLight from "../lib/images/bg-desktop-light.jpg"
	import iconSun from "../lib/images/icon-sun.svg"
	import iconMoon from "../lib/images/icon-moon.svg"

	import Form from "./Form.svelte"
	import TaskList from "./TaskList.svelte"
	import Controls from "./Controls.svelte"

	let lightTheme = false

	const onThemeSwitch = () => (lightTheme = !lightTheme)

	$: themeSwitchIcon = lightTheme ? iconMoon : iconSun
	$: appClass = `app ${lightTheme ? "app--light" : ""}`
</script>

<svelte:head>
	<title>Frontend Mentor | Todo app</title>
</svelte:head>

<svelte:body />

<div
	class={appClass}
	style="--background-mobile-dark: url({backgroundMobileDark});
--background-mobile-light: url({backgroundMobileLight});
--background-desktop-dark: url({backgroundDesktopDark});
--background-desktop-light: url({backgroundDesktopLight})"
	on:touchmove|preventDefault>
	<div class="wrapper">
		<header class="header">
			<h1 class="heading">Todo</h1>

			<!-- Do I even need an aria label for a theme switch? -->
			<button class="button" aria-label="light" on:click={onThemeSwitch}>
				<img src={themeSwitchIcon} alt="" class="button__icon" />
			</button>
		</header>

		<main class="main">
			<Form />

			<div class="task-list-wrapper">
				<TaskList />
				<Controls />
			</div>

			<p class="instruction">Drag and drop to reorder list</p>
		</main>
	</div>
</div>

<style>
	.app {
		min-height: 100vh;

		display: flex;
		flex-direction: column;
		justify-content: baseline;
		align-items: center;

		background-color: var(--color-background-app);
		background-image: var(--background-mobile-dark);
		background-size: contain;
		background-repeat: no-repeat;
	}

	.app--light {
		background-image: var(--background-mobile-light);
	}

	.wrapper,
	.main {
		display: grid;
	}

	.wrapper {
		width: 100%;
		max-width: 37rem;
		padding-inline: 1.5rem;
		padding-block-start: 2.5rem;

		gap: 2rem;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.heading {
		font-size: var(--font-size-heading-responsive);
		text-transform: uppercase;
		color: var(--color-header);
		letter-spacing: clamp(0.5rem, 2.13vw, 1.43rem);
	}

	.task-list-wrapper {
		position: relative;
		z-index: 10;
		margin-block-end: 2.25rem;

		border-radius: 0.25rem;
		overflow: hidden;
		box-shadow: 0rem 0rem 1rem 1rem var(--color-shadow);
	}

	.task-list-wrapper::before {
		z-index: -1;
		content: "";
		position: absolute;
		inset: 0;

		background-color: var(--color-shadow);
	}

	.instruction {
		align-self: center;
		text-align: center;

		color: var(--color-main-shaded);
		font-size: var(--font-size-200);
	}

	@media screen and (min-width: 40rem) {
		.app {
			background-image: var(--background-desktop-dark);
		}

		.app--light {
			background-image: var(--background-desktop-light);
		}

		.wrapper {
			padding-block-start: 4.5rem;
		}

		.instruction {
			font-size: var(--font-size-200);
		}
	}
</style>
