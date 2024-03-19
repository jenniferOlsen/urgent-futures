<script>
  import ChallengeCheck from "$lib/ChallengeCheck.svelte";
  import { challenge, community, calling } from "$lib/stores";
</script>

<svelte:head>
  <title>Your calling to {$challenge} in {$community}</title>
</svelte:head>

<ChallengeCheck>    
  <h2 id="question">How urgent do you think it is to address {$challenge} in {$community}?</h2>
</ChallengeCheck>
