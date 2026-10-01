"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Copy,
  Check,
  Phone,
  MapPin,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function Contact({ personal }: { personal: any }) {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Message from ${formData.name || "Visitor"}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setResult({
        type: "error",
        message: "Add your free Web3Forms Access Key in .env.local to send directly! Opening mail client...",
      });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: formData.name,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setResult({
          type: "success",
          message: "Thank you! Your message has been sent directly to my inbox.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setResult(null);
        }, 3000);
      } else {
        setResult({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setResult({
        type: "error",
        message: "Failed to send message. Please check your connection or email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10 flex items-center gap-4 text-white"
      >
        <Mail className="text-blue-500" /> Contact
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-linear-to-br from-white/10 to-transparent border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-colors"
        >
          <span className="text-xs uppercase font-mono tracking-widest text-blue-400 font-semibold mb-2 block">
            Get In Touch
          </span>
          <h3 className="text-2xl font-bold text-white mb-3">
            Let&apos;s build something together
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Currently open to new software engineering opportunities, internships, and collaborative projects.
          </p>

          <div className="space-y-3 pt-4 border-t border-white/5">
            <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-sm text-gray-200 hover:text-blue-400 transition-colors min-w-0"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail size={16} />
                </div>
                <span className="truncate font-medium">{personal.email}</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copy email address"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer shrink-0"
              >
                {copied ? <Check size={15} className="text-green-400" /> : <Copy size={15} />}
              </button>
            </div>

            {personal.phone && (
              <a
                href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 text-sm text-gray-200 hover:text-blue-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone size={16} />
                </div>
                <span className="font-medium">{personal.phone}</span>
              </a>
            )}

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-200">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <MapPin size={16} />
              </div>
              <span className="font-medium">Bangalore, India</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-7 bg-linear-to-br from-white/10 to-transparent border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-colors"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-1">Send a Message</h3>
            <p className="text-gray-400 text-sm">
              Send a note directly to my inbox without opening an external mail app.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-gray-400 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.07] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-gray-400 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.07] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-gray-400 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                placeholder="Opportunity / Collaboration / Question"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.07] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-gray-400 mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Type your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.07] transition-all resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-7 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-semibold rounded-full transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>

              {result && (
                <div
                  className={`text-xs font-medium flex items-center gap-1.5 ${result.type === "success" ? "text-green-400" : "text-amber-400"
                    }`}
                >
                  {result.type === "success" ? (
                    <CheckCircle2 size={15} className="shrink-0" />
                  ) : (
                    <AlertCircle size={15} className="shrink-0" />
                  )}
                  <span>{result.message}</span>
                </div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
