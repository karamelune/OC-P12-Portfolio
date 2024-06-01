'use client';

import {
    Card,
    CardFooter,
    Modal,
    ModalHeader,
    ModalContent,
    ModalBody,
    useDisclosure,
    ModalFooter,
    Button,
} from '@nextui-org/react';
import Image from 'next/image';
import projects from '../data/projects.json';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type Project = {
    title: string;
    description: string;
    skills: string[];
    image: string;
    preview: string;
    github: string;
    liveurl: string;
};

export const Projects = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );

    const handleOpen = (project: Project) => {
        setSelectedProject(project);
        onOpen();
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true });

    return (
        <section
            className="sticky top-0 flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-l from-primary-50 via-default-50 to-primary-50"
            id="projects">
            <div
                ref={ref}
                className="flex flex-col items-center justify-center w-full max-w-5xl">
                <h1
                    className={`text-4xl text-white my-2 transition-all ease-in duration-400 delay-200 sm:text-2xl ${
                        isInView ? 'opacity-100' : '-translate-y-20 opacity-0'
                    }`}>
                    Projects
                </h1>
                <p
                    className={`text-medium text-white mb-2 transition-all ease-in duration-400 delay-200 sm:text-sm sm:mb-4 ${
                        isInView ? 'opacity-100' : '-translate-y-20 opacity-0'
                    }`}>
                    Here are some projects I&apos;ve worked on.
                </p>
                <div
                    ref={ref2}
                    className="max-w-5xl w-[80%] gap-4 grid grid-cols-3 grid-rows-2 my-2 sm:grid-cols-1 sm:grid-rows-6 sm:gap-2 sm:my-0 ">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`relative transition-all ease-in duration-400 delay-200 ${
                                isInView2
                                    ? 'transform-none opacity-100'
                                    : 'opacity-0'
                            } ${index < 3 ? '-translate-y-20' : ''} ${
                                index >= projects.length - 3
                                    ? 'translate-y-20'
                                    : ''
                            }`}>
                            <Card
                                key={index}
                                isFooterBlurred
                                radius="lg"
                                className="relative border-none hover:scale-105 duration-200 w-full h-[260px] md:h-[200px] sm:h-[75px]"
                                isPressable
                                onPress={() => handleOpen(project)}>
                                <Image
                                    src={project.image}
                                    alt=""
                                    fill={true}
                                    className="object-cover"
                                />
                                <CardFooter className="absolute bottom-1 left-1 rounded-full w-[50%] p-1 flex justify-center md:w-[60%] sm:w-[40%]">
                                    <p className="text-medium text-white/80 sm:text-sm">
                                        {project.title}
                                    </p>
                                </CardFooter>
                            </Card>

                            <Modal
                                isOpen={isOpen}
                                onClose={() => {
                                    setSelectedProject(null);
                                    onClose();
                                }}
                                placement="center"
                                classNames={{
                                    body: 'py-8',
                                    backdrop:
                                        'bg-default-400/20 backdrop-opacity-40',
                                    base: 'bg-gradient-to-l from-primary-50/70 via-default-50 to-primary-50/70 px-6 py-2',
                                    header: 'border-b-1 border-default-400',
                                    footer: 'border-t-1 border-default-400 sm:flex sm:justify-center sm:gap-2',
                                    closeButton:
                                        'text-primary-400 hover:bg-primary-100/50',
                                }}>
                                <ModalContent>
                                    <ModalHeader>
                                        {selectedProject?.title}
                                    </ModalHeader>
                                    <ModalBody>
                                        <Image
                                            src={selectedProject?.preview || ''}
                                            alt={selectedProject?.title || ''}
                                            height={400}
                                            width={400}
                                            className="object-cover"
                                        />
                                        <p className="pb-1 border-b-1 border-default-400">
                                            {selectedProject?.description}
                                        </p>
                                        <ul className="list-disc">
                                            {selectedProject?.skills.map(
                                                (skill, index) => (
                                                    <li
                                                        key={index}
                                                        className="italic text-medium text-default-500">
                                                        {skill}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </ModalBody>
                                    <ModalFooter>
                                        {selectedProject?.github && (
                                            <Button
                                                onClick={() =>
                                                    window.open(
                                                        selectedProject.github,
                                                        '_blank'
                                                    )
                                                }
                                                className="bg-primary-100">
                                                Source
                                            </Button>
                                        )}
                                        {selectedProject?.liveurl && (
                                            <Button
                                                onClick={() =>
                                                    window.open(
                                                        selectedProject.liveurl,
                                                        '_blank'
                                                    )
                                                }
                                                className="bg-primary-100">
                                                Live
                                            </Button>
                                        )}
                                        <Button
                                            onPress={onClose}
                                            className="bg-primary-100">
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
