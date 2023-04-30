import { myAlbum } from "../components/models/MyAlbum";



const allAlbums = [new myAlbum
    ("123", "Ziggy Stardust", "David Bowie", 1972, "RCA"
    ), new myAlbum("345", "Meat Is Murder", "The Smiths", 1985, "Rough Trade")

];

export interface Loader {
    albums: myAlbum[];
  };

export const albumLoader = () => {
    const data: Loader = { albums: allAlbums };
      
    return data;
  }; 