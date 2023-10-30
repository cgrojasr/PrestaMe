export interface CuentaItem{
    id_cuenta: number,
    numero_cuenta:String,
    saldo_disponible:number
}

export interface CuentaApertura{
    id_cliente: number, 
    id_tipo_cuenta: number, 
    id_cuenta: number,
    numero_cuenta: string,
    saldo_disponible: number
}