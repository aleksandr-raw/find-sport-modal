import React, {useRef} from 'react';
import './App.css';
import {Button} from "primereact/button";
import {AddPostModal} from "./components/AddPostModal";
import {Toast} from "primereact/toast";
import {Spinner} from "./components/Spinner";


function App() {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [isSending, setIsSending] = React.useState<boolean>(false);
    const toast = useRef<Toast>(null);
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSendPost = (author: string, content: string) => {
        setIsSending(true);
        setTimeout(() => {
            setIsSending(false);
            if (toast.current) {
                toast.current.show({
                    className: 'toast-custom',
                    severity: 'success',
                    summary: `Message from ${author} with text: ${content}`,
                    detail: `successfully sent!`,
                    life: 3000
                });
            }
        }, 2000);
    };

    return (
        <div className="App">


            <AddPostModal handleCloseModal={handleCloseModal}
                          handleSendPost={handleSendPost}
                          modalOpen={modalOpen}/>
            {!modalOpen && !isSending && <Button
                className="mt-24 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 active:bg-blue-300"
                type="button"
                onClick={() => setModalOpen(true)}>
                Открыть модальное окно
            </Button>}
            {isSending &&
                <Spinner textMessage={'Нour request is being sent '}/>}
            <Toast
                ref={toast}/>
        </div>);
}

export default App;
