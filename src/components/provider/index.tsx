"use client";
import { Provider } from "react-redux";
import { store } from "@/store/store";

function Providers({ children }: React.PropsWithChildren<{}>) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
