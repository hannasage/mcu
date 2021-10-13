import React from 'react'

function Navbar({ className }: { className?: string }) {
    return (
        <div className={className ? className : undefined}>
            <div className="bg-red-500 flex flex-col h-screen">
                Test
            </div>
        </div>
    )
}

export default Navbar
