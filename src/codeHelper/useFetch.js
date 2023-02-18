// import { useEffect } from "react"
import axios from "axios"
import useAxios, { configure } from "axios-hooks"

const useFetch = (url) => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const instance = axios.create({
    withCredentials: true,
    baseURL: url,
  })

  configure({ instance })

  const [{ data, loading, error }, refetch] = useAxios(url)

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch(() => {
  //       setError();
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [])
  return { data, loading, error }
}
export default useFetch
