import axios from "axios";
import apiClient from "@/api/client";
import { MyFormValues } from "@/screens/ListingEdit";
import { LocationI } from "@/hooks/useLocation";


export const endpoint = "/listings";

interface ListingI {
    title: string;
    description: string;
    price: string;
    category: number;
    images: string[];
    location: LocationI
}

export interface ListItemI {
    categoryId: number,
    id: number,
    images: string[

    ],
    location: {
        latitude: number,
        longitude: number
    },
    price: number,
    title: string,
    userId: number
}
export interface getListingsResponse {
    data: ListItemI[]
}

export interface AddListingsResponse {
    data: ListItemI[]
}

export const getListings = async (): Promise<ListItemI[] | undefined> => {
    const response = await apiClient.get<ListItemI[]>('/listings');
    return response.data;

};

export const addListings = async (listing: ListingI, onProgress: (args: any) => void): Promise<AddListingsResponse | undefined> => {

    const data = new FormData();
    data.append("title", listing.title);
    data.append("price", listing.price);
    data.append("categoryId", listing.category);
    data.append("description", listing.description);

    listing.images.forEach((image, index: number) => {
        data.append("images", {
            name: `image${index}`,
            type: "image/jpeg",
            uri: image,
        });
    });

    if (listing.location) {
        data.append("location", JSON.stringify(listing.location));
    }
    const response = await apiClient.post<AddListingsResponse | undefined>('/listings', data, {
        onUploadProgress: (progress) => onProgress(progress),
    });

    return response.data;

};


export default { getListings }