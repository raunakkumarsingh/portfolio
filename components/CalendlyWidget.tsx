// CalendlyWidget.js

import Head from 'next/head';

const CalendlyWidget = () => (
  <div>
    <Head>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
    </Head>
  
    <a href="#" onClick={() => { Calendly.initPopupWidget({ url: 'https://calendly.com/raunakkumar-india/schedule-meeting?hide_gdpr_banner=1' }); return false; }}>
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Schedule Meet
        </button>
      </a>
  </div>
);

export default CalendlyWidget;
