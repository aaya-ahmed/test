import React, { Fragment } from "react";
import './achievement.css'

const AchievementComponent = () => {
    return (<>
        <section className="achievements-items py-5">
            <div className="container">
                <div className="title text-center mb-5">
                    <strong className="h1 fw-bold d-block"> إنجازاتنا </strong>
                </div>
                <div className="row">
                <div className="col-md-4 col-12 firstitem p-0">
                        <div className="item-achievement d-flex align-item-start justify-content-start">
                            <i className="fas img-icon fa-home "></i>
                            <div>
                            <strong className="h5 d-block"> فلة </strong>
                                <strong className="h2 d-block">
                                    <span className=" counter "> +58</span>
                                </strong>
                                
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 col-12 firstitem p-0">
                        <div className="item-achievement d-flex align-item-start justify-content-start">
                            <i className="fas img-icon fa-key "></i>
                            <div>
                            <strong className="h5 d-block"> وحدة سكنية </strong>
                            <strong className="h2 d-block">
                                <span className="  ">v2,500</span>
                            </strong>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 col-12 firstitem p-0">
                        <div className="item-achievement d-flex align-item-start justify-content-start">
                            <i className="fas img-icon fa-project-diagram "></i>
                            <div>
                            <strong className="h5 d-block"> مشروع </strong>
                            <strong className="h2 d-block">
                                <span className=" counter ">+50</span>
                            </strong>

                            
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-4 col-12 item p-0">
                        <div className="item-achievement d-flex align-item-start justify-content-start">
                            <i className="fas img-icon fa-building "></i>
                            <div>
                            <strong className="h5 d-block"> مبنى </strong>
                            <strong className="h2 d-block">
                                <span className=" counter ">+156</span>
                            </strong>

                            
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 col-12 item p-0">
                        <div className="item-achievement d-flex align-item-start justify-content-start">
                            <i className="fas img-icon fa-city "></i>
                            <div>
                            <strong className="h5 d-block"> مسطحات المباني المنفذة </strong>
                            <strong className="h2 d-block">
                                <bdi>
                                    +
                                    <span className="  ">467,536
                                    </span>
                                    <span className="  ">م2</span>

                                </bdi>
                            </strong>

                            
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 col-12 item p-0">
                        <div className="item-achievement d-flex align-item-start justify-content-start">
                            <i className="fas img-icon fa-drafting-compass "></i>
                            <div>
                            <strong className="h5 d-block"> مسطحات الأراضي المطوّرة </strong>
                            <strong className="h2 d-block">
                                <bdi>
                                    +
                                    <span className="  ">211,654
                                    </span>
                                    <span className="  ">م2</span>

                                </bdi>
                            </strong>

                            
                            </div>

                        </div>
                    </div>




                </div>
            </div>
        </section>
    </>);
}
export default AchievementComponent;