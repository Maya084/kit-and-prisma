<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ article } = data);
</script>

<form action="?/editArticle" method="POST">
	<h3>Edit article</h3>
	<label for="title">title</label>
	<input type="text" id="title" name="title" value={article.title} />

	<label for="content">content</label>
	<textarea id="content" name="content" rows="5" value={article.content} />

	<button type="submit"> Edit Article</button>
</form>
