import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  SidemenuContainer,
  SideMenuList,
  SideMenuItem,
  InsideDiv,
  InsideUl
} from './styles'


class Sidemenu extends PureComponent {

  state = {
    targetId: null
  }

  _onToggleView = (targetId) => {
    this.setState(prevState => ({
      targetId: prevState.targetId === targetId ? null : targetId,
    }));
  }

  onRenderInSide = (outItem) => {
    const { targetId } = this.state;
    const active = (targetId === outItem.id);
    
    return (
      <Fragment>
        <InsideDiv show={active} onClick={() => this._onToggleView(outItem.id)}>
          <span><FontAwesomeIcon icon={outItem.icon} /></span>
          <span>{outItem.name}</span>
        </InsideDiv>
        <InsideUl active={active}>
          { outItem.child.map((item) => (
            <li key={item.id}>
              <span><FontAwesomeIcon icon={item.icon} /></span>
              <span>{item.name}</span>
            </li>
          ))}
        </InsideUl>
      </Fragment>
    )
  }

  onRenderOutside = (item) => (
    <SideMenuItem key={item.id}>
      {this.onRenderInSide(item)}
    </SideMenuItem>
  )

  render() {
    const { menuList } = this.props;
    return (
      <SidemenuContainer active>
        <SideMenuList>
          {menuList.map(this.onRenderOutside)}
        </SideMenuList>
      </SidemenuContainer>
    );
  }
}

export default connect(null, null)(Sidemenu);