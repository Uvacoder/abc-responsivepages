<script context="module">
export function preload({ params }) {
    return { slug: params.slug };
}
</script>

<script>
export let slug;

import Viewer from '../../components/Viewer.svelte';
</script>

<Viewer slug={slug} />
