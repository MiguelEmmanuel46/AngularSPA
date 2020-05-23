export class Ventas
{
	constructor(
		public idventas: number,
		public id_producto: number,
		public cantidad: number,
		public total: number,
		public fecha: string,
		public created_at: any,
		public id_usuario: number
	){}	
}