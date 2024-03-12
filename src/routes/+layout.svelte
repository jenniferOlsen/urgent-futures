<header>
  <h1>Urgent Futures</h1>
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
