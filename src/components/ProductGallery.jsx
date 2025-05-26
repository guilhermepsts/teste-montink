/* eslint-disable react/prop-types */
import { useState } from 'react';
import ColorSelector from './ColorSelector';
import ImageGallery from './ImageGallery';
import SizeSelector from './SizeSelector';
import Description from './Description';
import CepVerifier from './CepVerifier';
import Header from './Header';
import Button from './Button';

function ProductGallery({ product }) {
	const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
	const [selectedImage, setSelectedImage] = useState(
		product.imagesByColor[product.colors[0].name][0],
	);
	const [selectedSize, setSelectedSize] = useState(null);

	const images = product.imagesByColor[selectedColor];

	const handleColorChange = (colorName) => {
		setSelectedColor(colorName);
		setSelectedImage(product.imagesByColor[colorName][0]);
	};

	const handleSizeChange = (size) => {
		setSelectedSize(size);
	};

	return (
		<div className="grid place-items-center h-screen">
			<Header />

			<div className="gap-4 grid grid-cols-2 p-10 justify-items-center">
				<ImageGallery
					images={images}
					selectedImage={selectedImage}
					onImageSelect={setSelectedImage}
				/>
				<div className="space-y-8">
					<Description product={product} />
					<ColorSelector
						colors={product.colors}
						selectedColor={selectedColor}
						onColorChange={handleColorChange}
					/>
					<SizeSelector
						sizes={product.sizes}
						selectedSize={selectedSize}
						onSizeChange={handleSizeChange}
					/>
					<Button />
					<CepVerifier />
				</div>
			</div>
		</div>
	);
}

export default ProductGallery;
