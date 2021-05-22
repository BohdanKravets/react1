import {useDispatch, useSelector} from "react-redux";
import {getAlbums} from "../../services/api";
import {setAlbums, setAlbumsError, startAlbumsLoading, stopAlbumsLoading} from "../../redux";
import {useEffect} from "react";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import ErrorScreen from "../errorScreen/ErrorScreen";
import Album from "../album/Album";

export default function Albums() {

    const albumsData = useSelector(({albums}) => albums);
    const dispatch = useDispatch();

    const albumsFetcher = async () => {
        try {
            dispatch(startAlbumsLoading());
            const resp = await getAlbums();
            dispatch(setAlbums(resp.data));

        } catch (e) {
            dispatch(setAlbumsError('Failed fetch albums'))
        } finally {
            dispatch(stopAlbumsLoading());
        }

    }

    useEffect(() => {
        albumsFetcher();
    }, []);

    if (albumsData.isAlbumsLoading) {
        return <LoadingScreen data={'Albums'}/>;
    }

    if (albumsData.albumsError) {
        return <ErrorScreen error={albumsData.albumsError}/>;
    }
    console.log(albumsData)
    return (
        <div>
            {
                albumsData.albums.map(value => <Album
                    key={value.id}
                    item={value}
                />)
            }
        </div>
    );
}