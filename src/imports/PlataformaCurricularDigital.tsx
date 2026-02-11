import svgPaths from "./svg-5hnw5fkwd4";
import imgImageWithFallback from "../assets/14bce4b78110a664232b488f13df11ccaea6ae03.png";

function Icon() {
  return (
    <div className="h-[711.636px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 711.636 711.636">
        <path d={svgPaths.p50f5d80} fill="var(--fill-0, #FF0077)" id="Vector" />
      </svg>
    </div>
  );
}

function ShapeComplexPink() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-[711.636px]" data-name="ShapeComplexPink">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[557.588px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 865.683 557.588">
        <path d={svgPaths.p319fd40} fill="var(--fill-0, #94579E)" id="Vector" />
      </svg>
    </div>
  );
}

function ShapePurple() {
  return (
    <div className="content-stretch flex flex-col h-[557.588px] items-start relative w-[865.683px]" data-name="ShapePurple">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[400px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 400">
        <path d={svgPaths.p3b3d9900} fill="var(--fill-0, #ECEBEB)" id="Vector" />
      </svg>
    </div>
  );
}

function ShapeGrey() {
  return (
    <div className="absolute content-stretch flex flex-col h-[400px] items-start left-[1034px] top-[6461.08px] w-[500px]" data-name="ShapeGrey">
      <Icon2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[6941.078px] opacity-8 overflow-clip right-0 top-0 w-[1534px]" data-name="Container">
      <div className="absolute flex items-center justify-center left-[810.22px] size-[844.042px] top-[-135.82px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-12">
          <ShapeComplexPink />
        </div>
      </div>
      <div className="absolute flex h-[725.389px] items-center justify-center left-[-272.84px] top-[2517.64px] w-[962.695px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-12 flex-none">
          <ShapePurple />
        </div>
      </div>
      <ShapeGrey />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p20543580} id="Vector" stroke="var(--stroke-0, #4C76BA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(76,118,186,0.1)] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[19.188px] relative shrink-0 w-[98.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Black',sans-serif] leading-[19.2px] left-0 not-italic text-[#1b2c49] text-[12px] top-0 tracking-[2.4px] uppercase">NAVEGAÇÃO</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Text />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[206px] size-[16px] top-[20.19px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #E7609F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[56.391px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f4f4f5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_0px_rgba(231,96,159,0.05),0px_2px_4px_0px_rgba(231,96,159,0.05)]" />
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[22.4px] left-[17px] not-italic text-[#e7609f] text-[14px] top-[15px]">Currículo Geral</p>
      <Icon4 />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[56.391px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <p className="font-['Arial:Bold',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px]">Educação infantil</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[56.391px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <p className="font-['Arial:Bold',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px]">Anos iniciais</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[56.391px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <p className="font-['Arial:Bold',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px]">Anos finais</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[56.391px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <p className="font-['Arial:Bold',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px]">Ensino médio</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[313.953px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[6941.078px] left-0 top-0 w-[320px]" data-name="Sidebar">
      <div className="content-stretch flex flex-col gap-[56px] items-start overflow-clip pl-[40px] pr-[41px] pt-[40px] relative rounded-[inherit] size-full">
        <Container1 />
        <Container3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container6() {
  return <div className="absolute h-[711.953px] left-[512px] top-px w-[511px]" data-name="Container" style={{ backgroundImage: "linear-gradient(234.331deg, rgba(231, 96, 159, 0.05) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)" }} />;
}

function Container8() {
  return <div className="absolute bg-[rgba(231,96,159,0.05)] blur-[64px] h-[449.965px] left-[55px] opacity-80 rounded-[33554400px] top-[74.99px] w-[330px]" data-name="Container" />;
}

function ImageWithFallback() {
  return (
    <div className="h-[668px] relative w-[562px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[642px] left-[438px] top-[15px] w-[578px]" data-name="Container">
      <Container8 />
      <div className="absolute flex h-[718.817px] items-center justify-center right-[-29.47px] top-[-54px] w-[623.471px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "944" } as React.CSSProperties}>
        <div className="flex-none rotate-[5.5deg]">
          <ImageWithFallback />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[#4c76ba] left-[24px] opacity-80 rounded-[33554400px] size-[8px] top-[13.59px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="absolute h-[19.188px] left-[48px] top-[8px] w-[243.766px]" data-name="Text">
      <p className="absolute font-['Arial:Black',sans-serif] leading-[19.2px] left-0 not-italic text-[#1b2c49] text-[12px] top-0 tracking-[3.6px] uppercase">NAVE À VELA • CURRÍCULO</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(76,118,186,0.05)] h-[35.188px] left-0 rounded-[33554400px] top-[16px] w-[315.766px]" data-name="Container">
      <Container11 />
      <Text1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[101px] left-0 top-[91px] w-[422px]" data-name="Heading 1">
      <p className="absolute font-['Allotrope:ExtraBold',sans-serif] font-['Allotrope:Medium',sans-serif] leading-[0] left-0 not-italic text-[#1b2c49] text-[0px] text-[40px] top-[-0.19px] tracking-[-1.2px] w-[442px] whitespace-pre-wrap">
        <span className="leading-[50.4px]">{`Onde a `}</span>
        <span className="leading-[50.4px] text-[#e7609f]">criatividade</span>
        <span className="leading-[50.4px]">{` encontra a `}</span>
        <span className="leading-[50.4px] text-[#94579e]">tecnologia</span>
        <span className="leading-[50.4px]">{`. `}</span>
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[215.81px] size-[20px] top-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#1b2c49] h-[64px] relative rounded-[16px] shadow-[0px_20px_25px_0px_rgba(27,44,73,0.2),0px_8px_10px_0px_rgba(27,44,73,0.2)] shrink-0 w-[275.813px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Allotrope:Bold',sans-serif] leading-[25.6px] left-[120px] not-italic text-[16px] text-center text-white top-[20.2px]">Começar Exploração</p>
        <Icon5 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center left-0 top-[370px] w-[422px]" data-name="Container">
      <Button5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[442px] left-[57px] top-[57px] w-[422px]" data-name="Container">
      <Container10 />
      <Heading />
      <p className="absolute font-['Allotrope:Light',sans-serif] leading-[32.5px] left-0 not-italic text-[#71717b] text-[20px] top-[216px] w-[351px] whitespace-pre-wrap">Nossa base curricular foi desenhada para formar sujeitos criativos, críticos e prontos para transformar o mundo através da inovação.</p>
      <Container12 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white h-[685px] relative rounded-[56px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container6 />
        <Container7 />
        <Container9 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[56px] shadow-[0px_25px_50px_-12px_rgba(27,44,73,0.05)]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[36.797px] left-0 top-0 w-[1024px]" data-name="Heading 1">
      <p className="absolute font-['Allotrope:Bold',sans-serif] leading-[36.8px] left-0 not-italic text-[#1b2c49] text-[32px] top-0 tracking-[-0.8px]">Base Curricular de Inovação Nave à Vela (BCINaV)</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[72px] left-0 rounded-[16px] top-0 w-[672px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[64px] relative rounded-[inherit] size-full">
        <p className="font-['Allotrope:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(27,44,73,0.5)]">Pesquisar competências, habilidades ou temas...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[24px] size-[20px] top-[26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #9F9FA9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #9F9FA9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[72px] left-0 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[76.8px] w-[672px]" data-name="Container">
      <TextInput />
      <Icon6 />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[148.797px] relative shrink-0 w-full" data-name="Header">
      <Heading1 />
      <Container13 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative">
      <div className="-translate-y-1/2 col-1 flex h-[62.97px] items-center justify-center ml-0 mt-[31.49px] relative row-1 w-[471.844px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="flex flex-col font-['Allotrope:Bold',sans-serif] h-[62.97px] justify-center leading-[0] not-italic relative text-[#1b2c49] text-[40px] w-[471.844px]">
            <p className="leading-[1.5] whitespace-pre-wrap">Eixos Estruturantes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[28.797px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Medium',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-white top-0">Pensamento Computacional</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[28.797px] items-center relative shrink-0 w-[279.375px]" data-name="Container">
      <Text2 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M5.83333 14H22.1667" id="Vector" stroke="var(--stroke-0, #F6B9D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p6041c80} id="Vector_2" stroke="var(--stroke-0, #F6B9D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-[415px]">
      <Container17 />
      <Icon7 />
    </div>
  );
}

function Bt() {
  return (
    <div className="h-[103px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[486.5px]" data-name="bt">
      <div className="absolute inset-[-1.94%_-0.62%_-3.88%_-0.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 492.5 109">
          <g filter="url(#filter0_dd_25_948)" id="Vector">
            <path d={svgPaths.p1ab83300} fill="var(--fill-0, #94579E)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="109" id="filter0_dd_25_948" width="492.5" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_dropShadow_25_948" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_25_948" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_25_948" mode="normal" result="effect2_dropShadow_25_948" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_25_948" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.25px)] top-[calc(50%+0.12px)] w-[415px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[28.797px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Medium',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-white top-0">Mundo Digital e IA</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[28.797px] items-center relative shrink-0 w-[279.375px]" data-name="Container">
      <Text3 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M5.83333 14H22.1667" id="Vector" stroke="var(--stroke-0, #F6B9D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p6041c80} id="Vector_2" stroke="var(--stroke-0, #F6B9D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-[415px]">
      <Container18 />
      <Icon8 />
    </div>
  );
}

function Bt1() {
  return (
    <div className="h-[103px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[486.5px]" data-name="bt">
      <div className="absolute inset-[-1.94%_-0.62%_-3.88%_-0.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 492.5 109">
          <g filter="url(#filter0_dd_25_948)" id="Vector">
            <path d={svgPaths.p1ab83300} fill="var(--fill-0, #94579E)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="109" id="filter0_dd_25_948" width="492.5" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_dropShadow_25_948" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_25_948" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_25_948" mode="normal" result="effect2_dropShadow_25_948" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_25_948" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.75px)] top-[calc(50%+0.12px)] w-[415px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[28.797px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Medium',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-white top-0">Cultura Digital e Midiática</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[28.797px] items-center relative shrink-0 w-[279.375px]" data-name="Container">
      <Text4 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M5.83333 14H22.1667" id="Vector" stroke="var(--stroke-0, #F6B9D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p6041c80} id="Vector_2" stroke="var(--stroke-0, #F6B9D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-[415px]">
      <Container19 />
      <Icon9 />
    </div>
  );
}

function Bt2() {
  return (
    <div className="h-[105px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[486.5px]" data-name="bt">
      <div className="absolute inset-[-1.9%_-0.62%_-3.81%_-0.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 492.5 111">
          <g filter="url(#filter0_dd_25_942)" id="Vector">
            <path d={svgPaths.p3b43b100} fill="var(--fill-0, #94579E)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="111" id="filter0_dd_25_942" width="492.5" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_dropShadow_25_942" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_25_942" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_25_942" mode="normal" result="effect2_dropShadow_25_942" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_25_942" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.25px)] top-[calc(50%+0.12px)] w-[415px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Bt3() {
  return <div className="h-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[486.5px]" data-name="bt" />;
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[28.797px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Medium',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-white top-0">Design e Fabricação Digital</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[28.797px] items-center relative shrink-0 w-[279.375px]" data-name="Container">
      <Text5 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M5.83333 14H22.1667" id="Vector" stroke="var(--stroke-0, #F6B9D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p6041c80} id="Vector_2" stroke="var(--stroke-0, #F6B9D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-[415px]">
      <Container20 />
      <Icon10 />
    </div>
  );
}

function Bt4() {
  return (
    <div className="h-[105px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[486.5px]" data-name="bt">
      <div className="absolute inset-[-1.9%_-0.62%_-3.81%_-0.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 492.5 111">
          <g filter="url(#filter0_dd_25_942)" id="Vector">
            <path d={svgPaths.p3b43b100} fill="var(--fill-0, #94579E)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="111" id="filter0_dd_25_942" width="492.5" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_dropShadow_25_942" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_25_942" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_25_942" mode="normal" result="effect2_dropShadow_25_942" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_25_942" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.25px)] top-[calc(50%+0.12px)] w-[415px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[239px] relative shrink-0 w-[1024px]" data-name="Container">
      <div className="absolute flex h-[103px] items-center justify-center left-0 top-0 w-[486.5px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Bt />
        </div>
      </div>
      <div className="absolute flex h-[103px] items-center justify-center left-[537.5px] top-0 w-[486.5px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Bt1 />
        </div>
      </div>
      <div className="absolute flex h-[105px] items-center justify-center left-0 top-[134px] w-[486.5px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Bt2 />
        </div>
      </div>
      <div className="absolute flex h-[100px] items-center justify-center left-0 top-[270px] w-[486.5px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Bt3 />
        </div>
      </div>
      <div className="absolute flex h-[105px] items-center justify-center left-[537.5px] top-[134px] w-[486.5px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Bt4 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[350px] items-start relative shrink-0 w-full" data-name="Section">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative">
      <div className="-translate-y-1/2 col-1 flex items-center justify-center ml-0 mt-[24px] relative row-1">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="flex flex-col font-['Allotrope:Medium',sans-serif] justify-center leading-[0] not-italic relative text-[#1b2c49] text-[32px] whitespace-nowrap">
            <p className="leading-[1.5]">Foco Geral do Eixo Estruturante</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Group2 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return <div className="bg-[#94579e] h-[8px] rounded-[33554400px] shrink-0 w-[40px]" data-name="Container" />;
}

function Heading2() {
  return (
    <div className="h-[30px] relative shrink-0 w-[329.828px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Bold',sans-serif] leading-[30px] left-0 not-italic text-[#3d1d3d] text-[24px] top-px">Pensamento Computacional</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[16px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Heading2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[64.781px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Allotrope:Regular',sans-serif] leading-[32.4px] left-0 not-italic text-[18px] text-[rgba(27,44,73,0.8)] top-[-1px] w-[856px] whitespace-pre-wrap">Desenvolve o raciocínio lógico, a aplicação de princípios de abstração e decomposição, e a integração de criatividade e colaboração em projetos maker.</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white h-[224.781px] relative rounded-[48px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-px pt-[49px] px-[49px] relative size-full">
        <Container25 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container29() {
  return <div className="bg-[#94579e] h-[8px] rounded-[33554400px] shrink-0 w-[40px]" data-name="Container" />;
}

function Heading3() {
  return (
    <div className="h-[30px] relative shrink-0 w-[223.453px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Bold',sans-serif] leading-[30px] left-0 not-italic text-[#3d1d3d] text-[24px] top-px">Mundo Digital e IA</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[16px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Heading3 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[64.781px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Allotrope:Regular',sans-serif] leading-[32.4px] left-0 not-italic text-[18px] text-[rgba(27,44,73,0.8)] top-[-1px] w-[866px] whitespace-pre-wrap">Explora o funcionamento das tecnologias digitais, a aplicação de princípios de design digital na criação de produtos e interfaces, e o entendimento do impacto da IA.</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white h-[224.781px] relative rounded-[48px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-px pt-[49px] px-[49px] relative size-full">
        <Container28 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container32() {
  return <div className="bg-[#94579e] h-[8px] rounded-[33554400px] shrink-0 w-[40px]" data-name="Container" />;
}

function Heading4() {
  return (
    <div className="h-[30px] relative shrink-0 w-[309.328px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Bold',sans-serif] leading-[30px] left-0 not-italic text-[#3d1d3d] text-[24px] top-px">Cultura Digital e Midiática</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[16px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Heading4 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[64.781px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Allotrope:Regular',sans-serif] leading-[32.4px] left-0 not-italic text-[18px] text-[rgba(27,44,73,0.8)] top-[-1px] w-[926px] whitespace-pre-wrap">Compreende o papel das mídias digitais, o uso seguro e consciente de tecnologias, a análise crítica de conteúdos, e a produção de conteúdo autoral e ético.</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white h-[224.781px] relative rounded-[48px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-px pt-[49px] px-[49px] relative size-full">
        <Container31 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container35() {
  return <div className="bg-[#94579e] h-[8px] rounded-[33554400px] shrink-0 w-[40px]" data-name="Container" />;
}

function Heading5() {
  return (
    <div className="h-[30px] relative shrink-0 w-[319.422px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Bold',sans-serif] leading-[30px] left-0 not-italic text-[#3d1d3d] text-[24px] top-px">Design e Fabricação Digital</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[16px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Heading5 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[453.469px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Allotrope:Regular',sans-serif] leading-[32.4px] left-0 not-italic text-[18px] text-[rgba(27,44,73,0.8)] top-[-1px] w-[902px] whitespace-pre-wrap">{`A Base Curricular de Inovação do Nave à Vela (BCINaV) propõe um alinhamento entre a Base Nacional Comum Curricular (BNCC) da Computação, as Habilidades do Século XXI (World Economic Forum) e referências internacionais, como as diretrizes da International Society for Technology in Education (ISTE). Esta integração garante a progressão das aprendizagens previstas para a Educação Tecnológica, promovendo uma formação sólida, criativa e contemporânea.  O objetivo da BCINaV é propor uma Educação Tecnológica para formar sujeitos criativos, críticos e inventivos, capazes de compreender e transformar o mundo por meio do fazer, do pensar e do conviver. Busca-se desenvolver a capacidade de expressar ideias e criar soluções inovadoras para problemas reais, utilizando tecnologias digitais, como inteligência artificial e computação criativa.  Mais do que acumular informações, aprender passa a significar criar, experimentar e refletir sobre o processo criativo. A proposta visa, portanto, a autonomia intelectual, a consciência ética e a capacidade de imaginar e realizar com propósito, unindo pensamento crítico, técnica, imaginação e compromisso social.`}</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-white h-[613.469px] relative rounded-[48px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-px pt-[49px] px-[49px] relative size-full">
        <Container34 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[40px] h-[1407.813px] items-start justify-self-stretch relative row-[1] shrink-0" data-name="Container">
      <Container24 />
      <Container27 />
      <Container30 />
      <Container33 />
    </div>
  );
}

function Container22() {
  return (
    <div className="gap-[40px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[1407.813px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[1558.203px] items-start relative shrink-0 w-full" data-name="Section">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative">
      <div className="-translate-y-1/2 col-1 flex items-center justify-center ml-0 mt-[30px] relative row-1">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="flex flex-col font-['Allotrope:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[#1b2c49] text-[40px] whitespace-nowrap">
            <p className="leading-[1.5]">Competências Gerais (BNCC da computação)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Group3 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[28.797px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Allotrope:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[24px] text-white top-[calc(50%+0.4px)] whitespace-nowrap">
          <p className="leading-[28.8px]">
            Criatividade, Inventividade
            <br aria-hidden="true" />e Experimentação
          </p>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[28.797px] items-center relative shrink-0 w-[279.375px]" data-name="Container">
      <Text6 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M5.83333 14H22.1667" id="Vector" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p6041c80} id="Vector_2" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-[415px]">
      <Container38 />
      <Icon11 />
    </div>
  );
}

function Bt5() {
  return (
    <div className="h-[103px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[486.5px]" data-name="bt">
      <div className="absolute inset-[-1.94%_-0.62%_-3.88%_-0.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 492.5 109">
          <g filter="url(#filter0_dd_25_940)" id="Vector">
            <path d={svgPaths.p1ab83300} fill="var(--fill-0, #4C76BA)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="109" id="filter0_dd_25_940" width="492.5" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_dropShadow_25_940" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_25_940" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_25_940" mode="normal" result="effect2_dropShadow_25_940" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_25_940" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.25px)] top-[calc(50%+0.12px)] w-[415px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[28.797px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Medium',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-white top-[calc(50%-28.6px)] w-[329px] whitespace-pre-wrap">Pensamento complexo, científico, artístico e sistêmico</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[28.797px] items-center relative shrink-0 w-[279.375px]" data-name="Container">
      <Text7 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M5.83333 14H22.1667" id="Vector" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p6041c80} id="Vector_2" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-[415px]">
      <Container39 />
      <Icon12 />
    </div>
  );
}

function Bt6() {
  return (
    <div className="h-[103px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[486.5px]" data-name="bt">
      <div className="absolute inset-[-1.94%_-0.62%_-3.88%_-0.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 492.5 109">
          <g filter="url(#filter0_dd_25_940)" id="Vector">
            <path d={svgPaths.p1ab83300} fill="var(--fill-0, #4C76BA)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="109" id="filter0_dd_25_940" width="492.5" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_dropShadow_25_940" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_25_940" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_25_940" mode="normal" result="effect2_dropShadow_25_940" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_25_940" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.75px)] top-[calc(50%+0.12px)] w-[415px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] h-[28.797px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Medium',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-white top-0">Ciência, Investigação e Criticidade</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex h-[28.797px] items-center relative shrink-0 w-[279.375px]" data-name="Container">
      <Text8 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M5.83333 14H22.1667" id="Vector" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p6041c80} id="Vector_2" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-[415px]">
      <Container40 />
      <Icon13 />
    </div>
  );
}

function Bt7() {
  return (
    <div className="h-[105px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[486.5px]" data-name="bt">
      <div className="absolute inset-[-1.9%_-0.62%_-3.81%_-0.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 492.5 111">
          <g filter="url(#filter0_dd_25_938)" id="Vector">
            <path d={svgPaths.p3b43b100} fill="var(--fill-0, #4C76BA)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="111" id="filter0_dd_25_938" width="492.5" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_dropShadow_25_938" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_25_938" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_25_938" mode="normal" result="effect2_dropShadow_25_938" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_25_938" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.25px)] top-[calc(50%+0.12px)] w-[415px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] h-[28.797px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Medium',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-white top-0">Colaboração e Intercultura</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[28.797px] items-center relative shrink-0 w-[279.375px]" data-name="Container">
      <Text9 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M5.83333 14H22.1667" id="Vector" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p6041c80} id="Vector_2" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-[415px]">
      <Container41 />
      <Icon14 />
    </div>
  );
}

function Bt8() {
  return (
    <div className="h-[105px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[486.5px]" data-name="bt">
      <div className="absolute inset-[-1.9%_-0.62%_-3.81%_-0.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 492.5 111">
          <g filter="url(#filter0_dd_25_938)" id="Vector">
            <path d={svgPaths.p3b43b100} fill="var(--fill-0, #4C76BA)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="111" id="filter0_dd_25_938" width="492.5" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_dropShadow_25_938" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_25_938" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_25_938" mode="normal" result="effect2_dropShadow_25_938" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_25_938" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.25px)] top-[calc(50%+0.12px)] w-[415px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Bt9() {
  return <div className="h-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[486.5px]" data-name="bt" />;
}

function Text10() {
  return (
    <div className="flex-[1_0_0] h-[28.797px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Medium',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-white top-0">Comunicação e Narração</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex h-[28.797px] items-center relative shrink-0 w-[279.375px]" data-name="Container">
      <Text10 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M5.83333 14H22.1667" id="Vector" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p6041c80} id="Vector_2" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-[415px]">
      <Container42 />
      <Icon15 />
    </div>
  );
}

function Bt10() {
  return (
    <div className="h-[105px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[486.5px]" data-name="bt">
      <div className="absolute inset-[-1.9%_-0.62%_-3.81%_-0.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 492.5 111">
          <g filter="url(#filter0_dd_25_938)" id="Vector">
            <path d={svgPaths.p3b43b100} fill="var(--fill-0, #4C76BA)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="111" id="filter0_dd_25_938" width="492.5" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_dropShadow_25_938" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_25_938" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_25_938" mode="normal" result="effect2_dropShadow_25_938" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_25_938" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.25px)] top-[calc(50%+0.12px)] w-[415px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex-[1_0_0] h-[28.797px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Medium',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-white top-0">Empreendedorismo e Protagonismo</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[28.797px] items-center relative shrink-0 w-[279.375px]" data-name="Container">
      <Text11 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M5.83333 14H22.1667" id="Vector" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p6041c80} id="Vector_2" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-[415px]">
      <Container43 />
      <Icon16 />
    </div>
  );
}

function Bt11() {
  return (
    <div className="h-[105px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[486.5px]" data-name="bt">
      <div className="absolute inset-[-1.9%_-0.62%_-3.81%_-0.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 492.5 111">
          <g filter="url(#filter0_dd_25_938)" id="Vector">
            <path d={svgPaths.p3b43b100} fill="var(--fill-0, #4C76BA)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="111" id="filter0_dd_25_938" width="492.5" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_dropShadow_25_938" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_25_938" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_25_938" mode="normal" result="effect2_dropShadow_25_938" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_25_938" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.25px)] top-[calc(50%+0.12px)] w-[415px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="flex-[1_0_0] h-[28.797px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Medium',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-white top-0">Ética e Cidadania</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[28.797px] items-center relative shrink-0 w-[279.375px]" data-name="Container">
      <Text12 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M5.83333 14H22.1667" id="Vector" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p6041c80} id="Vector_2" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-[415px]">
      <Container44 />
      <Icon17 />
    </div>
  );
}

function Bt12() {
  return (
    <div className="h-[105px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[486.5px]" data-name="bt">
      <div className="absolute inset-[-1.9%_-0.62%_-3.81%_-0.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 492.5 111">
          <g filter="url(#filter0_dd_25_938)" id="Vector">
            <path d={svgPaths.p3b43b100} fill="var(--fill-0, #4C76BA)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="111" id="filter0_dd_25_938" width="492.5" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_dropShadow_25_938" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_25_938" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_25_938" mode="normal" result="effect2_dropShadow_25_938" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_25_938" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.25px)] top-[calc(50%+0.12px)] w-[415px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="flex-[1_0_0] h-[28.797px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Medium',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-white top-0">Reflexão e Autonomia</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex h-[28.797px] items-center relative shrink-0 w-[279.375px]" data-name="Container">
      <Text13 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M5.83333 14H22.1667" id="Vector" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p6041c80} id="Vector_2" stroke="var(--stroke-0, #A8C2E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-[415px]">
      <Container45 />
      <Icon18 />
    </div>
  );
}

function Bt13() {
  return (
    <div className="h-[105px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[486.5px]" data-name="bt">
      <div className="absolute inset-[-1.9%_-0.62%_-3.81%_-0.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 492.5 111">
          <g filter="url(#filter0_dd_25_938)" id="Vector">
            <path d={svgPaths.p3b43b100} fill="var(--fill-0, #4C76BA)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="111" id="filter0_dd_25_938" width="492.5" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_dropShadow_25_938" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_25_938" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_25_938" mode="normal" result="effect2_dropShadow_25_938" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_25_938" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.25px)] top-[calc(50%+0.12px)] w-[415px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="gap-[31px] gap-[51px] grid-cols-[repeat(2,_fit-content(100%))] grid-rows-[repeat(5,_fit-content(100%))] h-[511px] inline-grid relative shrink-0" data-name="Container">
      <div className="col-[1] flex items-center justify-center justify-self-start relative row-[1] self-start shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Bt5 />
        </div>
      </div>
      <div className="col-[2] flex items-center justify-center justify-self-start relative row-[1] shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Bt6 />
        </div>
      </div>
      <div className="col-[1] flex items-center justify-center justify-self-start relative row-[2] shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Bt7 />
        </div>
      </div>
      <div className="col-[2] flex items-center justify-center justify-self-start relative row-[2] shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Bt8 />
        </div>
      </div>
      <div className="col-[1] flex items-center justify-center justify-self-start relative row-[5] self-start shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Bt9 />
        </div>
      </div>
      <div className="col-[1] flex items-center justify-center justify-self-start relative row-[3] shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Bt10 />
        </div>
      </div>
      <div className="col-[2] flex items-center justify-center justify-self-start relative row-[3] shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Bt11 />
        </div>
      </div>
      <div className="col-[1] flex items-center justify-center justify-self-start relative row-[4] shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Bt12 />
        </div>
      </div>
      <div className="col-[2] flex items-center justify-center justify-self-start relative row-[4] shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Bt13 />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] h-[619px] items-start relative shrink-0 w-full" data-name="Section">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative">
      <div className="-translate-y-1/2 col-1 flex items-center justify-center ml-0 mt-[24px] relative row-1">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="flex flex-col font-['Allotrope:Medium',sans-serif] justify-center leading-[0] not-italic relative text-[#1b2c49] text-[32px] whitespace-nowrap">
            <p className="leading-[1.5]">Descritivo Competências Gerais (BNCC da computação)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Group4 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return <div className="bg-[#4c76ba] h-[8px] rounded-[33554400px] shrink-0 w-[40px]" data-name="Container" />;
}

function Heading6() {
  return (
    <div className="h-[30px] relative shrink-0 w-[536.953px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Black',sans-serif] leading-[30px] left-0 not-italic text-[#1b2c49] text-[24px] top-px">Criatividade, Inventividade e Experimentação</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[16px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Heading6 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[64.781px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[32.4px] left-0 not-italic text-[18px] text-[rgba(27,44,73,0.8)] top-[-1px] w-[803px] whitespace-pre-wrap">Capacidade de imaginar, experimentar e criar soluções originais para problemas reais, por meio da experimentação e prototipagem prática.</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-white h-[224.781px] relative rounded-[48px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-px pt-[49px] px-[49px] relative size-full">
        <Container50 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container54() {
  return <div className="bg-[#4c76ba] h-[8px] rounded-[33554400px] shrink-0 w-[40px]" data-name="Container" />;
}

function Heading7() {
  return (
    <div className="h-[30px] relative shrink-0 w-[642.859px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Black',sans-serif] leading-[30px] left-0 not-italic text-[#1b2c49] text-[24px] top-px">Pensamento complexo, científico, artístico e sistêmico</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-[16px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Heading7 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[32.391px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[32.4px] left-0 not-italic text-[18px] text-[rgba(27,44,73,0.8)] top-[-1px]">Domínio funcional e criativo de tecnologias digitais, eletrônicas e de fabricação analógica e digital.</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-white h-[192.391px] relative rounded-[48px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-px pt-[49px] px-[49px] relative size-full">
        <Container53 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container57() {
  return <div className="bg-[#4c76ba] h-[8px] rounded-[33554400px] shrink-0 w-[40px]" data-name="Container" />;
}

function Heading8() {
  return (
    <div className="h-[30px] relative shrink-0 w-[401.594px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Black',sans-serif] leading-[30px] left-0 not-italic text-[#1b2c49] text-[24px] top-px">Ciência, Investigação e Criticidade</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[16px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Heading8 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[32.391px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[32.4px] left-0 not-italic text-[18px] text-[rgba(27,44,73,0.8)] top-[-1px]">Capacidade de investigar, formular hipóteses, experimentar e validar conclusões de forma crítica.</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-white h-[192.391px] relative rounded-[48px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-px pt-[49px] px-[49px] relative size-full">
        <Container56 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container60() {
  return <div className="bg-[#4c76ba] h-[8px] rounded-[33554400px] shrink-0 w-[40px]" data-name="Container" />;
}

function Heading9() {
  return (
    <div className="h-[30px] relative shrink-0 w-[313.641px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Black',sans-serif] leading-[30px] left-0 not-italic text-[#1b2c49] text-[24px] top-px">Colaboração e Intercultura</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[16px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Heading9 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[64.781px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[32.4px] left-0 not-italic text-[18px] text-[rgba(27,44,73,0.8)] top-[-1px] w-[894px] whitespace-pre-wrap">Habilidade de trabalhar com outras pessoas, respeitando saberes diversos e contextos culturais, valorizando a diversidade.</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-white h-[224.781px] relative rounded-[48px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-px pt-[49px] px-[49px] relative size-full">
        <Container59 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container63() {
  return <div className="bg-[#4c76ba] h-[8px] rounded-[33554400px] shrink-0 w-[40px]" data-name="Container" />;
}

function Heading10() {
  return (
    <div className="h-[30px] relative shrink-0 w-[291.172px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Black',sans-serif] leading-[30px] left-0 not-italic text-[#1b2c49] text-[24px] top-px">Comunicação e Narração</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[16px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Heading10 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[32.391px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[32.4px] left-0 not-italic text-[18px] text-[rgba(27,44,73,0.8)] top-[-1px]">Comunicação do seu processo de aprendizagem e resultados de forma clara.</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-white h-[192.391px] relative rounded-[48px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-px pt-[49px] px-[49px] relative size-full">
        <Container62 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container66() {
  return <div className="bg-[#4c76ba] h-[8px] rounded-[33554400px] shrink-0 w-[40px]" data-name="Container" />;
}

function Heading11() {
  return (
    <div className="h-[30px] relative shrink-0 w-[425.078px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Black',sans-serif] leading-[30px] left-0 not-italic text-[#1b2c49] text-[24px] top-px">Empreendedorismo e Protagonismo</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[16px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Container66 />
      <Heading11 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[64.781px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[32.4px] left-0 not-italic text-[18px] text-[rgba(27,44,73,0.8)] top-[-1px] w-[884px] whitespace-pre-wrap">Capacidade de agir com autonomia, transformar ideias em ação e gerar valor empreendedor para si e para a comunidade.</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-white h-[224.781px] relative rounded-[48px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-px pt-[49px] px-[49px] relative size-full">
        <Container65 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container69() {
  return <div className="bg-[#4c76ba] h-[8px] rounded-[33554400px] shrink-0 w-[40px]" data-name="Container" />;
}

function Heading12() {
  return (
    <div className="h-[30px] relative shrink-0 w-[198.922px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Black',sans-serif] leading-[30px] left-0 not-italic text-[#1b2c49] text-[24px] top-px">Ética e Cidadania</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex gap-[16px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Heading12 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[64.781px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[32.4px] left-0 not-italic text-[18px] text-[rgba(27,44,73,0.8)] top-[-1px] w-[897px] whitespace-pre-wrap">Consciência sobre o impacto social, ético e ambiental das tecnologias e das próprias criações e uso consciente das aplicações, por meio da curiosidade e senso de conexão com o mundo que o cerca.</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-white h-[224.781px] relative rounded-[48px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-px pt-[49px] px-[49px] relative size-full">
        <Container68 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container72() {
  return <div className="bg-[#4c76ba] h-[8px] rounded-[33554400px] shrink-0 w-[40px]" data-name="Container" />;
}

function Heading13() {
  return (
    <div className="h-[30px] relative shrink-0 w-[263.5px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Black',sans-serif] leading-[30px] left-0 not-italic text-[#1b2c49] text-[24px] top-px">Reflexão e Autonomia</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[16px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Heading13 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[32.391px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[32.4px] left-0 not-italic text-[18px] text-[rgba(27,44,73,0.8)] top-[-1px]">Habilidade de aprender a aprender — refletir sobre o próprio processo e ajustar estratégias.</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-white h-[192.391px] relative rounded-[48px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-px pt-[49px] px-[49px] relative size-full">
        <Container71 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[40px] h-[1948.688px] items-start justify-self-stretch relative row-[1] shrink-0" data-name="Container">
      <Container49 />
      <Container52 />
      <Container55 />
      <Container58 />
      <Container61 />
      <Container64 />
      <Container67 />
      <Container70 />
    </div>
  );
}

function Container47() {
  return (
    <div className="gap-[40px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[1948.688px] relative shrink-0 w-full" data-name="Container">
      <Container48 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section">
      <Container47 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative">
      <div className="-translate-y-1/2 col-1 flex items-center justify-center ml-0 mt-[30px] relative row-1">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="flex flex-col font-['Allotrope:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[#1b2c49] text-[40px] whitespace-nowrap">
            <p className="leading-[1.5]">Habilidades do Século XXI (WEF)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Group5 />
        </div>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[38.5px] left-0 top-[17.31px] w-[238px]" data-name="Paragraph">
      <p className="absolute font-['Allotrope:Light_Italic',sans-serif] leading-[20px] left-0 not-italic text-[#71717b] text-[16px] top-[18.52px] w-[228px] whitespace-pre-wrap">Como abordamos problemas</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Paragraph12 />
      <p className="absolute font-['Allotrope:Bold',sans-serif] h-[18px] leading-[26px] left-0 not-italic text-[#e7609f] text-[24px] top-[-0.69px] uppercase w-[238px] whitespace-pre-wrap">
        competências
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
    </div>
  );
}

function Container78() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text14() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[90.641px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Criatividade</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container78 />
      <Text14 />
    </div>
  );
}

function Container79() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text15() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[93.672px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Colaboração</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container79 />
      <Text15 />
    </div>
  );
}

function Container80() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text16() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[100.688px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Comunicação</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container80 />
      <Text16 />
    </div>
  );
}

function Container81() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text17() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[143.516px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Pensamento crítico</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container81 />
      <Text17 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[164px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-white col-[1] h-[476.297px] justify-self-stretch relative rounded-[40px] row-[1] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-b-8 border-l border-r border-solid border-t inset-0 pointer-events-none rounded-[40px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[30px] items-start pb-[8px] pt-[41px] px-[41px] relative size-full">
        <Container77 />
        <List />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[38.5px] left-0 top-[52.8px] w-[238px]" data-name="Paragraph">
      <p className="absolute font-['Allotrope:Light_Italic',sans-serif] leading-[20px] left-0 not-italic text-[#71717b] text-[16px] top-[-1.48px] w-[254px] whitespace-pre-wrap">
        <br aria-hidden="true" />
        Como aplicamos nossas habilidades no cotidiano
      </p>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[91.297px] relative shrink-0 w-full" data-name="Container">
      <Paragraph13 />
      <p className="absolute font-['Allotrope:Bold',sans-serif] leading-[26px] left-0 not-italic text-[#e7609f] text-[24px] top-[-0.69px] uppercase w-[238px] whitespace-pre-wrap">
        Habilidades
        <br aria-hidden="true" />
        Fundamentais
      </p>
    </div>
  );
}

function Container84() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text18() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[89.094px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Curiosidade</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container84 />
      <Text18 />
    </div>
  );
}

function Container85() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text19() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[67.953px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Iniciativa</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container85 />
      <Text19 />
    </div>
  );
}

function Container86() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text20() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[78.563px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Resiliência</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container86 />
      <Text20 />
    </div>
  );
}

function Container87() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text21() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[115.172px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Adaptabilidade</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container87 />
      <Text21 />
    </div>
  );
}

function Container88() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text22() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[72.234px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Liderança</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container88 />
      <Text22 />
    </div>
  );
}

function Container89() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text23() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[209.328px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Consciência social e cultural</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container89 />
      <Text23 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[256px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-white col-[2] h-[476.297px] justify-self-stretch relative rounded-[40px] row-[1] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-b-8 border-l border-r border-solid border-t inset-0 pointer-events-none rounded-[40px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[30px] items-start pb-[8px] pt-[41px] px-[41px] relative size-full">
        <Container83 />
        <List1 />
      </div>
    </div>
  );
}

function Heading14() {
  return <div className="absolute h-[45px] left-[41px] top-[18.02px] w-[238px]" data-name="Heading 3" />;
}

function Paragraph14() {
  return (
    <div className="absolute h-[38.5px] left-0 top-[52.8px] w-[238px]" data-name="Paragraph">
      <p className="absolute font-['Allotrope:Light_Italic',sans-serif] leading-[20px] left-0 not-italic text-[#71717b] text-[16px] top-[-1.48px] w-[232px] whitespace-pre-wrap">
        <br aria-hidden="true" />
        Como nós lidamos com o mundo a nossa volta
      </p>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[91.297px] relative shrink-0 w-full" data-name="Container">
      <Paragraph14 />
      <p className="absolute font-['Allotrope:Bold',sans-serif] leading-[26px] left-0 not-italic text-[#e7609f] text-[24px] top-[-0.69px] uppercase w-[238px] whitespace-pre-wrap">Qualidades de Caráter</p>
    </div>
  );
}

function Container92() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text24() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[168.359px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Alfabetização e leitura</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container92 />
      <Text24 />
    </div>
  );
}

function Container93() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text25() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[89.078px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Matemática</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container93 />
      <Text25 />
    </div>
  );
}

function Container94() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text26() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[160.875px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Letramento científico</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container94 />
      <Text26 />
    </div>
  );
}

function Container95() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text27() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[179.594px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Letramento tecnológico</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container95 />
      <Text27 />
    </div>
  );
}

function Container96() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text28() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[149.391px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Educação financeira</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container96 />
      <Text28 />
    </div>
  );
}

function Container97() {
  return <div className="absolute bg-[#e7609f] left-0 rounded-[33554400px] size-[6px] top-[10px]" data-name="Container" />;
}

function Text29() {
  return (
    <div className="absolute h-[26px] left-[22px] top-0 w-[209.125px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(27,44,73,0.7)] top-[-2px]">Letramento cultural e cívico</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container97 />
      <Text29 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[256px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-white col-[3] h-[476.297px] justify-self-stretch relative rounded-[40px] row-[1] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-b-8 border-l border-r border-solid border-t inset-0 pointer-events-none rounded-[40px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[30px] items-start pb-[8px] pt-[41px] px-[41px] relative size-full">
        <Heading14 />
        <Container91 />
        <List2 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="col-[1] gap-[32px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(2,_minmax(0,_1fr))] h-[984.594px] justify-self-stretch relative row-[1] shrink-0" data-name="Container">
      <Container76 />
      <Container82 />
      <Container90 />
    </div>
  );
}

function Container74() {
  return (
    <div className="gap-[40px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[476.297px] relative shrink-0 w-full" data-name="Container">
      <Container75 />
    </div>
  );
}

function Section4() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[584px] items-start relative shrink-0 w-full" data-name="Section">
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] h-[5790.328px] items-start relative shrink-0 w-full" data-name="Container">
      <Section />
      <Section1 />
      <Section2 />
      <Container46 />
      <Section3 />
      <Section4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] h-[6813.078px] items-start relative shrink-0 w-[1024px]" data-name="Container">
      <Container5 />
      <Header />
      <Container14 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6941.078px] items-start overflow-clip pt-[64px] px-[95px] right-0 top-0" data-name="Main Content">
      <Container4 />
    </div>
  );
}

function CurriculumLibraryView() {
  return (
    <div className="bg-[#eae5f9] h-[6416px] overflow-clip relative shrink-0 w-full" data-name="CurriculumLibraryView">
      <Container />
      <Sidebar />
      <MainContent />
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[18px] relative shrink-0 w-[395.063px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#9f9fa9] text-[16px] top-0 uppercase">© 2026 Nave à Vela • Base Curricular de Inovação</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[19.188px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[40px] relative size-full">
          <Container99 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[100.188px] items-start pt-[41px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none" />
      <Container98 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1064px] items-start left-0 pt-[97px] top-0 w-[1534px]" data-name="App">
      <CurriculumLibraryView />
      <Footer />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[64px] relative shrink-0 w-[204.246px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204.245 64">
        <g id="Group 1321314659">
          <path d={svgPaths.p31104172} fill="var(--fill-0, #F09CC3)" id="Vector" />
          <path d={svgPaths.p30264400} fill="var(--fill-0, #C15B9D)" id="Vector_2" />
          <path d={svgPaths.p3ada6d80} fill="var(--fill-0, #EA619F)" id="Vector_3" />
          <path d={svgPaths.p26088e80} fill="var(--fill-0, #4C76BA)" id="Vector_4" />
          <path d={svgPaths.p33030200} fill="var(--fill-0, #88ABDA)" id="Vector_5" />
          <path d={svgPaths.p2c50d200} fill="var(--fill-0, #4C76BA)" id="Vector_6" />
          <path d={svgPaths.p17d72b00} fill="var(--fill-0, #4C76BA)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Text30() {
  return (
    <div className="flex-[1_0_0] h-[19.188px] min-h-px min-w-px opacity-40 relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Allotrope:ExtraLight_Italic',sans-serif] leading-[19.2px] left-[20.7px] not-italic text-[16px] text-black top-0 tracking-[2px]">Base Curricular de Inovação</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[19.188px] relative shrink-0 w-[264.703px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text30 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] relative size-full">
          <Group />
          <Container101 />
        </div>
      </div>
    </div>
  );
}

function LogoNaveAVela() {
  return <div className="h-[146.96px] shrink-0 w-[468.999px]" data-name="logo-nave-a-vela" />;
}

function Header1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[97px] items-start left-0 pb-px top-0 w-[1534px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none shadow-[0px_5px_45px_0px_rgba(0,0,0,0.3)]" />
      <Container100 />
      <LogoNaveAVela />
    </div>
  );
}

export default function PlataformaCurricularDigital() {
  return (
    <div className="bg-white relative size-full" data-name="Plataforma Curricular Digital">
      <App />
      <Header1 />
    </div>
  );
}