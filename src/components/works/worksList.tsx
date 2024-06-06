import { Pagination } from "react-bootstrap";
import styles from './works.module.scss'
import ProjectStyle from '../home/projects/project.module.css'
const WorksList=({goToWork}:{goToWork:(item:any)=>void,setShow:(show:boolean)=>void})=>{
    return <>
    <div className={`${styles['sec-projects']} container`}>
          <ul className={`${styles['filter-projects']} d-flex align-items-center justify-content-center`}>
            <li>
              <button
                className=""
                style={{ backgroundColor: '#003f3f', color: '#fff' }}
              >
                <i className="fa-solid fa-building-circle-check"></i> متاح للبيع
              </button>
            </li>
            <li className={`${styles['slash']}`}>/</li>
            <li>
              <button
                className=""
                style={{ backgroundColor: '#003f3f', color: '#fff;' }}
              >
                <i className="fa-solid fa-building-circle-xmark"></i> مباع
                بالكامل
              </button>
            </li>
            <li className={`${styles['slash']}`}>/</li>
            <li>
              <button
                className=""
                style={{ backgroundColor: '#003f3f', color: '#fff;' }}
              >
                <i className="fa-solid fa-building-circle-exclamation"></i> تحت
                الإنشاء
              </button>
            </li>
          </ul>
          <div className="row">
            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/4/%D9%85%D9%83%D9%8A%D9%86-34">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715553090.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 34"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي العارض{' '}
                    </span>

                    <span className={`${ProjectStyle['sale-badge']}`}> متاح للبيع</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/4/%D9%85%D9%83%D9%8A%D9%86-34"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 34{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>شقق فاخرة</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>
                      254 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي العارض
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>
                      98 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/8/%D9%85%D9%83%D9%8A%D9%86-35">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715553001.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 35"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي العارض{' '}
                    </span>

                    <span className={`${ProjectStyle['sale-badge']}`}> متاح للبيع</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/8/%D9%85%D9%83%D9%8A%D9%86-35"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 35{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>شقق فاخرة</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>8 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي العارض
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>
                      97 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/12/%D9%85%D9%83%D9%8A%D9%86-39">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552884.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 39"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي الرمال{' '}
                    </span>

                    <span className={`${ProjectStyle['sale-badge']}`}> متاح للبيع</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/12/%D9%85%D9%83%D9%8A%D9%86-39"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 39{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>شقق فاخرة</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>
                      208 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي الرمال
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>
                      85 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/13/%D9%85%D9%83%D9%8A%D9%86-50">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552752.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 50"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي العارض{' '}
                    </span>

                    <span className={`${ProjectStyle['sale-badge']}`}> متاح للبيع</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/13/%D9%85%D9%83%D9%8A%D9%86-50"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 50{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>شقق فاخرة</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>
                      104 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي العارض
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>
                      96 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/14/%D9%85%D9%83%D9%8A%D9%86-42">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552731.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 42"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي الرمال{' '}
                    </span>

                    <span className={`${ProjectStyle['sale-badge']}`}> متاح للبيع</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/14/%D9%85%D9%83%D9%8A%D9%86-42"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 42{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>فلل وادوار فاخرة</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>
                      83 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي الرمال
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>
                      45 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/15/%D9%85%D9%83%D9%8A%D9%86-46">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552712.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 46"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي النرجس{' '}
                    </span>

                    <span className={`${ProjectStyle['sale-badge']}`}> متاح للبيع</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/15/%D9%85%D9%83%D9%8A%D9%86-46"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 46{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>34 تاون هاوس فاخر - مساحات تبدأ من 300م وإلى 500م</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>
                      33 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي النرجس
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>
                      35 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/16/%D9%85%D9%83%D9%8A%D9%86-47">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552687.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 47"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي العارض{' '}
                    </span>

                    <span className={`${ProjectStyle['sale-badge']}`}> متاح للبيع</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/16/%D9%85%D9%83%D9%8A%D9%86-47"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 47{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>56 تاون هاوس فاخر - مساحات تبدأ من 280م إلى 330م</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>
                      56 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي العارض
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>
                      14 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/17/%D9%85%D9%83%D9%8A%D9%86-48">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552661.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 48"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي جرير{' '}
                    </span>

                    <span className={`${ProjectStyle['sale-badge']}`}> متاح للبيع</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/17/%D9%85%D9%83%D9%8A%D9%86-48"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 48{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>شقق فاخرة</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>
                      192 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي جرير
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>
                      15 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/33/%D9%85%D9%83%D9%8A%D9%86-52">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552251.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 52"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي العارض{' '}
                    </span>

                    <span className={`${ProjectStyle['sale-badge']}`}> متاح للبيع</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/33/%D9%85%D9%83%D9%8A%D9%86-52"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 52{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>شقق وأدوار فاخرة</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>
                      63 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي العارض
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>
                      17 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/34/%D9%85%D9%83%D9%8A%D9%86-53">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552208.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 53"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي الياسمين{' '}
                    </span>

                    <span className={`${ProjectStyle['sale-badge']}`}> متاح للبيع</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/34/%D9%85%D9%83%D9%8A%D9%86-53"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 53{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>ادوار فاخرة</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>4 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي الياسمين
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>0 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/35/%D9%85%D9%83%D9%8A%D9%86-54">
                    <img
                      src="https://asasmakeen.com/uploads/products/1716711866.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 54"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي الياسمين{' '}
                    </span>

                    <span className="construction-badge"> تحت الإنشاء</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/35/%D9%85%D9%83%D9%8A%D9%86-54"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 54{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>شقق تأجير</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>0 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي الياسمين
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>0 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/36/%D9%85%D9%83%D9%8A%D9%86-56">
                    <img
                      src="https://asasmakeen.com/uploads/products/1716711845.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 56"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي العارض{' '}
                    </span>

                    <span className="construction-badge"> تحت الإنشاء</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/36/%D9%85%D9%83%D9%8A%D9%86-56"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 56{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>شقق فاخرة</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>0 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي العارض
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>0 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/38/%D9%85%D9%83%D9%8A%D9%86-51">
                    <img
                      src="https://asasmakeen.com/uploads/products/1716711534.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 51"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي الحمراء{' '}
                    </span>

                    <span className="construction-badge"> تحت الإنشاء</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/38/%D9%85%D9%83%D9%8A%D9%86-51"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 51{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>مجمع تجاري وفندقي</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>0 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي الحمراء
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>0 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/5/%D9%85%D9%83%D9%8A%D9%86-30">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715553071.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 30"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي قرطبة{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/5/%D9%85%D9%83%D9%8A%D9%86-30"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 30{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p></p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>4 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي قرطبة
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>
                      100 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/6/%D9%85%D9%83%D9%8A%D9%86-31">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715553045.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 31"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي اليرموك{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/6/%D9%85%D9%83%D9%8A%D9%86-31"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 31{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>شقق فاخرة</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>8 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي اليرموك
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>
                      100 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/7/%D9%85%D9%83%D9%8A%D9%86-32">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715553024.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 32"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي اليرموك{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/7/%D9%85%D9%83%D9%8A%D9%86-32"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 32{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p></p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>3 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي اليرموك
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>
                      100 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/9/%D9%85%D9%83%D9%8A%D9%86-36">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552975.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 36"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي العارض{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/9/%D9%85%D9%83%D9%8A%D9%86-36"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 36{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>شقق فاخرة</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>
                      140 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي العارض
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>
                      100 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/10/%D9%85%D9%83%D9%8A%D9%86-37">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552947.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 37"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي العارض{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/10/%D9%85%D9%83%D9%8A%D9%86-37"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 37{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>شقق فاخرة</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>
                      190 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي العارض
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>
                      100 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/11/%D9%85%D9%83%D9%8A%D9%86-38">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552920.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 38"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي الياسمين{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/11/%D9%85%D9%83%D9%8A%D9%86-38"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 38{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p>شقق فاخرة</p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>6 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي الياسمين
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>
                      100 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/21/%D9%85%D9%83%D9%8A%D9%86-28">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552641.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 28"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي الملقا{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/21/%D9%85%D9%83%D9%8A%D9%86-28"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 28{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p></p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>0 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي الملقا
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>0 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/22/%D9%85%D9%83%D9%8A%D9%86-27">
                    <img
                      src="https://asasmakeen.com/uploads/products/1698337773.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 27"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي الياسمين{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/22/%D9%85%D9%83%D9%8A%D9%86-27"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 27{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p></p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>1 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي الياسمين
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>0 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/23/%D9%85%D9%83%D9%8A%D9%86-26">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552471.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 26"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي الازدهار{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/23/%D9%85%D9%83%D9%8A%D9%86-26"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 26{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p></p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>1 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي الازدهار
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>0 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/24/%D9%85%D9%83%D9%8A%D9%86-25">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552448.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 25"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي الملقا{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/24/%D9%85%D9%83%D9%8A%D9%86-25"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 25{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p></p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>1 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي الملقا
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>0 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/25/%D9%85%D9%83%D9%8A%D9%86-24">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552420.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 24"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي العقيق{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/25/%D9%85%D9%83%D9%8A%D9%86-24"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 24{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p></p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>0 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي العقيق
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>0 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/26/%D9%85%D9%83%D9%8A%D9%86-19">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552399.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 19"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي الملقا{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/26/%D9%85%D9%83%D9%8A%D9%86-19"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 19{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p></p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>1 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي الملقا
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>0 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/27/%D9%85%D9%83%D9%8A%D9%86-18">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552369.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 18"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي القيروان{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/27/%D9%85%D9%83%D9%8A%D9%86-18"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 18{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p></p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>1 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي القيروان
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>0 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/28/%D9%85%D9%83%D9%8A%D9%86-17">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552348.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 17"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي الملقا{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/28/%D9%85%D9%83%D9%8A%D9%86-17"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 17{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p></p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>0 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي الملقا
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>0 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/29/%D9%85%D9%83%D9%8A%D9%86-15">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552324.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 15"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي حطين{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/29/%D9%85%D9%83%D9%8A%D9%86-15"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 15{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p></p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>0 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي حطين
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>0 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/30/%D9%85%D9%83%D9%8A%D9%86-13">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552302.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 13"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي الملقا{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/30/%D9%85%D9%83%D9%8A%D9%86-13"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 13{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p></p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>0 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي الملقا
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>0 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
              <div className={`${ProjectStyle['project-item']}`}>
                <div className={`${ProjectStyle['project-img']}`}>
                  <a href="https://asasmakeen.com/ar/u/pu/3/31/%D9%85%D9%83%D9%8A%D9%86-12">
                    <img
                      src="https://asasmakeen.com/uploads/products/1715552280.webp"
                      className={`${ProjectStyle['img-fluid']}`}
                      alt="مكين 12"
                    />
                  </a>
                  <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-between`}>
                    <span className={`${ProjectStyle['project-place']}`}>
                      <i className="fas fa-map-pin"></i>حي الملقا{' '}
                    </span>

                    <span className="soldout-badge"> مباع بالكامل</span>
                  </div>
                </div>
                <div className={`${ProjectStyle['project-info']}`}>
                  <a
                    href="https://asasmakeen.com/ar/u/pu/3/31/%D9%85%D9%83%D9%8A%D9%86-12"
                    className={`${ProjectStyle['project-title']}`}
                  >
                    {' '}
                    مكين 12{' '}
                  </a>
                  <div className={`${['project-description']}`}>
                    <p></p>
                  </div>
                  <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3`}>
                    <li>
                      {' '}
                      <i className="fas  fa-home" title=""></i>0 وحدة
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-map-pin" title=""></i>
                      حي الملقا
                    </li>

                    <li>
                      {' '}
                      <i className="fas  fa-percentage" title=""></i>0 مباع
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${styles['projects_footer']}`}>
            <Pagination>
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

          </div>
        </div>
    </>
}
export default WorksList;