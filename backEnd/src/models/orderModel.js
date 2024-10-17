const pool = require("../config/db");

const createOrder = async (user_id) => {
  const fecha = new Date();
  const estado = "pendiente";

  const consulta = `INSERT INTO ordenes (user_id, fecha, estado) VALUES ($1, $2, $3) RETURNING *`;

  const values = [user_id, fecha, estado];

  try {
    const result = await pool.query(consulta, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error al crear la orden:", error);
    throw new error();
  }
};

const addOrderDetail = async (order_id, productos) => {
  const consulta = `INSERT INTO detalle_orden (order_id, product_id, cantidad) VALUES ($1, $2, $3)`;
  try {
    await pool.query("BEGIN");

    for (const producto of productos) {
      const values = [order_id, producto.product_id, producto.cantidad];
      await pool.query(consulta, values);
    }

    await pool.query("COMMIT");
    return {
      message: "Productos agregados al detalle de la orden exitosamente",
    };
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Error al agregar los productos a la orden:", error);
    throw new Error("Error al agregar los detalles de la orden");
  }
};

const getOrderById = async (order_id) => {
  const consulta = `SELECT 
  o.id AS order_id, 
  o.user_id, 
  o.fecha, 
  o.estado, 
  d.product_id, 
  p.nombre AS product_name, 
  d.cantidad, 
  p.precio 
FROM ordenes o 
LEFT JOIN detalle_orden d ON o.id = d.order_id 
LEFT JOIN productos p ON d.product_id = p.id 
WHERE o.id = $1;`;
  const values = [order_id];

  try {
    const result = await pool.query(consulta, values);

    if (result.rows.length === 0) {
      throw new Error("No se encontró la orden con ese ID");
    }

    const orderData = {
      order_id: result.rows[0].order_id,
      user_id: result.rows[0].user_id,
      fecha: result.rows[0].fecha,
      estado: result.rows[0].estado,
      produtos: result.rows.map((row) => ({
        product_id: row.product_id,
        product_name: row.product_name,
        cantidad: row.cantidad,
        precio: row.precio,
      })),
    };

    return orderData;
  } catch (error) {
    console.error("Error al obtener la orden", error);
    throw new Error("Error al consultar la orden");
  }
};

const getAllOrders = async () => {
  const consulta = `SELECT 
    o.id AS order_id, 
    o.user_id, 
    o.fecha, 
    o.estado 
    FROM ordenes o;`;
  
  try {
    const result = await pool.query(consulta);
    return result.rows;
  } catch (error) {
    console.error("Error al obtener todas las órdenes:", error);
    throw new Error("Error al consultar las órdenes");
  }
};

module.exports = {
  createOrder,
  addOrderDetail,
  getOrderById,
  getAllOrders,
};
