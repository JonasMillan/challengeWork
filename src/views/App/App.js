import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as FootballActions from '../../actions/footballActions'
import * as InputActions from '../../actions/inputActions'
import SelectorPLayers from '../../selectors/selectorPlayers'
import TableData from '../TableData/TableData.js'
import FormData from '../FormData/FormData.js'
import './App.css';

class App extends Component {

  async componentWillMount(){
    await this.props.FootballActions.fetchFootball()
  }
  render() {
    return (
      <div className="App">
        <h1>Football Player Finder</h1>
        <FormData search={this.props.InputActions} />
        { this.props.data.length > 0 &&
          <TableData data={this.props.select}/>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.football.data,
    select: SelectorPLayers(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    FootballActions: bindActionCreators(FootballActions, dispatch),
    InputActions: bindActionCreators(InputActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)