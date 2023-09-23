export interface ClienteAutenticar{
    email: string,
    password: string
}

export interface ClienteLogin {
    id_cliente: number,
    nombres: string,
    apellidos: string
}

export interface Cliente {
    id_cliente: number,
    nombres: string,
    apellidos: string,
    fecha_nacimiento: Date,
    email: string,
    id_doc_identidad: number,
    numero_doc_identidad: string
}