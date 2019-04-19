import React from 'react';
import { pureComponent } from 'react-decoration';
import { connect } from 'react-redux';

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

export default connect(null, null)(Table);


