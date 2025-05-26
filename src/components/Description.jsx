/* eslint-disable react/prop-types */
function Description({ product }) {
	return (
		<div>
			<h1 className="text-2xl font-bold">{product.name}</h1>
			<p className="text-lg text-gray-700">
				{product.price.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				})}
			</p>
		</div>
	);
}

export default Description;
