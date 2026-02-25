import React from 'react'
import features from "../utils/features";

const Features = () => {

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature) => (

            <div
              key={feature.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >

              <div className="text-4xl mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default Features;