<script>
  import { challenge, community } from '$lib/stores.js';
  import Range from './Range.svelte';
</script>

  <div class="challenge-check">
    {#if $challenge && $community}
      <slot />
      <Range />
    {:else}
      <a href="/">Choose a challenge and community before continuing</a>
    {/if}
  </div>

<style>
  .challenge-check {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    flex-direction: column;
    gap: 1rem;
  }
</style>
