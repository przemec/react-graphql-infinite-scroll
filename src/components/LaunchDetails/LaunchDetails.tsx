import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { AppState } from "../../store";
import * as S from "./styles";
import * as C from "./constants";

const LaunchDetails: React.FC<C.LaunchDetailsProps> = ({ launches }) => {
  const { launchId: currentId } = useParams();
  const current_details = launches.find((launch) => launch.id === currentId);

  if (!current_details)
    return (
      <S.Container>
        <h1>No data correlated with id {currentId}</h1>
      </S.Container>
    );

  const {
    mission_name,
    launch_date_utc,
    details,
    rocket: { rocket_name },
    links: { flickr_images },
    launch_success,
  } = current_details;
  const date = new Date(launch_date_utc);

  return (
    <S.Container>
      <h1>🛰 {mission_name}</h1>
      <h2>
        {`${date.getUTCDay()}/${date.getUTCMonth()}/${date.getUTCFullYear()}`} 🚀 {rocket_name}
      </h2>
      <p>{details}</p>
      <h3>{launch_success ? "Success ✅" : "Fail ❌"}</h3>
      {flickr_images && <img src={flickr_images[0]} alt="details from flickr" />}
    </S.Container>
  );
};

const mapSTP = (state: AppState) => ({
  launches: state.launches,
});

export default connect(mapSTP)(LaunchDetails);
