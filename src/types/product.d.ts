
export interface Products {
    id: number | string | any;
    sku: string;
    name: string;
    price: number;
    thumbnail?: string;
    description?: string;
    category?: string;
    created_at?: string;
}

export interface ProductCategoryData {
    id: string,
    name: string,
    thumbnail?: string,
    created_date?: string,
    category_type?: string,
}


