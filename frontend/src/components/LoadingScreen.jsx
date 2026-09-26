export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]">
     <div className="text-center">
       <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-2
        border-white/20 border-t-[#d4af37]" />
         <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
           Riyadvi
         </p>
     </div>
   </div>
  );
}