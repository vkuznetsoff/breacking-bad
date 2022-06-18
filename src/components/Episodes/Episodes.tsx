
import { EpisodeType } from "../../types";
import { useAppSelector, useAppDispatch } from '../../store/hooks'

import "./Episodes.css";
import { RootState } from "../../store";
import SingleEpisode from "../SingleEpisode/SingleEpisode";



const Episodes = () => {
  const episodes = useAppSelector((state: RootState) => state.episodes.episodes)
  const dispatch = useAppDispatch()

  // const  descSort: Number = (a: Number, b: Number) => {
  //   if (a > b) return 1;
  //   if (a === b) return 0;
  //   if (a < b) return -1;
  // }

  // episodes.sort( descSort(a.character.length,b.character.length)  )
  
  return (
    <div className="wrapper">
      <div className="header">
        <h1>Список эпизодов Breaking Bad</h1>
      </div>
      <div className="content">

        <div className="content__btn">
          <div className="btn__text">Загрузить эпизоды</div>
        </div>

        <div className="content__episodes">
          <div className="sort__btns">
            <div className="content__btn sortbtn">По возрастанию</div>
            <div className="content__btn sortbtn">По убыванию</div>
          </div>

          {
            episodes.map(e => <SingleEpisode item={e} />)
          }
        </div>

      </div>
    </div>
  );
};

export default Episodes;
