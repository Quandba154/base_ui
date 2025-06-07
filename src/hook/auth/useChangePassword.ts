import { useMutation } from "@tanstack/react-query";
import api from "../../shared/apis/axiosCustom";
import { appUrls } from "../../shared/apis/contants";

interface ChangePasswordDto {
  oldPassword: string;
  newPassword: string;
}

export const useChangePassword = () => {
  return useMutation({
    mutationFn: async (data: ChangePasswordDto) => {
      const res = await api.put(
        `${appUrls.backendUrl}/auth/change-password`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return res.data;
    },
  });
};
