import { useState, useEffect } from "react";
import { CallApiGetAllAccounts } from "../api/CallApi";

const useGetAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await CallApiGetAllAccounts();
        if (data.detail) {
          throw new Error(data.detail);
        }
        console.log(data);
        setAccounts(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchAccounts();
  }, []);

  return { accounts, loading, error };
};

export default useGetAccounts;
