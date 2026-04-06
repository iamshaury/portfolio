import { GraduationCap, Sprout, GitMerge, Wallet, Zap, Blocks } from "lucide-react";

export default function Projects() {
    return (
        <div className="slide-enter-content max-w-[90ch] mx-auto pt-12">
            <h1 className="text-7xl font-medium tracking-tighter mt-0 text-center">Projects</h1>
            <h2 className="text-xl font-normal text-foreground/50 mt-4 mb-10 text-center">
                Here are some of my projects:
            </h2>

            <div className="mt-12 mb-8">
                <h2 className="text-xl font-semibold mb-6 inline-flex items-center gap-2 text-foreground bg-foreground/10 px-6 py-2 rounded-lg">
                    Currently Working On
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a href="https://github.com/iamshaury/ExpenseSplit" target="_blank" rel="noopener noreferrer" className="project-card flex items-start gap-5">
                        <div className="flex-shrink-0 mt-1">
                            <Wallet className="w-10 h-10 opacity-80" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground">
                                ExpenseSplit
                            </h3>
                            <p className="text-sm text-foreground/60 mt-2 leading-relaxed">
                                A full-stack application designed to effortlessly split expenses and track shared costs seamlessly among friends.
                            </p>
                        </div>
                    </a>

                    <div className="project-card flex items-start gap-4 opacity-70 border-dashed border-foreground/30 hover:bg-transparent cursor-not-allowed group">
                        <div className="flex-shrink-0 mt-1">
                            <Blocks className="w-10 h-10 opacity-80" />
                        </div>
                        <div className="w-full">
                            <h3 className="font-semibold text-lg text-foreground flex items-center justify-between">
                                DevHub
                                <span className="text-[10px] bg-foreground/10 px-2 py-0.5 rounded-full group-hover:bg-foreground/20 transition-colors uppercase tracking-wider font-bold">Coming soon</span>
                            </h3>
                            <p className="text-sm text-foreground/60 mt-2 leading-relaxed">
                                An all-in-one developer workspace designed to streamline workflows and team collaboration natively.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 mb-8">
                <h2 className="text-xl font-semibold mb-6 inline-flex items-center gap-2 text-foreground bg-foreground/10 px-6 py-2 rounded-lg">
                    Other Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a href="https://github.com/iamshaury/PyqOrganizer" target="_blank" rel="noopener noreferrer" className="project-card flex items-start gap-5">
                        <div className="flex-shrink-0 mt-1">
                            <GraduationCap className="w-10 h-10 opacity-80" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground">
                                PYQ Organizer
                            </h3>
                            <p className="text-sm text-foreground/60 mt-2 leading-relaxed">
                                A modern web application that uses artificial intelligence to automatically organize Previous Year Questions (PYQs) from PDF files.
                            </p>
                        </div>
                    </a>

                    <a href="https://github.com/iamshaury/PestiCareMobile" target="_blank" rel="noopener noreferrer" className="project-card flex items-start gap-5">
                        <div className="flex-shrink-0 mt-1">
                            <Sprout className="w-10 h-10 opacity-80" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground">
                                PestiCare
                            </h3>
                            <p className="text-sm text-foreground/60 mt-2 leading-relaxed">
                                PestiCare is an AI-driven web and mobile solution built to empower farmers with quick, reliable plant disease and pest diagnostics.
                            </p>
                        </div>
                    </a>

                    <a href="https://github.com/iamshaury/commitIQ" target="_blank" rel="noopener noreferrer" className="project-card flex items-start gap-5">
                        <div className="flex-shrink-0 mt-1">
                            <GitMerge className="w-10 h-10 opacity-80" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground">
                                CommitIQ
                            </h3>
                            <p className="text-sm text-foreground/60 mt-2 leading-relaxed">
                                An explainable GitHub activity analysis engine with configurable heuristics and confidence-aware outputs.
                            </p>
                        </div>
                    </a>

                    <a href="https://github.com/iamshaury/stackzap" target="_blank" rel="noopener noreferrer" className="project-card flex items-start gap-5">
                        <div className="flex-shrink-0 mt-1">
                            <Zap className="w-10 h-10 opacity-80" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground">
                                Stackzap
                            </h3>
                            <p className="text-sm text-foreground/60 mt-2 leading-relaxed">
                                A powerful CLI tool and project generator that scaffolds complete full-stack applications with configurable pre-built tech stacks.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
