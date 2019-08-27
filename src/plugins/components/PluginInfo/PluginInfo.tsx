import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

import CardTitle from "@saleor/components/CardTitle";
import ControlledSwitch from "@saleor/components/ControlledSwitch";
import FormSpacer from "@saleor/components/FormSpacer";
import Hr from "@saleor/components/Hr";
import i18n from "../../../i18n";
import { FormData } from "../PluginsDetailsPage";

interface PluginInfoProps {
  data: FormData;
  onChange: (event: React.ChangeEvent<any>) => void;
}

const styles = createStyles({
  status: {
    color: "#3D3D3D",
    fontSize: 16,
    fontWeight: 400,
    paddingTop: 20
  },
  title: {
    color: "#616161",
    fontSize: 14,
    paddingTop: 10
  }
});

const PluginInfo = withStyles(styles, { name: "PluginInfo" })(
  ({
    data,
    classes,
    onChange
  }: PluginInfoProps & WithStyles<typeof styles>) => {
    return (
      <Card>
        <CardTitle
          title={i18n.t("Plugin Information and Status", {
            context: "plugin configuration"
          })}
        />
        <CardContent>
          <Typography className={classes.title} variant="h6">
            {i18n.t("Plugin Name")}
          </Typography>
          <Typography>{data.name}</Typography>
          {data.description && (
            <>
              <Typography className={classes.title} variant="h6">
                {i18n.t("Plugin Description")}
              </Typography>
              <Typography>{data.description}</Typography>
            </>
          )}
          <FormSpacer />
          <Hr />
          <Typography className={classes.status} variant="h6">
            {i18n.t("Status")}
          </Typography>
          <ControlledSwitch
            checked={data.active}
            label={"Set plugin as Active"}
            name={"active" as keyof FormData}
            onChange={onChange}
          />
        </CardContent>
      </Card>
    );
  }
);
PluginInfo.displayName = "PluginInfo";
export default PluginInfo;
