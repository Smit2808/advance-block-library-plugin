<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       advance-block-library
 * @since      1.0.0
 *
 * @package    Advance_Block_Library
 * @subpackage Advance_Block_Library/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Advance_Block_Library
 * @subpackage Advance_Block_Library/public
 * @author     Smit <smitrathod2808@gmail.com>
 */
class Advance_Block_Library_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;


		//Add the assets of the active blocks.
		add_action( 'init', array( $this, 'abl_load_admin_files' ) );

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/advance-block-library-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/advance-block-library-public.js', array( 'jquery' ), $this->version, false );

	}

	public function abl_load_admin_files() {

		//Get the array of the blocks.
		$blocks 		= abl_blocks_list();

		//Get the active blocks.
		$active_blocks 	= maybe_unserialize( get_option('abl_active_blocks ') );

		if( ! is_array( $active_blocks ) ){
			$active_blocks = array();
		}

		wp_enqueue_style( 'abl-fontawesome-style', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', array() );
	
		foreach( $blocks as $block ){ 
			if( in_array( $block['slug'], $active_blocks) ){
				wp_enqueue_style( 'abl_advance_block_'.$block['dest'], plugin_dir_url(__DIR__)  . 'blocks/'.$block['dest']. '/build/front.css' );
				wp_enqueue_script('abl_advance_block_'.$block['dest'], plugin_dir_url(__DIR__) . 'blocks/'.$block['dest'].'/build/blockbuild.js', array( 'wp-blocks', 'wp-i18n', 'wp-element','wp-editor','wp-data','wp-api' ) );
			}
			
		}
	}

}
