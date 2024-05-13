import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  handleOpenModal = () => {
    this.setState({ openModal: true });
  };

  handleCloseModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { openModal } = this.state;

    return (
      <div>
        <h1>Dashboard</h1>
        <Button variant="contained" color="primary" onClick={this.handleOpenModal}>
          Open Modal
        </Button>
        <Modal open={openModal} onClose={this.handleCloseModal}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <h2>Modal Content</h2>
            <Button variant="contained" color="secondary" onClick={this.handleCloseModal}>
              Close Modal
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Dashboard;
