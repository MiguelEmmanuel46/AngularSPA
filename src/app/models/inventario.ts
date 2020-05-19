export class Inventario
{
	constructor(
		public id_producto: number,
		public nombre_producto: string,
		public precio_compra: number,
		public precio_venta: number,
		public existencia: number
	){}	
}
