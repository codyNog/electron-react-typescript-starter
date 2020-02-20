import React from "react";
import { Root } from "../../templates/Root";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

export const RootPage: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Root />
    </MuiPickersUtilsProvider>
  );
};
