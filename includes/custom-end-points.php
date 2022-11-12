<?php

/**
 * Register new rest route to fetch posts.
*/
add_action( 'rest_api_init', 'abl_register_api_for_all_post_types' );

/**
 * Register custom api endpoints to fetch all posts.
 *
 * @since 1.0.0
 */
function abl_register_api_for_all_post_types() {

    register_rest_route(
        'abl_api',
        '/request/all_post_types',
        array(
            'methods'             => 'GET',
            'callback'            => 'abl_get_all_post_types',
            'permission_callback' => '__return_true',
        )
    );

}
  
/**
 * List of posts.
 *
 * @since 1.0.0
 */
function abl_get_all_post_types() {

    $result = array();

    $args = array(
        'public'   => true,
        '_builtin' => false
    );
    $output = 'names';
    $operator = 'and';
    $post_types = get_post_types( $args, $output, $operator );

    if (!empty($post_types)) {

        $i = 0;

        foreach ( $post_types as $post_type ) {
            $result[ $i ]['label']    = $post_type;
            $result[ $i ]['title'] = $post_type;

            $i++;
        }
    }

    return new WP_REST_Response( $result, 200 );
}