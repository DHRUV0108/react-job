import Cards from "./Cards";
import React from "react";

const HomeCards = () => {
    return (
        <>
            <section className="py-4">
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                        <Cards title="For Developers" sub="Browse our React jobs and start your career today" href="/jobs.html" button="Browse Jobs" bg="bg-gray-100" />
                        <Cards title="For Employers" sub="List your job to find the perfect developer for the role" href="/add-job.html" button="Add Job" bg="bg-indigo-100" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeCards;