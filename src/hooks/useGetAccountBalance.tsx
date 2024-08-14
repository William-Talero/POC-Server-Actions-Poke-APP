import { useState, useEffect } from "react";
import { CallApiGetBalance } from "../api/CallApi";

const useGetAccountBalance = (id: number, revalidate: boolean) => {
  const [accountBalance, setAccountBalance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await CallApiGetBalance(id);
        if (data.detail) {
          throw new Error(data.detail);
        }
        console.log(data);
        setAccountBalance(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchAccounts();
  }, [revalidate]);

  return { accountBalance, loading, error };
};

export default useGetAccountBalance;
