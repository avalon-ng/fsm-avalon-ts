import { STATE_MAP, ACTIONS, VALIDATE_MAP } from './fsm-avalon';
import * as actionCreators from './actions';
import { DEFAULT_VALUE } from './config';
import { States, Value } from './types/fsm-avalon';
import { Actions } from './types/actions';
import makeFSM from 'fsm-reducer-ts';

const getFSM = () => {
  const { reducer, getValidateError, getActions, validate } = makeFSM<States, Actions, Value>(STATE_MAP,ACTIONS,{ 
    validateMap : VALIDATE_MAP 
  });
  return {
    reducer,
    getValidateError,
    getActions,
    validate
  }
}

const defaultState = { ...DEFAULT_VALUE };

export {
  getFSM,
  actionCreators,
  defaultState
}