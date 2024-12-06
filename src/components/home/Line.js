import React from 'react'
// import Banner from "../../../public/assets/img/hq720.jpg"
import { floorItems } from '../data/Data'
function Line() {
        return (

                <div className=" container" dir='rtl'>
                        <div className='container row mt-5'>
                                <h5 className='fs-2 m-2  '>

                                        مواقع لاهم البرامج الجغرافيه العالميه :
                                </h5>

                                <div className='col-md-6 border-bottom'>
                                        <p className="fs-4" dir="rtl" >


                                                <a href="https://www.arcgis.com " className="border-bottom text-dark">

                                                        1. Esri ArcGIS Online :
                                                </a>
                                                لإنشاء الخرائط وتحليل البيانات.
                                                <br></br>
                                                <br></br>

                                                <a href="https://www.naturalearthdata.com" className="border-bottom text-dark">
                                                        2. Natural Earth :
                                                </a>
                                                للحصول على بيانات مكانية عالمية.
                                                <br></br>
                                                <br></br>
                                                <a href="https://www.openstreetmap.org" className="border-bottom text-dark">
                                                        3. OpenStreetMap :
                                                </a>
                                                منصة مفتوحة لرسم الخرائط.
                                                <br></br>
                                                <br></br>
                                                <a href="https://earth.google.com" className="border-bottom text-dark">
                                                        4. Google Earth:
                                                </a>
                                                لدراسة المناطق الجغرافية بشكل تفاعلي.
                                                <br></br>
                                                <br></br>

                                                <a href="https://earthexplorer.usgs.gov" className="border-bottom text-dark">
                                                        5. USGS Earth Explorer:
                                                </a>
                                                لتحميل بيانات الأقمار الصناعية.
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                        </p>
                                </div>
                                <div className='col-md-6 d-none d-md-block  border-bottom'>

                                        < a href='https://3d-rho-amber.vercel.app/'>
                                                <img src='../assets/img/3dglobesearch.png' className=' img_Line_Bnner_sec' />
                                        </a>
                                        <a href='https://3d-rho-amber.vercel.app/' className='text-dark fs-2 border-bottom text-center'>my App 3D Globel</a>

                                </div>

                                <h5 className='fs-1 m-2  '>


                                        الخطوات التى يجب إتباعها للقيام بالعمل المساحى:

                                </h5>
                                <div className='col-md-6 border-bottom my-2'>

                                        <h5 className='text-primary fs-2'>
                                                على سبيل المثال :
                                        </h5>
                                        <p className='fs-3'>
                                                1.	العمل المكتبى .
                                                <br></br>
                                                2.	اختيار الأجهزة المناسبة للعمل .
                                                <br></br>
                                                3.	إعدادات أولية في الحقل .
                                                <br></br>
                                                4.	الرصد الأساسى النظرى للعمل المساحى.
                                                <br></br>
                                                5.	تصحيح الأعمال المساحية ( المسموح به ).
                                                <br></br>
                                                6.	كتابة تقريرالعمل المساحى.

                                        </p>
                                </div>
                                <div className='col-md-6 border-bottom my-2'>

                                        <img src='../assets/img/hq720.jpg' className='  m-2 img_Line_Bnner' />

                                </div>
                                

                        </div>
                </div>
        )
}

export default Line