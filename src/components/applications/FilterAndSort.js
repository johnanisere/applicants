import qs from "qs";
import React from "react";
import _ from "underscore";
import { withRouter } from "react-router-dom";

import SortBar from "../SortBar";
import FilterBar from "../FilterBar";
import Container from "../../blocks/Container";
import { onResolveUrl } from "../../utils/helpers";
import sort, { sortParams } from "./constants/sort";

class FilterAndSort extends React.Component {
  state = {
    sortby: ""
  };

  onHandleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value }, () =>
      this.resolveUrl("sort", sortParams[value])
    );
  };

  resolveUrl = (name, value) => {
    const {
      location: { search, pathname },
      push
    } = this.props.history;

    onResolveUrl(qs, search, name, value, push, pathname);
  };

  onGetInitialUrl = () => {
    const { search } = this.props.history.location;
    const { sort } = qs.parse(search, {
      ignoreQueryPrefix: true
    });
    if (sort) {
      this.setState({ sortby: _.invert(sortParams)[sort] });
    }
  };

  componentDidMount() {
    this.onGetInitialUrl();
  }

  render() {
    const { sortby } = this.state;
    return (
      <Container>
        <FilterBar resolveUrl={this.resolveUrl} />
        <SortBar
          list={sort}
          name="sortby"
          value={sortby}
          onHandleChange={this.onHandleChange}
        />
      </Container>
    );
  }
}

export default withRouter(FilterAndSort);
