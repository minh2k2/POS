const BASE_URL = 'http://localhost:5108/api';
// đổi port 

// ========== PRODUCTS ==========
export async function getProducts() {
    console.log('Fetching products from API...');
    const res = await fetch(`${BASE_URL}/products`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
}

// ========== ORDERS ==========
export async function createOrder(order) {
    const res = await fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });

    if (!res.ok) throw new Error('Failed to create order');
    return res.json();
}

export async function getOrders() {
    const res = await fetch(`${BASE_URL}/orders`);
    if (!res.ok) throw new Error('Failed to fetch orders');
    return res.json();
}
