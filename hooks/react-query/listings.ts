import { useMutation, useQuery } from "@tanstack/react-query";
import ListingsService from '@/services/listings';
import { getListingsResponse, ListItemI } from '@/services/listings';
import { Axios, AxiosError } from "axios";
import { useState } from "react";
import { BASE_URL } from "@/api/apiClient";


export const useGetListings = () => {
    return useQuery<ListItemI[]>({
        queryKey: ['useGetListings'],
        queryFn: ListingsService.getListings,
    })
}


