/* eslint-disable react/prop-types */
export default function ColorSelector({
	colors,
	selectedColor,
	onColorChange,
}) {
	return (
		<div className="flex gap-4 items-center">
			{colors.map((color) => (
				<div
					key={color.name}
					onClick={() => onColorChange(color.name)}
					className={`flex items-center gap-2 cursor-pointer ${
						selectedColor === color.name ? 'font-semibold' : 'text-gray-600'
					}`}
				>
					<div
						className="w-5 h-5 rounded-full border"
						style={{ backgroundColor: color.hex }}
					/>
					<span>{color.name}</span>
				</div>
			))}
		</div>
	);
}
