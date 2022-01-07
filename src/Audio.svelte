<script lang="ts">
    import { onMount } from "svelte";
    import AudioTrack from "./components/AudioTrack.svelte";

    let data: AudioData = {
        title: "--",
        subtitle: "--",
        author: "--",
        year: "--",
        description: "--",
        tracks: [],
    };

    function loadData<T>(url: string): Promise<T> {
        return fetch(url).then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
    }

    onMount(async () => {
        data = await loadData<AudioData>(`./audio.json`);
    });
</script>

<div class="audio-app">
    <h1>{data.title}</h1>
    <h2>{data.subtitle}</h2>
    <div>{data.author}</div>
    <div>{data.year}</div>
    <p>{data.description}</p>
    {#each data.tracks as track}
        <AudioTrack title={track.title} src={track.src} description={track.description} />
    {/each}
</div>

<style>
    :global(body) {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
    }
  
    .audio-app {
      text-align: center;
    }
</style>
