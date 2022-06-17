import { useSelector } from "react-redux";
import { EpisodeType } from "../../types";
import "./Episodes.css";

// const initState: EpisodeType[] = [
//     {
//         episode_id: 1,
//         title: "Pilot",
//         season: "1",
//         characters: [
//             "Walter White",
//             "Jesse Pinkman",
//             "Skyler White",
//             "Hank Schrader",
//             "Marie Schrader",
//             "Walter White Jr.",
//             "Krazy-8",
//             "Bogdan Wolynetz"
//         ],
//         episode: "1"
//     },
//     {
//         episode_id: 2,
//         title: "Cat's in the Bag...",
//         season: "1",
//         characters: [
//             "Walter White",
//             "Jesse Pinkman",
//             "Skyler White",
//             "Walter White Jr.",
//             "Krazy-8"
//         ],
//         episode: "2",
//     },
//     {
//         episode_id: 3,
//         title: "...And the Bag's in the River",
//         season: "1",
//         characters: [
//             "Walter White",
//             "Jesse Pinkman",
//             "Skyler White",
//             "Hank Schrader",
//             "Marie Schrader",
//             "Walter White Jr.",
//             "Krazy-8",
//             "Gretchen Schwartz"
//         ],
//         episode: "3"
//     }
// ]

const Episodes = () => {
    const episodes = useSelector(state => state.episodes.episodes)
  return (
    <div className="wrapper">
      <div className="header">
        <h1>Список эпизодов Breaking Bad</h1>
      </div>
      <div className="content">
        <div className="content__btn">
          <div className="btn__text">Загрузить эпизоды</div>

        </div>
      </div>
    </div>
  );
};

export default Episodes;
