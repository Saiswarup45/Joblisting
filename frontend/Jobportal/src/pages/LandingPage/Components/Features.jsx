import React from 'react'
import { employerFeatures, jobSeekerFeatures } from '../../../utils/data'
const Features = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Features for Job Seekers</h2>
                    <p className="text-gray-600 mt-4">Discover how our platform helps you find the right job.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {jobSeekerFeatures.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <feature.icon className="w-8 h-8 text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600 mt-2">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Features
