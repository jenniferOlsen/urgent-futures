<script>
  import ChallengeCheck from "$lib/ChallengeCheck.svelte";
  import Range from "$lib/Range.svelte";
  import ResultsText from "$lib/ResultsText.svelte";
  import { challenge, community, calling, showResults, reset } from "$lib/stores";
</script>

<svelte:head>
  <title>Your calling to {$challenge} in {$community}</title>
</svelte:head>

<ChallengeCheck>    
  <h2 id="question">How urgent do you think it is to address {$challenge} in {$community}?</h2>
  
  <Range />

  {#if $showResults === true}
    <ResultsText>
      {#if $calling > 7} 
        <slot>
          <p>You've found a specific long-term challenge that you're passionate about!</p>   
          <p>The next question will help you determine how much help you expect to get from your community.</p>
        </slot>
      {:else}
        <slot>
          <p>It doesn't seem like you're really passionate about {$challenge}. That's fine! Consider <a href='/' on:click={() =>reset()}>choosing a different challenge.</a></p>
        </slot>
      {/if}
    </ResultsText>
  {/if}
</ChallengeCheck>
