import { allAlbums } from "../components/albums";
import { useParams } from "react-router";
import { Album } from "../components/Album";
import { myAlbum } from "../components/models/MyAlbum";
import { Navbar } from "../components/Navbar";



export const AlbumView = () => {
    const params = useParams();

    const currentAlbum = allAlbums.find((album) => album.id === params.id);

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