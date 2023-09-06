import {useQuery} from '@tanstack/react-query';
import axios from "axios";
import NATIONAL_PARK_API_KEY from '../apikey';

const getNationalParksData = async () => {
    try {
        const res = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=CA&limit=12&api_key=${NATIONAL_PARK_API_KEY}`);
        return res.data
    } catch (error) {
        throw new Error('Network error');
    }
}

export const useGetNationalParks = () => {
    return useQuery(['parksQuery'], getNationalParksData);
}


