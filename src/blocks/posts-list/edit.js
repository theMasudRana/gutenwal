import apiFetch from '@wordpress/api-fetch';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import {
	PanelBody,
	Placeholder,
	SelectControl,
	Spinner,
	TextControl
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { addQueryArgs } from '@wordpress/url';
import metadata from './block.json';
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

	const [posts, setPosts] = useState(null);
	const [loading, setLoading] = useState(true);
	const [postCategories, setPostCategories] = useState([]);

	/**
	 * Fetch posts from the REST API.
	 * 
	 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-api-fetch/
	 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-url/#addqueryargs
	 * 
	 * @return {Promise} The Promise object represents the response of the API call.
	 * 
	 * */
	const fetchPosts = async () => {
		setLoading(true);
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
		} finally {
			setLoading(false);
		}
	}

	/**
	 * Fetch categories from the REST API.
	 * 
	 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-api-fetch/
	 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-url/#addqueryargs
	 * 
	 * @return {Promise} The Promise object represents the response of the API call.
	 * 
	 * */
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

	/**
	 * Fetch posts and categories when the block is rendered.
	 * 
	 * @see https://reactjs.org/docs/hooks-effect.html
	 * 
	 */
	useEffect(() => {
		fetchPosts();
		fetchCategories();
	}, [order, orderBy, postsToShow, categories]);


	/**
	 * If the posts are not yet fetched and it's and empty array.
	 * 
	 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/#spinner
	 */
	const hasPosts = !!posts?.length > 0;
	if (!hasPosts || loading) {
		return (
			<div {...useBlockProps()}>
				<Inspector attributes={attributes} setAttributes={setAttributes} postCategories={postCategories} />
				<Placeholder icon={metadata.icon} label={__('Masud: Posts List')}>
					{loading ? (
						<Spinner />
					) : (
						__('No posts found.')
					)}
				</Placeholder>
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
			<Inspector attributes={attributes} setAttributes={setAttributes} postCategories={postCategories} />
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
								<h3 className='post-title'>{post.title.rendered}</h3>
								<p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
							</div>
						);
					})
				}
			</div>
		</div>
	);
}
