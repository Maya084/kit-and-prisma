<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ articles } = data);
</script>

<div>
	<h2>Articles</h2>
	{#each articles as article}
		<article>
			<header>{article.title}</header>
			<p>{article.content}</p>

			<form action="?/deleteArticle&id={article.id}" method="POST">
				<button class="outline secondary"> Delete article </button>
			</form>
			<a href="/articles/{article.id}" role="button" class="outline constrast" style="width: 100%">
				Edit article</a
			>
		</article>
	{/each}
</div>
