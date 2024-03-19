<script>
  import { belonging, calling, hope, power } from "$lib/stores";
  import { page } from '$app/stores';

  let value = 0;
  let helperText = '';

  switch ($page.url.pathname) {
    case '/calling':
      value = $calling;
      helperText = 'urgency';
      break;
    case '/belonging':
      value = $belonging;
      helperText = 'agreement';
      break;
    case '/hope':
      value = $hope;
      helperText = 'optimism';
      break;
    case '/power':
      value = $power;  
      helperText = 'power';
      break;
  }

</script>
<div class="range">
  <span>1</span>
  <input aria-labelledby="question" aria-describedby="range-helper" type="range" min="1" max="10" bind:value />
  <span>10</span>
</div>
<small id="range-helper">1 = low {helperText}, 10 = high {helperText}</small>

{#if value > 0}
  <div class="accept">
    <div>
      <span>{helperText} level:</span>
      <input aria-labelledby="question" aria-describedby="range-helper" type="number" min="1" max="10" bind:value />
    </div>
    <button>Accept</button>
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
    text-transform: capitalize;
  }
  .accept input {
    max-width: 4rem;
    margin-left: 0.5rem;
  }
</style>
