'use client'
import Image from 'next/image'
import Head from 'next/head'
import {IoMdNutrition} from 'react-icons/io'
import {IoAccessibilitySharp} from 'react-icons/io5'
import {GiBodyHeight, GiNightSleep, GiBrain} from 'react-icons/gi'
import {FaBacteria} from 'react-icons/fa'
import {BsFillLungsFill, BsFacebook, BsInstagram, BsTwitter, BsPinterest} from 'react-icons/bs'
import {FaShieldHalved} from 'react-icons/fa6'
import {AiOutlineMail, AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'
import { useRef, useState, useEffect } from 'react';
import Hamburger from 'hamburger-react'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header className='header p-4 bg-[#cde4ea] flex items-center justify-between fixed top-0 right-0 left-0 z-10'>
          <div className='flex h-12 cursor-pointer'>
              <Image alt="" src="/logo.png" width={90} height={1} priority={true}></Image>
              <Image alt="" src="/gfmt.png" width={70} height={1} priority={true}></Image>
          </div>
          <nav className='hidden md:flex'>
              {["Về chúng tôi", "Liên hệ"].map(i => 
                  <div key={i} className='flex'>
                    <div className='text-center cursor-pointer'>{i}</div>
                    <div className='mx-2 md:mx-4'></div>
                  </div>
              )}
          </nav>
          <div className='flex items-center'>       
          <SearchButton/>
              <div className='mx-1.5'></div>
              <HamburgerComponent/>
          </div>
      </header>
      <div className="bg-[url(/A.png)] bg-[length:100%_100%] h-[700px] flex justify-center px-12 mt-20 w-full">
          <div className='my-24'>  
            <div className='mx-auto'>
              <h1 className='font-bold text-3xl md:text-4xl text-center'>Grow Grow</h1>
              <p className='text-xl mt-5 text-center'>Siro phát triển chiều cao và sức khỏe toàn diện cho trẻ đến từ Nhật Bản</p>
              <button className='mx-auto bg-black text-white w-36 h-12 mt-5 rounded-full flex items-center justify-center border border-black hover:bg-white hover:text-black transition '>
                  Mua ngay<span className='ml-2'><AiOutlineShoppingCart/></span>         
              </button>
            </div>
            <div className='md:w-1/2 mx-auto mt-12 md:mt-0 bg-black'><Image width={1200} height={1} alt="" src="/znfnf.png"  priority={true}></Image></div>
          </div>
        </div>
      <section className='w-full'><Wid/></section>
      <section className='w-full'><NotableBenefits/></section>
      <section className='w-full'>
          <h2 className='font-bold text-4xl mx-auto text-center mb-8 text-sky-400 mt-20'>Quy cách đóng gói</h2>
          <div className='flex md:flex-row flex-col items-center md:justify-between py-4 px-2 md:px-20'>
            <Image alt=""  src="/gh.png" className='w-2/3 md:w-2/5 order-2 md:order-1 mt-8 md:mt-0' width={1200} height={1} ></Image>
            <div className='w-full md:w-1/2 md:order-2 order-1 '>
              <div className='flex'>
                  {["gói/hộp", "gram/gói"].map(i =>
                    <div className='pt-4 w-1/2' key={i}>
                      <div className='border-l-2 pl-4 border-l-sky-400 text-sky-400 text-3xl font-bold w-1/2 mx-auto'>30</div>
                      <p className='mt-3 w-1/2 mx-auto text-lg'>{i}</p>
                    </div>
                  )}
              </div>
            </div>
          </div> 
        </section>
        <section className='w-full'><IngredientTab/></section>
        <section className='w-full'><Accordion/></section>
        <footer className='bg-black md:flex justify-around text-white py-6 text-center md:text-start w-full'>
          <div>
              <p>Nhà phân phối: TRƯƠNG THANH TÚ – MẸ VÀ BÉ</p>
              <p>Địa chỉ: 15 Lý Nam Đế, Hoàn Kiếm, Hà Nội</p>
              <p>Hotline: 088 960 3579</p>
          </div>
          <div className='my-6 md:my-0 md:mx-6'>
              <p>KẾT NỐI CHÚNG TÔI QUA</p>
              <div className='flex justify-center mt-2'>
                  <BsFacebook className='cursor-pointer '/>
                  <div className='mx-2'></div>
                  <BsInstagram className='cursor-pointer '/>
                  <div className='mx-2'></div>
                  <BsTwitter className='cursor-pointer '/>
                  <div className='mx-2'></div>
                  <AiOutlineMail className='cursor-pointer '/>
              </div>
          </div>
          <div>
              <p>HOTLINE HỖ TRỢ (VIBER, ZALO)</p>
              <p>0983 191 166</p>
          </div>
      </footer>

    </main>
  )
}
function IngredientTab() {
  const ingredients = [{id: 1, ingredient: "Canxi lactate", amount: "30"},
        {id: 2, ingredient: "Vitamin D3 (0,25%)", amount: "2"},
        {id: 3, ingredient: "Peptide lòng đỏ trứng", amount: "10"},
        {id: 4, ingredient: "Men chứa kẽm (10%)", amount: "20"},
        {id: 5, ingredient: "Magiê sunfat", amount: "80"},
        {id: 6, ingredient: "Axit folic", amount: "0,2"},
        {id: 7, ingredient: "Dầu cá tinh luyện (DHA/EPA)", amount: "46,7515"},
        {id: 8, ingredient: "L-ornithine hydrochloride", amount: "10"},
        {id: 9, ingredient: "Protein", amount: "250"},
        {id: 10, ingredient: "Mật ong tinh khiết", amount: "4500"},
        {id: 11, ingredient: "Keo ong", amount: "30"},
        {id: 12, ingredient: "Chiết xuất Phosphatidylserin (10:1)", amount: "5"},
        {id: 13, ingredient: "Vi khuẩn axit lactic", amount: "4,5"},
        {id: 14, ingredient: "Oligosaccharide", amount: "6300"},
        {id: 15, ingredient: "Vitamin A (10%)", amount: "12"},
        {id: 16, ingredient: "Vitamin C", amount: "10"},
        {id: 17, ingredient: "Vitamin E", amount: "2"},
        {id: 18, ingredient: "Vitamin B1", amount: "2"},
        {id: 19, ingredient: "Vitamin B2", amount: "2"},
        {id: 20, ingredient: "Vitamin B6", amount: "2"},
        {id: 21, ingredient: "Vitamin B12 (0,1%)", amount: "2"},
  ]
      return (
        <>
          <h2 className='text-center font-bold text-3xl md:text-4xl  mb-12 z-10 mt-20 text-sky-400'>Thành phần dinh dưỡng</h2>
          <div id="ingredients" className='md:w-3/5 md:mx-auto mx-2'>
            <div className='flex justify-between font-bold px-4 py-5 text-white rounded-t-xl bg-sky-400 items-center'>
                <p>Thành phần </p>
                <p className='text-end'>Hàm lượng (mg/gói)</p>
            </div>
            <div className='h-[500px] overflow-y-scroll'>
                {ingredients.map(i =>
                  <div key={i.id} className={'flex justify-between py-4 px-4 border-b'}>
                        <p>{i.ingredient}</p>
                        <p>{i.amount}</p>
                  </div>
                )}
            </div>
          </div>
        </>
      )
}

