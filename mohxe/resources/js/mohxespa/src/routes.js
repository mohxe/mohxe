import PublicLayout from '@views/public/layout.svelte';
import PublicIndex from '@views/public/index.svelte';
import About from '@views/public/about.svelte';
import Contact from '@views/public/contact.svelte';




const routes = [
    { name: '/', component: PublicIndex, layout: PublicLayout },
    { name: 'a-propos', component: About, layout: PublicLayout },
    { name: 'contact', component: Contact, layout: PublicLayout }
];

export default routes;