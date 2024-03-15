<script>
  import ChallengeCheck from "$lib/ChallengeCheck.svelte";
  import { challenge, community } from "$lib/stores";
</script>

<svelte:head>
  <title>Your hope for {$challenge} in {$community}</title>
</svelte:head>

<ChallengeCheck>    
  <h2>Hope: Question 3</h2>
</ChallengeCheck>
