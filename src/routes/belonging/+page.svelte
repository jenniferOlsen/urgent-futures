<script>
  import ChallengeCheck from "$lib/ChallengeCheck.svelte";
  import Range from "$lib/Range.svelte";
  import ResultsText from "$lib/ResultsText.svelte";
  import { belonging, calling, challenge, community, showResults } from "$lib/stores";
</script>

<svelte:head>
  <title>Your belonging to {$challenge} in {$community}</title>
</svelte:head> 

<ChallengeCheck>   
  <h2 id="question">How much agreement is there within {$community} about {$challenge}?</h2>
  <Range />
  {#if $showResults === true}
    <ResultsText>
      {#if $calling - $belonging < 3} 
        <slot>
          <p>You have high alignment with your chosen community on this topic. Allies are plentiful and you feel like you belong in this future.</p>   
        </slot>
      {:else}
        <slot>
          <p>You may feel painfully alientated from your chosen community. Look for ways to close this gap. Advocacy work or community events could help. Or you may need to choose a different community to work with on {$challenge}.</p>
        </slot>
      {/if}
        <p>The next question can show you how much hope you have for the future.</p>
    </ResultsText>
  {/if}
</ChallengeCheck>
