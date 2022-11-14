const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component, Fragment } = wp.element;
const {
	PanelBody,
	Button,
	RangeControl,
	Tooltip,
} = wp.components;
const {
	RichText,
	InspectorControls,
	ColorPalette,
	MediaUpload,
	MediaUploadCheck,
} = wp.editor;

class BlockComponent extends Component {
	componentDidMount() {
		const { DataArray } = this.props.attributes;
		if (0 === DataArray.length) {
			this.initList();
		}
	}

	initList() {
		const { DataArray } = this.props.attributes;
		const { setAttributes } = this.props;
		setAttributes({
			DataArray: [
				...DataArray,
				{
					index: DataArray.length,
					title: "",
					description: "",
				},
			],
		});
	}
	render() {
		const { attributes, setAttributes } = this.props;
		const {
			DataArray,
		} = attributes;

		const DataArrayList = DataArray.sort((a, b) => a.index - b.index).map(
			(product, index) => {
				return (
					<div
						className={"timeline__item" +
						(product.index % 2 === 0 ? " even" : " odd")}
						key={index}
					>
						<div className="timeline__box-inner">
							{DataArray.length > 0 && (
								<div className="timeline__edits">
									<Tooltip text="Remove item">
										<span
											className="timeline__remove dashicons dashicons-no-alt"
											onClick={() => {
												var retVal = confirm(
													"Are you sure you want to remove this item?"
												);
												if (retVal == false) {
													return false;
												}
												const qewQusote = DataArray.filter(
													(item) => item.index != product.index
												).map((t) => {
													if (t.index > product.index) {
														t.index -= 1;
													}

													return t;
												});

												setAttributes({
													DataArray: qewQusote,
												});
											}}
										/>
									</Tooltip>
								</div>
							)}
							<RichText
								tagName="h2"
								placeholder="Title"
								keepPlaceholderOnFocus="true"
								value={product.title}
								className="timeline-item-title"
								onChange={(title) => {
									const newObject = Object.assign({}, product, {
										title: title,
									});
									setAttributes({
										DataArray: [
											...DataArray.filter(
												(item) => item.index != product.index
											),
											newObject,
										],
									});
								}}
							/>
							<RichText
								tagName="p"
								className="timeline-item-description"
								keepPlaceholderOnFocus="true"
								placeholder="Description"
								value={product.description}
								onChange={(description) => {
									const newObject = Object.assign({}, product, {
										description: description,
									});
									setAttributes({
										DataArray: [
											...DataArray.filter(
												(item) => item.index != product.index
											),
											newObject,
										],
									});
								}}
							/>
						</div>
					</div>
				);
			}
		);

		return [
			<Fragment>
				<div className="timeline">
					<div className="timeline__line-wrapper timeline__line-wrapper--editor-side">
						<div className="timeline__line"></div>
					</div>
					{DataArrayList}
					<div className="timeline__item--add">
						<Tooltip text="Add item">
							<i
								className="fa fa-plus add-new-item"
								onClick={() => {
									setAttributes({
										DataArray: [
											...DataArray,
											{
												index: DataArray.length,
												title: "",
												description: "",
											},
										],
									});
								}}
							>
							</i>
						</Tooltip>
					</div>
				</div>
			</Fragment>,
		];
	}
}

registerBlockType("abl/timeline-block", {
	title: "Timeline Block",
	description: "Timeline Block displays your title and description in timeline form.",
	icon: "editor-ul",
	category: "common",
	attributes: {
		DataArray: {
			type: "array",
			default: [],
		},
	},
	edit: BlockComponent,
	save(props) {
		const { attributes } = props;
		const {
			DataArray,
		} = attributes;
		return (
			<div className="timeline">
				<div className="timeline__line-wrapper">
					<div className="timeline__line"></div>
				</div>
				{DataArray.sort((a, b) => a.index - b.index).map((product, index) => (
					<div
						className="timeline__item"
						key={index}
					>
						<div className="timeline__box-inner">
							{product.title && (
								<RichText.Content
									tagName="h2"
									value={product.title}
									className="timeline-item-title"
								/>
							)}
							{product.description && (
								<RichText.Content
									tagName="p"
									value={product.description}
									className="timeline-item-description"
								/>
							)}
						</div>
					</div>
				))}
			</div>
		);
	},
});
