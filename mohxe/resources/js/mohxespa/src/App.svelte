<script>
  import { Router } from "svelte-router-spa";
  import routes from "@routes";
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<Router {routes} />
