/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { saveWithExpiry, loadWithExpiry } from '/src/utils/storage.js';

function SizeSelector({ sizes, onSizeChange }) {
	const [selectedSize, setSelectedSize] = useState(() => {
		return loadWithExpiry('selectedSize') || null;
	});

	useEffect(() => {
		if (selectedSize) {
			saveWithExpiry('selectedSize', selectedSize);
			if (onSizeChange) onSizeChange(selectedSize);
		}
	}, [selectedSize]);

	return (
		<div>
			<p className="mb-2 text-gray-700 font-semibold">Tamanho:</p>
			<div className="flex gap-2 flex-wrap">
				{sizes.map((size) => (
					<button
						key={size}
						onClick={() => setSelectedSize(size)}
						className={`px-3 py-2 rounded-full font-medium transition-colors duration-200 ${
							size === selectedSize
								? 'bg-green-800 text-white border border-green-800'
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

export default SizeSelector;
