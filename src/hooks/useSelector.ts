import {
  // eslint-disable-next-line import/named
  TypedUseSelectorHook,
  useSelector as useAppSelector,
} from "react-redux";

import { IRootState } from "../store/types";

export const useSelector: TypedUseSelectorHook<IRootState> = useAppSelector;
