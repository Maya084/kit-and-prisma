<div class="grid">
	<div>
		<h2>Aricles</h2>
		<article>
			<header>Example article</header>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores tempore magnam
				explicabo quasi beatae mollitia consequuntur delectus, repudiandae impedit distinctio quos
				culpa obcaecati esse ab aspernatur est consequatur fugiat nulla, consectetur accusamus
				exercitationem. Molestiae iusto, excepturi id dolor ipsa odio repudiandae doloribus,
				obcaecati reiciendis consequatur consequuntur veritatis nobis delectus.
			</p>

			<button class="outline secondary"> Delete article </button>

			<a href="/" role="button" class="outline constrast" style="width: 100%"> Edit article</a>
		</article>
	</div>

	<form action="?/createArticle" method="POST">
		<h3>New article</h3>
		<label for="title">title</label>
		<input type="text" id="title" name="title" />

		<label for="content">content</label>
		<textarea id="content" name="content" rows="5" />

		<button type="submit"> Add article</button>
	</form>
</div>
