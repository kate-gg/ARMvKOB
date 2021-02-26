const Head = require('next/head').default
,Link = require('next/link').default
,{useState,useEffect} = require('react')
,axios = require('axios')
export default function Home() {
 const [arm,sArm] = useState(0)
 const [kob,sKob] = useState(0)
 const [last,sLast] = useState(undefined)
 useEffect(()=>{
  fetch()
  setInterval(fetch, 6000);
 },[])
 const fetch = async () => {
  try{
   const {data:{group9arm,groupKob,updatedAt}} = await axios.get('https://9arm-vs-kob-api.vercel.app/data.json')
   sArm(group9arm)
   sKob(groupKob)
   sLast(updatedAt)
  } catch(e){ console.log(e) }
 }
 return (
  <div>
   <Head>
    <title>KOB vs ARM</title>
   </Head>
   <div className="d-flex flex-column justify-content-center" style={{height:'100vh'}}>
    <div className="d-flex flex-column bg-primary w-100 xh" style={{minHeight:'52.1vh'}}>
      <div className="bottom-0 bg-danger f-m" style={{height:'100%'}}>
       <div className="position-relative" style={{height:'100%'}}>
       <img src="/kob.png" style={{height:'100%'}} className="position-absolute"/>
       <div className="position-absolute pt-2 pt-md-4 pt-xl-5 start-50 c">
        <h1 className="title">กลุ่มนักเขียนโปรแกรม</h1>
        <h1>{kob}</h1>
        <a target="_blank" className="btn btn-light">โดนแบนจากกลุ่มแล้ว หาลิ้งไม่ได้</a>
       </div>
       </div>
      </div>
      <div className="bottom-0 end-0 f-m " style={{height:'100%'}}>
        <div className="position-relative" style={{height:'100%'}}>
        <img src="/arm.png" style={{height:'100%'}} className="position-absolute end-0"/>
        <div className="position-absolute pt-2 pt-md-4 pt-xl-5 ps-xl-5 ps-3 start-0">
         <h1 className="title">หลังบ้านนายอาร์ม</h1>
         <h1>{arm}</h1>
         <Link href="https://facebook.com/groups/9arm.community"><a target="_blank" className="btn btn-light">เข้าร่วมกลุ่ม</a></Link>
        </div>
       </div>
      </div>
    </div>
    <center className="mt-4 lh-4">
     {last&&<>Updated at {last}</>}<br/>
     Created by <Link href="https://fb.me/H3ntaiPro"><a target="_blank" className="text-white">Phairoh Kwaigno</a></Link> Made with 💖<br/>
     Sponsered by <Link href="https://fb.me/dritestudio"><a target="_blank" className="text-white">
     <svg viewBox="0 0 64 64" width="32"><path fill="#fff" d="M27 16l5 3L55 6V0zm-17-3l19 11v29L10 64V31l6 3v19l7-4V28l-13-8zm45-1v7l-13 8v7l13-7v11l-6 3v-4l-14 8V24zM21 64h11l23-13v-6z"/></svg>
      DriteStudio
      </a></Link><br/>
      <Link href="https://fb.me/dritestudio"><a target="_blank" className="text-white">
      <svg width="24" viewBox="0 0 1024 1024" fill="none" className="me-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#fff"/></svg> 
       kate-gg/ARMvKOB
      </a></Link>
    </center>
   </div>
  </div>
 )
}
