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

class teamPresentersSectionEdit extends Component {
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
					media: "",
					mediaId: "",
					mediaAlt: "",
					title: "",
					description: "",
					secTitleColor: "#FFFFFF",
					secDescColor: "#FFFFFF",
				},
			],
		});
	}

	moveItem(oldIndex, newIndex){
		const { attributes, setAttributes } = this.props;
		const { DataArray } = attributes;

		let arrayCopy = [...DataArray]

		arrayCopy[oldIndex] = DataArray[newIndex]
		arrayCopy[newIndex] = DataArray[oldIndex]

		setAttributes({
			DataArray: arrayCopy
		})

	}

	render() {
		const { attributes, setAttributes } = this.props;
		const {
			DataArray,
			backgroundImage,
			colWidth,
		} = attributes;
		const colors = [
			{ name: "Steel Blue", color: "#337ab7" },
			{ name: "Midnight Green", color: "#00465b" },
			{ name: "White", color: "#ffffff" },
			{ name: "Black", color: "#000000" },
			{ name: "Pear", color: "#bed82f" },
			{ name: "Android Green", color: "#b6d232" },
			{ name: "Cultured", color: "#f7f7f7" },
		];
		const getImage = (openEvent) => {
			if (backgroundImage) {
				return (
					<Fragment>
						<img src={backgroundImage} className="bgimg-editor" />
						<Button
							onClick={() => {
								setAttributes({ backgroundImage: "" });
							}}
							className="button button-large"
						>
							Remove Image
						</Button>
					</Fragment>
				);
			} else {
				return (
					<div>
						<Button onClick={openEvent} className="button button-large">
							Upload image
						</Button>
					</div>
				);
			}
		};
		const getImageButton = (openEvent, index) => {
			if (DataArray[index].media) {
				return <img src={DataArray[index].media} alt={DataArray[index].alt} />;
			} else {
				return (
					<Button onClick={openEvent} className="button button-large">
						Upload Image
					</Button>
				);
			}
		};
		const DataArrayList = DataArray.map(
			(product, index) => {
				return (
					<div
						className="team-presenter-item"
						key={index}
						style={{ width: colWidth + "%" }}
					>
						{DataArray.length > 0 && (
							<div className="team-presenter-item__action-wrap">
								<div className="team-presenter-item__move">
									{0 < index && (
										<Tooltip text={__( "Move to Left", "adient" )}>
											<i 
												className="fa fa-arrow-left move-left" 
												aria-hidden="true"
												onClick={()=>this.moveItem(index, index - 1)}	
											></i>
										</Tooltip>
									)}
									{index + 1 < DataArray.length && (
										<Tooltip text={__( "Move to Right", "adient" )}>
											<i 
												className="fa fa-arrow-right move-right" 
												aria-hidden="true"
												onClick={()=>this.moveItem(index, index + 1)}
											></i>
										</Tooltip>
									)}
								</div>
								<Tooltip text="Remove item">
									<i
										className="fa fa-times remove-item"
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
									></i>
								</Tooltip>
							</div>
						)}
						<div className="team-presenter-item__imgcontainer">
							<div className="team-presenter-item__img">
								{product.mediaId && (
									<div className="team-presenter-item__action-wrap team-presenter-item__action-wrap--image-action-wrap">
										<MediaUploadCheck>
											<MediaUpload
												onSelect={(media) => {
													let copyData = [...DataArray];
													copyData[index].media = media.url;
													copyData[index].mediaId = media.id;
													copyData[index].mediaAlt = media.alt;
													setAttributes({
														DataArray: copyData,
													});
												}}
												type="image"
												value={product.mediaId}
												render={({ open }) => (
													<Tooltip text="Edit image">
														<i
															onClick={open}
															className="fa fa-pencil edit-image"
														></i>
													</Tooltip>
												)}
											/>
										</MediaUploadCheck>
										<Tooltip text={__( "Remove Image", "adient" )}>
											<i 
												className="fa fa-times remove-item"
												onClick={()=>{
													let copyData = [...DataArray]
													copyData[index].media = '';
													copyData[index].mediaId = '';
													copyData[index].mediaAlt = '';
													setAttributes({ DataArray: copyData, });
												}}
											>
											</i>
										</Tooltip>
									</div>
								)}
								<MediaUpload
									onSelect={(media) => {
										let copyData = [...DataArray];
										copyData[index].media = media.url;
										copyData[index].mediaId = media.id;
										copyData[index].mediaAlt = media.alt;
										setAttributes({
											DataArray: copyData,
										});
									}}
									type="image"
									value={product.mediaId}
									render={({ open }) => getImageButton(open, index)}
								/>
							</div>
						</div>
						<div className="team-presenter-item__info">
							<RichText
								tagName="h3"
								placeholder="Enter name"
								keepPlaceholderOnFocus="true"
								value={product.title}
								className="team-presenter-item-name"
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
								style={{ color: product.secTitleColor }}
							/>
							<RichText
								tagName="p"
								className="team-presenter-item-description"
								keepPlaceholderOnFocus="true"
								placeholder="Enter description"
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
								style={{ color: product.secDescColor }}
							/>
						</div>
					</div>
				);
			}
		);
		return [
			<Fragment>
				<InspectorControls>
					<PanelBody title={"Background Image Settings"} initialOpen={true}>
						<div className="settings-row">
							<label>Background Item</label>
							<MediaUpload
								onSelect={(media) => {
									setAttributes({
										backgroundImage: media.url,
									});
								}}
								type="image"
								value={backgroundImage}
								render={({ open }) => getImage(open)}
							/>
						</div>
					</PanelBody>
					<PanelBody title="Item column width settings" initialOpen={false}>
						<div className="setting-row">
							<label>Column Width</label>
							<RangeControl
								label="Width (%)"
								value={colWidth}
								onChange={(value) => setAttributes({ colWidth: value })}
								min={0}
								max={100}
							/>
						</div>
					</PanelBody>
					<PanelBody title="Text color settings" initialOpen={false}>
						{DataArray.map((data, index) => {
							return (
								<PanelBody title={`item ${index + 1}`} initialOpen={false}>
									<div className="setting-row">
										<label>Name Color</label>
										<span
											className="component-color-indicator"
											style={{ background: data.secTitleColor }}
										></span>
										<ColorPalette
											value={data.secTitleColor}
											onChange={(value) => {
												let arrayCopy = [...DataArray];
												arrayCopy[index].secTitleColor = value;
												setAttributes({ DataArray: arrayCopy });
											}}
											colors={colors}
										/>
									</div>
									<div className="setting-row">
										<label>Description Color</label>
										<span
											className="component-color-indicator"
											style={{ background: data.secDescColor }}
										></span>
										<ColorPalette
											value={data.secDescColor}
											onChange={(value) => {
												let arrayCopy = [...DataArray];
												arrayCopy[index].secDescColor = value;
												setAttributes({ DataArray: arrayCopy });
											}}
											colors={colors}
										/>
									</div>
								</PanelBody>
							);
						})}
					</PanelBody>
				</InspectorControls>
				<div
					className="team-presenters-section"
					style={{ backgroundImage: `url(${backgroundImage})` }}
				>
					<div className="ad-container-fluid vertical-align">
						<div className="row">
							<div className={"col-12 fig-caption"}>
								<div className="team-presenters-section__wrapper">
									{DataArrayList}
									<div className="team-presenters-section__item-add">
										<i
											className="fa fa-plus add-new-item"
											onClick={() => {
												setAttributes({
													DataArray: [
														...DataArray,
														{
															index: DataArray.length,
															media: "",
															mediaId: "",
															mediaAlt: "",
															title: "",
															description: "",
															secTitleColor: "#FFFFFF",
															secDescColor: "#FFFFFF",
														},
													],
												});
											}}
										>
										</i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		];
	}
}

