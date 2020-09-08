import PublicLayout from '@views/public/layout.svelte';
import PublicIndex from '@views/public/index.svelte';
import About from '@views/public/about.svelte';
import Contact from '@views/public/contact.svelte';
import BlogIndex from '@views/public/blog/index.svelte';




const routes = [
    { name: '/', component: PublicIndex, layout: PublicLayout },
    { name: 'about-us', component: About, layout: PublicLayout },
    { name: 'contact', component: Contact, layout: PublicLayout },
    { name: 'blog', component: BlogIndex, layout: PublicLayout }
];

export default routes;