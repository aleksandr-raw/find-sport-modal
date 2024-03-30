import {FC, useState} from "react";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";

interface AddPostModalProps {
    modalOpen: boolean;
    handleSendPost: (author: string, content: string) => void;
    handleCloseModal: () => void;
}

export const AddPostModal: FC<AddPostModalProps> = ({
                                                        modalOpen,
                                                        handleSendPost,
                                                        handleCloseModal,
                                                    }) => {

    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [count, setCount] = useState<number>(0);

    const onReset = () => {
        setAuthor("");
        setContent("");
        setCount(0);
    }

    const onCloseModal = () => {
        onReset();
        handleCloseModal();
    }

    const handleSendClick = () => {
        handleSendPost(author.trim(), content.trim());
        onReset();
        handleCloseModal();
    };

    const isDisabled = author.trim().length === 0 || content.trim().length === 0;
    return (
        <Dialog visible={modalOpen} onHide={onCloseModal}
                className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-lg shadow-gray-200">
            <div className="p-2">
                <div className="ModalHeader text-xl font-bold mb-4">New post
                </div>
                <InputText
                    className="border border-gray-400 py-2 px-4 rounded-md w-full mb-4"
                    type="text"
                    placeholder="Your name..."
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                ></InputText>
                <InputTextarea
                    className="border border-gray-300 py-2 px-4 rounded-md w-full mb-4"
                    value={content}
                    placeholder="Write your post here..."
                    maxLength={200}
                    onChange={(e) => {
                        setContent(e.target.value);
                        setCount(e.target.value.length);
                    }}
                ></InputTextarea>
                <div
                    className=" text-right text-gray-400 mb-4">{`${count}/200`}</div>
                <div className=" flex justify-end space-x-2">
                    <button onClick={handleSendClick}
                            disabled={isDisabled}
                            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 active:bg-blue-300 disabled:bg-gray-400 disabled:text-gray-200">Send
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