registerBlockType("abl/team-members-block", {
	title: "Our Team Block",
	description: "Team Members Block include title, sub-title, background image and team member profile image",
	icon: "groups",
	category: "common",
	attributes: {
		backgroundImage: {
			type: "string",
			default: null,
		},
		title: {
			type: "string",
			default: "",
		},
		DataArray: {
			type: "array",
			default: [],
		},
		colWidth: {
			type: "number",
			default: 45,
		},
		maintitleColor: {
			type: "string",
			default: "#fff",
		},
	},
	edit: teamPresentersSectionEdit,
	save(props) {
		const { attributes, className } = props;
		const {
			backgroundImage,
			colWidth,
			DataArray,
			maintitleColor,
		} = attributes;
		return (
			<div
				className="team-presenters-section"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				<div className="ad-container-fluid vertical-align">
					<div className="row row-eq-height">
						<div className={"col-12 fig-caption"}>
							<div className="team-presenters-section__wrapper">
								{DataArray.map(
									(product, index) => (
										<div
											className="team-presenter-item"
											key={index}
											style={{ width: colWidth + "%" }}
										>
											<div className="team-presenter-item__imgcontainer">
												{product.media && (
													<div className="team-presenter-item__img">
														<img src={product.media} alt={product.mediaAlt} />
													</div>
												)}
											</div>
											<div className="team-presenter-item__info">
												{product.title && (
													<RichText.Content
														tagName="h3"
														value={product.title}
														className="team-presenter-item-name"
														style={{ color: product.secTitleColor }}
													/>
												)}
												{product.description && (
													<RichText.Content
														tagName="p"
														value={product.description}
														className="team-presenter-item-description"
														style={{ color: product.secDescColor }}
													/>
												)}
											</div>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
});
