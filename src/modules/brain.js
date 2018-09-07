import { posters } from '../posters';
import { texts } from '../posters';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  isTop: true,
  hidden: true,
  active: true,
  loading: true,
  imgr: posters,
  texts : texts,
  tester: 'testing123',
  isOpen:false,
  photoIndex: 0,
  lyrics: false,
  
};


export const activetoggle = () =>{
    return dispatch => {
      dispatch({
        type: CHANGE_ACTIVE
      });
    }
}

export const showlyrics = () => {
  return dispatch => {
    dispatch({
      type: CHANGE_LYRICS
    });
  }
}


export const menuon = () =>{
    return dispatch => {
      dispatch({
        type: MENU_ON
      })
    }
}

export const menuoff = () =>{
    return dispatch => {
      dispatch({
        type: MENU_OFF
      })
    }
}

export const loadingtoggle = () =>{
    return dispatch => {
      dispatch({
        type: CHANGE_LOADING
      });
    }
}

export const changetester = () =>{
    return dispatch => {
      dispatch({
        type: CHANGE_TESTER
      });
    }
}

export const changetop = () =>{
    return dispatch => {
      dispatch({
        type: CHANGE_TOP
      })
    }
}


export default (state = initialState, action) => {
  switch (action.type) {
   

    case CHANGE_ACTIVE:
      return {
        ...state,
     active : !state.active
      };

    case CHANGE_LYRICS:
      return {
        ...state,
        lyrics : !state.lyrics
      }

      case MENU_ON:
        return {
          ...state,
          hidden : false
        }

        case MENU_OFF:
        return {
          ...state,
          hidden : true
        }

       case CHANGE_LOADING:
      return {
        ...state,
     loading : !state.loading
      };


       case CHANGE_TESTER:
      return {
        ...state,
     tester : 'Am a changed man'
      };

      case CHANGE_TOP:
        return {
          ...state,
          isTop : !state.isTop
        }


    default:
      return state;
  }
};


export const CHANGE_ACTIVE = 'CHANGE_ACTIVE';
export const CHANGE_LOADING = 'CHANGE_LOADING';
export const CHANGE_TESTER = 'CHANGE_TESTER';
export const CHANGE_TOP = 'CHANGE_TOP';
export const MENU_OFF = 'MENU_OFF';
export const MENU_ON = 'MENU_ON';
export const CHANGE_LYRICS = 'CHANGE_LYRICS'