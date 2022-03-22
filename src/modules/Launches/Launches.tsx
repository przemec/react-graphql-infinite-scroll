import { useState, useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../../store";
import { request } from "graphql-request";
import * as S from "./styles";
import * as C from "./constants";
import { past_launches_query } from "../../api/graphql_querries";
import { launch, past_launches_response } from "../../api/graphql_response_models";
import { addLaunches } from "../../store/launches/actions";
import SearchBar from "../../components/SearchBar";

const Launches: React.FC<C.LaunchesProps> = ({ launches, addLaunches }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [isLoadingDone, setLoadDone] = useState(false);
  const [observedElement, setElement] = useState<HTMLElement | null>(null);

  const intersectionObserver = useRef(
    new IntersectionObserver(
      (entries) => {
        const first_entry = entries[0];
        first_entry.isIntersecting && loader.current(10);
      },
      { threshold: 0.5 }
    )
  );

  const loadLaunches = useCallback(
    (limit: number) => {
      const query = past_launches_query(limit, launches.length);
      request("https://api.spacex.land/graphql/", query).then((data: past_launches_response) => {
        if (data.launchesPast.length === 0) return setLoadDone(true);
        const launchesResponse = [...data.launchesPast];
        addLaunches(launchesResponse);
      });
    },
    [launches, addLaunches]
  );
  const loader = useRef(loadLaunches);

  useEffect(() => {
    loader.current = loadLaunches;
  }, [loadLaunches]);

  useEffect(() => {
    const currentElement = observedElement;
    const currentObserver = intersectionObserver.current;

    if (!currentElement) return;

    currentObserver.observe(currentElement);
    return () => {
      currentObserver.unobserve(currentElement);
    };
  }, [observedElement]);

  useEffect(() => {
    if (launches.length !== 0) return;
    loadLaunches(20);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <SearchBar value={searchFilter} onChange={setSearchFilter} />
      <S.ResultsWrapper>
        {launches.length === 0 ? (
          <h1>Loading initial 20 records...</h1>
        ) : (
          launches
            .map((launch, index: number) => (
              <S.Link key={index} to={launch.id} state={launch}>
                {launch.id}: 🛰 {launch.mission_name}
              </S.Link>
            ))
            .filter((e) => e.props.state.mission_name.toLowerCase().includes(searchFilter.toLowerCase()))
        )}
        {!isLoadingDone && searchFilter === "" && launches.length !== 0 && <h2 ref={setElement}>Loading...</h2>}
      </S.ResultsWrapper>
    </S.Container>
  );
};

const mapSTP = (state: AppState) => ({
  launches: state.launches,
});

const mapDTP = (dispatch: Dispatch) => ({
  addLaunches: (e: launch[]) => dispatch(addLaunches(e)),
});

export default connect(mapSTP, mapDTP)(Launches);
