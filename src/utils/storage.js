export function saveWithExpiry(key, value, ttlMinutes = 15) {
	const now = new Date();
	const item = {
		value,
		expiry: now.getTime() + ttlMinutes * 60 * 1000,
	};
	localStorage.setItem(key, JSON.stringify(item));
}

export function loadWithExpiry(key) {
	const itemStr = localStorage.getItem(key);
	if (!itemStr) return null;

	try {
		const item = JSON.parse(itemStr);
		if (new Date().getTime() > item.expiry) {
			localStorage.removeItem(key);
			return null;
		}
		return item.value;
	} catch {
		localStorage.removeItem(key);
		return null;
	}
}
