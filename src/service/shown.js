import axios from "axios";

export const fetchListShow = async () => {
  try {
    const data = (
      await axios.get("http://test-cloud-mongodb.herokuapp.com/listshown")
    ).data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchShownDetail = async (id) => {
  try {
    const data = (
      await axios.get(`http://test-cloud-mongodb.herokuapp.com/listshown/${id}`)
    ).data;
    return data;
  } catch (error) {
    throw error;
  }
};
export const fetchShownTime = async () => {
  try {
    const shownTime = (
      await axios.get("http://test-cloud-mongodb.herokuapp.com/showntime")
    ).data;
    return shownTime;
  } catch (error) {
    throw error;
  }
};

export const fetchShownPlaceOne = async () => {
  try {
    const shownPlace = (
      await axios.get("http://test-cloud-mongodb.herokuapp.com/shownplace")
    ).data;
    return shownPlace;
  } catch (error) {
    throw error;
  }
};
