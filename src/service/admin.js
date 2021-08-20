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

export const fetchShowsPlace = async () => {
  try {
    const data = (
      await axios.get("http://test-cloud-mongodb.herokuapp.com/shownplace")
    ).data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchShownsTime = async () => {
  try {
    const data = (
      await axios.get("http://test-cloud-mongodb.herokuapp.com/showntime")
    ).data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchTicketBooking = async () => {
  try {
    const data = (
      await axios.get("http://test-cloud-mongodb.herokuapp.com/ticket")
    ).data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchListUser = async () => {
  try {
    const data = (
      await axios.get("http://test-cloud-mongodb.herokuapp.com/user")
    ).data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const postShown = async (values) => {
  try {
    const data = await axios.post(
      "https://test-cloud-mongodb.herokuapp.com/listshown",
      values
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const postShownTime = async (values) => {
  try {
    const data = await axios.post(
      "https://test-cloud-mongodb.herokuapp.com/showntime",
      values
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const postShownPlace = async (values) => {
  try {
    const data = await axios.post(
      "https://test-cloud-mongodb.herokuapp.com/shownplace",
      values
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const postUser = async (values) => {
  try {
    const data = await axios.post(
      "https://test-cloud-mongodb.herokuapp.com/user",
      values
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteShown = async (id) => {
  try {
    const data = await axios.delete(
      `https://test-cloud-mongodb.herokuapp.com/listshown/${id}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteShownTime = async (id) => {
  try {
    const data = await axios.delete(
      `https://test-cloud-mongodb.herokuapp.com/showntime/${id}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteShownPlace = async (id) => {
  try {
    const data = await axios.delete(
      `https://test-cloud-mongodb.herokuapp.com/shownplace/${id}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const data = await axios.delete(
      `https://test-cloud-mongodb.herokuapp.com/user/${id}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteTicket = async (id) => {
  try {
    const data = await axios.delete(
      `https://test-cloud-mongodb.herokuapp.com/ticket/${id}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateShown = async (id, values) => {
  try {
    const data = await axios.put(
      `https://test-cloud-mongodb.herokuapp.com/listshown/${id}`,
      values
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateShownTime = async (id, values) => {
  try {
    const data = await axios.put(
      `https://test-cloud-mongodb.herokuapp.com/showntime/${id}`,
      values
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateShownPlace = async (id, values) => {
  try {
    const data = await axios.put(
      `https://test-cloud-mongodb.herokuapp.com/shownplace/${id}`,
      values
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, values) => {
  try {
    const data = await axios.put(
      `https://test-cloud-mongodb.herokuapp.com/user/${id}`,
      values
    );
    return data;
  } catch (error) {
    throw error;
  }
};
