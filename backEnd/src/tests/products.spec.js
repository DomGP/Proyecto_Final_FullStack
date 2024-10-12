const request = require("supertest");
const app = require("../app");
const pool = require("../config/db");

afterAll(async () => {
  await pool.end();
});

describe("GET /api/products", () => {
  it("Retornar lista de productos con codigo 200", async () => {
    const res = await request(app).get("/api/products");
    expect(res.status).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);

    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty("id");
      expect(res.body[0]).toHaveProperty("nombre");
      expect(res.body[0]).toHaveProperty("img_url");
      expect(res.body[0]).toHaveProperty("descripcion");
      expect(res.body[0]).toHaveProperty("precio");
      expect(res.body[0]).toHaveProperty("plataforma");
      expect(res.body[0]).toHaveProperty("nombre_categoria");
    }
  });
});
