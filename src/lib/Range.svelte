<script>
  import { belonging, calling, hope, power } from "$lib/stores";
  import { page } from '$app/stores';

  let value = 1;

  switch ($page.url.pathname) {
    case '/calling':
      value = $calling;
      break;
    case '/belonging':
      value = $belonging;
      break;
    case '/hope':
      value = $hope;
      break;
    case '/power':
      value = $power;  
      break;
  }

</script>
<div class="range">
  <span>1</span>
  <input aria-labelledby="question" aria-describedby="range-helper" type="range" min="1" max="10" bind:value={value} />
  <span>10</span>
</div>
<small id="range-helper">1 = not at all, 10 = very much</small>


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
</style>
