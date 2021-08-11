import ProjectCard from "./ProjectCard";

export default function Project({ projectRef }) {
  const lolDescription = `리그오브레전드 게임 전적 검색 프로젝트입니다. Riot Games API 사이트에서 데이터를 호출하여 게임의 결과를 보여줍니다.
  Riot Games API에서 데이터를 받아오기 때문에 서버는 따로 필요 없을 거라 생각하였지만 CORS 문제를 해결하기 위해 데이터를 Express 서버에서 받고 클라이언트에서 호출하여 받는 방식을 선택하였습니다.
  Axios를 사용하여 Rest API를 호출하고 받은 데이터를 필터링 등의 과정을 거쳐 필요한 정보를 화면에서 보여주는 공부를 할 수 있었고, CORS 정책 위반의 원인 및 해결에 대해 학습할 수 있었습니다. Next 서버에서 제공하는 api 솔루션을 이용하여 따로 Express 서버를 만들지 않고도 할 수 있었다.`;
  const dukTubeDescription = `유튜브를 클론 코딩해본 프로젝트이다. 처음 Express, Mongodb, view engine을 배우면서 해보았지만 Rest API가 아닌 GraphQL을 사용하여 해본 프로젝트이다.
  서버는 Apollo Server를 사용하였고 데이터베이스는 Prisma를 사용하여 PostgreSQL에 데이터를 저장하였다. 동영상의 경우 직접 데이터베이스가 아닌 AWS S3에 저장을 하여 AWS에 대한 공부도 시작하게되었다. 또한 Rest API와 GraphQL을 비교해볼 수 있었고 Apollo Client의 캐시에 대하여 학습을 하였다.`;
  const portfolioDescription = `Next.js를 사용하여 제작한 포트폴리오 사이트이다. Next.js로 제작을 하면서 SSR, SSG, CSR에 대하여 학습을 할 수 있었고 Vercel을 이용하여 배포도 해볼 수 있었다. getStaticPaths, getStaticProps, getServerSideProps를 사용하지는 않았지만, 공식 문서를 통해 공부를 하였고 다른 프로젝트에서 사용할 수 있었다.`;
  const coinDescription = `코인에 대한 정보(가격, 시총, 설명 등)를 확인 할 수 있는 프로젝트이다. CoinGecko API를 통해 코인들에 대한 정보를 SWR을 사용하여 불러올 수 있었고 코인 상세 화면은 getStaticPaths, getStaticProps를 사용하여 데이터 pre-fetching에 대하여 경험할 수 있었다.`;
  return (
    <section>
      <div
        className="py-5 fw-bold mb-0 d-flex flex-column align-items-center"
        ref={projectRef}
        style={{
          minHeight: "100vh",
          backgroundColor: "#089DE3"
        }}>
        <h1 className="mb-5 border-bottom border-light border-2 fw-bold lh-lg text-light">Projects</h1>
        <ProjectCard
          title="리그오브레전드 전적"
          description={lolDescription}
          images={["/lol/lol_main.PNG", "/lol/lol_detail.PNG"]}
          datas={[
            { "Feature": "소환사명으로 전적 검색, 랭크 및 티어 조회, 승률 조회" },
            { "GitHub": "https://github.com/hyunduk-jo/Learn-Next" },
            { "Domain": "https://learn-next-six.vercel.app/" },
            { "Front-End": "React, Styled-components / Next, Bootstrap" },
            { "Back-End": "ExpressJS" }
          ]} />
        <ProjectCard
          title="유튜브 클론 코딩"
          description={dukTubeDescription}
          images={["/duktube/duktube_home.PNG", "/duktube/login.PNG", "/duktube/upload.PNG", "/duktube/video_detail.PNG"]}
          datas={[
            { "Feature": "회원가입, 로그인, 동영상 업로드, 댓글 입력, 사용자 구독 기능" },
            { "GitHub": "https://github.com/Qndtl/Youtube_Apollo_Front" },
            { "Domain": "https://duktube.netlify.app" },
            { "Front-End": "React, Apollo Client, CSS" },
            { "Back-End": "Apollo Server, Express, Prisma, GraphQL, AWS S3" }
          ]} />
        <ProjectCard
          title="웹 포트폴리오"
          description={portfolioDescription}
          images={["/port/port_main.PNG", "/port/port_second.PNG", "/port/port_third.PNG"]}
          datas={[
            { "Feature": "간단한 소개, 보유 기술, GitHub, Notion, 개인 프로젝트 경험" },
            { "GitHub": "https://github.com/Qndtl/Portfolio_v3" },
            { "Domain": "portfolio-v3-qndtl.vercel.app" },
            { "Front-End": "NextJS, Bootstrap" }
          ]} />
        <ProjectCard
          title="코인 차트"
          description={coinDescription}
          images={["/coin/coin_main.PNG", "/coin/coin_detail.PNG"]}
          datas={[
            { "Feature": "코인 시총 순위로 보는 표, 코인 설명 및 차트" },
            { "GitHub": "https://github.com/Qndtl/Coin" },
            { "Domain": "https://coin-qndtl.vercel.app/" },
            { "Front-End": "Next, Bootstrap" }
          ]} />
      </div>
    </section>
  )
}
