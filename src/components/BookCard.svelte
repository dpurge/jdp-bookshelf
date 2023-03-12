<script lang="ts">
    export let data: BookData;
</script>

<figure class="book-card">
    {#if data.cover}
        <img class="book-cover" src={data.cover} alt={data.title} />
    {:else}
        <img class="book-cover" src="./_img/cover.png" alt={data.title} />
    {/if}
    <figcaption class="book-data">
        <h3 class="book-title">{data.title}</h3>
        <h4 class="book-subtitle">{data.subtitle}</h4>
        <div class="book-author">{data.author}</div>
        <div class="book-year">{data.year}</div>
        <div class="book-description">{data.description}</div>
        <p>
            {#if data.book}
                <a href={data.book}><img src="./_img/book.png" alt="Book" /></a>
            {/if}
            {#if data.pdf}
                <a href={data.pdf}><img src="./_img/pdf.png" alt="PDF" /></a>
            {/if}
            {#if data.audio}
                <a href={data.audio}><img src="./_img/audio.png" alt="Audio" /></a>
            {/if}
        </p>
    </figcaption>
</figure>

<style>
    .book-card {
        float: left;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        height:260px;
    }

    .book-cover {
        float: left;
        width: 128px;
    }

    .book-data {
        margin-left: 128px;
        width: 256px;
        padding: 0.5em 0.5em;
    }
</style>
