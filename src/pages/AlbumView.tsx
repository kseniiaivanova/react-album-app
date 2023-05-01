import { allAlbums } from "../components/albums";
import { useParams } from "react-router";
import { Album } from "../components/Album";
import { Navbar } from "../components/Navbar";


export const AlbumView = () => {
    const params = useParams();

    const currentAlbum = allAlbums.find((album) => album.id === params.id);

    if (currentAlbum === undefined) {
        return <h1>Choose an album!</h1>;
    } else {
        return (
            <>
                <Navbar></Navbar>
                <h1>Internet Music Database</h1>
                <Album {...currentAlbum} showFullInfo={true}></Album>
            </>
        );
    }

}