import qs from "qs";
import React from "react";
import { connect } from "react-redux";

import Error from "../components/Error";
import Layout from "../components/Layout";
import Loading from "../components/Loader";
import Table from "../components/applications/Table";
import { handleFilterAndSort } from "../utils/helpers";
import FilterAndSort from "../components/applications/FilterAndSort";
import getApplications from "../components/applications/application.action";

class App extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.props.getApplications();
  }

  onFilterAndSort = () => {
    const list = this.props.applications.resp.data || [];
    const search = this.props.location.search;
    const { filter, filterBy, sort } = qs.parse(search, {
      ignoreQueryPrefix: true
    });
    const data = handleFilterAndSort(filterBy, sort, filter, list);

    this.setState({ data });
  };

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;
    const { fetched } = this.props.applications;
    const prevSearch = prevProps.location.search;
    const prevFetched = prevProps.applications.fetched;
    const fetchedCondition = prevFetched !== fetched && fetched;
    const condition = search !== prevSearch || fetchedCondition;

    if (condition) {
      this.onFilterAndSort();
    }
  }

  render() {
    const { fetching, fetched, onError } = this.props.applications;

    return (
      <>
        {fetching && <Loading />}
        {fetched && (
          <Layout>
            <FilterAndSort />
            <Table applications={this.state.data} />
          </Layout>
        )}
        {onError && <Error />}
      </>
    );
  }
}

const mapDispatchToProps = {
  getApplications
};

const mapStateToProps = ({ applications }) => ({
  applications
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
