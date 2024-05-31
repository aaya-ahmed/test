import React, { Fragment, useState } from "react";
import { viewer } from "../models/viewer";
import Viewer from "../viewer/viewer";
import './partner.css'
const PartnerComponent = () => {
    const [openViewer,setOpenViewer]=useState<boolean>(false);
    const images: viewer[] = [
        {
            src: '/assets/images/012.jpg',
            alt: 'الشركاء الاستراتيجيين'
        },
        {
            src: '/assets/images/014.webp',
           
            alt: 'القطاع الحكومي'
        },
        {
            src: '/assets/images/013.webp',
            alt: 'القطاع الخاص'
        }

    ]
    const [imageIndex,setImageIndex]=useState<number>(0);
    return (<>
        <section className="achievements-items py-5">
            <div className="container">
                <div className="title text-center mb-5">
                    <strong className="h1 fw-bold d-block text-title"> شركاء النجاح </strong>
                </div>

                <div className="partners-items">
                    <div className="row">
                        {images.map((item, index) => {
                            return <div className="col-md-4 mb-4">
                                <a href="javascript:void(0)" data-fancybox="gallery"  onClick={()=>{setImageIndex(index);setOpenViewer(true)}} data-caption={item.alt} className="partner-item">
                                    <div className="img-partner">
                                        <i className="fas fa-maximize fa-2x"></i>
                                        <img src={item.src} className="img-fluid" alt="Partners" />
                                    </div>
                                    <strong>{item.alt}  </strong>
                                </a>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </section>
        <Viewer images={images} openViewer={openViewer} setOpenViewer={setOpenViewer} imageIndex={imageIndex}/>
    </>);
}
export default PartnerComponent;