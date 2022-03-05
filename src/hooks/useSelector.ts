import {
  // eslint-disable-next-line import/named
  TypedUseSelectorHook,
  useSelector as useAppSelector,
} from "react-redux";

import { IRootState } from "../types";

export const useSelector: TypedUseSelectorHook<IRootState> = useAppSelector;
