<script lang="ts">
  import { belonging, calling, hope, power, showResults } from "$lib/stores";
  import { page } from '$app/stores';
  import { scale } from "svelte/transition";


  let value: import("svelte/store").Writable<number>;
  let helperText = '';

  switch ($page.url.pathname) {
    case '/calling':
      value = calling;
      helperText = 'urgency';
      break;
    case '/belonging':
      value = belonging;
      helperText = 'agreement';
      break;
    case '/hope':
      value = hope;
      helperText = 'optimism';
      break;
    case '/power':
      value = power;  
      helperText = 'power';
      break;
  }
</script>

<div class="range">
  <span>1</span>
  <input aria-labelledby="question" aria-describedby="range-helper" type="range" min="1" max="10" bind:value={$value} />
  <span>10</span>
</div>
<small id="range-helper">1 = low {helperText}, 10 = high {helperText}</small>

{#if $value > 0}
  <div class="accept" transition:scale>
    <div>
      <span>{helperText} level:</span>
      <input aria-labelledby="question" aria-describedby="range-helper" type="number" min="1" max="10" bind:value={$value} />
    </div>
    <button on:click={() => showResults.set(true)}>Accept</button>
  </div>
{/if}
<style>
  .range {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  input {
    margin-bottom: 0;
  }
  small {
    display: block;
    text-align: center;
  }
  .accept {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
  .accept input {
    max-width: 4rem;
    margin-left: 0.5rem;
  }
</style>
