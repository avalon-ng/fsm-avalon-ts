import {
  StateMap,
  ActionMap,
  ValidateMap,
  StateFunction,
  State
} from '../fsm-reducer';
import { Actions } from './actions';

export type MissionStatus = 'NO' | 'WAIT' | 'FAIL' | 'SUCCESS';
export type Role =
  | 'MERLIN'
  | 'OBERON'
  | 'MORDRED'
  | 'PERCIVAL'
  | 'MORGANA'
  | 'GOOD'
  | 'BAD';
export type Vote = 'APPROVE' | 'REJECT' | 'WAIT';
export type StateFunction = StateFunction<Value, States>;

export type MissionResult = {
  failAmount: number;
  successAmount: number;
  result: boolean;
};

export type State = State<States, Value>;

export type Value = {
  users: Role[];
  knights: number[];
  votes: Vote[];
  votesResult: boolean;
  failedVotes: number;
  missions: MissionStatus[];
  missionResults: MissionResult[];
  captain: number;
  goddessResults: number[];
  assassinated: number;
  neededKnights: number[];
  neededFails: number[];
};

export type StateMap = StateMap<States, Value>;
export type ActionMap = ActionMap<Actions, Value>;
export type ValidateMap = ValidateMap<Actions, Value>;

// type GetActions = () => string[];
// type ValidateError = string | null;
// type HandlerFunction = (handles: object, handleName: string) => ActionFunction | ValidateFunction

// type Actions =
//   | { type: 'INIT_GAME'; payload: { isSetGoddess: boolean, users: number[] } }
//   | { type: 'START_ROUND'; payload: { a: number } }
//   | { type: 'BUILD_TEAM'; payload: {} }
//   | { type: 'VOTE'; payload: {} }
//   | { type: 'DRAW_VOTES_RESULT'; payload: {} }
//   | { type: 'EXECUTE_MISSION'; payload: {} }
//   | { type: 'DRAW_MISSIONS_RESULT'; payload: {} }
//   | { type: 'ASSASSINATE'; payload: {} }
//   | { type: 'DRAW_GODDESS_RESULT'; payload: {} }
//   | { type: 'EXECUTE_GODDESS'; payload: {} };
export type States = {
  BEFORE_INIT: {
    INIT_GAME: {};
  };
  INIT: {
    START_ROUND: {};
  };
  TEAM_BUILD: {
    BUILD_TEAM: {};
  };
  TEAM_VOTING: {
    VOTE: {};
  };
  TEAM_VOTED: {
    DRAW_VOTES_RESULT: {};
  };
  MISSION: {
    EXECUTE_MISSION: {};
  };
  MISSION_FINISHED: {
    DRAW_MISSIONS_RESULT: {};
  };
  GODDESS: {
    GODDESS: {};
  };
  GODDESS_FINISHED: {
    DRAW_GODDESS_RESULT: {};
  };
  ASSASSIN: {
    ASSASSINATE: {};
  };
  GAMEOVER_SUCCESS: {};
  GAMEOVER_FAIL: {};
};
// declare module "fsm-reducer";
