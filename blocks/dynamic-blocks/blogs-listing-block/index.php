<?php

add_action( 'init', 'blogs_listing_dynamic_block' );

/**
 * Register dynamic block.
 *
 * @since 1.0.0
 */
function blogs_listing_dynamic_block() {
    /**
     * Blog Listing Block.
     */
    register_block_type(
        'abl/blogs-listing-block',
        array(
            'attributes' => array(
                'selectedPostType' => array(
                    'type' => 'string',
                    'default' => null
                ),
                'selectedPostStatus' => array(
                    'type' => 'string',
                    'default' => null
                ),
                'selectedOrderBy' => array(
                    'type' => 'string',
                    'default' => null
                ),
                'selectedOrder' => array(
                    'type' => 'string',
                    'default' => null
                ),
                'displayFeatureImg'  => array(
                    'type'    => 'boolean',
                    'default' => true,
                ),
                'displayTitle'  => array(
                    'type'    => 'boolean',
                    'default' => true,
                ),
                'displayDesc'  => array(
                    'type'    => 'boolean',
                    'default' => true,
                ),
                'displayLink'  => array(
                    'type'    => 'boolean',
                    'default' => true,
                ),
                'titleColor' => array(
                    'type' => 'string',
                    'default' => '#000'
                ),
                'descColor' => array(
                    'type' => 'string',
                    'default' => '#000'
                ),
                'linkColor' => array(
                    'type' => 'string',
                    'default' => '#000'
                ),
                'selectedLayouts' => array(
                    'type' => 'string',
                    'default' => null
                ),
            ),
            'render_callback' => 'blogs_listing_dynamic_block_callback',
        )
    );

    function blogs_listing_dynamic_block_callback($attributes){
        $post_types_values = ! empty( $attributes['selectedPostType'] ) ? $attributes['selectedPostType'] : "post";
        $post_status_values = ! empty( $attributes['selectedPostStatus'] ) ? $attributes['selectedPostStatus'] : "any";
        $post_orderby = ! empty( $attributes['selectedOrderBy'] ) ? $attributes['selectedOrderBy'] : "title";
        $post_order = ! empty( $attributes['selectedOrder'] ) ? $attributes['selectedOrder'] : "DESC";
        $layout = ! empty( $attributes['selectedLayouts'] ) ? $attributes['selectedLayouts'] : "grid-layout";
        
        $args = array(
            'posts_per_page'   => -1,
            'post_type'        => $post_types_values,
            'post_status'      => $post_status_values,
            'orderby'       => $post_orderby,
            'order'   => $post_order
        );
        $the_query = new WP_Query( $args );
        ob_start();
        ?>
        <div class="blog-listing-section">
            <div class="container">
                <div class="<?php echo esc_attr($layout); ?>">
                    <?php
                        if( $the_query->have_posts()){

                            while ( $the_query->have_posts() ) {

                                $the_query->the_post();
                                ?>
                                <div class="post-wrapper">
                                    <?php if ($attributes['displayFeatureImg']) { ?> 
                                        <div class="post-wrapper__image">
                                            <a href="<?php echo esc_url(get_permalink()); ?>">
                                            <?php if (empty(get_the_post_thumbnail())) { ?>
                                                <img src="/wp-content/plugins/advance-block-library/blocks/dynamic-blocks/blogs-listing-block/src/images/placeholder-image.jpeg" />
                                            <?php } else { 
                                                echo get_the_post_thumbnail(); 
                                            } ?>
                                            </a>
                                        </div>
                                    <?php } ?>
                                    <div class="post-wrapper__details">
                                        <?php if ($attributes['displayTitle']) { ?>
                                            <a href="<?php echo esc_url(get_permalink()); ?>">
                                                <h3 style="color: <?php echo esc_html($attributes['titleColor']) ?>"><?php echo esc_html(get_the_title()); ?></h3>
                                            </a>
                                        <?php } ?>
                                        <?php if ($attributes['displayDesc']) { ?>
                                            <p style="color: <?php echo esc_html($attributes['descColor']) ?>"><?php echo substr(get_the_excerpt(), 0,100)."…"; ?></p>
                                        <?php } ?>
                                        <?php if ($attributes['displayLink']) { ?>
                                            <a href="<?php echo esc_url(get_permalink()); ?>">
                                                <p style="color: <?php echo esc_html($attributes['linkColor']) ?>">Read More</p>
                                            </a>
                                        <?php } ?>
                                    </div>
                                </div>
                                <?php
                            }
                        } else { ?>
                            <p>No posts found.</p>
                        <?php }
                    ?>
                </div>
            </div>
        </div>
        <?php
        $html = ob_get_clean();
        return $html;
    }
}