'use client';

import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from 'framer-motion';

type AnimationProps = {
    isVisible: boolean;
    translateValue: string;
    delay?: string;
};

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [isSent, setIsSent] = useState<boolean>(false);

    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true });

    const createAnimationClass = ({
        isVisible,
        translateValue,
        delay = '',
    }: AnimationProps): string => `
        transition-all ease-in duration-400 ${delay}
        ${isVisible ? 'opacity-100' : `${translateValue} opacity-0`}
    `;

    const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setIsSending(true);

        if (form.current) {
            emailjs
                .sendForm('service_y8e03mg', 'template_wrkmhsm', form.current, {
                    publicKey: 'q2FaXs2xoOfNqQbff',
                })
                .then(
                    () => {
                        if (form.current) {
                            form.current.reset();
                        }
                        setIsSending(false);
                        setIsSent(true);
                        setTimeout(() => setIsSent(false), 60000);
                    },
                    () => {
                        setIsSending(false);
                    }
                );
        }
    };

    return (
        <section
            className="sticky top-0 flex flex-col items-center justify-center w-full h-screen bg-gradient-to-l from-secondary-900 via-default-900 to-secondary-900"
            id="contact">
            <div
                ref={sectionRef}
                className="flex flex-col items-center justify-center m-2 p-2 w-[50%] max-w-7xl md:w-[80%]">
                <h1
                    className={`text-4xl text-black my-8 ${createAnimationClass(
                        {
                            isVisible: isInView,
                            translateValue: '-translate-y-20',
                            delay: 'delay-100',
                        }
                    )}`}>
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
                        className={`p-4 border-none rounded-md bg-secondary-600/20 text-secondary-100 ${createAnimationClass(
                            {
                                isVisible: isInView,
                                translateValue: '-translate-x-40',
                                delay: 'delay-[250ms]',
                            }
                        )}`}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                        name="reply_to"
                        className={`p-4 border-none rounded-md bg-secondary-600/20 text-secondary-100 ${createAnimationClass(
                            {
                                isVisible: isInView,
                                translateValue: '-translate-x-40',
                                delay: 'delay-300',
                            }
                        )}`}
                        required
                    />
                    <textarea
                        placeholder="Message"
                        aria-label="Message"
                        name="message"
                        className={`p-4 border-none rounded-md bg-secondary-600/20 text-secondary-100 min-h-48 ${createAnimationClass(
                            {
                                isVisible: isInView,
                                translateValue: '-translate-x-40',
                                delay: 'delay-[350ms]',
                            }
                        )}`}
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
                        disabled:bg-secondary-400/50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:duration-0 transition-all ease-in duration-200 ${createAnimationClass(
                            {
                                isVisible: isInView,
                                translateValue: 'translate-y-20',
                            }
                        )}`}
                        disabled={isSent}>
                        {isSending ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </section>
    );
};
