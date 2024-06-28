import Animate from "./shared/Animate";
import ImageProp from "./shared/ImageProp";

const Socials = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex w-full justify-between items-center xs:items-start pt-32 px-10 lg:px-28 xl:px-40">
      <div onClick={handleScrollToTop} className="hidden sm:block">
        <a href="/" className="flex flex-col gap-y-2 items-center w-fit">
          <ImageProp src="/icons/arrow-up.svg" />
          <p className="font-medium leading-5 text-sm">Scroll to top</p>
        </a>
      </div>
      <div className="flex gap-x-5 items-center">
        <a href="https://twitter.com/adooniade" target="_blank">
          <ImageProp src="/icons/twitter-x.svg" imgClassName="w-6 h-6" />
        </a>
        <a href="mailto:kikkyal@gmail.com" target="_blank">
          <ImageProp src="/icons/mail.svg" />
        </a>
        <a
          href="https://www.notion.so/Noimot-Alabi-6396693475fc4e31bc24c92a54a701bb?pvs=4"
          target="_blank"
          className="hidden xs:block"
        >
          <ImageProp src="/icons/notion.png" imgClassName="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/noimot-alabi-996227129/"
          target="_blank"
        >
          <ImageProp src="/icons/linkedin.svg" className="bg-[#0A66C2]" />
        </a>
        <a
          href="https://www.linkedin.com/in/noimot-alabi-996227129/"
          target="_blank"
        >
          <ImageProp src="/linkedin.svg" className="bg-[#0A66C2]" />
        </a>
        <a href="https://www.instagram.com/alabi_neema/" target="_blank">
          <ImageProp src="/icons/instagram.svg" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
