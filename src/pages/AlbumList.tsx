

import { Album } from "../components/Album";
import { albumLoader } from "../loaders/albumLoader";
import { Link, useLoaderData } from "react-router-dom";
import { Loader } from "../loaders/albumLoader";



export const AlbumList = () => {

    const { albums } = useLoaderData() as Loader;


    return (
        <> {albums.map((album) => (
            <div key={album.id}>
                <Album id={album.id} name={album.name} artist={album.artist} year={album.year} label={album.label} showFullInfo={false} ></Album>

            </div >))}

        </>);

}