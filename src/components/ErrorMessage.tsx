import React from 'react';

type TErrorMessageProps = {
    isError: string;
};

export function ErrorMessage({isError}: TErrorMessageProps){
    return(
        <p className='text-center'>{isError}</p>
    )
}