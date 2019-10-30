/*
 * @Description: 路由
 * @Author: icony/精武陈真
 * @Date: 2019-10-13 12:28:59
 * @LastEditTime: 2019-10-14 10:20:22
 * @LastEditors: icony/精武陈真
 */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import IndexPage from "views/index/index";

export default function App(): React.ReactElement {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage}></Route>
      </Switch>
    </Router>
  );
}
