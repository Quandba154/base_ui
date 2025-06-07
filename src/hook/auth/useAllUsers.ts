import { useQuery } from "@tanstack/react-query";
import { useAccessToken } from "../auth/useUserInfo";
import api from "../../shared/apis/axiosCustom";
import { appUrls } from "../../shared/apis/contants";
import { User } from "../../shared/apis/auth.api";

export function useAllUsers() {
  const accessToken = useAccessToken();

  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () =>
      api
        .get(`${appUrls.backendUrl}/auth/user`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => response.data.data),
  });
}
