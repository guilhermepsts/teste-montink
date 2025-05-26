import ProductGallery from './components/ProductGallery';

function ProductPage() {
	const product = {
		name: 'Tênis Montink',
		price: 299.9,
		sizes: ['37', '38', '39', '40', '41', '42'],
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
		<div className="bg-[#F5f5f5] font-montserrat">
			<ProductGallery product={product} />
		</div>
	);
}

export default ProductPage;
