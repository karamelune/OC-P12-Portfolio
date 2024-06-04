'use client';

import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from 'framer-motion';

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);

        if (form.current) {
            emailjs
                .sendForm('service_y8e03mg', 'template_wrkmhsm', form.current, {
                    publicKey: 'q2FaXs2xoOfNqQbff',
                })
                .then(
                    (result) => {
                        if (form.current) {
                            form.current.reset();
                        }
                        setIsSending(false);
                        setIsSent(true);
                        setTimeout(() => {
                            setIsSent(false);
                        }, 60000);
                    },
                    (error) => {
                        setIsSending(false);
                    }
                );
        }
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section
            className="sticky top-0 flex flex-col items-center justify-center w-full h-screen bg-gradient-to-l from-secondary-900  via-default-900 to-secondary-900"
            id="contact">
            <div
                ref={ref}
                className="flex flex-col items-center justify-center m-2 p-2 w-[50%] max-w-7xl md:w-[80%]">
                <h1
                    className={`text-4xl text-black my-8 transition-all ease-in duration-400 delay-100 ${
                        isInView ? 'opacity-100' : '-translate-y-20 opacity-0'
                    }`}>
                    Contact
                </h1>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-4 w-full max-w-3xl">
                    <input
                        type="text"
                        placeholder="Name"
                        aria-label="Name"
                        name="from_name"
                        className={`p-4 border-none rounded-md bg-secondary-600/20 text-secondary-100 transition-all ease-in duration-400 delay-[250ms] ${
                            isInView
                                ? 'opacity-100'
                                : '-translate-x-40 opacity-0'
                        }`}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                        name="reply_to"
                        className={`p-4 border-none rounded-md bg-secondary-600/20 text-secondary-100 transition-all ease-in duration-400 delay-300 ${
                            isInView
                                ? 'opacity-100'
                                : '-translate-x-40 opacity-0'
                        }`}
                        required
                    />
                    <textarea
                        placeholder="Message"
                        aria-label="Message"
                        name="message"
                        className={`p-4 border-none rounded-md bg-secondary-600/20 text-secondary-100 min-h-48 transition-all ease-in duration-400 delay-[350ms] ${
                            isInView
                                ? 'opacity-100'
                                : '-translate-x-40 opacity-0'
                        }`}
                        required
                    />
                    {isSent && (
                        <p className="text-success-400 text-center mt-2">
                            Your message has been sent successfully. 👌
                        </p>
                    )}
                    <button
                        type="submit"
                        className={`p-4 bg-secondary-400 text-secondary-900 rounded-md hover:scale-105 my-4
                        disabled:bg-secondary-400/50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:duration-0 transition-all ease-in duration-200 ${
                            isInView
                                ? 'opacity-100'
                                : 'translate-y-20 opacity-0'
                        }`}
                        disabled={isSent}>
                        {isSending ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </section>
    );
};
