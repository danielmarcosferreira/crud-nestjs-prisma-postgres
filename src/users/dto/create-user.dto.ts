import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do Usuário',
    example: 'Jose da Silva',
  })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({
    description: 'E-mail do usuário',
    example: 'email@email.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Senha do usuário, com no mínimo 6 caracteres',
    example: 'senhaSegura123',
    minLength: 6
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
