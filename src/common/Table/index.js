import React from 'react';
import { pureComponent } from 'react-decoration';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Container,
  CommonTable,
  TableHeader,
  TableDetail
} from './styles';

@pureComponent
class Table {

  onRenderHeaderFields = (item) => (<th key={item.id}>{item.name}</th>)
  
  onRenderListItem = (cb, item) => (
      <tr key={item._id} className="trSpacing">
        <td key={item.name}>{item.name}</td>
        <td key={item.email}>{item.email}</td>
        <td key={item.updatedAt}>{item.updatedAt}</td>
        { cb 
          ? <td><button type="submit" onClick={cb.bind(this, item)}>123</button></td>
          : null
        }
      </tr>
    )
  
  render() {
    const { 
      fields, 
      accountList,
      onEditFunc = () => {}
    } = this.props;
    return (
      <Container>
        <TableHeader>
          <CommonTable>
            <thead>
              <tr>
                {fields.map(this.onRenderHeaderFields)}
              </tr>
            </thead>
          </CommonTable>
        </TableHeader>
        <TableDetail>
          <CommonTable>
            <thead>
              {accountList.map(this.onRenderListItem.bind(this, onEditFunc))}
            </thead>
          </CommonTable>
        </TableDetail>
      </Container>
    );
  }
}

Table.propTypes = {
  accountList: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    updateAt: PropTypes.string,
  })),
  fields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })),
  onEditFunc: PropTypes.func
}

export default connect(null, null)(Table);


