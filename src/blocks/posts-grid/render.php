<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?> class="posts-grid">
	<?php
	$number_of_posts = !empty( $attributes['postsToShow'] ) ? $attributes['postsToShow'] : 3;
	$order = !empty( $attributes['order'] ) ? $attributes['order'] : 'desc';
	$orderby = !empty( $attributes['orderBy'] ) ? $attributes['orderBy'] : 'date';
	$args = [
		'post_type'      => 'post',
		'posts_per_page' => $number_of_posts,
		'orderby'        => $orderby,
		'order'          => $order,
		'ignore_sticky_posts' => true,
	];

	$query = new WP_Query( $args );

	if ( $query->have_posts() ) {
		while ( $query->have_posts() ) {
			$query->the_post();
			?>
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<header class="entry-header">
					<?php the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '">', '</a></h2>' ); ?>
				</header>
				<div class="entry-content">
					<?php the_excerpt(); ?>
				</div>
			</article>
			<?php
		}
		wp_reset_postdata();
	}
	
	?>
</div>
