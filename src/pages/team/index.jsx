import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import { TeamContainer, Container, InfoTeam, Content, About } from "./styles";
import { useState } from "react";
import Airton from "../../assets/img/avatarAirton.png";
import Cristian from "../../assets/img/avatarCristian.png";
import Fernao from "../../assets/img/avatarFernao.png";
import Footer from "../../components/footer";
import Luan from "../../assets/img/avatarLuan.png";
import Luiza from "../../assets/img/avatarLuiza.png";
import Sarah from "../../assets/img/avatarSarah.png";
import teamImg from "../../assets/img/teamImg.gif";

const Team = () => {
  const [team] = useState([
    {
      role: "PO",
      name: "Sarah Scardini",
      profileImg: Sarah,
      profileLink: "https://www.linkedin.com/in/sarah-scardini-a93025223/",
    },
    {
      role: "TL",
      name: "Luiza Schmidt",
      profileImg: Luiza,
      profileLink: "https://www.linkedin.com/in/luiza-schmidt-7946a51b2/",
    },
    {
      role: "SM",
      name: "Luan Diniz",
      profileImg: Luan,
      profileLink: "https://www.linkedin.com/in/luan-diniz-985a7b223/",
    },
    {
      role: "QA",
      name: "Airton Senna da Cruz",
      profileImg: Airton,
      profileLink: "https://www.linkedin.com/in/airton-senna-da-cruz-00a03abb/",
    },
    {
      role: "QA",
      name: "Cristian Tacca",
      profileImg: Cristian,
      profileLink: "https://www.linkedin.com/in/cristian-tacca-837522182/",
    },
    {
      role: "QA",
      name: "Fernão Shiotsuki",
      profileImg: Fernao,
      profileLink:
        "https://www.linkedin.com/in/fern%C3%A3o-shiotsuki-49497a203/",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <TeamContainer>
        <Container>
          <img src={teamImg} alt="Team gif" className="team_gif" />
          <InfoTeam>
            {team.map((atual, index) => (
              <Content key={index}>
                <figure>
                  <img src={atual.profileImg} alt="profile" />
                </figure>
                <About>
                  <h4>
                    <strong>Cargo:</strong> {atual.role}
                  </h4>
                  <h4>
                    <strong>Nome:</strong> {atual.name}
                  </h4>
                  <a href={atual.profileLink} rel="noreferrer" target="_blank">
                    <AiFillLinkedin />
                  </a>
                </About>
              </Content>
            ))}
          </InfoTeam>
        </Container>
        <Footer />
      </TeamContainer>
    </motion.div>
  );
};

export default Team;
