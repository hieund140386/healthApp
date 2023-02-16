import axios from "axios";

const baseURL = "https://5fb26e7c87ed490016ea8e57.mockapi.io";

const path = {
  myRecord: `${baseURL}/my-record`,
};

export const getMyRecord = async () => await axios.get(path.myRecord);
