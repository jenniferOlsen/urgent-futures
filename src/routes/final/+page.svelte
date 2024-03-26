<script>
  import ChallengeCheck from "$lib/ChallengeCheck.svelte";
  import { belonging, calling, challenge, community, hope, power, powerList, powerPeople, powerUnique, powerWants } from "$lib/stores";
</script>

<svelte:head>
  <title>Your future truth about {$challenge} in {$community}</title>
</svelte:head>

<ChallengeCheck>    
  {#if $calling > 7} 
    <p>Solving {$challenge} in {$community} is a something that you're passionate about. You rated it as {$calling} out of 10, so you see it as an urgent problem.</p>   
  {:else}
    <p>It doesn't seem like you're really passionate about {$challenge} since you only rated it as {$calling} out of 10.</p>.
  {/if}
  {#if $calling - $belonging < 3} 
    <p>You have high alignment with other people in {$community} on this topic. Allies are plentiful and you feel like you belong in this future.</p>   
  {:else}
    <p>You may feel painfully alientated from your chosen community. Look for ways to close this gap. Advocacy work or community events could help. Or you may need to choose a different community to work with on {$challenge}.</p>
  {/if}
  {#if $calling - $hope < 3} 
    <p>Solving {$challenge} feels both possible and realistic. You feel hopeful for the future.</p>   
  {:else}
    <p>You may feel anxious or hopeless about the future. Start looking for evidence that this change is possible.</p>
    <p>Take a mental fieldtrip to an imaginary future where the change you want has already happened. What are you doing? How do you feel? The more vividly and realistically you can imagine positive change, the better prepared your brain will be to spot real opportunities to make it.</p>
  {/if}
  {#if $calling - $power < 3} 
    <p>You feel confident in your ability to make change and help others in the future.</p>   
  {:else}
    <p>You may feel like you don't have much power to shape the future. But you're bringing your knowledge of {$powerList} with you. You can use your unique skills to {$powerUnique}.  Can this help {$powerPeople} get {$powerWants}?</p>
  {/if}
</ChallengeCheck>
