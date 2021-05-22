import {useDispatch, useSelector} from "react-redux";
import {getPhotos} from "../../services/api";
import {setPhotos, setPhotosError, startPhotosLoading, stopPhotosLoading} from "../../redux";
import {useEffect} from "react";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import ErrorScreen from "../errorScreen/ErrorScreen";
import Photo from "../photo/Photo";


export default function Photos() {
    const photosData = useSelector(({photos}) => photos);
    const dispatch = useDispatch();

    const photosFetcher = async () => {
     try {
         dispatch(startPhotosLoading());
         const resp = await getPhotos();
         console.log(resp)
         dispatch(setPhotos(resp.data))
     } catch (e){
         dispatch(setPhotosError('Failed to fetch photos'));
     } finally {
         dispatch(stopPhotosLoading());
     }
    }

    useEffect(()=>{
        photosFetcher();
    },[]);

    if(photosData.isPhotosLoading){
        return <LoadingScreen data={'Photos'}/>;
    }
    if(photosData.photosError) {
        return <ErrorScreen error={photosData.photosError}/>;
    }
    return (
        <div>
            {
                photosData.photos.map(value => <Photo
                key = {value.id}
                item = {value}
                />)
            }
        </div>
    );
}