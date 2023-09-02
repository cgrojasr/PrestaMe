export interface ClienteAutenticar{
    email: String,
    password: String
}

export interface ClienteLogin {
    id_cliente: number
}

export interface Cliente {
    id_cliente: number,
    nombres: String,
    apellidos: String,
    fecha_nacimiento: Date,
    email: String
}