function SearchButton() {
  const [toggle, setToggle] = useState(false)
  let style
  toggle ? style = "w-40 md:w-60 pl-2 border" : style = "w-0 pl-0"
  const ref = useRef(null)
  useEffect(() => {
      document.addEventListener("click", searchOff, true)
  }, [])
  const searchOff = (e) => {
    !ref.current.contains(e.target) && setToggle(false)
  }
  return (
    <>
      <button onClick={() => setToggle(true)}><AiOutlineSearch className='text-2xl'/></button>
      <form className='fixed right-28 md:right-32 top-6'>
        <input ref={ref} className={'py-1 border-black rounded-lg transition-[width] ' + style}></input>
      </form>
    </>
  )
}

function HamburgerComponent() {
  const [isOpen, setOpen] = useState(false)
  let status
  isOpen ? status = "" : status = "hidden"
  return (
    <>
      <div className="z-10 relative"><Hamburger toggled={isOpen} toggle={setOpen} size={20}/></div>
      <div className={'fixed top-0 bottom-0 left-0 right-0 bg-[#cde4ea] flex justify-center items-center ' + status}>
        <div>
            {["Về chúng tôi", "Liên hệ"].map(i => 
                <div key={i}>
                    <p className='cursor-pointer'>{i}</p>
                    <div className='my-6'></div>
                </div>
            )}
        </div>
      </div>
    </>
  )
}


