import { toast } from "react-toastify";

//catch errors globally and toast them
const handleErrors = err => {
  if (err.response && err.response.data && err.response.data.message) {
    toast.error(err.response.data.message);
  } else if (err.response && err.response.data) {
    toast.error(err.response.data);
  } else if (err.message) {
    toast.error(err.message);
  } else {
    toast.error(err);
  }
};

export default handleErrors;
