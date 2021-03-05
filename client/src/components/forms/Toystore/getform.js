import axios from "axios";

const fetchData = async () => {
  const result = await axios("http://localhost:3001/toyformread");
  // return the result
  return result;
};

export default fetchData;