function NotableBenefits() {
  const texts = [{img: "gdfg.png", id: 1, text: "Sản phẩm hàng đầu của Nhật Bản về SỰ PHÁT TRIỂN TOÀN DIỆN dặc biệt là SỰ PHÁT TRIỂN CHIỀU CAO của trẻ với tổng hợp 22 thành phần chọn lọc."},
                 {img: "sdfg.png", id: 2, text: "Các chuyên gia Nhật Bản đã xây dựng một công thức hoàn hảo không chỉ tập trung vào Canxi mà còn có các thành phần khác như Men chứa kẽm, Peptide lòng đỏ trứng, vitamin D3... Sự kết hợp này sẽ giúp xương phát triển tối đa để tăng chiều cao cho trẻ và ưu việt hơn rất nhiều so với những sản phẩm tăng cường chiều cao thông thường chỉ đơn thuần tập trung vào 1 thành phần tốt cho xương là canxi."},
                 {img: "Artboard 6.png", id: 3, text: "Đây là một sản phẩm với công thức không chỉ giúp hấp thụ nhóm các chất dinh dưỡng để tăng chiều cao từ sản phẩm mà còn hấp thụ canxi tự nhiên (thông qua thức ăn hàng ngày: trứng, sữa, phomai, tôm, cua, …) bằng cách đề cao nhóm 3 lợi khuẩn axit lactic, Bifidobacteria và Oligosaccharide giúp trẻ có 1 hệ tiêu hóa khỏe mạnh hấp thu & chuyển hóa các chất dinh dưỡng ở mức cao nhất. Sức khỏe đường ruột chiếm 70% sức khỏe tổng thể nên đây là yếu tố cốt lõi giúp trẻ có 1 cơ thể khỏe mạnh & tăng chiều cao tối đa"},
                 {img: "kid-e1604326070805.png", id: 4, text: "Thành phần có vitamin tổng hợp, keo ong… và các dưỡng chất cần thiết khác giúp trẻ có có hệ hô hấp và cơ thể khỏe mạnh, phòng ngừa sự tấn công của các loại vi khuẩn và vi rút, tăng cường sức đề kháng và khả năng miễn dịch."},
                 {img: "outside-the-box-cropped.png", id: 5, text: " Sản phẩm giúp trẻ không chỉ giúp trẻ phát triển về thể chất, chiều cao mà còn giúp tăng cường trí nhớ, cải thiện trí thông minh nhờ DHA/EPA cải thiện chức năng não bộ, Phosphatidylserin phát triển và kích hoạt các tế bào não."},
                 {img: "drop-5818339_1280.png", id: 6, text: "Mùi vị thơm ngon, độ ngọt vừa phải và không có đường có thể gây sâu răng cho trẻ; Bào chế dạng nước có khả năng hấp thu tốt nhất cho cơ thể so với các dạng bào chế khác; 1 gói 30ml tiện lợi để sử dụng và bảo quản."},
                 {img: "gmp-logo.png", id: 7, text: "Sản xuất tại nhà máy đạt chuẩn GMP có tiêu chuẩn chất lượng khắt khe về nguyên liệu, máy móc, công nghệ, quy trình sản xuất và chất lượng thành phẩm với đội ngũ chuyên gia hàng đầu nghiên cứu về nguồn dinh dưỡng & phát triển toàn diện của trẻ"}]
  return (
    <div className='mt-16'>
          {texts.map(i =>
            <div key={i.id} className={i.id % 2 === 0 ? 'py-8 md:flex justify-around items-center h-full bg-blue-300' 
                                                      : 'py-8 md:flex justify-around items-center h-full bg-[#c8ddfa]'}>
                  <div className={i.id % 2 === 0 ?  'mx-auto md:mx-0 py-8 h-1/2 md:h-4/5 w-1/2 md:w-1/3 flex items-center justify-center'
                                                 :  'mx-auto md:mx-0 py-8 h-1/2 md:h-4/5 w-1/2 md:w-1/3 flex items-center justify-center order-2'}>
                    <img alt="" src={i.img}></img>
                  </div>
                  <div className='md:w-1/3 '>
                    <h2 className='font-bold text-3xl md:text-4xl mb-8 text-center md:text-start'>Grow Grow có gì nổi bật?</h2>
                    <p className='text-center md:text-justify mx-2 md:mx-0'>{i.text}</p>
                  </div>
            </div>
          )}
    </div>
  )
}
function Wid() {
  const data1 = [{logo: <IoMdNutrition/>, text: "Bổ sung dinh dưỡng giúp trẻ phát triển toàn diện nhất"},
                  {logo: <GiBodyHeight/>, text: "Giúp phát triển độ dài xương, phát triển chiều cao cho trẻ"},
                  {logo: <GiBrain/>, text: "Giúp tăng cường phát triển trí não, tăng khả năng tập trung"},
                  {logo: <IoAccessibilitySharp/>, text: "Giúp tăng cường thể lực, sức khỏe cho trẻ"}]
  const data2 = [{logo: <FaShieldHalved/>, text: "Giúp trẻ tăng cường sức đề kháng, hệ miễn dịch của cơ thể"},
                  {logo: <FaBacteria/>, text: "Bổ sung lợi khuẩn tốt cho hệ tiêu hóa"},
                  {logo: <BsFillLungsFill/>, text: "Giúp bổ phổi, tăng cường hệ hô hấp của trẻ, giảm tình trạng viêm phổi, viêm đường hô hấp và ốm vặt"},
                  {logo: <GiNightSleep/>, text: "Giúp trẻ ăn và ngủ ngon hơn"}]
  return (
    <>
      <h2 className='text-center font-bold text-3xl md:text-4xl z-10 mt-20 text-sky-400'>Grow Grow</h2>
      <p className='text-lg text-center mt-4 md:mb-0 mb-20'>Giúp mẹ chăm con nhàn rỗi và mang đến sức khỏe toàn diện cho con</p>
      <div className='md:flex justify-around items-center mx-4 md:mx-12'>
          <WidCol data={data1}/>
          <img alt=""  src="8881630d46e995b7ccf8.jpg" className='md:w-1/3 md:mx-8 my-20 md:mx-0'></img>
          <WidCol data={data2}/>
      </div>
      </>
  )
}

