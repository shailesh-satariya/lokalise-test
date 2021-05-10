import React, {Dispatch, ProviderProps, SetStateAction} from "react";
import {LanguageInfo} from "../types";
import languageInfosList from "../data/language-items.json";

const LS_KEY = "language-items";
const languageInfosStr: any = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
const initLanguageInfos: LanguageInfo[] = Array.isArray(languageInfosStr) ? languageInfosStr : languageInfosList;

const languageInfosContext = React.createContext(null);

/**
 * @function useLanguageInfos
 * @returns {Array} languageInfosContext value, which is a state of [value, setter].
 *
 */
export const useLanguageInfos: () => [LanguageInfo[], Dispatch<SetStateAction<LanguageInfo[]>>] =
    () => {
        // useContext is a hook that returns the context value
        // In this case, the context value is an [value, setter] array for the context state
        // useContext also subscribes to changes, and will update any time the context value updates
        //     we've memoized this so that it will only update when the guessedWords value updates
        const context = React.useContext(languageInfosContext);

        // throw an error if the context doesn't exist -- means we aren't in a provider
        if (!context) {
            throw new Error("useLanguageInfos must be used within a LanguageInfosProvider");
        }

        // otherwise return the context
        return context as any as [LanguageInfo[], Dispatch<SetStateAction<LanguageInfo[]>>];
    };

/**
 * @function GuessedWordsProvider
 * @param {object} props - props to pass through from declared component
 * @returns {JSX.Element} Provider component
 */
export const LanguageInfosProvider = (props: Partial<ProviderProps<any>>) => {
    // create state that will be used within the provider
    // initial state value is false
    const [languageInfos, setLanguageInfos] = React.useState(initLanguageInfos);

    // value for the context provider will be array of [value, setter] for guessedWords state
    // useMemo just ensures that the provider value will only update when guessedWords updates
    // No need to test this -- React tests useMemo for us!
    const value = React.useMemo(() => {
        // Save in local storage
        localStorage.setItem(LS_KEY, JSON.stringify(languageInfos));
        return [languageInfos, setLanguageInfos];
    }, [languageInfos, setLanguageInfos]);

    // Return a Provider component with the [value, setter] array as the value, passing through the props
    return <languageInfosContext.Provider value={value} {...props} />;
};

const contextExport = {LanguageInfosProvider, useLanguageInfos};

export default contextExport;