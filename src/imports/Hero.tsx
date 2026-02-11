import imgImageWithFallback from "../assets/14bce4b78110a664232b488f13df11ccaea6ae03.png";

function Container2() {
  return <div className="absolute bg-[#4c76ba] left-[24px] opacity-80 rounded-[33554400px] size-[8px] top-[13.59px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="absolute h-[19.188px] left-[48px] top-[8px] w-[243.766px]" data-name="Text">
      <p className="absolute font-['Arial:Black',sans-serif] leading-[19.2px] left-0 not-italic text-[#1b2c49] text-[12px] top-0 tracking-[3.6px] uppercase">NAVE À VELA • CURRÍCULO</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(76,118,186,0.05)] h-[35.188px] left-0 rounded-[33554400px] top-[16px] w-[315.766px]" data-name="Container">
      <Container2 />
      <Text />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[101px] left-0 top-[91px] w-[422px]" data-name="Heading 1">
      <p className="absolute font-['Allotrope:ExtraBold',sans-serif] font-['Sora:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#1b2c49] text-[0px] text-[32px] top-[-0.19px] tracking-[-1.2px] w-[442px] whitespace-pre-wrap">
        <span className="leading-[50.4px]">{`Onde a `}</span>
        <span className="leading-[50.4px] text-[#e7609f]">criatividade</span>
        <span className="leading-[50.4px]">{` encontra a `}</span>
        <span className="leading-[50.4px] text-[#94579e]">tecnologia</span>
        <span className="leading-[50.4px]">{`. `}</span>
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[366px] relative shrink-0 w-[353px]" data-name="Container">
      <Container1 />
      <Heading />
      <p className="absolute font-['Sora:Light',sans-serif] font-light leading-[30px] left-0 text-[#71717b] text-[22px] top-[216px] w-[351px] whitespace-pre-wrap">Nossa base curricular foi desenhada para formar sujeitos criativos, críticos e prontos para transformar o mundo através da inovação.</p>
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[rgba(231,96,159,0.05)] blur-[64px] h-[449.965px] left-[55px] opacity-80 rounded-[33554400px] top-[74.99px] w-[330px]" data-name="Container" />;
}

function ImageWithFallback() {
  return (
    <div className="h-[668px] relative w-[562px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[642px] relative shrink-0 w-[578px]" data-name="Container">
      <Container4 />
      <div className="absolute flex h-[718.817px] items-center justify-center right-[-29.47px] top-[-54px] w-[623.471px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[5.5deg]">
          <ImageWithFallback />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[28px] items-start left-[calc(50%+25.5px)] top-[calc(50%+7.5px)]">
      <Container />
      <Container3 />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="bg-white border border-solid border-white overflow-clip relative rounded-[56px] size-full" data-name="hero">
      <Frame />
    </div>
  );
}