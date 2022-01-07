<script lang="ts">
    export let title: string;
    export let src: string;
    export let description: string;
</script>

<figure class="audiotrack">
    <figcaption class="audiotrack-title">
        <h3>{title}</h3>
        <p>{description}</p>
    </figcaption>
    <audio class="audiotrack-player" {title} {src} controls>
        Your browser does not support the audio element.
    </audio>
</figure>

<style>
    .audiotrack-title {
        float: left;
    }

    .audiotrack-player {
        width: 100%;
    }
</style>
