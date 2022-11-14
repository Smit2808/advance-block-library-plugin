<?php

add_action( 'init', 'feature_posts_dynamic_block' );

/**
 * Register dynamic block.
 *
 * @since 1.0.0
 */
function feature_posts_dynamic_block() {
    /**
     * Feature Posts Listing Block.
     */
    register_block_type(
        'abl/feature-posts-block',
        array(
            'render_callback' => 'feature_posts_listing_dynamic_block_callback',
        )
    );

    function feature_posts_listing_dynamic_block_callback(){
        
        ob_start();
        ?>
        <div class="blog-listing-section">
            <div class="container">
                hi server side
            </div>
        </div>
        <?php
        $html = ob_get_clean();
        return $html;
    }
}