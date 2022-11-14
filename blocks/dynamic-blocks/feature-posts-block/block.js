const { registerBlockType } = wp.blocks;
const { Component, Fragment } = wp.element;
const { PanelBody, ToggleControl, TextControl, Button, SelectControl } = wp.components;
const { RichText, InspectorControls, ColorPalette, MediaUpload } = wp.editor;
const { serverSideRender: ServerSideRender } = wp;
const { __ } = wp.i18n;

class featurePostsBlock extends Component {
    render() {
        return (
            <Fragment>
                <ServerSideRender 
                    block="abl/feature-posts-block" 
                />
            </Fragment>
        );
    }
}

registerBlockType("abl/feature-posts-block", {
	title: "Feature Posts Block",
	icon: "format-gallery",
	category: "common",
	edit: featurePostsBlock,
});
