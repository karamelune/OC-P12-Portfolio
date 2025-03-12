'use client';

import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
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
import projects from '../data/projects.json';

type Project = {
    title: string;
    description: string;
    skills: string[];
    image: string;
    preview: string;
    github: string;
    liveurl: string;
};

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
    <Card
        isFooterBlurred
        radius="lg"
        className="relative border-none hover:scale-105 duration-200 w-full h-[260px] md:h-[200px] sm:h-[75px]"
        isPressable
        onPress={onClick}>
        <Image
            src={project.image}
            alt={project.title}
            fill={true}
            className="object-cover"
        />
        <CardFooter className="absolute bottom-1 left-1 rounded-full max-w-[50%] w-auto py-1 px-2 flex justify-center md:w-[60%] sm:w-[40%]">
            <p className="text-medium text-white/80 sm:text-sm">
                {project.title}
            </p>
        </CardFooter>
    </Card>
);

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    if (!project) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            placement="center"
            classNames={{
                body: 'py-8',
                backdrop: 'bg-default-400/20 backdrop-opacity-40',
                base: 'bg-gradient-to-l from-primary-50/70 via-default-50 to-primary-50/70 px-6 py-2',
                header: 'border-b-1 border-default-400',
                footer: 'border-t-1 border-default-400 sm:flex sm:justify-center sm:gap-2',
                closeButton: 'text-primary-400 hover:bg-primary-100/50',
            }}>
            <ModalContent>
                <ModalHeader>{project.title}</ModalHeader>
                <ModalBody>
                    <Image
                        src={project.preview}
                        alt={project.title}
                        height={400}
                        width={400}
                        className="object-cover"
                    />
                    <p className="pb-1 border-b-1 border-default-400">
                        {project.description}
                    </p>
                    <ul className="list-disc">
                        {project.skills.map((skill, index) => (
                            <li
                                key={index}
                                className="italic text-medium text-default-500">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </ModalBody>
                <ModalFooter>
                    {project.github && (
                        <Button
                            onClick={() =>
                                window.open(project.github, '_blank')
                            }
                            className="bg-primary-100">
                            Source
                        </Button>
                    )}
                    {project.liveurl && (
                        <Button
                            onClick={() =>
                                window.open(project.liveurl, '_blank')
                            }
                            className="bg-primary-100">
                            Live
                        </Button>
                    )}
                    <Button onPress={onClose} className="bg-primary-100">
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export const Projects = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );

    const titleRef = useRef(null);
    const projectsRef = useRef(null);

    const isTitleInView = useInView(titleRef, { once: true });
    const areProjectsInView = useInView(projectsRef, { once: true });

    const handleOpenProject = (project: Project) => {
        setSelectedProject(project);
        onOpen();
    };

    const handleCloseProject = () => {
        onClose();
        // Delay clearing the selected project to avoid UI flicker
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <section
            className="sticky top-0 flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-l from-primary-50 via-default-50 to-primary-50"
            id="projects">
            <div className="flex flex-col items-center justify-center w-full max-w-5xl">
                <div ref={titleRef}>
                    <h1
                        className={`text-4xl text-white my-2 transition-all ease-in duration-400 delay-200 sm:text-2xl ${
                            isTitleInView
                                ? 'opacity-100'
                                : '-translate-y-20 opacity-0'
                        }`}>
                        Projects
                    </h1>
                    <p
                        className={`text-medium text-white mb-2 transition-all ease-in duration-400 delay-200 sm:text-sm sm:mb-4 ${
                            isTitleInView
                                ? 'opacity-100'
                                : '-translate-y-20 opacity-0'
                        }`}>
                        Here are some projects I&apos;ve worked on.
                    </p>
                </div>

                <div
                    ref={projectsRef}
                    className="max-w-5xl w-[80%] gap-4 grid grid-cols-3 grid-rows-2 my-2 sm:grid-cols-1 sm:grid-rows-6 sm:gap-2 sm:my-0">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`relative transition-all ease-in duration-400 delay-200 ${
                                areProjectsInView
                                    ? 'transform-none opacity-100'
                                    : 'opacity-0'
                            } ${index < 3 ? '-translate-y-20' : ''} ${
                                index >= projects.length - 3
                                    ? 'translate-y-20'
                                    : ''
                            }`}>
                            <ProjectCard
                                project={project}
                                onClick={() => handleOpenProject(project)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <ProjectModal
                isOpen={isOpen}
                onClose={handleCloseProject}
                project={selectedProject}
            />
        </section>
    );
};
