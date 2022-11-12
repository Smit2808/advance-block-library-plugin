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
        )
    );
    
    return $blocks;
}
