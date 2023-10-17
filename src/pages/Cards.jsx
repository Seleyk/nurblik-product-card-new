import React from 'react';
import { items } from '../data'
import Card from '../components/Card';
import Filter from '../components/Filter';
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-3 mb-8">
        <h1 className="text-center text-3xl font-medium uppercase">Apparel</h1>
        <h1 className="text-center text-md font-[300] uppercase">
          Our best collection of Lorem ipsum yet! with a new dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Consectetur a erat nam at lectus urna duis. Diam phasellus vestibulum
          lorem sed risus ultricies tristique nulla aliquet. Integer enim neque
          volutpat ac tincidunt vitae semper. Urna porttitor rhoncus dolor purus
          non. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Est
        </h1>
      </div>
      <div className="mb-24">
        <Filter />
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {items.map((item) => (
          <motion.div layout className="flex items-start justify-center">
            <Card item={item} key={item.id} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Cards