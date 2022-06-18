

import { useAppSelector, useAppDispatch } from '../../store/hooks'


import { RootState } from "../../store";
import SingleEpisode from "../SingleEpisode/SingleEpisode";
import { FC } from "react";
import { fetchEpisodes, sortEpisodesAsc, sortEpisodesDesc } from "../../store/episodeSlice";

import "./Episodes.css";



const Episodes: FC = () => {
  const { episodes, loading, error } = useAppSelector((state: RootState) => state.episodes)
  const dispatch = useAppDispatch()

  // const  descSort: Number = (a: Number, b: Number) => {
  //   if (a > b) return 1;
  //   if (a === b) return 0;
  //   if (a < b) return -1;
  // }

  // episodes.sort( descSort(a.character.length,b.character.length)  )

  const acsSortBtn = () => {
    dispatch(sortEpisodesAsc())
  }

  const descSortBtn = () => {
    dispatch(sortEpisodesDesc())
  }

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Список эпизодов Breaking Bad</h1>
      </div>
      <div className="content">

        <div className="content__btn">
          <div className="btn__text" onClick={() => dispatch(fetchEpisodes())}>Загрузить эпизоды</div>
        </div>

        {loading && <h2>Loading...</h2>}
        {error && <h1>{error}</h1>}
        <div className="content__episodes">
          <div className="sort__btns">
            <div className="content__btn sortbtn" onClick={acsSortBtn}>По возрастанию</div>
            <div className="content__btn sortbtn" onClick={descSortBtn}>По убыванию</div>
          </div>

          {
            episodes.map(e => <SingleEpisode key={String(e.episode_id)} item={e} />)
          }
        </div>

      </div>
    </div>
  );
};

export default Episodes;
