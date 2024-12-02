import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import {
  Button,
  Modal,
  Card,
  useAccordionButton,
  Accordion,
} from "react-bootstrap";
import * as React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

function CardDetails() {
  //   const { id } = useParams();
  const [show, setShow] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(function (prevMode) {
      const nextMode = !prevMode;
      document.body.className = nextMode ? "dark-mode" : "";
      saveTimeDarkModeIsToggled();
      return nextMode;
    });
  };

  function saveTimeDarkModeIsToggled() {
    const now = new Date();
    const darkModeTimes = JSON.parse(
      localStorage.getItem("darkModeTimes") || "[]"
    );
    darkModeTimes.push(now.getHours());
    localStorage.setItem("darkModeTimes", JSON.stringify(darkModeTimes));
  }

  useEffect(() => {
    const darkModeTimes = JSON.parse(
      localStorage.getItem("darkModeTimes") || "[]"
    );
    let averageTime = 0;
    if (darkModeTimes.length > 0) {
      averageTime = darkModeTimes.reduce((previous, current) => {
        return previous + current;
      }, 0);
      averageTime = averageTime / darkModeTimes.length;
    }
    const now = new Date();

    if (now.getHours() > averageTime) {
      setDarkMode(true);
      document.body.className = "dark-mode";
    }
  }, []);

  const data = [
    { name: "Music 1", uv: 4000, pv: 240, amt: 5560 },
    { name: "Music 2", uv: 5000, pv: 342, amt: 8220 },
    { name: "Music 3", uv: 6000, pv: 445, amt: 2150 },
    { name: "Music 4", uv: 7000, pv: 548, amt: 3990 },
    { name: "Music 5", uv: 8000, pv: 644, amt: 9560 },
    { name: "Music 6", uv: 9000, pv: 741, amt: 1220 },
  ];

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );
    return (
      <Button
        type="button"
        className="custom-accordion-toggle"
        onClick={decoratedOnClick}
      >
        {children}
      </Button>
    );
  }

  return (
    <div className="container-container">
      {/* {id} */}
      <div>
        <Button
          variant="primary"
          onClick={() => setShow(true)}
          className="custom-button"
        >
          Show Modal
        </Button>
        <Button
          onClick={toggleDarkMode}
          className="custom-button toggle-button"
        >
          toggle
        </Button>
        {/* <a href="https://www.google.co.id">Google</a> */}
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Enjoy Your day guys🥸🫠
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>appreciate it when you listen to my music app</p>
        </Modal.Body>
      </Modal>

      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0">Click me!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse className="accordion-collapse" eventKey="0">
            <Card.Body>
              Hello! I'm the Human <br />{" "}
              <p>
                Emotional Engagement: Music can profoundly affect emotions,
                making content more memorable and impactful. The right tune can
                evoke specific feelings in the audience, such as happiness,
                sadness, suspense, or excitement, thereby strengthening the
                connection between the content and its viewers or listeners.
                Atmosphere and Tone Setting: Music sets the atmosphere and tone
                of the content, helping to establish the setting, era, or mood.
                For example, a historical documentary might use period-specific
                music to transport viewers back in time, while a horror film
                might use dissonant music to create a sense of tension and fear.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <CustomToggle eventKey="1">Click me!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Hello! I'm another Human <br />
              <p>
                Auditory Cues and Signals: Music and sound cues can guide the
                audience’s attention, signaling important moments, changes in
                mood, or the introduction of new concepts or segments. This is
                particularly effective in educational content, podcasts, and
                presentations. Cultural and Social Connection: Music often
                reflects cultural identities and social realities, allowing
                content creators to reach specific demographics or to speak on
                cultural or societal issues.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0">Click me!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Hello! I'm the Human 2 <br />{" "}
              <p>
                Viewer Engagement and Retention: Background music or thematic
                soundtracks can keep an audience engaged, reducing the
                likelihood of them tuning out or clicking away. It adds a layer
                of interest and keeps the content dynamic. Universal Language:
                Music is a universal language that transcends linguistic
                barriers.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <ResponsiveContainer width="60%" height={400}>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              valueFormatter: (value) =>
                value == null ? "NaN" : value.toString(),
            },
            {
              data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
            },
            {
              data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
              valueFormatter: (value) =>
                value == null ? "?" : value.toString(),
            },
          ]}
          height={200}
          margin={{ top: 10, bottom: 20 }}
        />

        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 6 }}
        >
          <CartesianGrid strokeDasharray={"3 3"} />
          <XAxis dataKey="name" />
          <Label value="Types of Music" offset={0} position="insideBottom" />
          <YAxis
            label={{ value: "Value", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            isAnimationActive={true}
            animationBegin={500}
            animationDuration={1500}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#82ca9d"
            isAnimationActive={true}
            animationBegin={500}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CardDetails;
