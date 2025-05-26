import ProductGallery from './components/ProductGallery';

function ProductPage() {
	const product = {
		name: 'Tênis Montink',
		price: 299.9,
		sizes: ['37', '38', '39', '40', '41'],
		colors: [
			{ name: 'Black', hex: '#000000' },
			{ name: 'Blue', hex: '#1E90FF' },
		],
		imagesByColor: {
			Black: [
				'/images/tenis-preto1.jpg',
				'/images/tenis-preto2.jpg',
				'/images/tenis-preto3.jpg',
			],
			Blue: [
				'/images/tenis-azul1.jpg',
				'/images/tenis-azul2.jpg',
				'/images/tenis-azul3.jpg',
			],
		},
	};

	return (
		<div className="p-10 justify-items-center">
			<ProductGallery product={product} />
		</div>
	);
}

export default ProductPage;
