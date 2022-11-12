<?php

/**
 * Fired during plugin activation
 *
 * @link       advance-block-library
 * @since      1.0.0
 *
 * @package    Advance_Block_Library
 * @subpackage Advance_Block_Library/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Advance_Block_Library
 * @subpackage Advance_Block_Library/includes
 * @author     Smit <smitrathod2808@gmail.com>
 */
class Advance_Block_Library_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		update_option( 'abl_active_blocks' ,maybe_serialize( array() ) );
		wp_redirect( admin_url( '/admin.php?page=abl_admin_setting' ) );
		exit;
	}

}
