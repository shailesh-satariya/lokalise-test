import {Language} from "./language";

export interface LanguageInfo extends Language {
    done: number;
    total: number;
    unverified: number;
}