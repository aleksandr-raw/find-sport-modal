import React, {FC} from 'react';

type SpinnerProps = {
    textMessage?: string;
}

export const Spinner: FC<SpinnerProps> = ({textMessage}) => {
    return (
        <div className=" my-auto flex flex-col justify-center items-center">
            <div
                className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500">
            </div>
            <p className={'text-md text-blue-500 mt-4 italic'}>{textMessage}</p>
            <p className={'text-md text-blue-500 mt-2 italic'}> please wait...
            </p>
        </div>
    );
};
