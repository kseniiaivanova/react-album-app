import { allAlbums } from "../components/albums";
import { Album } from "../components/Album";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";





export const AlbumList = () => {

    return (
        <> <Navbar></Navbar>
            <h1>Internet Music Database</h1>
            {allAlbums.map((album, index) => (
                <Link key={index} to={album.id}>
                    <Album {...album} ></Album>

                </Link >))}

        </>);

}