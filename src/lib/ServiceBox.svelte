<script lang="ts">
  export let title: string;
</script>

<li
  class="sm:max-w-[45%] odd:bg-purple-400/20 even:bg-purple-400/10 rounded sm:rounded-lg p-2 sm:p-4"
>
  <h4>{title}</h4>
  <small><slot /></small>
</li>
