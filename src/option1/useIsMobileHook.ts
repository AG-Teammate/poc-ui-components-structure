// @ts-ignore
import {useMediaQuery} from 'react-responsive'

const useIsMobileHook: () => boolean = () => {
    return useMediaQuery({
        query: '(max-width: 600px)' //todo what is a good threshold? use max-device-width?
    })
};

export default useIsMobileHook;
