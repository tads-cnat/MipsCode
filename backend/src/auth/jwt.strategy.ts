import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'ke9E1Lk56fzz1B',
    });
  }

  async validate(payload: { userId: string }) {
    const user = await this.usersService.getUserById(payload.userId);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}