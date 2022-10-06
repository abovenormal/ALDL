import { NextPage } from 'next';
import Head from 'next/head';
import Board from '../components/common/Board';
import Title from '../components/common/Title';

const About: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>알록달록 소개</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <Title>알록달록이란?</Title>
      <div className="pb-14">
        <h1 className="flex items-center font-custom font-bold text-black text-lg sm:text-xl md:text-2xl mb-4 ml-lg">
          가족, 친구, 연인과의 소중한 추억을 소장하세요.
        </h1>
        <div className="w-fit h-auto px-lg py-lg rounded-3xl bg-white text-black text-lg md:text-xl border-black border-2">
          알록달록은 블록체인을 활용해 자신의 추억을 평생 소장할 수 있는
          플랫폼입니다.
        </div>
      </div>
      <div className="pb-14 flex flex-col items-end">
        <h1 className="flex items-center font-custom font-bold text-black text-lg sm:text-xl md:text-2xl mb-4 mr-lg">
          서버와 연동되어 채워지는 추억의 자물쇠
        </h1>
        <div className="w-fit h-auto px-lg py-lg rounded-3xl bg-white md:text-right text-black text-lg md:text-xl border-black border-2">
          <div>남산의 추억의 자물쇠를 아시나요?</div>
          <div>
            알록달록은 블록체인 서버에 등록한 내용을 자물쇠로 만들어 웹 페이지에
            배치할 수 있습니다!
          </div>
          <div>
            다른 사람들과 함께 페이지에 자신의 추억을 남겨보세요. 가득 채워진
            자물쇠를 보며 다른 사람들과 추억을 쌓아갈 수 있습니다.
          </div>
        </div>
      </div>
      <div className="pb-14">
        <h1 className="flex items-center font-custom font-bold text-black text-lg sm:text-xl md:text-2xl mb-4 ml-lg">
          해쉬를 공유하며 추억을 함께해보세요.
        </h1>
        <div className="w-fit h-auto px-lg py-lg rounded-3xl bg-white text-black text-lg md:text-xl border-black border-2">
          <div>
            자물쇠의 내용을 다른 사람과 공유하고싶나요? 자물쇠 등록 시 받은
            해쉬값을 공유해보세요!
          </div>
          <div>
            알록달록은 해쉬를 등록하여 자물쇠의 내용을 다른 사람에게 보여줄 수
            있습니다. 추억을 모두와 나누어보세요!
          </div>
        </div>
      </div>
      <div className="pb-14 flex flex-col items-end">
        <h1 className="flex items-center font-custom font-bold text-black text-lg sm:text-xl md:text-2xl mb-4 mr-md sm:mr-lg">
          알록달록은 사용자의 정보를 안전하게 관리합니다.
        </h1>
        <div className="w-fit h-auto px-lg py-lg rounded-3xl bg-white md:text-right text-black text-lg md:text-xl border-black border-2">
          <div>
            블록체인 서버를 사용하면 다른 사람들에게 원하지 않는 내용이 보여질까
            걱정하지 않아도 됩니다.
          </div>
          <div>알록달록은 공유된 사람만 내용을 열람할 수 있어요!</div>
          <div>
            또한, 서버에 저장할 때도 암호화를 거치기 때문에 서버에서 직접
            열람해도 그 내용을 확인할 수 없습니다.
          </div>
          <div>걱정없이 원하는 추억을 기록해보세요.</div>
        </div>
      </div>
      <div>
        <h1 className="flex justify-center items-center font-custom font-bold text-black text-lg sm:text-xl md:text-2xl mb-4 mr-lg">
          FAQ
        </h1>
        <div className="w-fill h-auto px-lg py-lg rounded-3xl bg-wpeach text-black border-black border-2"></div>
      </div>
    </>
  );
};

export default About;
