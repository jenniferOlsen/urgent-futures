<script>
  import { challenge, community } from '$lib/stores.js';
</script>

<header>
  {#if $challenge && $community}
    <h1>{$challenge} in {$community}</h1>
  {:else}
    <h1>Urgent Futures</h1>
  {/if}
</header>
<main class="container">
  <slot />
</main>
<footer class="container">
  <small>Based on the Urgent Futures Questionaire from <a href="https://www.amazon.com/Imaginable-Create-Hopeful-Future_in-Community/dp/1954118333/"><em>Imaginable</em></a> by Jane McGonigal.</small>
</footer>

<style>
  header {
    background-color: var(--pico-primary);
    padding: var(--pico-typography-spacing-vertical);
    margin-bottom: var(--pico-typography-spacing-vertical);
  }
  h1 {
    color: var(--pico-primary-inverse);
    text-align: center;
  }
  footer {
    text-align: center;
    margin-bottom: var(--pico-typography-spacing-vertical);
    margin-top: var(--pico-typography-spacing-vertical);
  }
</style>
