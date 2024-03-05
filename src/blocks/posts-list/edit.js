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
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	Spinner,
	SelectControl,
	TextControl
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

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
	const { order, orderBy, postsToShow, categories } = attributes;
	const [posts, setPosts] = useState([]);
	const [postCategories, setPostCategories] = useState([]);

	const fetchPosts = async () => {
		const queryParameters = {
			per_page: postsToShow,
			orderby: orderBy,
			order: order,
			categories: categories,
			_embed: "wp:featuredmedia, author, wp:term"
		};
		const postsPath = addQueryArgs('/wp/v2/posts', queryParameters);
		try {
			const response = await apiFetch({ path: postsPath });
			setPosts(response);
		} catch (error) {
			console.error(error);
		}
	}

	const fetchCategories = async () => {
		const queryParameters = {
			per_page: -1
		};
		const categoriesPath = addQueryArgs('/wp/v2/categories', queryParameters);
		try {
			const response = await apiFetch({ path: categoriesPath });
			setPostCategories(response);
		} catch (error) {
			console.error(error);
		}
	}
	console.log("categories", categories);

	useEffect(() => {
		fetchPosts();
		fetchCategories();
	}, [order, orderBy, postsToShow]);

	/**
	 * If the posts are not yet fetched and it's and empty array.
	 * 
	 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/#spinner
	 */

	if (!posts.length) {
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
					<SelectControl
						multiple
						label="Category"
						value={categories} // should be an array of selected category IDs
						options={postCategories.map((cat) => ({
							label: cat.name,
							value: cat.id,
						}))}
						onChange={(selectedCategoryIds) => {
							setAttributes({ postCategories: selectedCategoryIds });
						}}
					/>
					<TextControl
						label={__('Number of Posts', 'masud-core')}
						value={postsToShow}
						onChange={(value) => setAttributes({ postsToShow: Number(value) })}
					/>
					<SelectControl
						label={__('Order', 'masud-core')}
						value={order}
						options={[
							{ label: __('Ascending', 'masud-core'), value: 'asc' },
							{ label: __('Descending', 'masud-core'), value: 'desc' },
						]}
						onChange={(value) => setAttributes({ order: value })}
					/>
					<SelectControl
						label={__('Order By', 'masud-core')}
						value={orderBy}
						options={[
							{ label: __('Date', 'masud-core'), value: 'date' },
							{ label: __('Title', 'masud-core'), value: 'title' },
						]}
						onChange={(value) => setAttributes({ orderBy: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div className='posts-list'>
				{
					posts?.map((post) => {
						const imageUrl = post?._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.large?.source_url;
						const imageAlt = post?.title?.rendered;
						return (
							<div key={post.id} id={post.id} className='post'>
								{
									imageUrl ? <img src={imageUrl} alt={imageAlt} /> : null
								}
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
