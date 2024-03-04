/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	QueryControls,
	Spinner
} from '@wordpress/components';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { order, orderBy, postsToShow } = attributes;

	/**
	 * Fetch posts from the WordPress store.
	 * 
	 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#useSelect
	 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/#getEntityRecords
	 * 
	 * @type {Object} posts The post object.
	 * @type {Object} getEntityRecords The function to fetch the posts.
	 * @type {Object} queryOptions The query options for the posts.
	 * @type {Object} order The order of the posts.
	 * 
	 */
	const posts = useSelect((select) => {
		const { getEntityRecords } = select(coreStore);
		const queryOptions = {
			order: order,
			orderby: orderBy,
			per_page: postsToShow,
		};
		return getEntityRecords('postType', 'post', queryOptions);
	});

	/**
	 * If the posts are not yet fetched, we need to show the loading state.
	 * 
	 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/#spinner
	 */
	if (!posts) {
		return (
			<div {...useBlockProps()} className='mcore-loading'>
				<Spinner />
			</div>
		);
	}

	/**
	 * If the posts are fetched, we need to show the posts.
	 * 
	 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
	 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/#panelbody
	 */
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('Posts Query', 'masud-core')}>
					<QueryControls
						{...{ orderBy, order }}
						numberOfItems={postsToShow}
						selectedCate
						onOrderByChange={(value) => setAttributes({ orderBy: value })}
						onOrderChange={(value) => setAttributes({ order: value })}
						onNumberOfItemsChange={(value) => setAttributes({ postsToShow: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div className='posts-grid'>
				{
					posts?.map((post) => {
						return (
							<div key={post.id} id={post.id} className='post'>
								<h3>{post.title.rendered}</h3>
								<p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
							</div>
						);
					})
				}
			</div>
		</div>
	);
}
