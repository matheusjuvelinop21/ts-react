
import React from "react";
import { Component } from "react";

import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { ApplicationState } from "../../store";
import { Repository } from "../../store/ducks/repositories/types";
import * as RepositoriesActions from "../../store/ducks/repositories/actions";
import RepositoryComponent from "../repository";

class RepositoriesComponent extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { repositories } = this.props;

    return (
      <ul>
        {repositories.map(repository => (
          <RepositoryComponent key={repository.id} repository={repository} />
        ))}
      </ul>
    )
  }
}

export default connect(
  (state: ApplicationState) => ({
    repositories: state.repositories.data
  }),
  (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch)
)(RepositoriesComponent)


type Props = StateProps & DispatchProps;

interface StateProps {
  repositories: Repository[]
}
interface DispatchProps {
  loadRequest(): void
}
