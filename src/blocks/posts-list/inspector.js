import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ColorPicker, ColorPalette } from '@wordpress/components';
import coreColors from '../../helper/colors';

/**
 * Inspector component
 * 
 * @param {Object} props - Component properties
 * 
 * @return {Element} - Element to render
 */
function Inspector({ attributes, setAttributes, postCategories }) {
    const { postsToShow, categories, order, orderBy, titleColor, titleBackgroundColor } = attributes;
    return (
        <>
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
                        value={categories}
                        options={postCategories.map((cat) => ({
                            label: cat.name,
                            value: cat.id,
                        }))}
                        onChange={(selectedCategoryIds) => {
                            // Convert the array of selected IDs to a comma-separated string
                            const categoriesString = selectedCategoryIds.join(',');

                            // Update the attributes with the comma-separated string
                            setAttributes({ categories: categoriesString });
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
            <InspectorControls group="styles">
                <PanelBody title={__('Title Style', 'masud-core')} initialOpen={false} className="full-width-control-wrapper">
                    <ColorPicker
                        label={__('Title Color', 'masud-core')}
                        color={titleColor}
                        onChange={(color) => setAttributes({ titleColor: color })}
                    />
                    <ColorPalette
                        label={__('Title Background Color', 'masud-core')}
                        colors={coreColors}
                        value={titleBackgroundColor}
                        onChange={(color) => setAttributes({ titleBackgroundColor: color })}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    )
}

export default Inspector