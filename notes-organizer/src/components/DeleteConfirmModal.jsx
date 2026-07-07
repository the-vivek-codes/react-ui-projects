import { TriangleAlert } from 'lucide-react'
import { motion } from 'framer-motion'

export default function DeleteConfirmModal({ onCancel, onConfirm }) {
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-zinc-900 border border-white/10 rounded-3xl p-8 w-[90%] max-w-md"
            >
                <div className="flex items-center gap-3 mb-5">
                    <TriangleAlert className="text-red-500" size={28} />
                    <h2 className="text-2xl font-bold"> Delete Note? </h2>
                </div>

                <p className="text-zinc-400 leading-relaxed">
                    Are you sure you want to delete this note?
                    <br />
                    This action cannot be undone.
                </p>

                <div className="flex justify-end gap-4 mt-8">
                    <button onClick={onCancel} className="px-5 py-3 rounded-xl bg-zinc-700 hover:bg-zinc-600 transition" >
                        Cancel
                    </button>

                    <button onClick={onConfirm} className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition" >
                        Delete
                    </button>
                </div>
            </motion.div>
        </div>
    )
}