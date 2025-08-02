import { songsData, albumsData } from "../assets/assets";
import "../components/HomePage.css";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const Display = () => {
  return (
    <div>
      <div className="down">
        <h2>Popular Albums</h2>
        <button>See All</button>
      </div>
      <div className="alb">
        {albumsData.map((item, index) => (
          <AlbumItem
            key={index}
            name={item.name}
            id={item.id}
            desc={item.desc}
            image={item.image}
          />
        ))}
      </div>
      <div className="a">
        <div className="down">
          <h2>Trending songs</h2>
          <button>See All</button>
        </div>
        <div className="alb">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Display;
