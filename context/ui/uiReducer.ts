import { UiState } from './';
import { darkTheme,lightTheme } from '../../themes';

type UiActionType = 
     | {type: '[UI] - ToggleMenu'}
     | {type: '[UI] - ToggleTheme'}


export const uiReducer = (state:UiState, action: UiActionType):UiState => {

     switch (action.type) {
          case '[UI] - ToggleMenu':
               return  {
                    ...state,
                    isMenuOpen: !state.isMenuOpen
               }
          case '[UI] - ToggleTheme':
               return  {
                    ...state,
                    theme: (state.theme === darkTheme) ? lightTheme : darkTheme, 
               }

          default:
               return state
     }

}