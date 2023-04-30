

import { Album } from "../components/Album";
import { Link, useLoaderData } from "react-router-dom";
import { Loader } from "../loaders/albumLoader";
import { Navbar } from "../components/Navbar";



export const AlbumList = () => {

    const { albums } = useLoaderData() as Loader;


    return (
        <> <Navbar></Navbar>
            {albums.map((album, index) => (
                <Link key={index} to={album.id}>
                    <Album {...album} ></Album>

                </Link >))}

        </>);

}