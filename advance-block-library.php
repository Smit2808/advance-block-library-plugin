<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              advance-block-library
 * @since             1.0.0
 * @package           Advance_Block_Library
 *
 * @wordpress-plugin
 * Plugin Name:       Advance block library
 * Plugin URI:        advance-block-library
 * Description:       This is the plugin that has advance static and dynamic blocks which can customize as per the need.
 * Version:           1.0.0
 * Author:            Smit
 * Author URI:        advance-block-library
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       advance-block-library
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'ADVANCE_BLOCK_LIBRARY_VERSION', '1.0.0' );

/**
 * Define the global path of the plugin.
 */
define('ADVANCE_BLOCK_LIBRARY_URI',plugin_dir_path( __FILE__ ));

/**
 * Contains the array of all the blocks.
 */
require_once plugin_dir_path( __FILE__ ) . "includes/block-array.php";

/**
 * Contains the array of all the blocks.
 */
require_once plugin_dir_path( __FILE__ ) . "includes/custom-end-points.php";

$blocks = abl_blocks_list();

/**Dynamic block file inclusion */
foreach($blocks as $block) {
	if($block['dynamic']){
		require_once plugin_dir_path( __FILE__ ) . "blocks/".$block['dest']."/index.php";
	}
}


/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-advance-block-library-activator.php
 */
function activate_advance_block_library() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-advance-block-library-activator.php';
	Advance_Block_Library_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-advance-block-library-deactivator.php
 */
function deactivate_advance_block_library() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-advance-block-library-deactivator.php';
	Advance_Block_Library_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_advance_block_library' );
register_deactivation_hook( __FILE__, 'deactivate_advance_block_library' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-advance-block-library.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_advance_block_library() {

	$plugin = new Advance_Block_Library();
	$plugin->run();

}
run_advance_block_library();
