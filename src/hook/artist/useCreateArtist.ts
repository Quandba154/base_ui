import { useMutation } from "@tanstack/react-query";
import api from "../../shared/apis/axiosCustom";
import { appUrls } from "../../shared/apis/contants";
import { useAccessToken } from "../auth/useUserInfo";

export interface IArtistDTO {
  name: string;
  avatar: string;
  bio: string;
  genre: string;
}

export const useCreateArtist = () => {
  const accessToken = useAccessToken();
  return useMutation({
    mutationFn: async (body: IArtistDTO) => {
      const res = await api.post(`${appUrls.backendUrl}/artist`, body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res.data;
    },
  });
};
