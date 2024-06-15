import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class CreateUserDto {

    @ApiProperty({description:'Nombre de usuario'})
    @IsString({message:'El nombre deben ser caracteres'})
    @IsNotEmpty({message:'El nombre no debe estar vacio'})
    name:string;

    @ApiProperty({description:'Correo electronico'})
    @IsString({message:'El formato deber ser de correo'})
    @IsNotEmpty({message:'El correo no debe estar vacio'})
    email: string;

    @ApiProperty({description:'Contraseña de usuario'})
    @IsString({message:'la contraseña debe tener como minimo 6 caracteres'})
    @IsNotEmpty({message:'La contraseña debe ser una cadena'})
    password:string;

    @ApiProperty({description:'Telefono de usuario'})
    @IsString({message:'El telefono no debe estar vacio '})
    @IsNotEmpty({message:'El telefono no debe estar vacio'})
    telefono: string;


}
