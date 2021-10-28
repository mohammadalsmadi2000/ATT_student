import {AppStore} from './store';
import React from 'react';
import { useLocalObservable } from 'mobx-react-lite'

const StoreContext=React.createContext(null);

export const StoreProvider=({children})=>{
    const appStore=useLocalObservable(AppStore);

    return<StoreContext.Provider value={appStore}>
        {children}
    </StoreContext.Provider>
}

export const useAppStore=()=>React.useContext(StoreContext);