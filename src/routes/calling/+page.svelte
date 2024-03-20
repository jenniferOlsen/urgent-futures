<script>
  import ChallengeCheck from "$lib/ChallengeCheck.svelte";
  import NavButtons from "$lib/NavButtons.svelte";
  import Range from "$lib/Range.svelte";
  import { challenge, community, calling, showResults, reset } from "$lib/stores";
  import { scale } from "svelte/transition";
</script>

<svelte:head>
  <title>Your calling to {$challenge} in {$community}</title>
</svelte:head>

<ChallengeCheck>    
  <h2 id="question">How urgent do you think it is to address {$challenge} in {$community}?</h2>
  <Range />
  {#if $showResults === true}
    <div transition:scale>
      {#if $calling > 7} 
        <p>You've found a specific long-term challenge that you're passionate about!</p>   
        <p>The next question will help you determine how much help you expect to get from your community.</p>
      {:else}
        <p>It doesn't seem like you're really passionate about {$challenge}. That's fine! Consider <a href='/' on:click={() =>reset()}>choosing a different challenge.</a></p>
      {/if}
      <NavButtons />
    </div>
  {/if}
</ChallengeCheck>
