import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ProductPage from './ProductPage.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ProductPage />
	</StrictMode>,
);
