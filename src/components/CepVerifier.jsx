import { useState, useEffect } from 'react';
import { saveWithExpiry, loadWithExpiry } from '/src/utils/storage.js';

function CepVerifier() {
	const [cep, setCep] = useState('');
	const [address, setAddress] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const savedAddress = loadWithExpiry('cepAddress');
		const savedCep = loadWithExpiry('cepValue');

		if (savedAddress && savedCep) {
			setAddress(savedAddress);
			setCep(savedCep);
		}
	}, []);

	const handleChange = (e) => {
		const onlyNumbers = e.target.value.replace(/\D/g, '');
		setCep(onlyNumbers);
	};

	const handleSearch = async () => {
		if (cep.length !== 8) {
			setError('CEP precisa ter 8 dígitos');
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
				setError('CEP não encontrado!');
				setAddress(null);
			} else {
				setAddress(data);
				saveWithExpiry('cepAddress', data);
				saveWithExpiry('cepValue', cep);
			}
		} catch {
			setError('Erro ao buscar o CEP');
			setAddress(null);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="max-w-sm p-4 border rounded-md shadow-sm bg-white flex flex-col gap-4">
			<div className="flex gap-2">
				<input
					type="text"
					value={cep}
					onChange={handleChange}
					placeholder="Digite o CEP"
					className="border px-4 py-2 rounded w-full"
					maxLength={8}
				/>
				<button
					onClick={handleSearch}
					className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
				>
					Verificar
				</button>
			</div>

			{loading && <p className="text-gray-600">Buscando...</p>}
			{error && <p className="text-red-600">{error}</p>}
			{address && (
				<div className="bg-gray-100 p-4 rounded">
					<p>
						<strong>Rua:</strong> {address.logradouro}
					</p>
					<p>
						<strong>Bairro:</strong> {address.bairro}
					</p>
					<p>
						<strong>Cidade:</strong> {address.localidade} - {address.uf}
					</p>
				</div>
			)}
		</div>
	);
}

export default CepVerifier;
