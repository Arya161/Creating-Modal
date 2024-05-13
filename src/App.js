import React from "react";
import Modal from "@material-ui/core/Modal";
 
export default function App() {
    const [open, setOpen] = React.useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };
 
    return (
        <div
            style={{
                textAlign: "center",
                display: "block",
                padding: 30,
                margin: "auto",
            }}
        >
            <h1 style={{ color: "SpringGreen" }}>
               Intain
            </h1>
            <h4 style={{color: "Blue"}}>
              Future of Structured Finance is Digital!</h4>
            <button type="button" onClick={handleOpen}>
                Click to Open Modal
            </button>
            <Modal
                onClose={handleClose}
                open={open}
                style={{
                    position: "absolute",
                    border: "2px solid #000",
                    backgroundColor: "lightgray",
                    boxShadow: "2px solid black",
                    height: 150,
                    width: 240,
                    margin: "auto",
                    padding: "2%",
                    color: "white",
                }}
            >
                <>
                    <h2 style={{ color: "SpringGreen" }}>
                      Intain
                      </h2>
                    <p style={{color: "Blue"}}>
                      Future of Structured Finance is Digital!</p>
                </>
            </Modal>
        </div>
    );
}
