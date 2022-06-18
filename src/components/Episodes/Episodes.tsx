

import { useAppSelector, useAppDispatch } from '../../store/hooks'


import { RootState } from "../../store";
import SingleEpisode from "../SingleEpisode/SingleEpisode";
import { FC } from "react";
import { fetchEpisodes, sortEpisodesAsc, sortEpisodesDesc } from "../../store/episodeSlice";

import "./Episodes.css";

const Episodes: FC = () => {
  const { episodes, loading, error, getEpisodes } = useAppSelector((state: RootState) => state.episodes)
  const dispatch = useAppDispatch()

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

        {(!getEpisodes || episodes.length === 0) ? (
          <div>
            <div className="content__btn">
              <div className="btn__text" onClick={() => dispatch(fetchEpisodes())}>Загрузить эпизоды</div>
            </div>

            {loading && <h2>Loading...</h2>}

            {error && <h3>{error}</h3>}
          </div>
        )
       : <div className="content__episodes">
          <div className="sort__btns">
            <div className="content__btn sortbtn" onClick={acsSortBtn}>По возрастанию персонажей</div>
            <div className="content__btn sortbtn" onClick={descSortBtn}>По убыванию персонажей</div>
          </div>

          {
            episodes.map(e => <SingleEpisode key={String(e.episode_id)} item={e} />)
          }
        </div>
        }

      </div>
    </div>
  );
};

export default Episodes;
