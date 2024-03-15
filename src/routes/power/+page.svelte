<script>
  import ChallengeCheck from "$lib/ChallengeCheck.svelte";
  import { challenge, community } from "$lib/stores";
</script>

<svelte:head>
  <title>Your power to shape {$challenge} in {$community}</title>
</svelte:head>

<ChallengeCheck>    
  <h2>Power: Question 4</h2>
</ChallengeCheck>
