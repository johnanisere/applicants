import qs from "qs";
import React from "react";
import changeCase from "change-case";
import { FaCaretDown } from "react-icons/fa";
import { withRouter } from "react-router-dom";

import Search from "./SearchBar";
import Filter from "../blocks/filter";
import filters from "./constants/filters";
import FilterSelect from "./FilterSelect";
import listOfStatus from "./constants/status";
import { onStrip, unStrip } from "../utils/helpers";
import FilterAndSearchBox from "../blocks/filterAndSearchBox";

class App extends React.Component {
  state = {
    openDropdown: false,
    searchBy: "",
    status: "",
    search: ""
  };

  onResolveUrl = payload => {
    this.props.resolveUrl("filter", payload);
  };

  onSubmit = ({ value }) => {
    const payload = {
      filter: onStrip(this.state.searchBy),
      filterBy: value || this.state.search
    };
    this.onResolveUrl(payload);
  };

  toggleDropdown = () =>
    this.setState(state => ({ openDropdown: !state.openDropdown }));

  onHandleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });

    if (value !== "Status" && name !== "search") {
      this.toggleDropdown();
    }
    if (name === "status") {
      this.onSubmit({ value });
      this.setState({ search: "" });
    }
  };

  onGetInitialUrl = () => {
    const { search } = this.props.history.location;
    const { filter, filterBy } = qs.parse(search, {
      ignoreQueryPrefix: true
    });
    if (filterBy && filter !== "status") {
      this.setState({
        searchBy: changeCase.sentenceCase(unStrip(filter)),
        search: filterBy
      });
    } else if (filterBy) {
      this.setState({
        searchBy: changeCase.sentenceCase(unStrip(filter)),
        status: filterBy
      });
    }
  };

  componentDidMount() {
    this.onGetInitialUrl();
  }

  render() {
    const { openDropdown, searchBy, status, search } = this.state;
    const isStatus = searchBy === "Status";
    const isDisabled = !searchBy || searchBy === "Status";
    return (
      <FilterAndSearchBox>
        <FilterAndSearchBox.FilterBox>
          <Filter>
            <Filter.FilterButton onClick={this.toggleDropdown}>
              <span>Filter</span>
              <FaCaretDown />
            </Filter.FilterButton>
            <Filter.DropDown show={openDropdown}>
              <FilterSelect
                list={filters}
                name="searchBy"
                value={searchBy}
                title="Filter applications by:"
                onHandleChange={this.onHandleChange}
              />
              {isStatus && (
                <FilterSelect
                  name="status"
                  bottom={true}
                  value={status}
                  list={listOfStatus}
                  title="Select status:"
                  onHandleChange={this.onHandleChange}
                />
              )}
            </Filter.DropDown>
          </Filter>
        </FilterAndSearchBox.FilterBox>
        <Search
          name="search"
          value={search}
          searchBy={searchBy}
          isDisabled={isDisabled}
          onHandleChange={this.onHandleChange}
        />
        <Filter.FilterButton
          special={true}
          disabled={isDisabled}
          onClick={this.onSubmit}
        >
          <span>Search</span>
        </Filter.FilterButton>
      </FilterAndSearchBox>
    );
  }
}

export default withRouter(App);
