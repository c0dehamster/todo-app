<script lang="ts">
	export let description: string
</script>

<li class="task">
	<label for="" class="checkbox-circle">
		<span class="sr-only">Mark as completed</span>
	</label>

	<input type="checkbox" class="hidden" />

	<p class="task__description">{description}</p>

	<button class="button">
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
