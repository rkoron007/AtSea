import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

import ItemIndexContainer from "./items_index_container";
import ItemCreateContainer from "./item_form/item_create_container";
import ItemEditContainer from "./item_form/item_edit_container";
import ItemShowContainer from "./item_show_container";

import { AuthRoute, ProtectRoute } from '../../util/route_util';

const ItemContainer = () => (
  <div>
    <Switch>
  
    </Switch>
  </div>
);
export default ItemContainer;
