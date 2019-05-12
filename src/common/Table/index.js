import React, {  } from 'react';
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
  
  onRenderListItem = (item) => (
    <tr key={item._id} className="trSpacing">
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.updatedAt}</td>
    </tr>
    )

  render() {
    const { fields, accountList } = this.props;
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
              {accountList.map(this.onRenderListItem)}
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
  }))
}

export default connect(null, null)(Table);


