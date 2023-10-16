import React from 'react';
import { items } from '../data'
import Card from '../components/Card';
import Filter from '../components/Filter';
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <div className="p-10">
      <h1 className="text-center text-3xl font-medium uppercase">Apparel</h1>
      <div className="mb-24">
        <Filter />
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {items.map((item) => (
          <motion.div layout className="">
            <Card item={item} key={item.id} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Cards