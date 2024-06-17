import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateLibroDto {
    @IsString()
    @IsNotEmpty()
    titulo:string;

    @IsString()
    @IsNotEmpty()
    sinopsis:string;

    @IsString()
    @IsNotEmpty()
    autor:string;

    @IsString()
    @IsNotEmpty()
    librofav:string;

    @IsInt()
    @IsNotEmpty()
    categoria_id:number;

    @IsOptional()
    @IsBoolean()
    estado?:boolean

}
