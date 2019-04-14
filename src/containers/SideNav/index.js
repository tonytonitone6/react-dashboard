import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  SidemenuContainer,
  SideMenuList,
  SideMenuItem,
  InsideDiv
} from './styles'


class Sidemenu extends PureComponent {

  state = {
    active: true
  }

  onRenderInSide = (item) => {
    console.log(item)
    return (
      <Fragment>
        <InsideDiv>
          <span><FontAwesomeIcon icon={item.icon} /></span>
          <span>{item.name}</span>
        </InsideDiv>
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
    const { active } = this.state;
    return (
      <SidemenuContainer active={active} >
        <SideMenuList>
          {menuList.map(this.onRenderOutside)}
        </SideMenuList>
      </SidemenuContainer>
    );
  }
}

export default connect(null, null)(Sidemenu);