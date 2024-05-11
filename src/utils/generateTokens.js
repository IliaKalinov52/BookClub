import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwtConfig';
import 'dotenv/config';

export default function generateTokens(payload) {
  return {
    accessToken: jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: jwtConfig.access.expiresIn.toString(),
      },
    ),
    refreshToken: jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: jwtConfig.refresh.expiresIn.toString(),
      },
    ),
  };
}
