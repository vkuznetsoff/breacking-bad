
import { FC } from "react";
import { EpisodeType } from "../../types";
import "./SingleEpisodes.css";



const initState = [
    
]

const SingleEpisode: FC<{ item: EpisodeType }>= ({item}) => {
  return (
    <div className="wrapper">
      <div className="header">
        <h1>{`Эпизод №${item.episode_id}`}</h1>
      </div>
      <div className="content">
        <div className="content__btn">
          <div className="btn__text">Загрузить эпизоды</div>
        </div>
      </div>
    </div>
  );
};

export default SingleEpisode;
