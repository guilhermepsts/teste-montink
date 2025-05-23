/* eslint-disable react/prop-types */
function Description({ product }) {
	return (
		<div>
			<h1 className="font-bold text-3xl ">{product.title}</h1>
			<h2 className="font-extralight text-xl">R${product.price}</h2>
		</div>
	);
}

export default Description;
