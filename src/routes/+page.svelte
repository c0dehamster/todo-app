<script lang="ts">
	import iconSun from "../lib/images/icon-sun.svg"
	import iconMoon from "../lib/images/icon-moon.svg"

	import Form from "./Form.svelte"
</script>

<svelte:head>
	<title>Frontend Mentor | Todo app</title>
</svelte:head>

<div class="app">
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

			<fieldset class="card">
				<legend class="sr-only">List of tasks</legend>

				<ul class="tasks-list">
					<li class="tasks-list__item" />
				</ul>
			</fieldset>

			<p class="instruction">Drag and drop to reorder list</p>
		</main>
	</div>
</div>
