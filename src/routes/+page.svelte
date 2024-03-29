<script>
  import { challenge, community } from '$lib/stores.js';
  import { goto } from '$app/navigation';
</script>

<svelte:head>
  <title>Urgent Futures</title>
</svelte:head>

<blockquote>
  The truest truth of the future is personal. It's whatever we feel deep in our bones that we really want to be different, whatever we really <em>need</em> to be different...It's whatever we are willing to spend not just a week, or a month, or a year, but a whole decade of our lives trying to make different.
  <footer>&mdash;Jane McGonigal, <cite>Imaginable</cite> (2023), pg. 230</footer>
</blockquote>

<p>How can you discover your own future truth? This is a framework for understanding how you relate to different future challenges, and for exploring where you may have the most powerful opportunity to make change.</p>

<p>Start by choosing a future challenge to focus on. This should be a <em>big</em> problem that you feel strongly about. Next, choose a community that you're a part of and that is affected by the challenge. Once you have a challenge and community, we'll ask you four questions. The answers will measure:</p>
  <ol>
    <li>Your calling to the future</li>
    <li>Your belonging to the future</li>
    <li>Your hope for the future</li>
    <li>Your power to shape the future</li>
  </ol>

<div class="form">
  <div class="form-group">
    <label for="challenge">Choose your challenge 
      <span data-placement="right" data-tooltip="Pick any urgent challenge you feel strongly about">
        <i class="ri-information-line" />
      </span>
    </label>
    <input type="text" bind:value={$challenge} name="challenge" id="challenge" aria-describedby="challenge-helper" />
    <small id="challenge-helper">For example: climate change, econmic inequality, racial injustice, brittle supply chains, etc.</small>
  </div>
  <div class="form-group">
    <label for="community">Choose a community
      <span data-placement="right" data-tooltip="Pick a specific community that you're a part of">
        <i class="ri-information-line" />
      </span>
    </label>
    <input bind:value={$community} type="text" name="community" id="community" aria-describedby="community-helper" />
    <small id="community-helper">For example: my city, my neighborhood, my country, my workplace, etc.</small>
  </div>
    <button on:click={() => goto('/calling')} disabled={!$challenge || !$community} aria-disabled={!$challenge || !$community}>Find your future truth</button>
</div>
