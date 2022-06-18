
import { FC } from "react";
import { decCharacters, EpisodeType, incCharacters, removeEpisode } from "../../store/episodeSlice";
import { useAppDispatch } from "../../store/hooks";

import "./SingleEpisode.css";

interface ISingleEpisodeProps {
  item: EpisodeType
}

const SingleEpisode: FC<ISingleEpisodeProps> = ({ item }) => {
  const dispatch = useAppDispatch()
  const lable = 'Персонажей'

  const removeBtnClick = (id: Number): void => {
    dispatch(removeEpisode(id))
  }

 const plusHandle = (id: Number): void => {
  dispatch(incCharacters(id))
 }

 const minusHandle = (id: Number): void => {
  dispatch(decCharacters(id))
}

  return (
    <div className="episode__wrapper">
      <div className="episode__header">
        <h3>{`Эпизод №${item.episode_id}`}</h3>
      </div>
      <div className="episode__content">

        <div className="content__characters">
          <div className="characters__btn" onClick={() =>minusHandle(item.episode_id)}>-</div>
          <div className="characters__count">{String(item.charactersLen)}</div>
          <div className="characters__btn" onClick={() =>plusHandle(item.episode_id)}>+</div>
          <div className="charactres__label"> {lable}</div>
        </div>



        <div className="content__removebtn" 
        onClick={() => removeBtnClick(item.episode_id)}>Удалить</div>

      </div>
    </div>
  );
};

export default SingleEpisode;
