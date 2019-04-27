import { toast } from "react-toastify";

import request from "../../request";
import { GET_APPLICANTIONS } from "./constants/actionTypes";

export const getApplications = payload => ({
  type: GET_APPLICANTIONS.default,
  payload
});

export const onError = payload => ({
  type: GET_APPLICANTIONS.rejected,
  payload
});

export const getApplicationsBoundActionCreator = cb => dispatch => {
  const payload = request({
    url: "/v1/candidates",
    method: "GET"
  });
  dispatch(getApplications(payload)).then(({ value }) => {
    if (value && value.data && value.data.error) {
      dispatch(onError(value.data.error));
      toast.error(value.data.error.message);
    }
  });
};

export default getApplicationsBoundActionCreator;
