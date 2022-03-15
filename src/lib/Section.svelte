<section id={id} class={`py-8 flex justify-center ${className}`}>
	<article class="w-3/4">
		<slot />
	</article>
</section>

<script>
	let className
	export { className as class }
	export let id
</script>
