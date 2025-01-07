"use client";
import Script from "next/script";

const Sidebar = () => {
  //   useEffect(() => {
  //     <script type="text/javascript">
  // var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  // (function(){
  // let s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  // s1.async=true;
  // s1.src='https://embed.tawk.to/6727a6054304e3196adc923b/1ibpe11q2';
  // s1.charset='UTF-8';
  // s1.setAttribute('crossorigin','*');
  // s0.parentNode.insertBefore(s1,s0);
  // })();
  // </script>
  //   },[])
  // return (
  //   <>
  //     <Script
  //       id="tawk-to-init"
  //       strategy="beforeInteractive"
  //       dangerouslySetInnerHTML={{
  //         __html: `
  //             window.Tawk_API = window.Tawk_API || {};
  //             window.Tawk_LoadStart = new Date();
  //           `,
  //       }}
  //     />

  //     {/* Tawk.to embed script */}
  //     <Script
  //       src="https://embed.tawk.to/6727a6054304e3196adc923b/1ibpe11q2"
  //       strategy="afterInteractive"
  //       crossOrigin="anonymous"
  //     />

  //     {/* <aside className=" hidden md:fixed -right-[100px] top-1/2 -translate-y-1/2 bg-[#004ab1] bg-opacity-95 hover:bg-blue-900 text-white  md:flex items-center gap-2 p-3 rounded-md text-sm font-medium -rotate-[90deg]">
  //       <LuUsers size={20} />
  //       <span>contact customer service</span>
  //     </aside> */}
  //   </>
  // );

  return (
    <>
      {/* Initialize Crisp chat script */}
      <Script
        id="crisp-chat-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.$crisp = [];
            window.CRISP_WEBSITE_ID = "c1ca94f7-5939-4301-bef8-05435ce90752";
            (function(){
              var d = document;
              var s = d.createElement("script");
              s.src = "https://client.crisp.chat/l.js";
              s.async = true;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `,
        }}
      />
    </>
  );
};

export default Sidebar;
