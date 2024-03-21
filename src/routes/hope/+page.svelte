<script>
  import ChallengeCheck from "$lib/ChallengeCheck.svelte";
  import Range from "$lib/Range.svelte";
  import ResultsText from "$lib/ResultsText.svelte";
  import { challenge, community, calling, showResults, hope } from "$lib/stores";
</script>

<svelte:head>
  <title>Your hope for {$challenge} in {$community}</title>
</svelte:head>

<ChallengeCheck>   
  <h2 id="question">How optimistic are you that {$challenge} will be significantly improved in {$community} in the next 10 years?</h2>
  <Range />
  {#if $showResults === true}
    <ResultsText>
      {#if $calling - $hope < 3} 
        <slot>
          <p>Solving this challenge feels both possible and realistic. You feel hopeful for the future.</p>   
        </slot>
      {:else}
        <slot>
          <p>You may feel anxious or hopeless about the future. Start looking for evidence that this change is possible.</p>
          <p>Take a mental fieldtrip to an imaginary future where the change you want has already happened. What are you doing? How do you feel? The more vividly and realistically you can imagine positive change, the better prepared your brain will be to spot real opportunities to make it.</p>
        </slot>
      {/if}
        <p>The next question tells you how much influence you have to shape the future.</p>
    </ResultsText>
  {/if}
</ChallengeCheck>
