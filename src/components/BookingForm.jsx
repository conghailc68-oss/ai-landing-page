import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle, Loader2, ClipboardList } from 'lucide-react';
import apps from '../data/apps.json';

const initialForm = {
  fullName: '',
  phone: '',
  deliveryTime: '',
  appId: '',
  notes: '',
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Vui lòng nhập họ tên';
    if (!form.phone.trim()) e.phone = 'Vui lòng nhập số điện thoại';
    else if (!/^[0-9]{9,11}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Số điện thoại không hợp lệ';
    if (!form.deliveryTime) e.deliveryTime = 'Vui lòng chọn thời gian';
    if (!form.appId) e.appId = 'Vui lòng chọn ứng dụng';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const selectedApp = apps.find((a) => String(a.id) === form.appId);
    const logData = {
      ...form,
      appName: selectedApp?.name || '',
      submittedAt: new Date().toISOString(),
    };
    console.log('📦 Đơn hàng mới:', logData);

    setLoading(false);
    setSuccess(true);
    setForm(initialForm);

    setTimeout(() => setSuccess(false), 5000);
  };

  const inputClass = (field) =>
    `w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none transition-all duration-300 focus:border-cyan-400/50 focus:shadow-[0_0_20px_rgba(0,212,255,0.1)] ${
      errors[field]
        ? 'border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.1)]'
        : 'border border-white/8 hover:border-white/15'
    }`;

  return (
    <section id="booking" className="relative py-24 px-4 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-purple-500/8 top-0 right-0" />
      <div className="orb w-[400px] h-[400px] bg-cyan-500/6 bottom-0 left-0" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass border-neon rounded-full px-4 py-1.5 mb-6">
            <ClipboardList size={14} className="text-purple-400" />
            <span className="text-xs text-purple-300 tracking-widest uppercase font-medium">
              Đặt Hàng
            </span>
          </div>
          <h2 className="section-title text-4xl md:text-5xl font-black text-white mb-4">
            Bắt Đầu{' '}
            <span className="gradient-text">Ngay Hôm Nay</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Điền thông tin để chúng tôi liên hệ và xử lý đơn hàng của bạn
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-3xl p-8 border border-white/8 shadow-[0_0_60px_rgba(0,212,255,0.05),0_0_120px_rgba(168,85,247,0.03)]"
        >
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle size={64} className="text-green-400 mb-4" />
                </motion.div>
                <h3 className="section-title text-2xl font-bold text-white mb-2">
                  Đặt hàng thành công!
                </h3>
                <p className="text-slate-400">
                  Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                </p>
                <div className="mt-4 glass rounded-xl px-6 py-3 border border-green-400/20">
                  <span className="text-green-400 text-sm font-medium">
                    ✓ Đơn hàng đã được ghi nhận
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Full name */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Họ và tên <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Nguyễn Văn A"
                    className={inputClass('fullName')}
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Số điện thoại <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0912 345 678"
                    className={inputClass('phone')}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Delivery time */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Thời gian giao hàng <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="deliveryTime"
                    value={form.deliveryTime}
                    onChange={handleChange}
                    className={`${inputClass('deliveryTime')} bg-[#020408] cursor-pointer`}
                  >
                    <option value="" disabled>Chọn thời gian...</option>
                    <option value="24h">Trong 24 giờ</option>
                    <option value="48h">Trong 48 giờ</option>
                    <option value="3days">Trong 3 ngày</option>
                    <option value="1week">Trong 1 tuần</option>
                    <option value="flexible">Linh hoạt</option>
                  </select>
                  {errors.deliveryTime && (
                    <p className="text-red-400 text-xs mt-1">{errors.deliveryTime}</p>
                  )}
                </div>

                {/* App selection */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Chọn ứng dụng <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="appId"
                    value={form.appId}
                    onChange={handleChange}
                    className={`${inputClass('appId')} bg-[#020408] cursor-pointer`}
                  >
                    <option value="" disabled>Chọn ứng dụng AI...</option>
                    {apps.map((app) => (
                      <option key={app.id} value={app.id}>
                        {app.name} — {app.price}
                      </option>
                    ))}
                  </select>
                  {errors.appId && (
                    <p className="text-red-400 text-xs mt-1">{errors.appId}</p>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Ghi chú thêm
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Mô tả yêu cầu cụ thể của bạn..."
                    rows={4}
                    className={`${inputClass('notes')} resize-none`}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="btn-neon w-full flex items-center justify-center gap-3 py-4 text-base font-bold rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Đang xử lý...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Gửi Đơn Hàng
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
