const pool = require("../config/db")

const createOrder = async (user_id) => {
    const fecha =  date()
    const estado = "pendiente"

    const consulta = `INSERT INTO ordenes (user_id, fecha, estado) VALUES ($1, $2, $3) RETURNING *`

    const values = [user_id, fecha, estado]

    try {
        const result = await pool.query(consulta, values)
        return result.rows[0]
    } catch (error) {
        console.error("Error al crear la orden:", error)
        throw new error
        
    }
}

const addOrderDetail = async (order_id, productos) => {
    const consulta = `INSERT INTO detalle_orden (order_id, product_id, cantidad) VALUES ($1, $2, $3)`;
    try {
        await pool.query('BEGIN')

        for (const producto of productos) {
            const values = [order_id, producto.product_id, producto.cantidad]
            await pool.query(consulta, values)
        }

        await pool.query('COMMIT');
        return {message: "Productos agregados al detalle de la orden exitosamente"}
    } catch (error) {
        await pool.query('ROLLBACK');
        console.error("Errror al agregar los productos a la orden:", error);
        throw new Error("Error al agregar los detalles de la orden")
        
    }
}


module.exports = {
    createOrder, addOrderDetail
} 
