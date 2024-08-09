import { RESTDictionaryData, RESTGeneralSettingData, RESTGeneralUserSettingData } from "@/types";

export const APIURL = "https://api.yuranu.net"

interface ResultMessage {
    message : string
}

/**
 * Represents the API functions that can be used in the application.
 * 
 * @returns {Object} The object containing the API functions.
 * @type {T} The type of the data that the API function returns.
 */
export type HTTPResult<T> = Promise<T | ResultMessage>

type GETServerSettingsReturnTypes = ( path : `/guild/${string}/settings` ) => HTTPResult<RESTGeneralSettingData>
type GETUserSettingsReturnTypes = ( path : `/user/${string}/settings` ) => HTTPResult<RESTGeneralUserSettingData>
type GETDictionaryReturnTypes = ( path : `/guild/${string}/dictionary` , limit : string ) => HTTPResult<{ message : "OK", data : RESTDictionaryData[] }>

type POSTServerSettingsReturnTypes = ( path : `/guild/${string}/settings`, data : RESTGeneralSettingData ) => Promise<{ message : "OK" | string }>
type POSTUserSettingsReturnTypes = ( path : `/user/${string}/settings`, data : RESTGeneralUserSettingData ) => Promise<{ message : "OK" | string }>
type POSTDictionaryReturnTypes = ( path : `/guild/${string}/dictionary`, data : RESTDictionaryData ) => Promise<{ message : "OK" | string }>


export function useAPI(){

    const getServerSetting : GETServerSettingsReturnTypes = async ( path : `/guild/${string}/settings` ) => {
        return await RESTGetAPI<RESTGeneralSettingData>(CreateAPIURL(path));
    }

    const getUserSetting : GETUserSettingsReturnTypes = async ( path : `/user/${string}/settings` ) => {
        return await RESTGetAPI<RESTGeneralUserSettingData>(CreateAPIURL(path));
    }

    const getDictionary : GETDictionaryReturnTypes = async ( path : `/guild/${string}/dictionary`, limit : string = "None" ) => {
        return await RESTGetAPI<{ message : "OK", data : RESTDictionaryData[] }>(CreateAPIURL(path) + `?limit=${limit}`);
    }

    const postServerSetting : POSTServerSettingsReturnTypes = async ( path : `/guild/${string}/settings`, data : RESTGeneralSettingData ) => {
        return await RESTPostAPI<{ message : "OK" | string }, RESTGeneralSettingData>(CreateAPIURL(path), data);
    }

    const postUserSetting : POSTUserSettingsReturnTypes = async ( path : `/user/${string}/settings`, data : RESTGeneralUserSettingData ) => {
        return await RESTPostAPI<{ message : "OK" | string }, RESTGeneralUserSettingData>(CreateAPIURL(path), data);
    }

    const postDictionary : POSTDictionaryReturnTypes = async ( path : `/guild/${string}/dictionary`, data : RESTDictionaryData ) => {
        return await RESTPostAPI<{ message : "OK" | string }, RESTDictionaryData>(CreateAPIURL(path), data);
    }
    /**
     * 
     * @param path Example : `/guilds`
     * @returns {Promise<T>} Example : `Promise<{ guilds: RESTGetAPIGuildResult[] }>`
     */
    async function RESTGetAPI<T = unknown>( path : string ) {
        const response = await fetch(path, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'GET'
        })
        return response.json() as Promise<T>;
    } 

    /**
     * 
     * @param path Example : `/guilds`
     * @param data Example : `Object`
     * @returns {Promise<T>} Example : `Promise<{ guilds: RESTGetAPIGuildResult[] }>`
     */
    async function RESTPostAPI<T = unknown, U = unknown>( path : string, data : U ) {
        const response = await fetch(path, {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            method: 'POST'
        })
        return response.json() as Promise<T>;
    }

    /**
     * 
     * @param {string} path Example : `/guilds`
     * @returns {string} Example : `https://api.yuranu.net/guilds`
     */
    function CreateAPIURL( path : string ) {
        return APIURL + path;
    }

    return {
        getServerSetting,
        getUserSetting,
        getDictionary,
        postServerSetting,
        postUserSetting,
        postDictionary
    }
}