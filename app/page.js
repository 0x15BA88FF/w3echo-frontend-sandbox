"use client";

import { useState } from "react";

import { User, SendHorizontal } from 'lucide-react';

export default function Home() {
    const [message, setMessage] = useState("");

    return (
        <div className="h-full w-full flex flex-col items-center gap-4">
            <nav className="w-full flex items-center justify-between p-4 bg-white">
                <h1 className="text-2xl font-bold"><span className="text-orange-500">W3</span>Echo</h1>
                <div className="p-2 bg-slate-100 rounded-full"><User /></div>
            </nav>

            <div className="h-full w-full max-w-2xl flex flex-col items-center gap-4 p-4">
                <main className="w-full flex-grow">
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-orange-500">0x15BA88FF</p>
                            <small className="text-gray-700">Today at 8:45 AM</small>
                        </div>
                        <p>Hello, World!</p>
                    </div>
                </main>

                <section className="w-full">
                    <div className="flex items-center gap-2 p-2 bg-white rounded-3xl border-2 border-slate-200 overflow-hidden">
                        <textarea
                            rows={1}
                            style={{ resize: 'none' }}
                            value={message}
                            placeholder="Type your message..."
                            onChange={(e) => handleSendMassage(e.target.value)}
                            className="pl-3 h-full flex-grow"
                        />
                        <button className="p-3 bg-orange-500 text-white rounded-2xl">
                            <SendHorizontal />
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
