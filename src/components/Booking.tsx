import { useState } from "react";
import { CalendarHeart, User, Phone, Clock, MessageSquare, ChevronDown } from "lucide-react";
import { ALL_SERVICES_FLAT, BUSINESS } from "@/data";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      "*New Appointment Request — Veena's Beauty Salon*",
      "",
      `*Name:* ${form.name}`,
      `*Mobile:* ${form.phone}`,
      `*Service:* ${form.service}`,
      `*Preferred Date:* ${form.date}`,
      `*Preferred Time:* ${form.time}`,
      `*Message:* ${form.message || "—"}`,
    ];

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${BUSINESS.phoneRaw}?text=${text}`;
    window.open(url, "_blank");
    setSent(true);
  };

  return (
    <section id="booking" className="section-padding bg-beige-900 relative overflow-hidden">
      {/* Background accent image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/1213558/pexels-photo-1213558.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative max-w-3xl mx-auto">
        <div className="reveal text-center mb-10">
          <span className="heading-eyebrow text-gold-300">Book an Appointment</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory leading-tight">
            Reserve Your <span className="italic text-gold-300">Moment of Beauty</span>
          </h2>
          <p className="text-beige-200/70 mt-4">
            Fill in your details and we'll confirm your appointment via WhatsApp.
          </p>
        </div>

        {sent ? (
          <div className="reveal bg-white/10 border border-gold-400/30 rounded-3xl p-10 text-center backdrop-blur-sm">
            <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center mx-auto mb-5">
              <CalendarHeart size={30} className="text-white" />
            </div>
            <h3 className="font-serif text-2xl text-ivory mb-3">Request Sent!</h3>
            <p className="text-beige-200/70 mb-6">
              Your appointment request has been opened in WhatsApp. Please press send there to
              confirm, and we'll get back to you shortly.
            </p>
            <button
              onClick={() => setSent(false)}
              className="btn-outline !border-gold-400/50 !text-gold-200 hover:!bg-gold-500 hover:!text-white"
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal bg-white/10 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-sm space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Full Name"
                icon={<User size={18} />}
                input={
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your full name"
                    className="form-input"
                  />
                }
              />
              <Field
                label="Mobile Number"
                icon={<Phone size={18} />}
                input={
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+91 00000 00000"
                    className="form-input"
                  />
                }
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-gold-200 mb-2">
                Select Service
              </label>
              <div className="relative">
                <select
                  required
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  className="form-input appearance-none pr-12 cursor-pointer"
                >
                  <option value="" disabled>
                    Choose a service…
                  </option>
                  {ALL_SERVICES_FLAT.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-beige-300 pointer-events-none"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Preferred Date"
                icon={<CalendarHeart size={18} />}
                input={
                  <input
                    required
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className="form-input"
                  />
                }
              />
              <Field
                label="Preferred Time"
                icon={<Clock size={18} />}
                input={
                  <input
                    required
                    type="time"
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                    className="form-input"
                  />
                }
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-gold-200 mb-2">
                Additional Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={3}
                placeholder="Any specific requests or questions…"
                className="form-input resize-none"
              />
            </div>

            <button type="submit" className="btn-gold w-full text-base">
              <MessageSquare size={20} /> Send via WhatsApp
            </button>
            <p className="text-center text-xs text-beige-200/50">
              Your details are sent directly to our WhatsApp to confirm your booking.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  icon,
  input,
}: {
  label: string;
  icon: React.ReactNode;
  input: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-200 mb-2">
        {icon} {label}
      </label>
      {input}
    </div>
  );
}
