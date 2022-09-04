import React, { Component } from 'react'
import Portal from './Portal'
import { AiOutlineClose } from 'react-icons/ai'
export default class Modal extends Component {
  render() {
    const { children, toggle, active } = this.props;
    return (
      <Portal>
        {active && (
          <>
            <div className='fixed w-screen h-full top-0 left-0 bg-black/[.7] overflow-x-hidden overflow-y-auto z-10'>
              <div className={`wrapper relative p-5 flex justify-center h-fit`}>
                <div className='window relative bg-white rounded shadow-md h-fit'>
                  <button className='absolute -top-4 -right-4 rounded-full h-10 w-10 text-lg border-none bg-inherit shadow-sm flex justify-center items-center' onClick={toggle}>
                    <AiOutlineClose className='text-[#606470]' />
                  </button>
                  <div>{children}</div>
                </div>
              </div>
            </div>
          </>
        )}
      </Portal>
    )
  }
}
