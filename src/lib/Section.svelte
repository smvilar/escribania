<script lang="ts">
  export let hideName = false;
  export let name: string;

  const id = name.toLowerCase();
</script>

<section {id} class="h-min m-auto p-2 sm:py-16 max-w-screen-lg">
  {#if !hideName}
    <header>
      <h3 class="sm:mb-2">{name}</h3>
    </header>
  {/if}
  <slot />
</section>
