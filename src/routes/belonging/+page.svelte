<script>
  import ChallengeCheck from "$lib/ChallengeCheck.svelte";
  import Range from "$lib/Range.svelte";
  import { challenge, community, showResults } from "$lib/stores";
</script>

<svelte:head>
  <title>Your belonging to {$challenge} in {$community}</title>
</svelte:head> 

<ChallengeCheck>   
  <h2 id="question">How much agreement is there within {$community} about {$challenge}?</h2>
  <Range />
  {#if $showResults === true}
    <h3>result text</h3>
    <a class="button" href="/hope" on:click={() => showResults.set(false)}>Next</a>
  {/if}
</ChallengeCheck>
