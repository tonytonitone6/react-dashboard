import React from 'react';
import { pureComponent } from 'react-decoration';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Container,
  CommonTable,
  TableHeader,
  TableDetail,
  EditButton,
  ButtonArea,
  DeleteButton
} from './styles';

@pureComponent
class Table {

  onRenderHeaderFields = (item) => (<th key={item.id}>{item.name}</th>)
  
  onRenderListItem = (item) => {
    const { 
      onEditFunc,
      onDeleteItem
    } = this.props;
    return (
      <tr key={item._id} className="trSpacing">
        <td key={item.name}>{item.name}</td>
        <td key={item.email}>{item.email}</td>
        <td key={item.updatedAt}>{item.updatedAt}</td>
        { onEditFunc || onDeleteItem
          ? <ButtonArea>
              <EditButton onClick={onEditFunc.bind(this, item)}>
                Edit
              </EditButton>
              <DeleteButton onClick={onDeleteItem.bind(this, item._id)}>
                Delete
              </DeleteButton>
            </ButtonArea>
          : null
        }
      </tr>
    )
  }
  
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
  })),
  onEditFunc: PropTypes.func,
  onDeleteFunc: PropTypes.func
}

export default connect(null, null)(Table);


