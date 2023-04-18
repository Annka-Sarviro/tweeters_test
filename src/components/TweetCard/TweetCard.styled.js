import styled from "styled-components";
import cardImg from "../../assets/card-img.png";

export const Card = styled.li`
  position: relative;
  text-align: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  min-height: 460px;
  min-width: 306px;
  margin-top: 24px;
  margin-left: 24px;
  padding: 28px 0;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-card);
`;
export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ImgThumb = styled.div`
  position: absolute;
  top: 180px;
  left: 39%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  overflow: hidden;
  background-color: var(--color);
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Avatar = styled.img`
  display: flex;
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const Line = styled.div`
  height: 8px;
  margin-top: 18px;
  margin-bottom: 60px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const ImgContainer = styled.div`
  height: 168px;
  margin-left: 36px;
  margin-right: 36px;
  background-image: url(${cardImg});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Text = styled.p`
  margin: 0 auto 12px auto;
  text-align: center;
`;
