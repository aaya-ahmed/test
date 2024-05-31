import React, { Fragment } from "react";
import './partner.css'
const PartnerComponent = () => {
    return (<>
        <section className="sec-achievements py-5">
            <div className="container">
                <div className="sec-title text-center mb-5">
                    <strong className="h1 fw-bold d-block text-brown"> شركاء النجاح </strong>
                </div>

                <div className="partners-items">
                    <div className="row">


                        <div className="col-md-4 mb-4">
                            <a href="https://www.asasmakeen.com/uploads/pages/1700646996.webp" data-fancybox="gallery" data-caption=" الشركاء الاستراتيجيين " className="partner-item">
                                <div className="img-partner">
                                    <i className="fas fa-maximize fa-2x"></i>
                                    <img src="https://www.asasmakeen.com/uploads/pages/1700646996.webp" className="img-fluid" alt="Partners"/>
                                </div>
                                <strong> الشركاء الاستراتيجيين </strong>
                            </a>
                        </div>


                        <div className="col-md-4 mb-4">
                            <a href="https://www.asasmakeen.com/uploads/pages/TESaxzrg5bdWzj1KMmLo6jiGRvHasJmmHZy681lX.jpg" data-fancybox="gallery" data-caption=" القطاع الحكومي " className="partner-item">
                                <div className="img-partner">
                                    <i className="fas fa-maximize fa-2x"></i>
                                    <img src="https://www.asasmakeen.com/uploads/pages/TESaxzrg5bdWzj1KMmLo6jiGRvHasJmmHZy681lX.jpg" className="img-fluid" alt="Partners"/>
                                </div>
                                <strong> القطاع الحكومي </strong>
                            </a>
                        </div>


                        <div className="col-md-4 mb-4">
                            <a href="https://www.asasmakeen.com/uploads/pages/1700647014.webp" data-fancybox="gallery" data-caption=" القطاع الخاص " className="partner-item">
                                <div className="img-partner">
                                    <i className="fas fa-maximize fa-2x"></i>
                                    <img src="https://www.asasmakeen.com/uploads/pages/1700647014.webp" className="img-fluid" alt="Partners"/>
                                </div>
                                <strong> القطاع الخاص </strong>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>);
}
export default PartnerComponent;