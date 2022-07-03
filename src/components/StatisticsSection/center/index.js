import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";
import axios from "axios";

const DemoColumn = () => {
  const [list, setList] = useState([{ type: "", value: 0 }]);
  const fetchData = async () => {
    let list = [];
    const isFind = (val) =>
      list.some((item) => {
        return item.type === val;
      });
    const addCount = (val) =>
      list.forEach((item) => {
        if (item.type === val) {
          item.value++;
        }
      });
    const { data } = await axios.get(
      "https://data.cityofchicago.org/resource/ijzp-q8t2.json?$limit=100000"
    );
    console.log(data);
    data.forEach((item) => {
      if (!isFind(item.primary_type)) {
        list.push({
          type: item.primary_type,
          value: 0
        });
      }
      addCount(item.primary_type);
    });

    console.log(list);
    setList(list);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const config = {
    appendPadding: 10,
    data: list,
    angleField: "value",
    colorField: "type",
    radius: 0.75,
    label: {
      type: "spider",
      labelHeight: 28,
      content: "{name}\n{percentage}"
    },
    interactions: [
      {
        type: "element-selected"
      },
      {
        type: "element-active"
      }
    ]
  };
  return <Pie {...config} />;
};

export default DemoColumn;