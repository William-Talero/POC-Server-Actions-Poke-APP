import {
  GetApiRequestWithoutToken,
  PostApiRequestWithoutToken,
  PostApiRequestBodyWithoutToken,
} from "./FetchRequest";
import Configuration from "./Configuration";

export const CallApiCreateAccount = async (body: any) => {
  let url = `${process.env.NEXT_PUBLIC_API_ROUTE}${Configuration.Accounts}`;
  const bodyRequest = JSON.stringify(body);
  const data = await PostApiRequestBodyWithoutToken(`${url}`, bodyRequest);
  return data ? await data.json() : [];
};

export const CallApiWithdrawAccount = async (id: number, body: any) => {
  let url = `${process.env.NEXT_PUBLIC_API_ROUTE}${Configuration.Accounts}`;
  const bodyRequest = JSON.stringify(body);
  const data = await PostApiRequestBodyWithoutToken(
    `${url}/${id}/withdraw`,
    bodyRequest
  );
  return data ? await data.json() : [];
};

export const CallApiDepositAccount = async (id: number, body: any) => {
  let url = `${process.env.NEXT_PUBLIC_API_ROUTE}${Configuration.Accounts}`;
  const bodyRequest = JSON.stringify(body);
  const data = await PostApiRequestBodyWithoutToken(
    `${url}/${id}/deposit`,
    bodyRequest
  );
  return data ? await data.json() : [];
};

export const CallApiGetBalance = async (id: number) => {
  let url = `${process.env.NEXT_PUBLIC_API_ROUTE}${Configuration.Accounts}`;
  const data = await GetApiRequestWithoutToken(`${url}/${id}/balance`);
  return data ? await data.json() : [];
};

export const CallApiGetAllAccounts = async () => {
  let url = `${process.env.NEXT_PUBLIC_API_ROUTE}${Configuration.Accounts}`;
  const data = await GetApiRequestWithoutToken(
    `${url}/GetAll`,
    "CallApiGetAllAccounts"
  );
  return data ? await data.json() : [];
};
