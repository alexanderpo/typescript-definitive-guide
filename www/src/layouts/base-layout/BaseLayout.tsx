import "./base-layout.scss";
import "./base-layout.grid.scss";

import React, { ReactElement, useRef } from "react";
import {FC} from "react"
import { AppCollapseInformerRotator } from "../../components/app__collapse-informer-rotator/AppCollapseInformerRotator";
import { AppHeader } from "../../components/app-header/AppHeader";
import { createInformerRotator } from "../../react__hooks/collapse-informer-hook";
import { createBaseLayoutStores, UseBaseLayoutStores } from "../../stores/base-layout-stores";
import { useLocalStore } from "mobx-react-lite";
import { BaseLayoutMoxContext } from "../../mobx/BaseLayoutMobxProvider";


interface IBaseLayoutProps {
    children: ReactElement | ReactElement[];
}

const BaseLayout: FC<IBaseLayoutProps> = ( { children } ) => {
  let contextRef = useRef<UseBaseLayoutStores>( createBaseLayoutStores() );
  let baseLayoutMobxStores = useLocalStore( () => contextRef.current );


  return (
    <BaseLayoutMoxContext.Provider value={baseLayoutMobxStores}>
      <div className="app-grid">
        <div className="app-grid-item__collapse-informer">
          <AppCollapseInformerRotator/>
        </div>
        <div className="app-grid-item__header">
          <AppHeader/>
        </div>
        <div className="app-grid-item__content">
          { children }
        </div>
      </div>
    </BaseLayoutMoxContext.Provider>
  );

};

export default BaseLayout;
