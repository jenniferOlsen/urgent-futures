<script>
  import { reset, showResults } from "./stores";
  import { page } from '$app/stores';

  let next = '/';

  switch ($page.url.pathname) {
    case '/calling':
      next = '/belonging';
      break;
    case '/belonging':
      next = '/hope';
      break;
    case '/hope':
      next = '/power';
      break;
    case '/power':
      next = '/final';
      break;
  }
</script>

<div class="button-group container">
  <a class="button" href="/" on:click={() => reset()}>Start Over</a>
  <a class="button" href={next} on:click={() => showResults.set(false)}>Next Question</a>
</div>

<style>
  .button-group {
    margin-bottom: 1rem;
    margin-top: 3rem;
  }
  .button-group .button {
    margin-right: 3rem;
  }
</style>
