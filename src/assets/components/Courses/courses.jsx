import courses from './../../data.json'

const Courses = () => {
    return (
        <section className="bg-white py-[8rem] max-w-[1400px] mx-auto px-6 lg:px-24">
            <div className="text-center mb-12">
                <h2 className="text-[2rem] font-bold text-blue-900">Trilha do Professor Pesquisador</h2>
                <p className="text-[1rem] text-gray-700 mt-2">Transforme todos os seus alunos em leitores fluentes.</p>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course, index) => (
                    <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <img src={course.image} alt={course.title} className="w-full max-h-[400px] object-cover" />
                        <div className="p-5">
                            <span className="text-xs bg-indigo-100 text-indigo-600 font-semibold px-3 py-1 rounded-full inline-block mb-3">{`#${course.tag}`}</span>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
                            <div className="text-sm text-gray-600 space-y-1 mb-4">
                                <p>{course.duration}</p>
                                <p>{course.format}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href={course.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition">
                                    Inscreva-se
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Courses;
