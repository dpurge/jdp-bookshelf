<script lang="ts">
  import { onMount } from "svelte";
  import BookCard from "./components/BookCard.svelte";

  let data: BookshelfData[] = [];

  function loadData<T>(url: string): Promise<T> {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  onMount(async () => {
    data = await loadData<BookshelfData[]>(`./books.json`);
  });
</script>

<div class="bookshelf-app">
  {#each data as bookshelf}
    <h2 class="bookshelf-title">{bookshelf.title}</h2>
    <p class="bookshelf-description">{bookshelf.description}</p>
    {#each bookshelf.books as book}
      <BookCard data={book} />
    {/each}
  {/each}
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  .bookshelf-app {
    text-align: center;
  }

  .bookshelf-title {
    clear: both;
  }
</style>
