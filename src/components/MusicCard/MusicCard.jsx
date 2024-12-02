import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Card, Row, Col } from "react-bootstrap";

function MusicCard({ songs, isSearched }) {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (imageUrl) => {
    setCurrentImage(imageUrl);
    setShowModal(true);
  };
  console.log("Modal state:", showModal, "Current image:", currentImage);
  console.log(songs);

  return (
    <Row className="g-4">
      {songs.length == 0 && isSearched ? (
        <b>doesn't exist song</b>
      ) : (
        songs.map((song) => (
          <Col
            key={song.id}
            xs={8}
            sm={4}
            md={3}
            className="mb-3 d-flex align-items-stretch"
          >
            <Card
              className="shadow-lg h-100"
              style={{
                width: "23rem",
              }}
            >
              <Card.Img
                variant="top"
                src={song.artist.picture_medium}
                alt={`Image of ${song.artist.name}`}
                className="img-fluid clickable-image"
                onClick={() => {
                  handleImageClick(song.artist.picture_medium);
                }}
              ></Card.Img>
              <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
              >
                <Modal.Body>
                  <img src={currentImage} className="img-fluid" />
                </Modal.Body>
              </Modal>
              <Card.Body>
                <Card.Title>
                  {song.title} <br />
                  <small className="text-muted">by {song.artist.name}</small>
                </Card.Title>
                <Card.Text className="mt-2">
                  <strong>Ranked :</strong> {song.rank}
                </Card.Text>
                <audio src={song.preview} controls className="mt-auto"></audio>
                <Link
                  style={{ width: "38%" }}
                  to={`/detail/${song.id}`}
                  className="btn btn-warning mt-3 align-self-center"
                >
                  Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
}

export default MusicCard;
