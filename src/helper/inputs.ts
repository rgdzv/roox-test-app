import { InputAttributes } from "./interfaces";

export const inputsArray: InputAttributes[] = [
    {
        label: 'Name',
        type: 'text',
        name: 'name',
        required: true
    },
    {
        label: 'User name',
        type: 'text',
        name: 'username',
        required: true
    },
    {
        label: 'E-mail',
        type: 'email',
        name: 'email',
        pattern: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$',
        required: true
    },
    {
        label: 'Street',
        type: 'text',
        name: 'street',
        required: true
    },
    {
        label: 'City',
        type: 'text',
        name: 'city',
        required: true
    },
    {
        label: 'Zip code',
        type: 'text',
        name: 'zipcode',
        required: true
    },
    {
        label: 'Phone',
        type: 'tel',
        name: 'phone',
        required: true
    },
    {
        label: 'Website',
        type: 'text',
        name: 'website',
        required: true
    }
]
