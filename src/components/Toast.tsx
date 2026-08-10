import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Copy } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-zinc-900 border border-red-500/30 text-white px-5 py-3.5 rounded-xl shadow-2xl shadow-red-950/40 backdrop-blur-md"
        >
          <div className="p-1 rounded-full bg-red-500/20 text-red-500">
            {toast.type === 'info' ? <Copy className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
          </div>
          <p className="text-sm font-medium tracking-wide text-zinc-200">{toast.text}</p>
          <button
            onClick={onClose}
            className="ml-2 text-zinc-400 hover:text-white text-xs font-mono px-1 py-0.5 rounded hover:bg-zinc-800 transition-colors"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
