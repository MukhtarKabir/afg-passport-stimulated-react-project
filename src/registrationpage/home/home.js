
import { Button, Container, Row } from 'react-bootstrap'
import './home.css'
import { Link } from 'react-router-dom'
// react icons
// import { RiNumber1 } from "react-icons/ri";
// 
export default function Home(){
    return(
    <div className="home-background">
        <Container className='bg-white text-black px-5 my-5'>
            <Row className='py-5 my-5 home-header text-white'>
                <h1>امارت اسلامی افغانستان</h1>
                <h2>رهنمود برای متقاضیان پاسپورت</h2>
            </Row>
            {/* جستوجو بر اساس بارکود  */}
            <Row className='research-with-barcode'>
                <Link>
                <Button style={{width:'20rem'}}> جستوجو بر اساس بارکود </Button>
                </Link>
            </Row>
            {/*  */}
            <Row>
                <p>متقاضیان محترم!
                برای تکمیل شدن و چاپ پاسپورت نیاز به معلومات و مدارک ذیل میباشد لطفاً در تهیه مدارک تکمیل فورم انلاین مطابق با رهنمود های آتی عمل کنید.
                </p>
                <div>
                    <span className='fw-bold fs-3'>یاداشت</span>
                : فورم درخواست پاسپورت برای یکبار خانه پری میشود.
                </div>
                <p>
                در صورت مواجه شدن به مشکلات تخنیکی به شماره 105 اداره آسان خدمت و در صورت بروز مشکلات در طی مراحل اسناد قانونی پاسپورت به شماره ۰۲۰۲۵۱۰۹۸۴ ، ۰۲۰۲۵۰۰۴۰۰ اداره مرکزی پاسپورت وزارت امور داخله به تماس شوید.
                </p>
                {/* >اسناد مورد ضرورت */}
                <div>
                    <i className='number-border'> 1 </i>
                    <span className='fs-3'>اسناد مورد ضرورت</span>
                </div>
                <hr />
                <div>
                    <div className="fw-bold">اسناد مورد ضرورت عبارت اند از:</div>
                    <ol>
                        <li>تذکره تابعیت
                            <ul>
                            <li>تذکره افرادی که متقاضی دریافت پاسپورت از مرکز بوده و ساکن اصلی ولایات دیگر میباشند ، باید از طرف اداره محترم مستقل ثبت و احوال نفوس در مرکز تائید گردد.</li>
                            <li>تذکره متقاضی ساکن اصلی کابل باید تائیدی مدیریت عمومی ثبت احوال نفوس ولایت کابل را داشته باشد.</li>
                            <li>تذکره متقاضی که درخواست دریافت پاسپورت از ولایت مربوطه دارند باید توسط مدیریت ثبت و احوال نفوس همان ولایت تائید گردد.</li>
                            <li>کارت تولد اطفال تنها پس از تائیدی اداره مستقل ثبت و احوال نفوس و واحد های دومی آن در ولایات قابل اعتبار میباشد.</li>
                            <li>تذکره اطفال ایکه سن هفت ساله گی را تکمیل کرده اند باید دارای عکس باشد.</li>
                            <li>متقاضی ایکه عکس موجود در تذکره تابعیت شان قابل شناختن نبوده و یا با چهره ظاهری شان همخوانی ندارند مکلف به نصب فوتوی جدید میباشند.</li>
                            <li>تذکره متقاضیان ایکه سکونت اصلی و فعلی شان متفاوت بوده و درخواست صدور پاسپورت محل سکونت فعلی خود دارند باید توسط واحد های دومی اداره ثبت و احوال نفوس صورت بگیرد.</li>
                            <li>متقاضیان ایکه درخارج از کشور متولد شده اند مکلف به ارائیه کارت تولد با تائید اداره محترم مستقل ثبت احوال نفوس میباشند.</li>
                            </ul>
                        </li>
                        <li>تکمیل نمودن فورم آنلاین.</li>
                        <li>چهار قطعه عکس (۵x۴) معیاری (پس زمینه عکس باید سفید باشد و از عکس متقاضی بیشتر از 6 ماه سپری نشده باشد).</li>
                        <li>رسید تحویلی محصول پاسپورت.</li>
                        <li>رسید تحویلی محصول پاسپورت.
                        درخواست کتبی با نصب فوتوی متقاضی.
                        حضور در اداره مرکزی پاسپورت یا واحد های دومی آن برای بایومتریک و ارائیه اسناد مورد ضرورت.
                        پاسپورت برای متقاضیان زیرسن هجده سال تنها به اساس درخواست کتبی والدین</li> <li>، ولی ویا وصی قانونی شخص و یا به اجازه محکمه صادر میگردد و اگر درخواست کننده مادر شخص میباشد ملزم به تثبیت قرابت خود ازنواحی محل زیست میباشد.</li> <li>
                        پاسپورت برای اشخاص مبتلا به اختلالات دماغی به اساس درخواست اقارب اصولی انها صادر میشود.
                        تاجران ملی متقاضی پاسپورت تجارتی مکلف به ارائیه جواز معتبر و مکتوب وزارت های محترم تجارت <li>و سایر ادارات مربوط مطابق قانون میباشد.</li>
                        افراد زیر علاوه بر موارد فوق ملزم به ارایه کارت هویت و مکتوب رسمی میباشند که<li> از طرف اداره صاحب صلاحیت صادر شده و روی عکس شخص متقاضی و آمر تائید کننده شخص که به مکتوب الحاق گردیده مهر شده باشد.</li>
                        محصلان ایکه ازطرف دولت برای ادامه تحصیل به خارج از کشور میروند.<li>
                        مریضان و همراه شان که به معرفی وزارت صحت عامه و یا سره میاشت برای تداوی به خارج از کشور میروند.</li><li>
                        مجروحان نیروهای امنیتی که غرض تداوی به خارج فرستاده میشوند.</li><li>
                        ورزشکاران ایکه برای شرکت در برنامه های ورزشی خارج از کشور توسط کمیته ملی المپیک و ریاست عمومی تربیت بدنی معرفی میشوند ماموران خدمات ملکی بست سوم و بالاتر ازآن.</li>
                        </li>
                    </ol>
                </div>
                {/* مدت اعتبار پاسپورت< */}
                <div>
                    <i className='number-border'> 2 </i>
                    <span className='fs-3'> مدت اعتبار پاسپورت</span>
                </div>
                <hr />
                <ol>
                    <li>پاسپورت نظر به درخواست شخص و یا ده سال صادر گردیده در صورت انقضای </li>
                    <li>برای افرادی که مدت اعتبار پاسپورت شان تمام نشده اما نسبت به سفرهای متعدد از اوراق انخت محصول معینه پاسپورت جدید صادر میگردد و اگر پاسپورت قبلی ویزای معتبر یکی از کشورها را داشته باشد کنسل گردید</li>
                    <li>پاسپورت افرادی که هنوز مدت اعتبار آن منقضی نشده اما مدت اعتبار کمترهای میزبان را دارد به درخوا</li>
                </ol>
                {/* مبالغ قابل پرداخت */}
                <div>
                    <i className='number-border'> 2 </i>
                    <span className='fs-3'>  مبالغ قابل پرداخت </span>
                </div>
                <hr />
                <ol>
                    <li>محصول پاسپورت برای مدت پنج سال مبلغ (۵۵۰۰) افغانی وبرای اطفال زیر پانزده ساکتوب رسمی کمیسون صحی وزارت محترم صحت عامه را داشته باشند (۳۲۵۰) افغانی میباشد.</li>
                    <li>محصول پاسپورت داررده اند مبلغ (۱۱۰۰۰) افغانی میباشد.</li>
                    <li>محصول پاسپورت برای کسانیکه پاسپورت شان را تخریب کرده اند (۳۰۰۰۰) افغانی میباشد.</li>
                    <li>متقاضیان علاوه بر پرداخت محصول پاسپورت لال احمر افغانی و هزینه خدمات پستی به مبلغ (۲۰۰)افغانی درولایات میباشند.</li>
                    <li>محصول پاسپورت متقاضیان ایکه پاسپورت شان حریق شده پس از ارائه تصدیونی فوق میباشد.</li>
                    <li> از ارائیه تصدیق افغان اعلانات در داخل و تصدیق ریاست امور قونسلی وزارت امور خارجه در خارج از کشور دو برابر </li>
                </ol>
                {/* چگونگی پرداخت */}
                <div>
                    <i className='number-border'> 3 </i>
                    <span className='fs-3'>  چگونگی پرداخت</span>
                </div>
                <hr />
                <div>1.پس از تکمیل فورم آنلاین ثبت نام با همراه داشتن یک کاپی از فورم تکمیل شده به یکی از نماینده گی های دافغانستان بانک در کابل یا ولایات مراجعه کرده و در مقابل پرداخت مبالغ تعین شده فوق رسید دریافت کنند.
                </div>
                {/*  پاسپورت رایگان */}
                <div>
                    <i className='number-border'> 4 </i>
                    <span className='fs-3'>   صدور پاسپورت رایگان  </span>
                    <ol>
                        <li>پاسپورت برای افراد زیر به صورت رایگان صادر میشود :
                        اطفال مریض و یک تن همراه شان که از طرف جمعیت هلال احمر افغانی غرض تداوی به خارج از کشور فرستاده میشوند.</li>
                                                <li>پاسپورت برای افراد زیر به صورت رایگان صادر میشو
                        اطفال مریض و یک تن همراه شان که از طرف جمعیت هلال احمر افغانی غرض تداوی به خارج از کشور فرستاده میشوند.</li>
                                                <li>
                        اطفال مریض و یک تن همراه شان که از طرف جمعیت هلال احمر افغانی غرض تداوی به خارج از کشور فرستاده میشوند.</li>
                                                <li>پاسپورت برای افراد زیر به صورت رایگان صادر میشود :
                        ورزشکاران ایکه از طرف ریاست عمومی تربیت بدنی و یا کمیته ملی المپیک برای شرکت در رقابت های بین المللی ورزشی معرفی میشوند.
                        اطفال مریض و یک تن همراه شان که از طرف جمعیت هلال احمر افغانی غرض تداوی به خارج از کشور فرستاده میشوند.</li>
                    </ol>
                </div>
                <hr />
                {/* موانع صدور پاسپورت */}
                <div>
                    <i className='number-border'> 4 </i>
                    <span className='fs-3'>   صدور پاسپورت رایگان  </span>
                    <ol>برای متقاضیان زیر پاسپورت صادر نمیشود :                  <li>
                    اطفال ایکه والدین وصی ، و یا وکیل قانونی نداشته باشند.</li>
                    <li>
                    افراد ایکه بنا بر مقروض بودن و یا هرگونه تعهد انجام نشده ازجانب نهاد های ذیصلاح ممنوع الخروج شده باشند.
                    درصورت ایکه دستگاه بیف و بایومتریک ممنوع الخروج بودن شانرا تثبیت کند.</li>
                    <li> 
                    درصورت ایکه دستگاه بیف و بایومتریک ممنوع الخروج بودن شانرا تثبیت کند.</li>
                    <li>برای متقاضیان زیر پاسپورت صادر نمیشود :
                    درصورت ایکه دستگاه بیف و بایومتریک ممنوع الخروج بودن شانرا تثبیت کند.</li>
                    <li>برای متقاضیان زیر پاسپورت صادر نمیشود :
                    درصورت ایکه دستگاه بیف و بایومتریک ممنوع الخروج بودن شانرا تثبیت کند.</li>
                    </ol>
                </div>
                <hr />
                {/*  */}
                <div className='py-4'>
                    <Link to={'/personalinfo'} className='text-decoration-none text-white'>
                        <Button> درخواست </Button>
                    </Link>
                </div>
            </Row>
        </Container>
        <div style={{height:'250px'}}></div>
    </div>
    )
}