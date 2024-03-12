<script>
  import { challenge, community } from './stores.js';
</script>

<header>
  <!-- {#if challenge !== '' && community !== ''}
    <h1>{$challenge} in {$community}</h1>
  {:else} -->
    <h1>Urgent Futures</h1>
  <!-- {/if} -->
</header>
<main class="container">
  <slot />
</main>

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
</style>
