const request = require("supertest");
const app = require("../app");
const pool = require("../config/db");

afterAll(async () => {
  await pool.end();
});

describe("Usuarios", () => {
  let token; 

  describe("POST /api/login", () => {
    it("Debería devolver un token para un usuario válido", async () => {
      const res = await request(app)
        .post("/api/login")
        .send({
          email: "juan@mail.com", 
          password: "password123", 
        });

      expect(res.status).toEqual(200);
      expect(res.body).toHaveProperty("token");

      // Almacenar el token para usarlo en el siguiente test
      token = res.body.token; 
    }, 20000);
  });

  describe("GET /api/users", () => {
    it("Retornar lista de usuarios con código 200", async () => {
      const res = await request(app)
        .get("/api/users")
        .set("Authorization", `Bearer ${token}`); 

      expect(res.status).toEqual(200);
      expect(res.body).toBeInstanceOf(Array);

      if (res.body.length > 0) {
        expect(res.body[0]).toHaveProperty("id");
        expect(res.body[0]).toHaveProperty("nombre");
        expect(res.body[0]).toHaveProperty("apellido");
        expect(res.body[0]).toHaveProperty("email");
      }
    }, 20000);
  });
});
