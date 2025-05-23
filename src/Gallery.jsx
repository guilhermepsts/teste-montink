/* eslint-disable react/prop-types */
import { useState } from 'react';

function Gallery({ product }) {
	const [selectedImage, setSelectedImage] = useState(product.images[0]);
	return (
		<div>
			{/* Imagem Principal */}
			<img
				src={selectedImage}
				alt="Imagem principal do produto"
				className="w-full rounded-xl mb-4"
			/>

			{/* Miniaturas */}
			<div className="flex gap-2">
				{product.images.map((img, index) => (
					<img
						key={index}
						src={img}
						alt={`Miniatura ${index}`}
						className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
							img === selectedImage ? 'border-red-900' : 'border-transparent'
						}`}
						onClick={() => setSelectedImage(img)}
					/>
				))}
			</div>
		</div>
	);
}

export default Gallery;
