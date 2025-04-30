import { motion } from 'framer-motion';
import Image from 'next/image';
import { SocialIcons } from './SocialIcons';

export default function TeamCard({ member, onClick }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }} 
      className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all hover:shadow-xl"
      onClick={() => onClick(member)}
    >
      <div className="flex flex-col items-center text-center">
        <Image 
          src={member.image} 
          alt={`Photo of ${member.name}`} 
          width={96} height={96} 
          className="rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
        <p className="text-sm text-indigo-500">{member.role}</p>
        <div className="mt-2 flex gap-2">
          {Object.entries(member.social).map(([network, url]) => (
            <SocialIcons key={network} network={network} url={url} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
