# E-commerce Product Page (Teste Técnico)

Este projeto é uma página de produto desenvolvida em **React** com **Tailwind CSS**, criada como parte de um **teste técnico**.

## Funcionalidades

- Visualização da imagem principal do produto com miniaturas clicáveis
- Seleção dinâmica de cores e tamanhos
- Verificador de CEP via API do [ViaCEP](https://viacep.com.br/)
- Persistência local (localStorage) de ações do usuário (cor, tamanho, CEP) por 15 minutos
- Layout responsivo com design limpo e minimalista

## Tecnologias

- React
- Tailwind CSS
- Vite
- API ViaCEP
- LocalStorage com expiração personalizada

## Estrutura de Componentes

- `ColorSelector`
- `SizeSelector`
- `CepVerifier`
- `ProductGallery`
- `Header`
- `utils/storage.js` (funções de persistência com expiração)

---

