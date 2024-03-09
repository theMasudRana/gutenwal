import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';

/**
 * Inspector component
 * 
 * @param {Object} props - Component properties
 * 
 * @return {Element} - Element to render
 */
function Inspector({ attributes, setAttributes, postCategories }) {
    const { postsToShow, categories, order, orderBy } = attributes;
    return (
        <InspectorControls>
            <PanelBody title={__('Posts Query', 'masud-core')} initialOpen={true}>
                <TextControl
                    label={__('Number of Posts', 'masud-core')}
                    value={postsToShow}
                    onChange={(value) => setAttributes({ postsToShow: Number(value) })}
                />
                <SelectControl
                    multiple
                    label="Category"
                    value={categories} // should be an array of selected category IDs
                    options={postCategories.map((cat) => ({
                        label: cat.name,
                        value: cat.id,
                    }))}
                    onChange={(selectedCategoryIds) => {
                        setAttributes({ categories: selectedCategoryIds });
                    }}
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
    )
}

export default Inspector