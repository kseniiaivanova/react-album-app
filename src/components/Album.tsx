export interface MyAlbumProps {
    id: string,
    name: string,
    artist: string,
    year: number,
    label: string,
    showFullInfo?: boolean
};


export const Album = ({
    id,
    name,
    artist,
    year,
    label,
    showFullInfo = false }
    : MyAlbumProps) => {
    if (showFullInfo === false) {
        return (<>
            <div className="album">

                <h3>{name}</h3>
                <h4>{artist}</h4>


            </div>
        </>)

    }
    else {
        return (<>
            <div className="album">
                <h3>{name}</h3>
                <h4>{id}</h4>
                <h4>{artist}</h4>
                <h4>{year}</h4>
                <h4>{label}</h4>

            </div>
        </>)
    }
}