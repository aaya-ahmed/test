import React, { useState } from 'react';
import styles from './news.module.scss';
import { Pagination } from 'react-bootstrap';
import { useGetPagedData } from '../../hooks/getpageddata';
import NewService from '../../services/news.service';
const Service = new NewService();
const NewsList = ({ GoToNew }: { GoToNew: (item: any) => void }) => {
  const[listData,setListData]=useState<any[]>([]);

  const [filter, setFilter] = useState<{type:string,name:string,value:string}[]>(
    [{
        name:"CreatedDate",
        type:'Date',
        value:null
    }]
);
const {
    page,
    itemPerPage,
    goToNextPage,
    goToPrevPage,
} = useGetPagedData(Service, 0, 10,filter,setListData);
  return (
    <>
      <div className="row p-0 m-0 justify-content-center">
        <div className="col-lg-10">
          {listData?.map((item, index) => {
            return (
              <>
                <div className={`${styles['blog_post_preview']} format-standard-image`} onClick={() => { GoToNew(item) }}>
                  <div className="item_wrapper">
                    <div className={`${styles['blog_content']}`}>
                      <div className={`${styles['blog_post_media']}`}>
                      <img src={`${process.env.REACT_APP_baseImageUrl}${item.attachments?.filter(p=>p.isMain)[0].attachmentUrl}`}/>
                      </div>
                      <div className={`${styles['content']}`}>
                        <h2 className={`${styles['blogpost_title']} my-2`}>
                          {item.title}
                        </h2>
                        <div className="listing_meta_wrap">
                          <div className="listing_meta">
                            <span className="post_date my-2">
                              {item.createdDate}
                            </span>
                          </div>
                        </div>
                        <div
                          className={`${styles['blog_item_description']} my-2`}
                        >
                          {item.description}
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
        </div>
      </div>
    </>
  );
};
export default NewsList;
