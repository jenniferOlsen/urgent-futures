<script>
  import { challenge, community } from '$lib/stores.js';
</script>

  {#if $challenge && $community}
    <slot />
  {:else}
  <div class="challenge-check">
    <a href="/">Choose a challenge and community before continuing</a>
  </div>
  {/if}

<style>
  .challenge-check {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }
</style>
