
import { FC } from "react";
import { EpisodeType, removeEpisode } from "../../store/episodeSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import "./SingleEpisode.css";

interface ISingleEpisodeProps {
  item: EpisodeType
}

const SingleEpisode: FC<ISingleEpisodeProps> = ({ item }) => {
  const dispatch = useAppDispatch()
  const lable = 'Персонажей'

  const removeBtnClick = (id: String): void => {
    debugger
    dispatch(removeEpisode(id))
  }

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



        <div className="content__removebtn" 
        onClick={() => removeBtnClick(item.episode_id)}>Удалить</div>

      </div>
    </div>
  );
};

export default SingleEpisode;
