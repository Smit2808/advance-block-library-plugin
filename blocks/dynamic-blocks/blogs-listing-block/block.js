const { registerBlockType } = wp.blocks;
const { Component, Fragment } = wp.element;
const { PanelBody, ToggleControl, TextControl, Button, SelectControl } = wp.components;
const { RichText, InspectorControls, ColorPalette, MediaUpload } = wp.editor;
const { serverSideRender: ServerSideRender } = wp;
const { __ } = wp.i18n;

class blogListingBlock extends Component {

    constructor() {
        super(...arguments);
        this.state = {
          postList: [],
        };
       
    }
    componentDidMount(){

        wp.apiFetch({path: 'abl_api/request/all_post_types'}).then(posts => {
            let postOption = [];
			postOption.push({
				label: __('Posts'),
				value: __('post')
			});
            posts.forEach(function (item) {
                postOption.push({
                    label: __(item.label),
                    value: __(item.title)
                });
            });
            
            setTimeout(function(){ 
                this.setState({
                    postList: postOption,
                });
            }.bind(this), 600);
        });
    }
    render() {
        const { attributes, setAttributes } = this.props;
		const { selectedPostType, selectedPostStatus, selectedOrderBy, selectedOrder, displayFeatureImg, displayTitle, displayDesc, displayLink, titleColor, descColor, linkColor, selectedLayouts } = attributes;
		const { postList } = this.state;
        return (
            <Fragment>
				<InspectorControls>
					<PanelBody title="Query Settings" initialOpen={true}>
						<SelectControl
							label={__('Select Post Type')}
							value={selectedPostType}
							options={postList}
							onChange={ ( value ) => {
							setAttributes( { selectedPostType: value } );
							} }
						/>
						<SelectControl
							label={__('Select Post Status')}
							value={selectedPostStatus}
							options={[
								{ label: 'All', value: 'any' },
								{ label: 'Publish', value: 'publish' },
								{ label: 'Draft', value: 'draft' },
								{ label: 'Private', value: 'private' },
								{ label: 'Future', value: 'future' },
							]}
							onChange={ ( value ) => {
							setAttributes( { selectedPostStatus: value } );
							} }
						/>
						<SelectControl
							label={__('Select Post Orderby')}
							value={selectedOrderBy}
							options={[
								{ label: 'Title', value: 'title' },
								{ label: 'Name', value: 'name' },
								{ label: 'Date', value: 'date' },
							]}
							onChange={ ( value ) => {
							setAttributes( { selectedOrderBy: value } );
							} }
						/>
						<SelectControl
							label={__('Select Post Order')}
							value={selectedOrder}
							options={[
								{ label: 'Descending', value: 'DESC' },
								{ label: 'Ascending', value: 'ASC' },
							]}
							onChange={ ( value ) => {
							setAttributes( { selectedOrder: value } );
							} }
						/>
					</PanelBody>
					<PanelBody title="Color Settings" initialOpen={false}>
						<label>Title Color</label>
						<ColorPalette
							value={titleColor}
							onChange={(titleColor) => {
								setAttributes({
									titleColor: titleColor,
								});
							}}
						/>
						<label>Description Color</label>
						<ColorPalette
							value={descColor}
							onChange={(descColor) => {
								setAttributes({
									descColor: descColor,
								});
							}}
						/>
						<label>Read More Link Color</label>
						<ColorPalette
							value={linkColor}
							onChange={(linkColor) => {
								setAttributes({
									linkColor: linkColor,
								});
							}}
						/>
					</PanelBody>
					<PanelBody title="Layout Settings" initialOpen={false}>
						<SelectControl
							label={__('Select Layouts')}
							value={selectedLayouts}
							options={[
								{ label: 'Grid', value: 'grid-layout' },
								{ label: 'List', value: 'list-layout' },
							]}
							onChange={ ( value ) => {
							setAttributes( { selectedLayouts: value } );
							} }
						/>
					</PanelBody>
					<PanelBody title="Display Settings" initialOpen={false}>
						<ToggleControl
							label={__('Display Feature Image')}
							checked={displayFeatureImg}
							onChange={() => setAttributes({ displayFeatureImg: ! displayFeatureImg }) }
						/>
						<ToggleControl
							label={__('Display Title')}
							checked={displayTitle}
							onChange={() => setAttributes({ displayTitle: ! displayTitle }) }
						/>
						<ToggleControl
							label={__('Display Description')}
							checked={displayDesc}
							onChange={() => setAttributes({ displayDesc: ! displayDesc }) }
						/>
						<ToggleControl
							label={__('Display Read More Link')}
							checked={displayLink}
							onChange={() => setAttributes({ displayLink: ! displayLink }) }
						/>
					</PanelBody>
				</InspectorControls>
                <ServerSideRender 
                    block="abl/blogs-listing-block" 
                    attributes={{
                        selectedPostType: selectedPostType,
						selectedPostStatus: selectedPostStatus,
						selectedOrderBy: selectedOrderBy,
						selectedOrder: selectedOrder,
						displayFeatureImg: displayFeatureImg,
						displayTitle: displayTitle,
						displayDesc: displayDesc,
						displayLink: displayLink,
						titleColor: titleColor,
						descColor: descColor,
						linkColor: linkColor,
						selectedLayouts: selectedLayouts,
					}}
                />
            </Fragment>
        );
    }
}

registerBlockType("abl/blogs-listing-block", {
	title: "Blogs Listing Block",
	icon: "format-gallery",
	category: "common",
	edit: blogListingBlock,
	save() {
        return null;
    },
});
