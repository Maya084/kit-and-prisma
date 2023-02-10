<div class="app-layout">
	<aside>
		<nav>
			<ul>
				<li><a href="/articles">Articles</a></li>
				<li><a href="/create-article">Create an Article</a></li>
			</ul>
		</nav>
	</aside>

	<slot />
</div>

<style>
	.app-layout {
		padding: 1em;
		display: grid;
		grid-template-columns: 1fr 2fr;

		max-width: 65rem;
		margin: auto;
	}
</style>
