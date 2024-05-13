import React from "react";
import Modal from "./Modal";
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
            <h4>Future of Structured Finance is Digital!</h4>
            <button type="button" onClick={handleOpen}>
                Open Modal
            </button>
            <Modal isOpen={open} onClose={handleClose}>
                <>
                    <h1 style={{ color: "SpringGreen" }}>
                      Intain
                      </h1>
                    <h3>Future of Structured Finance is Digital!</h3>
                </>
            </Modal>
        </div>
    );
}