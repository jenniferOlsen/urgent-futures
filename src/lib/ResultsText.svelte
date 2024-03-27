<script>
  import { scale } from "svelte/transition";
  import NavButtons from "$lib/NavButtons.svelte";
  import { page } from '$app/stores';
</script>

<div transition:scale role="region" aria-live="polite">
  <slot />
  {#if $page.url.pathname !== '/power'}
    <NavButtons />
  {/if}
</div>
