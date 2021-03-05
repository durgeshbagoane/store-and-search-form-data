import axios from "axios";

const fetchData = async () => {
  const result = await axios("http://localhost:3001/electronicformread");
  // return the result
  return result;
};

export default fetchData;
