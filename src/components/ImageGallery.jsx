/* eslint-disable react/prop-types */
export default function ImageGallery({ images, selectedImage, onImageSelect }) {
	return (
		<div>
			<img
				src={selectedImage}
				alt="Main product"
				className="w-full rounded-xl"
			/>

			<div className="flex gap-2 mt-2">
				{images.map((img, index) => (
					<img
						key={index}
						src={img}
						alt={`Thumbnail ${index}`}
						onClick={() => onImageSelect(img)}
						className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
							img === selectedImage ? 'border-blue-500' : 'border-transparent'
						}`}
					/>
				))}
			</div>
		</div>
	);
}
