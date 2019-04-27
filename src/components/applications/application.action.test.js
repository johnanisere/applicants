import axios from "axios";
import moxios from "moxios";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import * as types from "./constants/actionTypes";
import configureMockStore from "redux-mock-store";
import { getApplications, onError } from "./application.action";

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);

function setUp() {
  const payload = {
    resp: {}
  };
  const expectedGetApplicationsActions = [
    types.GET_APPLICANTIONS.pending,
    types.GET_APPLICANTIONS.fulfilled
  ];
  const expectedonErrorAction = {
    type: types.GET_APPLICANTIONS.rejected,
    payload
  };
  return {
    payload,
    expectedonErrorAction,
    expectedGetApplicationsActions
  };
}

it("should create an action for errors", () => {
  const { payload, expectedonErrorAction } = setUp();
  expect(onError(payload)).toEqual(expectedonErrorAction);
});

describe("async actions", () => {
  const { payload, expectedGetApplicationsActions } = setUp();

  beforeEach(function() {
    moxios.install();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: payload
      });
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("it dispatches GET_APPLICANTIONS_FULFILLED and GET_APPLICANTIONS_PENDING on getApplications ", () => {
    const store = mockStore(payload);
    const request = axios.get("/");

    // call the getApplications async action creator
    return store.dispatch(getApplications(request)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);

      expect(actionTypes).toEqual(expectedGetApplicationsActions);
    });
  });
});
