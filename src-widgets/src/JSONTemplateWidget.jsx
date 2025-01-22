import React from "react";
import {} from "@mui/material";
import PropTypes from "prop-types";

// import { I18n } from '@iobroker/adapter-react-v5';
import { VisRxWidget } from "@iobroker/vis-2-widgets-react-dev";
import VisEJSAttibuteField from "./Components/VisEJSAttibuteField.tsx";
import InnerHtml from "./Components/InnerHTML.jsx";

const ejs = require("ejs");

class JSONTemplateWidget extends (window.visRxWidget || VisRxWidget) {
  static getWidgetInfo() {
    return {
      id: "tplJSONTemplateWidget",
      visSet: "vis-2-widgets-jsontemplate",
      visSetLabel: "vis_2_jsontemplatewidget",
      visName: "JSON Widget", // Name of widget
      visAttrs: [
        {
          name: "common", // group name
          fields: [
            {
              name: "oid", // name in data structure
              type: "id",
              label: "vis_2_widgets_json_oid", // translated field label
            },
            {
              name: "template", // name in data structure
              type: "custom",
              label: "vis_2_widgets_json_template", // translated field label
              component: (
                // important
                field, // field properties: {name, label, type, set, singleName, component,...}
                data, // widget data
                onDataChange, // function to call, when data changed
                props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
                // socket,      // socket object
                // widgetID,    // widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
                // view,        // view name
                // project,      // project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, __settings: {}}
              ) => (
                <VisEJSAttibuteField
                  visSocket={props.context.socket}
                  field={field}
                  data={data}
                  onDataChange={onDataChange}
                  props
                />
              ),
            },
            {
              name: "dpcount", // name in data structure
              type: "number",
              default: 1,
              min: 1,
              max: Number.MAX_VALUE,
              step: 1,
              label: "vis_2_widgets_json_dpcount", // translated field label
              onChange: async (field, data, changeData) => {
                const { dpcount } = data;
                for (let i = 0; i <= dpcount; i++) {
                  data[`g_datapoints-${i}`] = true;
                }
                changeData(data);
              },
            },
          ],
        },
        {
          name: "datapoints", // group name
          label: "vis_2_widgets_json_datapointsgroup", // translated group label
          indexFrom: 1,
          indexTo: "dpcount",
          onChange: async (field, data, changeData) => {
            changeData(data);
          },
          fields: [
            {
              name: "datapoint-oid",
              label: "vis_2_widgets_json_datapoints_oid",
              type: "id",
            },
          ],
        },
        // check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
      ],
      visDefaultStyle: {
        // default style
        width: 300,
        height: 300,
      },
      visPrev: "",
    };
  }

  // eslint-disable-next-line class-methods-use-this
  propertiesUpdate() {
    // Widget has 3 important states
    // 1. this.state.values - contains all state values, that are used in widget (automatically collected from widget info).
    //                        So you can use `this.state.values[this.state.rxData.oid + '.val']` to get value of state with id this.state.rxData.oid
    // 2. this.state.rxData - contains all widget data with replaced bindings. E.g. if this.state.data.type is `{system.adapter.admin.0.alive}`,
    //                        then this.state.rxData.type will have state value of `system.adapter.admin.0.alive`
    // 3. this.state.rxStyle - contains all widget styles with replaced bindings. E.g. if this.state.styles.width is `{javascript.0.width}px`,
    //                        then this.state.rxData.type will have state value of `javascript.0.width` + 'px
  }

  componentDidMount() {
    super.componentDidMount();

    // Update data
    this.propertiesUpdate();
  }

  // Do not delete this method. It is used by vis to read the widget configuration.
  // eslint-disable-next-line class-methods-use-this
  getWidgetInfo() {
    return JSONTemplateWidget.getWidgetInfo();
  }

  // This function is called every time when rxData is changed
  onRxDataChanged() {
    this.propertiesUpdate();
  }

  // This function is called every time when rxStyle is changed
  // eslint-disable-next-line class-methods-use-this
  onRxStyleChanged() {}

  // This function is called every time when some Object State updated, but all changes lands into this.state.values too
  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  onStateUpdated(id, state) {}

  escapeHTML(html) {
    let escapeEl = document.createElement("textarea");
    escapeEl.textContent = html;
    const ret = escapeEl.innerHTML;
    escapeEl = null;
    return ret;
  }

  renderWidgetBody(props) {
    super.renderWidgetBody(props);
    let oiddata, data, datapoints, template, dpCount;
    let text;
    try {
      oiddata = JSON.parse(
        this.state.values[`${this.state.rxData.oid}.val`] || "{}",
      );
      data = props.widget.data || {};
      datapoints = [];
      dpCount = data.dpcount ? data.dpcount : 1;
      for (let i = 1; i <= dpCount; i++) {
        if (data["datapoint-oid" + i]) {
          datapoints[data["datapoint-oid" + i]] =
            this.state.values[`${data["datapoint-oid" + i]}.val`];
        }
      }

      template = data?.template || "";
      text =
        ejs.render(template, {
          widgetid: props.id,
          data: oiddata,
          dp: datapoints,
          style: props.style,
        }) + " ";
    } catch (e) {
      text = this.escapeHTML(e.message).replace(/(?:\r\n|\r|\n)/g, "<br>");
      text = text.replace(/ /gm, "&nbsp;");
      text = `<code style="color:red;">${text}</code>`;
    }
    return <InnerHtml html={text} />;
  }
}
JSONTemplateWidget.propTypes = {
  systemConfig: PropTypes.object,
  socket: PropTypes.object,
  themeType: PropTypes.string,
  style: PropTypes.object,
  data: PropTypes.object,
};

export default JSONTemplateWidget;

//<code>    <% // debugger; %>a <% a=11111123 %><br>data.propnum <%= data.propnum %><br>data.propstr <%= data.propstr %><br><%= a %><br>dp0 <%= dp[0] %><br>dp1 <%= dp[1] %><br></code>

/* 
<code>

<% // debugger; %>
a <% a=11111123 %><br>
data.propnum <%= data.propnum %><br>
data.propstr <%= data.propstr %><br>
<%= a %><br>
dp0 <%= dp["0_userdata.0.dp1"] %><br>
dp1 <%= dp[1] %><br>
</code>
 */
