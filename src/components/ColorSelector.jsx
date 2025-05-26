/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { saveWithExpiry, loadWithExpiry } from '/src/utils/storage.js';

function ColorSelector({ colors, onColorChange }) {
	const [selectedColor, setSelectedColor] = useState(() => {
		return loadWithExpiry('selectedColor') || colors[0].name;
	});

	useEffect(() => {
		saveWithExpiry('selectedColor', selectedColor);
		if (onColorChange) {
			onColorChange(selectedColor);
		}
	}, [selectedColor]);

	return (
		<div className="flex gap-4 items-center">
			{colors.map((color) => (
				<div
					key={color.name}
					onClick={() => setSelectedColor(color.name)}
					className="cursor-pointer"
				>
					<div
						className="w-8 h-8 rounded-full border-2 transition-all duration-200"
						style={{
							backgroundColor: color.hex,
							borderColor:
								selectedColor === color.name ? 'green' : 'transparent',
						}}
					/>
				</div>
			))}
		</div>
	);
}

export default ColorSelector;
