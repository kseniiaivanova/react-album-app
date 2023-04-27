import { myAlbum } from "./models/MyAlbum";


export interface MyAlbumProps {
    id: string,
    name: string,
    artist: string,
    year: number,
    label: string,
    showFullInfo: boolean
};


export const Album = (props: MyAlbumProps) => {
    if (props.showFullInfo === true) {
        return (<>
            <div className="album">
                <h3>{props.name}</h3>
                <h4>{props.artist}</h4>
            </div>
        </>)

    }
    else {
        return (<>
            <div className="album">
                <h3>{ }</h3>
                <h4>{ }</h4>
            </div>
        </>)
    }
}