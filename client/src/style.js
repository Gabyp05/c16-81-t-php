const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-monse font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-monse font-normal text-paragraph text-[20px] xxs:text-[22px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-2 ",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  
    labelElement: "block mb-1 font-monse font-medium text-paragraph text-[14px] sm:text-[16px]",
    inputElement: "shadow-sm px-4 py-2 font-monse font-semibold text-primary bg-[#F7FBFF] text-sm rounded-lg outline-none",
    pageItem: "font-bold text-xl border-none py-1 px-4 rounded-lg"
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
export default styles;