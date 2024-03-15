<script>
  import ChallengeCheck from "$lib/ChallengeCheck.svelte";
  import { challenge, community } from "$lib/stores";
</script>

<svelte:head>
  <title>Your calling to {$challenge} in {$community}</title>
</svelte:head>

<ChallengeCheck>    
  <h2>Calling: Question 1</h2>
</ChallengeCheck>
