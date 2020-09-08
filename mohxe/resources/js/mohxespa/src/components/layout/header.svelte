<script>
  import { onMount, onDestroy } from "svelte";
  const smWidth = 640;
  const siteLogoUrl = "https://via.placeholder.com/800";

  let navHidden = true;

  function onNavToggle() {
    navHidden = !navHidden;
  }

  function onViewportResize() {
    if (!navHidden && window.innerWidth >= smWidth) navHidden = true;
  }

  onMount(() => {
    window.addEventListener("resize", onViewportResize);
  });
  onDestroy(() => {
    window.removeEventListener(onViewPortResize);
  });

  export let currentRoute;
  export let params = {};
</script>

<header
  class="flex h-12 px-0 sm:px-2 fixed z-50 bg-white w-full border-b border-solid
  border-gray-400">
  <!-- logo-->
  <div class="flex-1">
    <img class="block h-12 w-12" src={siteLogoUrl} alt="logo" />
  </div>

  <!-- navigation -->
  <nav
    class="items-center sm:block w-2/3 sm:w-1/3 max-w-sm sm:max-w-md text-right
    sm:text-left">
    <button
      on:click={onNavToggle}
      class="cursor-pointer text-3xl text-center focus:outline-none
      focus:border-0 right sm:hidden font-bold px-2">
      {@html navHidden ? '&#x2630;' : '&#x2715;'}
    </button>
    <ul
      class:hidden={navHidden}
      class="fixed top-12 sm:top-0 hidden sm:pt-0 bottom-0 right-0 bg-white
      sm:bg-initial w-full sm:relative px-auto h-full sm:flex sm:justify-around
      flex-no-wrap items-center justify-between font-bold text-center">
      <!-- links -->
      <li
        on:click={() => (navHidden = true)}
        class:border-blue-500={currentRoute.name == '/'}
        class="sm:border-b-4 border-b-2 sm:border-t-0">
        <a class="block w-full h-full text-center" href="/">Home</a>
      </li>

      <li
        on:click={() => (navHidden = true)}
        class:border-blue-500={currentRoute.name == '/blog'}
        class="sm:border-b-4 border-b-2">
        <a class="block w-full h-full text-center" href="/blog">Blog</a>
      </li>

      <li
        on:click={() => (navHidden = true)}
        class:border-blue-500={currentRoute.name == '/about-us'}
        class="sm:border-b-4 border-b-2">
        <a class="block w-full h-full text-center" href="/about-us">About</a>
      </li>

      <li
        on:click={() => (navHidden = true)}
        class:border-blue-500={currentRoute.name == '/contact'}
        class="sm:border-b-4 border-b-2">
        <a class="block" href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
</header>
