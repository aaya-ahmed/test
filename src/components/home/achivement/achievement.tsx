import { useRef, useState } from 'react';
import styles from './achievement.module.css';
import useScrollTriggeredCountUp from '../../../hooks/useScrollTriggeredCountUp';

const AchievementComponent = () => {
  const numberOfValiaRef = useRef<HTMLDivElement>(null);
  const numberOfValiaCount = useScrollTriggeredCountUp(numberOfValiaRef, 58);

  const numberOfBuildingRef = useRef<HTMLDivElement>(null);
  const numberOfBuildingCount = useScrollTriggeredCountUp(numberOfBuildingRef, 2500);

  const numberOfProjectRef = useRef<HTMLDivElement>(null);
  const numberOfProjectCount = useScrollTriggeredCountUp(numberOfProjectRef, 50);

  const numberOfBuildsRef = useRef<HTMLDivElement>(null);
  const numberOfBuildsCount = useScrollTriggeredCountUp(numberOfBuildsRef, 156);

  const plansOfExecutedBuildingsRef = useRef<HTMLDivElement>(null);
  const plansOfExecutedBuildingsCount = useScrollTriggeredCountUp(plansOfExecutedBuildingsRef, 467536);

  const developedLandSurfacesRef = useRef<HTMLDivElement>(null);
  const developedLandSurfacesCount = useScrollTriggeredCountUp(developedLandSurfacesRef, 211654);
  return (
    <>
      <section className={`${styles['achievements-items']}`}>
        <div className="container">
          <div className={`${styles['title']} text-center mb-5`}>
            <strong className="h1 fw-bold d-block"> إنجازاتنا </strong>
          </div>
          <div className="row px-4">
            <div className={`col-md-4 col-12 ${styles['firstitem']} p-0`}>
              <div className={`${styles['item-achievement']} `}>
                <div className='d-flex align-item-start justify-content-center'>
                  <i className={`${styles['fas']} fas img-icon fa-home`}></i>
                  <strong className="h2 d-block">
                    <span className=" counter " ref={numberOfValiaRef}> +{numberOfValiaCount}</span>
                  </strong>
                </div>
                <div>
                  <strong className="h5 d-block"> فلة </strong>
                </div>
              </div>
            </div>
            <div className={`col-md-4 col-12 ${styles['firstitem']} p-0`}>
              <div className={`${styles['item-achievement']}`}>
                <div className='d-flex align-item-start justify-content-center'>

                  <i className={`${styles['fas']} fas img-icon fa-key`}></i>
                  <strong className="h2 d-block">
                    <span className="  " ref={numberOfBuildingRef}>v{numberOfBuildingCount}</span>
                  </strong>
                </div>
                <div>
                  <strong className="h5 d-block"> وحدة سكنية </strong>

                </div>
              </div>
            </div>
            <div className={`col-md-4 col-12 ${styles['firstitem']} p-0`}>
              <div className={`${styles['item-achievement']} `}>
                <div className='d-flex align-item-start justify-content-center'>
                  <i className={`${styles['fas']} fas img-icon fa-project-diagram`}></i>
                  <strong className="h2 d-block">
                    <span className=" counter " ref={numberOfProjectRef}>+{numberOfProjectCount}</span>
                  </strong>
                </div>
                <div>
                  <strong className="h5 d-block"> مشروع </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="row px-4">
            <div className={`col-md-4 col-12 ${styles['item']} p-0`}>
              <div className={`${styles['item-achievement']}`}>
                <div className='d-flex align-item-start justify-content-center'>

                  <i className={`${styles['fas']} fas img-icon fa-building`}></i>
                  <strong className="h2 d-block">
                    <span className=" counter " ref={numberOfBuildsRef}>+{numberOfBuildsCount}</span>
                  </strong>
                </div>
                <div>
                  <strong className="h5 d-block"> مبنى </strong>

                </div>
              </div>
            </div>
            <div className={`col-md-4 col-12 ${styles['item']} p-0`}>
              <div className={`${styles['item-achievement']} `}>
                <div className='d-flex align-item-start justify-content-center'>

                  <i className={`${styles['fas']} fas img-icon fa-city`}></i>
                  <strong className="h2 d-block">
                    <bdi>
                      +<span className="  " ref={plansOfExecutedBuildingsRef}>{plansOfExecutedBuildingsCount}</span>
                    </bdi>
                  </strong>
                </div>
                <div>
                  <strong className="h5 d-block">
                    {' '}
                    مسطحات المباني المنفذة{' '}
                  </strong>

                </div>
              </div>
            </div>
            <div className={`col-md-4 col-12 ${styles['item']} p-0`}>
              <div className={`${styles['item-achievement']}`}>
                <div className='d-flex align-item-start justify-content-center'>
                  <i className={`${styles['fas']} fas img-icon fa-drafting-compass`}></i>
                  <strong className="h2 d-block">
                    <bdi>
                      +<span className="  " ref={developedLandSurfacesRef}>{developedLandSurfacesCount}</span>
                    </bdi>
                  </strong>
                </div>
                <div>

                  <strong className="h5 d-block">
                    {' '}
                    مسطحات الأراضي المطوّرة{' '}
                  </strong>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AchievementComponent;
