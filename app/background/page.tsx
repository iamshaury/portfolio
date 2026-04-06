export default function Background() {
    return (
        <div className="slide-enter-content max-w-[65ch] mx-auto pt-12">
            <h1 className="prose-h1 mt-0">Professional Background</h1>
            <p className="prose-p">
                My educational and professional journey.
            </p>
            <ul className="prose-ul text-foreground/80 mt-6 md:pl-4 pl-2 border-l border-foreground/10">
                <li className="mb-3">
                    <span>Bachelor of Technology in <b>Computer Science and Engineering</b>.</span>
                </li>
                <li className="mb-3">
                    <span>Skilled in <b>AI/ML</b>, Web Development, and Mobile App Development.</span>
                </li>
                <li className="mb-3">
                    <span>Experience with a wide range of technologies for building modern, robust, and scalable full-stack applications.</span>
                </li>
            </ul>
        </div>
    );
}
