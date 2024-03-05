<?php
/**
 * Plugin Name:       Masud Core
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       masud-core
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function masud_core_masud_core_block_init() {
	register_block_type( __DIR__ . '/build/blocks/posts-grid' );
	register_block_type( __DIR__ . '/build/blocks/posts-list' );
}
add_action( 'init', 'masud_core_masud_core_block_init' );
