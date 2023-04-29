<script>
	import iconSun from "../lib/images/icon-sun.svg"
	import iconMoon from "../lib/images/icon-moon.svg"
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
			<p class="instruction">Drag and drop to reorder list</p>
		</main>
	</div>
</div>
