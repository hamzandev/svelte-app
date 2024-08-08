export interface User {
    id: number;
    name: string;
    email: string;
    married?: boolean;
    languages?: [];
}

export interface Product {
    id: number;
    name: string;
    price: number;
    detail?: string;
}


export interface Link {
    label: string;
    url: string;
}