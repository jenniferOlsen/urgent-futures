<script>
  import ChallengeCheck from "$lib/ChallengeCheck.svelte";
  import { challenge, community } from "$lib/stores";
</script>

<svelte:head>
  <title>Your belonging to {$challenge} in {$community}</title>
</svelte:head> 

<ChallengeCheck>   
  <h2>Belonging: Question 2</h2>
</ChallengeCheck>
