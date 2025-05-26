/* eslint-disable react/prop-types */
export default function SizeSelector({ sizes, selectedSize, onSizeChange }) {
	return (
		<div>
			<p className="mb-2 text-gray-700">Tamanho:</p>
			<div className="flex gap-2 flex-wrap">
				{sizes.map((size) => (
					<button
						key={size}
						onClick={() => onSizeChange(size)}
						className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
							size === selectedSize
								? 'bg-blue-600 text-white border border-blue-600'
								: 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
						}`}
					>
						{size}
					</button>
				))}
			</div>
		</div>
	);
}
