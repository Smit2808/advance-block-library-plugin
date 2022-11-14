<?php
/**
 * 
 * All Block Details Are Listed Here.
 * 
 * @return array $blocks Contains details of all the blocks.
 * 
 */
function abl_blocks_list(){
    
    $blocks = array(
        'abl/team-members-block'      => array(
            'slug'				=> 'abl/team-members-block',
            'dest'				=> '/static-blocks/team-members-block',
            'dynamic'           =>  false,
            'parent-class'      => 'abl_team_members_block',
            'name'  			=> __( 'Team Members Block', 'advance-block-library' ),
            'desc'  			=> __( 'Add team members details', 'advance-block-library' )        
        ),
        'abl/blogs-listing-block'      => array(
            'slug'				=> 'abl/blogs-listing-block',
            'dest'				=> '/dynamic-blocks/blogs-listing-block',
            'dynamic'           =>  true,
            'parent-class'      => 'abl_blogs_listing_block',
            'name'  			=> __( 'Blogs Listing Block', 'advance-block-library' ),
            'desc'  			=> __( 'List out the blogs dynamically', 'advance-block-library' )        
        ),
        'abl/timeline-block'      => array(
            'slug'				=> 'abl/timeline-block',
            'dest'				=> '/static-blocks/timeline-block',
            'dynamic'           =>  false,
            'parent-class'      => 'abl_timeline_block',
            'name'  			=> __( 'Timeline Block', 'advance-block-library' ),
            'desc'  			=> __( 'Add title and descriptions and it will display in timeline form', 'advance-block-library' )        
        ),
        'abl/feature-posts-block'      => array(
            'slug'				=> 'abl/feature-posts-block',
            'dest'				=> '/dynamic-blocks/feature-posts-block',
            'dynamic'           =>  true,
            'parent-class'      => 'abl_feature_posts_listing_block',
            'name'  			=> __( 'Featured Posts Listing Block', 'advance-block-library' ),
            'desc'  			=> __( 'List out the featured posts dynamically', 'advance-block-library' )        
        ),
    );
    
    return $blocks;
}
