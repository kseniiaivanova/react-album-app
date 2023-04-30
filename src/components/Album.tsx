import "./Album.scss"


export interface MyAlbumProps {
    id: string,
    name: string,
    artist: string,
    year: number,
    label: string,
    image: string;
    showFullInfo?: boolean
};


export const Album = ({
    id,
    name,
    artist,
    year,
    label,
    image,
    showFullInfo = false }
    : MyAlbumProps) => {
    if (showFullInfo === false) {
        return (<>
            <div className="wrapper">
                <div className="album">

                    <h3>{name}</h3>
                    <h4>{artist}</h4>


                </div>
            </div>

        </>)

    }
    else {
        return (<>
            <div className="wrapper">
                <div className="album">
                    <img src={image} alt={name} />
                    <h3>Title: {name}</h3>
                    <h4>Artist: {artist}</h4>
                    <p>ID: {id}</p>
                    <p>Year: {year}</p>
                    <p>Label: {label}</p>

                </div>
            </div>
        </>)
    }
}