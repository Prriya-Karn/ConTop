import axios from "axios";

export const validateUserJWTToken = async (token)=>{
    try {
        const res = await axios.get(`/connectTopApi/users/auth/jwtVerification`, {
          headers: { Authorization: "Bearer " + token },
        });
        return res.data;
      } catch (err) {
        return null;
      }
}