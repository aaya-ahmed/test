import React from 'react';
import styles from './news.module.scss';
import { Pagination } from 'react-bootstrap';
const NewsList = ({ GoToNew }: { GoToNew: (item: any) => void }) => {
  const ar = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="row p-0 m-0 justify-content-center">
        <div className="col-lg-10">
          {ar.map((item, index) => {
            return (
              <>
                <div className={`${styles['blog_post_preview']} format-standard-image`} onClick={() => { GoToNew(item) }}>
                  <div className="item_wrapper">
                    <div className={`${styles['blog_content']}`}>
                      <div className={`${styles['blog_post_media']}`}>
                        <img src="./assets/images/News.jpeg" alt="" />
                      </div>
                      <div className={`${styles['content']}`}>
                        <h2 className={`${styles['blogpost_title']} my-2`}>
                          مشاركة أساس المحسني في شركة مساكن الطائف
                        </h2>
                        <div className="listing_meta_wrap">
                          <div className="listing_meta">
                            <span className="post_date my-2 text-primary">
                              September 10, 2023
                            </span>
                          </div>
                        </div>
                        <div
                          className={`${styles['blog_item_description']} my-2`}
                        >
                          أقامت شركة أساس مكين جناحا تعريفيا لها في المقر
                          الرئيسي لشركة ثقة التابعة لصندوق الاستثمارات العامة،
                          وذلك خلال الفترة: 28-29 مايو، بمشاركة بنك الراجحي،
                          وبنك ساب. #أساس_مكين أقامت شركة أساس مكين جناحا
                          تعريفيا لها في المقر الرئيسي لشركة ثقة التابعة لصندوق
                          الاستثمارات العامة، وذلك خلال الفترة: 28-29 مايو،
                          بمشاركة بنك الراجحي، وبنك ساب. #أساس_مكين أقامت شركة
                          أساس مكين جناحا تعريفيا لها في المقر الرئيسي لشركة ثقة
                          التابعة لصندوق الاستثمارات العامة، وذلك خلال الفترة:
                          28-29 مايو، بمشاركة بنك الراجحي، وبنك ساب. #أساس_مكين
                          أقامت شركة أساس مكين جناحا تعريفيا لها في المقر
                          الرئيسي لشركة ثقة التابعة لصندوق الاستثمارات العامة،
                          وذلك خلال الفترة: 28-29 مايو، بمشاركة بنك الراجحي،
                          وبنك ساب. #أساس_مكين
                        </div>
                        <div className={`${styles['blog_post_footer']} my-2`}>
                          <div className="module_button_list">
                            <button onClick={() => { GoToNew(item) }}>قراءة المزيد</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <Pagination style={{ color: 'rgb(32 53 54 / 74%)' }}>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
        {/* <div className={`col-lg-3 ${styles['contact']} my-5`}>
            <a href="/communication">
              <img src="./assets/images/contact.png" />
            </a>
          </div> */}
      </div>
    </>
  );
};
export default NewsList;
