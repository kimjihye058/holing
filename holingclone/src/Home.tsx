import './Home.css'

function Home () {

    return (
        <div>
            <nav className='nav'>
                <div className='wrapper-container'>
                    <div>
                        <a>
                            <img className='imgLogo' src="/assets/images/favicon.svg" alt='logo' />
                        </a>
                        <a className='aDownload'>앱 다운로드</a>
                        <a className='aLogin'>로그인</a>
                    </div>
                </div>
            </nav>
            <div className='main'>
                <div className='first'>
                    <div>
                        <span font-size="30">스스로 학습하는 수학 공부 앱</span>
                        <span font-size="">홀링</span>
                        <span>동영상 강의, 문제풀이, 오답학습까지<br/> 혼자서도 알차고 탄탄하게 공부해요</span>
                        <a href="">
                            <div>무료체험 시작하기</div>
                        </a>
                    </div>
                    <div>
                        <img src="/assets/images/scroll.svg" />
                        <div>
                            <img src="/assets/images/cloud.svg" alt="" />
                            <span>홀링 앱은 <span>태블릿, 스마트폰</span>에서 <br /> 다운로드 및 이용 가능</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )

}
export default Home