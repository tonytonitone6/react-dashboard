import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  SidemenuContainer,
  SideMenuList,
  SideMenuItem
} from './styles'


class Sidemenu extends PureComponent {

  onRenderOutside = (item) => (
    <SideMenuItem key={item.id}>
      {item.name}
    </SideMenuItem>
  )

  render() {
    const { menuList } = this.props;
    return (
      <SidemenuContainer>
        <SideMenuList>
          {menuList.map(this.onRenderOutside)}
        </SideMenuList>
      </SidemenuContainer>
    );
  }
}

export default connect(null, null)(Sidemenu);