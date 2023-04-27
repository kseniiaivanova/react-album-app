

import { Album } from "../components/Album";
import { myAlbum } from "../components/models/MyAlbum";
import { MyAlbumProps } from "../components/Album";

const myAlbums = [new myAlbum
    ("123", "Ziggy Stardust", "David Bowie", 1972, "RCA"
    ), new myAlbum("345", "Meat Is Murder", "The Smiths", 1985, "Rough Trade")

];

export const AlbumList = () => {
    return (
        <> {myAlbums.map((album) => (
            <div key={album.id}>
                <Album id={album.id} name={album.title} artist={album.artist} year={album.year} label={album.label} showFullInfo={false} ></Album>

            </div >))}

        </>);

}