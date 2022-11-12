<?php
/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       advance-block-library
 * @since      1.0.0
 *
 * @package    Advance_Block_Library
 * @subpackage Advance_Block_Library/admin/partials
 */

$cst_plugin_name = $plugin_details['Name'];

?>
<div class="abl-page-wrapper">
	<div class="area" >
		<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
		</ul>
		<div class="container">
			<div class="abl-heading">
				<h1 class="abl-heading__title">
					<?php echo esc_html( $cst_plugin_name ); ?>
				</h1>
			</div>
			<section class="abl-list">
				<div class="abl-list-heading">
					<h2 class="abl-list-heading__title">
						<?php echo esc_html__( 'Avliable Blocks', 'advance-block-library' ); ?>
					</h2>
					<p class="abl-list-heading__desc">
						<?php echo esc_html__( 'Please select the blocks that you want to use on your site. Files of only those blocks are added which you will select below.', 'advance-block-library' ); ?>
					</p>
				</div>
				<div class="abl-list-container">
					<?php
						$count = 1;
					foreach ( $blocks as $block ) {
						$block_name        = $block['name'];
						$block_description = $block['desc'];
						$block_slug        = $block['slug'];
						?>
							<div class="abl-block">
								<h4 class="abl-block__name">
								<?php echo esc_html( $block_name ); ?>
								</h4>
								<p class="abl-block__desc">
								<?php echo esc_html( $block_description ); ?>
								</p>
								<div class="abl-btn">
									<button class="abl-toggle__btn deactive" data-block-slug="<?php echo esc_attr( $block['slug'] ); ?>">
									<?php

									if ( ! in_array( $block_slug, $active_blocks, true ) ) {
										$btntitle = __( 'Activate', 'md-blocks' );
										echo esc_html( $btntitle );
									} else {
										$btntitle = __( 'Deactivate', 'md-blocks' );
										echo esc_html( $btntitle );
									}

									?>
									</button>
								</div>
							</div>
					<?php } ?>
				</div>
			</section>
		</div>
	</div >
</div>
