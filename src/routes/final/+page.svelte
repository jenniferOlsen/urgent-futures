<script>
  import ChallengeCheck from "$lib/ChallengeCheck.svelte";
  import { challenge, community } from "$lib/stores";
</script>

<svelte:head>
  <title>Your future truth about {$challenge} in {$community}</title>
</svelte:head>

<ChallengeCheck>    
  <h2>final results</h2>
</ChallengeCheck>
