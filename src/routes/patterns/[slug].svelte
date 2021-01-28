<script context="module">
export function preload({ params }) {
    return { slug: params.slug };
}
</script>

<script>
export let slug;
</script>

{slug}
