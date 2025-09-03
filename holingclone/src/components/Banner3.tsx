import styled from "styled-components";

function Banner3() {

    return (
        <BannerDiv>
            <Banner>
                <BannerInside>
                    <BannerInsideDiv>
                        <Span1>
                            중·고등 수학은 
                            <Span2>홀링 플러스</Span2>
                            로 똑똑하게 공부하세요
                        </Span1>
                        <img src="/assets/images/banner/chalk.svg" alt="" />
                    </BannerInsideDiv>
                </BannerInside>
            </Banner>
        </BannerDiv>
    )

}
export default Banner3;

export const BannerDiv = styled.div``;

export const Banner = styled.div``;

export const BannerInside = styled.div``;

export const BannerInsideDiv = styled.div``;

export const Span1 = styled.span``;

export const Span2 = styled.span``;