function WidCol(props) {
  return (
    <div className='md:w-1/3 text-center'>    
        {props.data.map(i => 
            <div className='my-6 md:my-16 md:h-44' key={i.text}>
                <p className='border-2 text-sky-400 border-sky-400 rounded-full w-16 aspect-square flex justify-center items-center text-4xl mx-auto'>{i.logo}</p>
                <p className='md:w-3/4 mx-auto mt-4'>{i.text}</p>
            </div>
        )}  
    </div>
  )
}

function Accordion() {
  return (
      <div className='md:w-3/5 mx-auto my-12'>
        <div className='flex justify-between items-center ml-4 mt-8  text-sky-400' >
          <p className='font-bold text-xl md:text-2xl'>Cách sử dụng</p>
          <div className='h-[2.5px] flex-1 mx-4  bg-sky-400'></div>
        </div>
        <div className="px-2 mx-2">
          <p className='pt-4'>• Liều dùng: 1 gói 1 ngày.</p>
          <p>• Nên uống buổi sáng sau hoặc trước khi ăn 30 phút đến 1 tiếng.</p>
          <p>• Nên sử dụng theo liệu trình tối thiểu 3 đến 5 tháng để đạt hiệu quả tối đa.</p>
          <p className='pb-4'>• Sản phẩm có thể sử dụng duy trì thường xuyên mà không gây tác dụng phụ.</p>
        </div>
      </div>
  )
}
