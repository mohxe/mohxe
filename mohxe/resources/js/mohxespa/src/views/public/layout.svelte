<script>
    import {Route} from 'svelte-router-spa'
    
    import NavigationBar from '@components/layout/navigation_bar.svelte';

    export let currentRoute;
    export let params = {};
</script>
<header>
    <!-- navigation -->
    <nav>
        <!-- logo -->
        <div>
            
        </div>

        <!-- links -->
       <div>
        <a href="/">link 1</a>
        <a href="/">link 2</a>
        <a href="/">link 2</a>
       </div>
        
    </nav>
</header>
    <Route {currentRoute} {params}/>
<footer>
</footer>