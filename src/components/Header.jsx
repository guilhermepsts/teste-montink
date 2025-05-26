function Header() {
	return (
		<header className="bg-white px-6 py-4 shadow-sm w-1/2 mx-auto rounded-lg">
			<div className="flex items-center">
				<a className="grid grid-cols-2" href="./">
					<img className="h-10" src="./public/images/tennis-car.png" alt="" />
				</a>
				<span className="text-xl font-semibold text-gray-800">GS Store</span>
			</div>
		</header>
	);
}

export default Header;
