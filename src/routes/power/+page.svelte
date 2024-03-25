<script>
  import ChallengeCheck from "$lib/ChallengeCheck.svelte";
  import ResultsText from "$lib/ResultsText.svelte";
  import Range from "$lib/Range.svelte";
  import { challenge, community, showResults, calling, power, powerList, powerWants, powerPeople, powerUnique } from "$lib/stores";
</script>

<svelte:head>
  <title>Your power to shape {$challenge} in {$community}</title>
</svelte:head>

<ChallengeCheck>  
  <h2 id="question">How much power do you personally have to influence how {$challenge} is addressed in {$community} in the next 10 years?</h2>
  <Range />
  {#if $showResults === true}
    <ResultsText>
      {#if $calling - $power < 3} 
        <slot>
          <p>You feel confident in your ability to make change and help others in the future.</p>   
        </slot>
      {:else}
        <slot>
          <p>You may feel like you don't have much power to shape the future. The following exercise can help.</p>
          <div class="form">
            <div class="form-group">
              <label for="power-list">Make a list of all your skills, abilities, knowledge, passions, communities you belong to, and core values. Include even the ones that don't immediately seem useful for this challenge.</label> 
              <textarea id="power-list" bind:value={$powerList} />

              <label for="power-wants">What will people want and need in this future?</label> 
              <textarea id="power-wants" bind:value={$powerWants} />
              
              <label for="power-people">What kinds of people will be particularly helpful?</label> 
              <textarea id="power-people" bind:value={$powerPeople} />

              <label for="power-unique">How can you use your unique abilities and strengths to help?</label>
              <textarea id="power-unique" bind:value={$powerUnique} />
            </div>
          </div>
        </slot>
      {/if}
        <a class="button" href={'/final'}>Final summary</a>
    </ResultsText>
  {/if}
</ChallengeCheck>

<style>
  .form {
    margin-top: 2rem;
  }
  .form-group {
    text-align: left;
  }
  label {
    font-weight: 600;
    font-style: italic;
    color: var(--pico-muted-color);
  }
  textarea {
    margin-bottom: 1rem;
  }
  .button {
    margin-bottom: 1rem;
    margin-top: 3rem;
    display: block;
  }
</style>
