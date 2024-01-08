import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as I from "../interface/ProjectInterface";

//img
import First01 from "../image/first-01.png";
import First02 from "../image/first-02.png";
import First03 from "../image/first-03.png";
import First04 from "../image/first-04.png";
import First05 from "../image/first-05.png";
import First06 from "../image/first-06.png";
import First07 from "../image/first-07.png";
import First08 from "../image/first-08.png";
import First09 from "../image/first-09.png";
import First10 from "../image/first-10.png";
import First11 from "../image/first-11.png";

import Second01 from "../image/second-01.png";
import Second02 from "../image/second-02.png";
import Second03 from "../image/second-03.png";
import Second04 from "../image/second-04.png";
import Second05 from "../image/second-05.png";
import Second06 from "../image/second-06.png";
import Second07 from "../image/second-07.png";
import Second08 from "../image/second-08.png";
import Second09 from "../image/second-09.png";

import Third101 from "../image/third-01.png";
import Third102 from "../image/third-02.png";
import Third103 from "../image/third-02.png";
import Third104 from "../image/third-02.png";

const Project = () => {
    //프로젝트 url 
    const { id } = useParams<any>();
    // 프로젝트 info
    const projectData: I.ProjcetData[] = [
        {
            key: '1',
            name: 'First Company',
            title: 'AK웹서비스 (투유웹)',
            project: [
                {
                    key: '퀵아포스티유웹',
                    name: '퀵아포스티유',
                    url: 'https://quickapostille.co.kr/',
                    img: First01,
                    description: '영카트 기반의 웹으로 로그인 , 회원가입, 게시판 기능이 포함 된 PC/MB 적응형 웹입니다. PC 작업을 100% 담당하였습니다. 제작 기간은 총 7일입니다. 전세계 서류를 도와주는 대행 업체입니다.',
                },
                {
                    key: '대경천막기업웹',
                    name: '대경천막기업',
                    url: 'https://quickapostille.co.kr/',
                    img: First02,
                    description: '그누보드 기반의 웹으로 게시판 , 문의 기능이 포함 된 PC/MB 적응형 웹입니다. 기여도 100%로 제직기간은 총 5일입니다. 기업소개 및 제품 소개, 포트폴리오 사이트 입니다.',
                },
                {
                    key: '블랑네이처웹',
                    name: '블랑네이처',
                    url: 'https://quickapostille.co.kr/',
                    img: First03,
                    description: '카페 24기반으로 제작 된 적응형 웹입니다. 카페24 기본 레이아웃에서 커스터마이징을 하여 제작하였습니다. 제작 기간은 총 5일입니다. 화장품 판매 쇼핑몰입니다.',
                },
                {
                    key: '청명엔지니어링웹',
                    name: '청명엔지니어링',
                    img: First04,
                    description: '첫 업무로 작업했던 적응형 웹 사이트입니다. 기업 소개 형 사이트로 다른 웹에 비해 페이지수가 많았습니다. 기여도 100%로 8일동안 진행하였습니다.',
                },
                {
                    key: '캔디아트랩웹',
                    name: '캔디아트랩',
                    img: First05,
                    description: '그누보드 기반의 웹으로 게시판, 동영상 업로드 기능이 포함 된 반응형 웹입니다. 메인페이지에서 글자가 써지는 효과가 있습니다. 기여도 100% 제작기간은 총 5일입니다. 화사 소개 및 포트폴리오형 사이트입니다.',
                },
                {
                    key: '노무법인로직웹',
                    name: '노무법인로직',
                    url: 'https://fhwlr1.iwinv.net/',
                    img: First06,
                    description: '그누보드 기반의 웹으로 only Pc웹사이트입니다. 모바일에서도 비율을 유지하도록 의뢰를 받아 min-width를 사용하여 조절하였습니다. 기여도 100%의 3일동안 제작하였습니다.',
                },
                {
                    key: '장인미역웹',
                    name: '장인미역',
                    img: First07,
                    description: '랜딩사이트로 PC/MB 나누어 제작한 적응형 사이트 입니다. 스크롤 효과를 사용하여 역동적으로 표현했습니다. 매장과 메뉴를 소개하는 사이트입니다.',
                },
                {
                    key: '그린위치 오픈몰 웹 / 폐쇄형 웹',
                    name: '그린위치 오픈몰 웹 / 폐쇄형',
                    img: First08,
                    description: '전자제품을 렌탈 해주는 목적으로 만들어진 이 사이트는 오픈형과 폐쇄형으로 나누어 의뢰받았습니다.폐쇄형의 경우 카페24기반으로 커스텀 하였고 스크롤 구역에 따라 퀵 메뉴 ui가 달라집니다. 오픈형은 그누보드 기반으로 제작하였습니다.',
                },
                {
                    key: '라인케어웹',
                    name: '라인케어',
                    img: First09,
                    description: '라인케어에서 외주를 받아 작업한 사이트로 반응형으로 제작하였고 기획, 디자인, 퍼블리싱 전반적으로 담당하였습니다. 기업을 소개하고 홍보하는 사이트입니다. 기여도 100%로 스타트업 분위기에 맡게 모션 효과를 주로 작업하였습니다.',
                },
                {
                    key: '하리보웹',
                    name: '하리보 코리아',
                    url: 'http://shop2.sckoreamaster.cafe24.com/',
                    img: First10,
                    description: '카페 24기반의 웹으로 100% 커스터마이징으로 작업했습니다. 하리보 굿즈를 판매하는 사이트로 총 6일 소요되었습니다.',
                },
                {
                    key: '만들다디자인웹',
                    name: '만들다디자인',
                    img: First11,
                    description: '그누보드 기반의 웹으로 반응형입니다 . Fullpage.js를사용하였습니다. 제작기간은 5일 소요되었습니다. 인테리어 업체의 포트폴리오와 문의가 가능한 사이트입니다.',
                },
       
            ]
        },
        {
            key: '2',
            name: 'Second Company',
            title: '리테일앤인사이트',
            project: [
                {
                    key: '한살림 erp웹',
                    name: '한살림 ERP',
                    img: Second01,
                    description: '한살림 Si 프로젝트(30억규모)로 ERP 솔루션을 신규로 구축하는 단독 퍼블리싱 (7개월 투입)작업을 담당 하고 있습니다. 공통과 표준을 잡고 가이드를 제시하여 유지보수가 편리하도록 개발하고 있습니다.웹 접근성을 고려하여 작업했습니다. 웹의 색상 대비, 선명도, 텍스트 크기 등을 고려하였고 시력 장애가 있는 사용자를 위해 글자 크기를 조절할 수 있도록 js를 이용하여 작업하였습니다. 또한 웹의 내용을 스크린 리더와 같은 보조 기술을 사용하여 접근 가능하도록 했습니다.', 
                },
                {
                    key: 'H마트 글로벌 패키지웹',
                    name: 'H마트 글로벌 패키지',
                    img: Second02,
                    description: '토마토 솔루션을 기반으로 미국 한인 마트의 솔루션을 구축하는 작업을 하고 있습니다. 환경에 맞는 UiUx 기획/디자인/퍼블리싱에 전반적으로 참여하였습니다.', 
                },
                {
                    key: '토마토 B2B scm 웹앱',
                    name: '토마토 B2B SCM',
                    img: Second03,
                    description: '자사 솔루션으로 개발된 B2B APP이며 모바일 웹 퍼블리싱 기여도 100% 입니다. 기존에 사용하지 않았던 SCSS를 활용하여 개발하였고, 이를 통해 중복 코드를 줄이고 재활용성 있는 코드로 작업 효율성을 높였습니다.', 
                },
                {
                    key: '토마토 소개 홈페이지웹',
                    name: '토마토 소개 홈페이지',
                    url: 'https://tomato-market.co.kr/',
                    img: Second04,
                    description: '반응형 웹으로 fullpage, slide, svg animation, scrolltop 스크립트를 작성하여 완성하였습니다. 토마토 솔루션을 소개하고 문의하는 홈페이지입니다. 기여도 100%작업물입니다.', 
                },
                {
                    key: '김포빰빰투어웹',
                    name: '김포빰빰투어',
                    img: Second05,
                    description: '퍼블리싱 신규 프로젝트 기여도 100% 로 적응 형으로 제작하였습니다. 같은 계열사의 김포 시 프로젝트에 참여하여 작업한 Ebook형 웹입니다. API를 사용하여 커스텀하였습니다.', 
                },
                {
                    key: '토마토 매니저앱웹',
                    name: '토마토 매니저',
                    img: Second06,
                    description: '퍼블리싱 유지보수 및 신규 작업 기여도 60% 하이브리드 웹입니다. 신규 기획에 따른 페이지/컴포넌트 추가 작업을 하였습니다. 기업에 남는 작업으로는 마감 세일 프로모션으로 터치를 통해 전시 상품의 순서를 변경할 수 있으며 슬라이드를 통해 간편하게 상품의 품절 처리가 가능하게 구현하였습니다.', 
                },
                {
                    key: '토마토 ERP웹',
                    name: '토마토 ERP',
                    img: Second07,
                    description: '퍼블리싱 유지 보수 및 신규 작업 기여도 45% 크롬 1920 해상도에 최적화 되어있는 자사 솔루션으로 개발된 ERP 웹입니다. 사용자가 전반적으로 운영 관리를 할 수 있는 솔루션입니다.', 
                },
                {
                    key: '토마토 사용자앱',
                    name: '토마토 사용자앱',
                    img: Second08,
                    description: '퍼블리싱 유지 보수 및 신규 작업 기여도 60% 의 웹/앱입니다. 오류 개선과 신규 페이지 작업과 기획 변경에 대해 유지 보수 작업을 하였습니다. 주도적으로 작업한 것은 css코드를 자사와 맡게 공통화 하여 개선하였습니다.', 
                },
                {
                    key: '웹POP',
                    name: '웹POP',
                    img: Second09,
                    description: '개별 마트가 복잡한 프로그램에 의존하지 않고 쉽고 빠르게 웹pop를 제작할 수 있는 디자인 툴 솔루션입니다. 1920px에 최적화 되었으며 웹 퍼블리싱 기여도 90%입니다.', 
                },
            ]
        },
        {
            key: '3',
            name: 'Third Company',
            title: '교보문고',
            project: [
                {
                    key: '창작의 날씨웹',
                    name: '창작의 날씨',
                    url: 'https://nalcee.com/',
                    img: Third101,
                   description: `창작의 날씨(날줄과 씨줄이 어우러져 옷감을 만들 듯 창작가와 독자가 함께 작품을 만드는 공간: 교보문고와 교보생명의 협업 플랫폼)의 
                   리액트 기반의 PC웹과 Next를 사용한 MB페이지를 각각 개발하였습니다. Scss와 MUI를 사용하여 기획안의 신규 스프린트를 처리하고 이벤트 및 프로모션 페이지, 크로스 브라우징 QA처리등을 담당하였습니다. 
                   이미지가 많은 플랫폼이기 때문에 이미지를 최적화하는 작업을 많이 고민하면서 작업하였습니다.`, 
                },
                {
                    key: 'KEP Component웹',
                    name: 'KEP Component',
                    img: Third102,
                   description: `기존에 공통 디자인시스템의 부재로 선임과 함께 React, TypeScript, Tailwind를 사용하여 제작하는 작업을 하였습니다.
                   Input Type, Data Display, FeedBack, Layout, Chart, Icon, Breakpoint, Ag Grid 사용, 카카오 주소검색, Color Chip 등을 분류하여 제작하였습니다. 
                   파라미터를 이용해 지정된 디자인이나 속성 변경이 가능하며 정적으로 Type을 부여하여 추후에도 관리가 용이하도록 하였습니다.
                   `, 
                },
                {
                    key: '세모가방 앱소개웹',
                    name: '세모가방 앱소개 웹',
                    url: 'https://www.semokids.com/landing/home',
                    img: Third103,
                   description: '신규 프로젝트인 “세모가방” 앱을 소개할 수 있는 웹사이트를 반응형으로 작업하였습니다.', 
                },
                {
                    key: '세모가방 B2B Admin웹',
                    name: '세모가방 B2B Admin',
                    img: Third104,
                   description: `기존에 작업한 공통 컴포넌트를 사용하여 제작하고 있으며 이로 인해 시간이 단축되고 있습니다. React, Typescript, Tailwind, Zustand, Vite를 사용하였습니다. 
                   Axios를 사용하여 Api를 입히는 작업을 진행하던 중 회사 내부 사정으로 인해서 중단 된 프로젝트입니다.`, 
                },
            ]
        },
    ]

    //프로젝트 title 설정
    const [name, setName] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    // const [projectNum, setProjectNum] = useState<number>(0);
 
    useEffect(()=>{
        let url: string[] = ['1', '2', '3'];
        url.forEach((item: string, index: number)=>{
            id === item && setTitle(projectData[index].title); 
            id === item && setName(projectData[index].name); 
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 프로젝트 마우스 효과
    const [containerXy, setContainerXy] = useState<{x: number; y: number}>({x: 0, y: 0});
    const handleXy = (e: any) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        setContainerXy({x: mouseX, y: mouseY});
    }
    return(
        <div>
            <Header />
            <main onMouseMove={handleXy}>
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full absolute lg:hidden" style={{transform: `translate(${containerXy.x}px, ${containerXy.y}px)`}}></div>
                <section className="w-full h-screen flex flex-col items-center justify-evenly">
                    <div>
                        <h3 className="text-center text-lg text-slate-900 mb-4">{name}</h3>
                        <h1 className="text-center text-5xl font-bold text-slate-900">{title}</h1>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 animate-bounce">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                </section>
                <section className="p-40 lg:p-10">
                    {name === "First Company" ? (<ul className="grid grid-cols-4 gap-x-10 gap-y-20 lg:grid-cols-1 lg:gap-y-20">
                        {projectData[0].project.map((data: I.ProjcetDetailData)=>{
                            return(
                                <li key={data.key} className="group" onClick={()=>{data.url ? window.open(data.url) : alert("해당 사이트가 만료되었거나 보안으로 인해 공개가 어려운 점 참고부탁드립니다.😓")}}>
                                        <img className="w-full rounded-lg mb-4 group-hover:opacity-50 group-hover:-translate-y-1 duration-300 transition-all" src={data.img} alt={data.name + "썸네일"} loading="lazy"/>
                                        <h3 className="text-lg font-bold">{data.name}</h3>
                                        <p className="text-base">{data.description}</p>
                                    {/* </a> */}
                                </li>
                           )})
                        }
                    </ul>)
                    : name === "Second Company" ? (<ul className="grid grid-cols-4 gap-x-10 gap-y-20 lg:grid-cols-1 lg:gap-y-20">
                        {projectData[1].project.map((data: I.ProjcetDetailData)=>{
                            return(
                                <li key={data.key} className="group" onClick={()=>{data.url ? window.open(data.url) : alert("해당 사이트가 만료되었거나 보안으로 인해 공개가 어려운 점 참고부탁드립니다.😓")}}>
                                    <a href={data.url}>
                                        <img className="w-full rounded-lg mb-4 group-hover:opacity-50 group-hover:-translate-y-1 duration-300 transition-all border-2 border-solid border-black" src={data.img} alt={data.name + "썸네일"} loading="lazy"/>
                                        <h3 className="text-lg font-bold">{data.name}</h3>
                                        <p className="text-base">{data.description}</p>
                                    </a>
                                </li>
                           )})
                        }
                    </ul>)
                    : (<ul className="grid grid-cols-2 gap-40 lg:grid-cols-1 lg:gap-y-20">
                        {projectData[2].project.map((data: I.ProjcetDetailData)=>{
                            return(
                                <li key={data.key} className="group" onClick={()=>{data.url ? window.open(data.url) : alert("해당 사이트가 만료되었거나 보안으로 인해 공개가 어려운 점 참고부탁드립니다.😓")}}>
                                    <a href={data.url}>
                                        <img src={data.img} alt={data.name + "썸네일"} loading="lazy" className="w-full rounded-lg mb-4 group-hover:opacity-50 group-hover:-translate-y-1 duration-300 transition-all border-2 border-solid border-black"/>
                                        <h3 className="text-lg font-bold">{data.name}</h3>
                                        <p className="text-base">{data.description}</p>
                                    </a>
                                </li>
                           )})
                        }
                    </ul>)
                    }
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Project;