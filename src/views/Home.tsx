import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Marquee from "react-fast-marquee";
// component
import Header from "../components/Header";
import Footer from "../components/Footer";
//img
import StudyThum01 from "../image/study01.webp";
import StudyThum02 from "../image/study02.webp";
import StudyThum03 from "../image/study03.webp";
import Me from "../image/me.gif";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const visualRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        gsap.to(visualRef.current, {
        scrollTrigger: {
            trigger: '.start',
            start: 'top center',
            end: 'bottom top',
            // markers: true,
            scrub:true,
        },
        yPercent: 50,
        scale: 2,
        opacity: 0,
        });
    }, []);

    const studyList = [
        {
            key: 'react',
            title: 'React',
            url: 'https://aeolian-birch-d63.notion.site/f45a4332ea4b4292bd4e07ad884165db?v=a42982afa3b745bcbfe6df9112f82614',
            description: '코딩애플 강의를 들으면서 공부한 내용들!',
            img: StudyThum01,
        },
        {
            key: 'typescript',
            title: 'TypeScript',
            url: 'https://aeolian-birch-d63.notion.site/TypeScript-e66cbc5605434a75902fb79f7bab6fc4',
            description: '강의 및 구글 검색을 통해 얻게 된 Ts 지식들',
            img: StudyThum02,
        },
        {
            key: '업무기록',
            title: '업무 기록',
            url: 'https://aeolian-birch-d63.notion.site/3d5edb0e747a4f69b02176b501e8802c',
            description: '업무하면서 기억에 남는 것들 끄적끄적',
            img: StudyThum03,
        },
    ]
    return(
        <div className="text-slate-800">
            <Header />
            <main>
                <section className="start fixed left-0 top-0 w-full" style={{height: '1200px'}}>
                    <div className="w-[400px] h-[400px] bg-white mx-auto sticky top-52 rounded-full drop-shadow-lg bg-gradient-to-r from-emerald-500 to-teal-500 " ref={visualRef}></div>
                </section>
                <div className="sticky" style={{marginTop: '1200px'}}>
                    <section className="pt-40 space-y-8">
                        <Marquee className="text-8xl overflow-hidden leading-snug uppercase	font-deco" direction="left" speed={10} autoFill>
                            <p>not afraid of new things</p>
                        </Marquee>
                        <Marquee className="text-8xl overflow-hidden leading-snug uppercase	font-deco" direction="right" speed={10} autoFill>
                            <p>challenging challenging 🙌🏼 </p>
                        </Marquee>
                        <Marquee className="text-8xl overflow-hidden leading-snug uppercase	font-deco" direction="left" speed={10} autoFill>
                            <p>continuous🏃🏽‍♀️ and steady 🤓 continuous and steady</p>
                        </Marquee>
                    </section>
                    <section className="grid grid-cols-2 p-48 gap-10">
                        <div className="flex flex-col gap-10">
                            <img src={Me} alt="오민지 Emoji" />
                            <h2 className="text-4xl text-center font-bold">안녕하세요! <span className="text-emerald-500 font-deco">UI개발자</span> 오민지입니다.</h2>
                        </div>
                        <div>
                            <h3 className="text-3xl mb-4">머무르지 않고 지속적으로 성장하며 빠르게 변화하는 프론트 언어를 습득하는 것을 좋아합니다.  그렇게 배운 언어를 코드를 활용 성 있게 사용합니다. </h3>
                            <p className="text-xl mb-12">저는 총 3년 2개월의 경력이 있습니다. 첫 회사인 웹 에이전시에서는 html, css, js를 이용하여 주로 반응형 및 적응형의 인터렉티브한 웹을 담당하며 기초를 쌓았습니다.고객의 니즈를 직접적으로 소통하며  빠르게 작업을 할 수 있는 역량을 얻었고 최신 동향에 맞는 역동적인 UI를 구현하였습니다. <br /><br />
                                그 후 현재 두번 째 유통회사에서는 B2B, B2C 사업의 솔루션을 전반적으로 경험해보며 유지보수에 능하도록 스타일의 컴포넌트화, 공통화할 수 있도록 코드를 구성하였습니다. 비록 적은 경력이였지만 신입 퍼블리셔들에게 공통화 할 수 있는 코드를 함께 구현하도록 리드하였고 이후에는 SI사업 퍼블리싱을 단독으로 담당하여 구축하면서 프로젝트를 전반적으로 경험하면서 소통과 기술 역량을 늘렸습니다.<br /><br />
                                세 번째 회사에서는 그동안 공부해왔던 React를 실무에 적용할 수 있는 프로젝트에 참여하면서 프로모션 신규 스프린트로 유지보수 및 공통 컴포넌트를 작업하였습니다. 또한  정적인 언어인 Typescript를 함께 사용하여 UI개발을 하였습니다. </p>
                            <Link to="https://www.notion.so/MinJi-Oh-1e110983145d4176803b8489bd372e6f?pvs=4" target="_blank" className="flex items-center justify-end gap-x-4 hover:font-bold group text-lg">
                               자세히 보기
                               <span className="relative block w-7 h-[1px] bg-black after:block after:w-3 after:h-3 after:border after:border-solid after:border-black after:border-b-0 after:border-l-0 after:absolute after:right-0 after:-top-[5px] after:rotate-45"></span> 
                            </Link>
                        </div>
                    </section>
                    <section className="p-48 pt-0">
                        <h1 className="mb-16 text-5xl font-bold text-center font-deco">Let's Study!</h1>
                        <ul className="grid grid-cols-3 gap-x-10">
                            {studyList.map((data)=>{
                                return(
                                    <li className="flex flex-col group" key={data.key}>
                                        <Link to={data.url} target="_blank">
                                            <div className="rounded-lg overflow-hidden group-hover:shadow-lg group-hover:-translate-y-1 transition-all mb-4">
                                             <img src={data.img} alt={data.title + "썸네일"} className="w-full h-full" />
                                            </div>
                                            <h1 className="text-2xl mb-2 font-bold">{data.title}</h1>
                                            <p className="text-lg">{data.description}</p>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    ) 
}
export default Home;