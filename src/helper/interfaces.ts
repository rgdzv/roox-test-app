export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        city: string;
        zipcode: string;
    }
    phone: string;
    website: string;
    company: {
        name: string
    }
}

type DeepKeyOf<T> = {
    [K in keyof T]: T[K] extends Record<string, any> ? DeepKeyOf<T[K]> : K
}[keyof T]

export interface InputAttributes {
    label: string;
    type: string;
    name: DeepKeyOf<User>;
    pattern?: string;
    required: boolean
}
