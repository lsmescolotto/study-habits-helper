import { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { TeamContainer, Container, InfoTeam, Content, About } from "./styles";
import Footer from "../../components/footer";
import teamImg from "../../assets/img/teamImg.gif";

const Team = () => {
  const [team] = useState([
    {
      role: "PO",
      name: "Sarah Scardini",
      profileImg:
        "https://media-exp1.licdn.com/dms/image/C5603AQFV50mPdLzEgw/profile-displayphoto-shrink_800_800/0/1635460351623?e=1644451200&v=beta&t=XQ5Hz6n3slN5geDSLmhhUB-Fz_SyhENqohp3HX6zYLQ",
      profileLink: "https://www.linkedin.com/in/sarah-scardini-a93025223/",
    },
    {
      role: "TL",
      name: "Luiza Schmidt",
      profileImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQH2TsHxMNnFuA/profile-displayphoto-shrink_800_800/0/1627340430235?e=1644451200&v=beta&t=OeO5RqVoe_7OLtSiPRWEWwUQS0beHTcf3Yik4QYHrwM",
      profileLink: "https://www.linkedin.com/in/luiza-schmidt-7946a51b2/",
    },
    {
      role: "SM",
      name: "Luan Diniz",
      profileImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGy_V9HI-BJSA/profile-displayphoto-shrink_800_800/0/1639085064248?e=1644451200&v=beta&t=2PSiZjMtk9cmDneA7eGzjuU37OLvgR4Ro6lDWZRCE0A",
      profileLink: "https://www.linkedin.com/in/luan-diniz-985a7b223/",
    },
    {
      role: "QA",
      name: "Airton Senna da Cruz",
      profileImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGpA0__8rR4hQ/profile-displayphoto-shrink_800_800/0/1615373726347?e=1644451200&v=beta&t=SalGLUyOXQoUs89QApIhaF9tcqPy52_aKk9f-wYco6w",
      profileLink: "https://www.linkedin.com/in/airton-senna-da-cruz-00a03abb/",
    },
    {
      role: "QA",
      name: "Cristian Tacca",
      profileImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQF0-NHlHohQJg/profile-displayphoto-shrink_800_800/0/1633611217526?e=1644451200&v=beta&t=_-4ENbOqGN9EWIwntMUs9dboV8UlJEQTew6rzIEnRp0",
      profileLink: "https://www.linkedin.com/in/cristian-tacca-837522182/",
    },
    {
      role: "QA",
      name: "Fernão Shiotsuki",
      profileImg:
        "https://media-exp1.licdn.com/dms/image/C5603AQEB1vb7PrXjXQ/profile-displayphoto-shrink_800_800/0/1627565162765?e=1644451200&v=beta&t=tTi6cvdwyzgo204czHL4a61DyoXMJSFSEy4R3o7gRcc",
      profileLink:
        "https://www.linkedin.com/in/fern%C3%A3o-shiotsuki-49497a203/",
    },
  ]);

  return (
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
  );
};

export default Team;
