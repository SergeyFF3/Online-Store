import { StateSchema } from "app/StoreProvider/store";

export const getShoppingCartData = (state: StateSchema) => state?.cart?.cartData
export const getShoppingCartDisabled = (state: StateSchema) => state?.cart?.disabled

export const getShoppingCartTotalPrice = (state: StateSchema) => state?.cart?.totalPrice