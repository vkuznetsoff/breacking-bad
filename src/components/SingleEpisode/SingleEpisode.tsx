
import { FC } from "react";
import { EpisodeType } from "../../types";
import "./SingleEpisode.css";



const initState = [

]

const SingleEpisode: FC<{ item: EpisodeType }> = ({ item }) => {
  const lable = 'Персонажей'

  return (
    <div className="episode__wrapper">
      <div className="episode__header">
        <h3>{`Эпизод №${item.episode_id}`}</h3>
      </div>
      <div className="episode__content">

        <div className="content__characters">
          <div className="characters__btn">-</div>
          <div className="characters__count">{item.characters.length}</div>
          <div className="characters__btn">+</div>
          <div className="charactres__label"> {lable}</div>
        </div>



        <div className="content__removebtn">Удалить</div>

      </div>
    </div>
  );
};

export default SingleEpisode;
