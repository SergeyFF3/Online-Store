import {StateSchema} from "app/StoreProvider/store";

export const getContentData = (state: StateSchema) => state?.content?.contentData

export const getContentIsLoading = (state: StateSchema) => state?.content?.isLoading