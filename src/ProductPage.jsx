import Description from './Description';
import Gallery from './Gallery';

function ProductPage() {
	const product = {
		title: 'Tênis Esportivo X1',
		price: 299.9,
		images: ['/images/tenis1.jpg', '/images/tenis2.jpg', '/images/tenis3.jpg'],
		sizes: ['37', '38', '39', '40', '41'],
		colors: ['Preto', 'Branco', 'Azul'],
	};

	return (
		<div className="grid grid-cols-2 p-10 justify-items-center">
			<Gallery product={product} />
			<Description product={product} />
		</div>
	);
}

export default ProductPage;
