import { motion } from 'framer-motion';
import Image from 'next/image';
import { SocialIcons } from './SocialIcons';

export default function TeamModal({ member, onClose }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div 
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-xl max-w-md w-full p-6 relative"
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-indigo-600"
          aria-label="Close profile modal"
        >
          &times;
        </button>
        <div className="text-center">
          <Image 
            src={member.image} 
            alt={`Photo of ${member.name}`} 
            width={120} height={120} 
            className="rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">{member.name}</h2>
          <p className="text-indigo-500">{member.role}</p>
          <p className="text-gray-600 mt-4">{member.bio}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {member.skills.map(skill => (
              <span 
                key={skill} 
                className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-3">
            {Object.entries(member.social).map(([network, url]) => (
              <SocialIcons key={network} network={network} url={url} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
