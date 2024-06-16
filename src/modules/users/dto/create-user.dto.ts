import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class CreateUserDto {

    @ApiProperty({description:'Nombre de usuario'})
    @IsString({message:'El nombre deben ser caracteres'})
    @IsNotEmpty({message:'El nombre no debe estar vacio'})
    name:string;

    @ApiProperty({description:'Correo electronico'})
    @IsEmail({},{message:'El formato deber ser de correo'})
    @IsNotEmpty({message:'El correo no debe estar vacio'})
    email: string;

    @ApiProperty({description:'Contraseña de usuario'})
    @MinLength(6,{message:'la contraseña debe tener como minimo 6 caracteres'})
    @IsString({message:'La contraseña debe ser una cadena'})
    password:string;

    @ApiProperty({description:'Telefono de usuario'})
    @MinLength(11,{message:'El telefono debe tener como minimo 11 numeros '})
    @IsNotEmpty({message:'El telefono no debe estar vacio'})
    telefono: string;


}
