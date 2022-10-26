<script lang="ts">
	export let name: string;

	const id = name.toLowerCase()
</script>

<section {id} class="h-min m-px p-2 sm:py-16 max-w-screen-lg">
	<header>
		<h3>{name}</h3>
	</header>
	<slot />
</section>
