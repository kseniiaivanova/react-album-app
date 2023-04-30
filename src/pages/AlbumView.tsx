import { useLoaderData, useParams } from "react-router";
import { Album } from "../components/Album";
import { Loader } from "../loaders/albumLoader";
import { myAlbum } from "../components/models/MyAlbum";
import { Navbar } from "../components/Navbar";



export const AlbumView = () => {
    const params = useParams();
    const loadedData = useLoaderData() as Loader;

    const currentAlbum = loadedData.albums.find((album: myAlbum) => album.id === params.id);

    if (currentAlbum === undefined) {
        return <h2>Choose an album!</h2>;
    } else {
        return (
            <>
                <Navbar></Navbar>
                <Album {...currentAlbum} showFullInfo={true}></Album>
            </>
        );
    }

}