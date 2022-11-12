<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       advance-block-library
 * @since      1.0.0
 *
 * @package    Advance_Block_Library
 * @subpackage Advance_Block_Library/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Advance_Block_Library
 * @subpackage Advance_Block_Library/includes
 * @author     Smit <smitrathod2808@gmail.com>
 */
class Advance_Block_Library_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'advance-block-library',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
