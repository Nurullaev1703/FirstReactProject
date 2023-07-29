import React from 'react';

type TModalProps= {
    children: React.ReactNode,
    title: string,
    onClose: () => void
}

// props.children - получение внутреннего контента props 
export function Modal({children,title,onClose}:TModalProps){
    return(
        <>
            <div className='fixed bg-black/50 top-0 left-0 right-0 bottom-0' onClick={onClose}>
            </div>
            <div className='w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2'>
                <h1 className='mb-2 text-2xl text-center'>{ title }</h1>
                {children}
            </div>
        </>
    )
}