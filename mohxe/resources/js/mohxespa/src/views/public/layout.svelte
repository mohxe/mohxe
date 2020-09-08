<script>
  import { Route } from "svelte-router-spa";

  import Header from "@components/layout/header.svelte";

  export let currentRoute;
  export let params = {};

</script>

<Header {currentRoute} {params}/>

<div class="pt-12"><Route {currentRoute} {params}/></div>
<footer />
