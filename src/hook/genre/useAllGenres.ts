import { useQuery } from "@tanstack/react-query";
import { useAccessToken } from "../auth/useUserInfo";
import api from "../../shared/apis/axiosCustom";
import { appUrls } from "../../shared/apis/contants";

export interface Genre {
  _id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export function useAllGenres() {
  const accessToken = useAccessToken();

  return useQuery<Genre[]>({
    queryKey: ["genres"],
    queryFn: () =>
      api
        .get(`${appUrls.backendUrl}/genre`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => response.data.data),
  });
}
