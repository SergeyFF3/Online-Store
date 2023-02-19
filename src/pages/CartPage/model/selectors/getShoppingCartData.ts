import { StateSchema } from "app/StoreProvider/store";

export const getShoppingCartData = (state: StateSchema) => state?.cart?.cartData

export const getShoppingCartIsLoading = (state: StateSchema) => state?.cart?.isLoading

export const getShoppingCartTotalPrice = (state: StateSchema) => state?.cart?.totalPrice