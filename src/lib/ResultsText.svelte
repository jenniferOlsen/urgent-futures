<script>
  import { scale } from "svelte/transition";
  import NavButtons from "$lib/NavButtons.svelte";
</script>

<div transition:scale>
  <slot />
  <NavButtons />
</div>
