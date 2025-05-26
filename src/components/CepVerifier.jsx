import { useState } from 'react';

export default function CepVerifier() {
	const [cep, setCep] = useState('');
	const [address, setAddress] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const onlyNumbers = e.target.value.replace(/\D/g, '');
		setCep(onlyNumbers);
	};

	const handleSearch = async () => {
		if (cep.length !== 8) {
			setError('CEP Precisa ter 8 dígitos');
			setAddress(null);
			return;
		}

		setLoading(true);
		setError(null);
		setAddress(null);

		try {
			const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
			const data = await response.json();

			if (data.erro) {
				setError('CEP Não encontrado!');
				setAddress(null);
			} else {
				setAddress(data);
				setError(null);
			}
		} catch {
			setError('Error fetching data');
			setAddress(null);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="max-w-sm p-4 border rounded-md shadow-sm">
			<label htmlFor="cep" className="block mb-1 font-medium">
				Digite o CEP:
			</label>
			<input
				id="cep"
				type="text"
				value={cep}
				onChange={handleChange}
				maxLength={8}
				placeholder="Ex: 01001000"
				className="w-full p-2 border rounded-md mb-2"
			/>
			<button
				onClick={handleSearch}
				disabled={loading}
				className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
			>
				{loading ? 'Procurando...' : 'Verificar CEP'}
			</button>

			{error && <p className="mt-2 text-red-600">{error}</p>}

			{address && (
				<div className="mt-4 bg-gray-50 p-3 rounded-md border">
					<p>
						<strong>Endereço:</strong> {address.logradouro}
					</p>
					<p>
						<strong>Bairro:</strong> {address.bairro}
					</p>
					<p>
						<strong>Cidade/Estado:</strong> {address.localidade} / {address.uf}
					</p>
					<p>
						<strong>CEP:</strong> {address.cep}
					</p>
				</div>
			)}
		</div>
	);
}
