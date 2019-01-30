import { Role, Vote, MissionStatus } from './fsm-avalon';

export type Payload_Init_Game = {
  users: Role[],
  isSetGoddess?: boolean
}


export type Payload_Start_Round = {

}

export type Payload_Build_Team = {
  knights: number[]
}

export type Payload_Vote = {
  index: number
  vote: Vote
}

export type Payload_Draw_Votes_Result = {

}

export type Payload_Execute_Mission = {
  index: number
  mission: MissionStatus
}

export type Payload_Draw_Missions_Result = {

}

export type Payload_Assassinate = {
  index: number
}

export type Payload_Draw_Goddess_Result = {

}

export type Payload_Execute_Goddess = {
  index: number
}

export type Actions = {
  INIT_GAME: Payload_Init_Game
  START_ROUND: Payload_Start_Round,
  BUILD_TEAM: Payload_Build_Team,
  VOTE: Payload_Vote,
  DRAW_VOTES_RESULT: Payload_Draw_Votes_Result,
  EXECUTE_MISSION: Payload_Execute_Mission,
  DRAW_MISSIONS_RESULT: Payload_Draw_Missions_Result,
  ASSASSINATE: Payload_Assassinate,
  DRAW_GODDESS_RESULT: Payload_Draw_Goddess_Result,
  EXECUTE_GODDESS: Payload_Execute_Goddess
}