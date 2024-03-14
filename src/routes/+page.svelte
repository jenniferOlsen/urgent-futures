<script>
  import { challenge, community } from '$lib/stores.js';
</script>

<p>Long instructions will go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<div class="form">
  <div class="form-group">
    <label for="challenge">Choose your challenge 
      <span data-placement="right" data-tooltip="Pick any urgent challenge you feel strongly about">
        <i class="ri-information-line" />
      </span>
    </label>
    <input type="text" bind:value={$challenge} name="challenge" id="challenge" placeholder="climate change, econmic inequality, racial injustice, brittle supply chains..." />
  </div>
  <div class="form-group">
    <label for="community">Choose a community
      <span data-placement="right" data-tooltip="Pick a specific community that you're a part of">
        <i class="ri-information-line" />
      </span>
    </label>
    <input bind:value={$community} type="text" name="community" id="community" placeholder="my town, my neighborhood, my country, my workplace..."/>
  </div>
  {#if $challenge && $community}
    <a class="button" href="/calling">Find your future truth</a>
  {/if}
</div>
