const request = require("supertest");
const app = require("../app");
const pool = require("../config/db");

// Función para obtener el token de autenticación
const getAuthToken = async () => {
  const response = await request(app).post("/api/login")
    .send({
      email: "alejandroidb@gmail.com", // Asegúrate de que este usuario exista en tu base de datos
      password: "12345678",
    });
  return response.body.token; // Ajusta según cómo se devuelve el token
};

afterAll(async () => {
  await pool.end();
});

describe("GET /api/getorders", () => {
  it("Retornar lista de órdenes con código 200", async () => {
    const token = await getAuthToken();

    const res = await request(app)
      .get("/api/getorders")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);

    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty("order_id");
      expect(res.body[0]).toHaveProperty("user_id");
      expect(res.body[0]).toHaveProperty("fecha");
      expect(res.body[0]).toHaveProperty("estado");
    }
  }, 20000);
});
