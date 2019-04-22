import React from 'react';
import { pureComponent } from 'react-decoration';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Container,
  TableHeader,
  TableDetail
} from './styles';

@pureComponent
class Table {

  onRenderHeaderFields = (item) => (<th key={item.id}>{item.name}</th>)
  
  render() {
    const { fields } = this.props;
    return (
      <Container>
        <TableHeader>
          <table 
            cellPadding="0" 
            cellSpacing="0"
            border="0"
          >
            <thead>
              <tr>
                {fields.map(item => this.onRenderHeaderFields(item))}
              </tr>
            </thead>
          </table>
        </TableHeader>
        <TableDetail>

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


