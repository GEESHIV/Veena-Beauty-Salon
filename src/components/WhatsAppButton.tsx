import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { BUSINESS } from "@/data";

export default function WhatsAppButton() {
  const [showTip, setShowTip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowTip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const waUrl = `https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent(
    "Hello Veena's Beauty Salon! I would like to know more about your services."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end gap-3">
      {showTip && !dismissed && (
        <div className="hidden sm:block bg-white rounded-2xl shadow-xl p-4 max-w-xs animate-fade-in relative">
          <button
            onClick={() => {
              setShowTip(false);
              setDismissed(true);
            }}
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-beige-700 text-white flex items-center justify-center"
          >
            <X size={14} />
          </button>
          <p className="text-sm text-beige-700">
            Have a question? <span className="font-medium text-gold-600">Chat with us</span> on WhatsApp!
          </p>
        </div>
      )}

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-green-600/30 hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white animate-pulse" />
      </a>
    </div>
  );
}
