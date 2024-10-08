import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Generar un número de seguimiento aleatorio
        const trackingNumber = Math.floor(100000 + Math.random() * 900000); // Número aleatorio de 6 dígitos
        
        // Redirigir a la página de confirmación con el número de seguimiento
        navigate("/confirmation", { state: { trackingNumber } });
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                    <div className="card border border-light-subtle rounded-4">
                        <div className="card-body p-3 pt-2 p-md-4 p-xl-5">
                            <h2 className="h4 text-center mb-4">Datos para el pago</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row gy-3">
                                    {/* Información del Comprador */}
                                    <div className="col-12">
                                        <h5 className="mb-3">Información del Comprador</h5>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="buyerName"
                                                placeholder="Nombre del comprador"
                                                required
                                            />
                                            <label htmlFor="buyerName">Nombre del comprador</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="buyerEmail"
                                                placeholder="Email del comprador"
                                                required
                                            />
                                            <label htmlFor="buyerEmail">Email del comprador</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="buyerPhone"
                                                placeholder="Teléfono del comprador"
                                                required
                                            />
                                            <label htmlFor="buyerPhone">Teléfono del comprador</label>
                                        </div>
                                    </div>

                                    {/* Información de Envío */}
                                    <div className="col-12">
                                        <h5 className="mb-3">Datos de Envío</h5>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="shippingAddress"
                                                placeholder="Dirección de envío"
                                                required
                                            />
                                            <label htmlFor="shippingAddress">Dirección de envío</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="shippingCity"
                                                placeholder="Ciudad"
                                                required
                                            />
                                            <label htmlFor="shippingCity">Ciudad</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="shippingPostalCode"
                                                placeholder="Código Postal"
                                                required
                                            />
                                            <label htmlFor="shippingPostalCode">Código Postal</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="shippingCountry"
                                                placeholder="País"
                                                required
                                            />
                                            <label htmlFor="shippingCountry">País</label>
                                        </div>
                                    </div>

                                    {/* Información de Pago */}
                                    <div className="col-12">
                                        <h5 className="mb-3">Información de Pago</h5>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cardName"
                                                placeholder="Nombre en la tarjeta"
                                                required
                                            />
                                            <label htmlFor="cardName">Nombre en la tarjeta</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cardNumber"
                                                placeholder="Número de tarjeta"
                                                required
                                            />
                                            <label htmlFor="cardNumber">Número de tarjeta</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="expiryDate"
                                                placeholder="Fecha de expiración"
                                                required
                                            />
                                            <label htmlFor="expiryDate">Fecha de expiración</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cvv"
                                                placeholder="CVV"
                                                required
                                            />
                                            <label htmlFor="cvv">CVV</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="d-grid">
                                            <button className="btn btn-primary" type="submit">
                                                Completar pago
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-12">
                                    <hr className="mt-4 mb-4" />
                                    <p className="text-center">
                                        ¿Tienes dudas?{" "}
                                        <NavLink to="/cart" className="link-primary">
                                            Volver al carrito
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;


