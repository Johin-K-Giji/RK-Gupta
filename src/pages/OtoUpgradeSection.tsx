import { motion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Heart,
  Shield,
  Sun,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const ebooks = [
  {
    title: "Heal Your Mind & Body",
    icon: Heart,
  },
  {
    title: "Daily Life Fixes (21 Easy Remedies)",
    icon: Zap,
  },
  {
    title: "Love & Relationships Support",
    icon: Heart,
  },
  {
    title: "Planet Influence Manual (Rahu • Shani • Surya)",
    icon: Sun,
  },
  {
    title: "3-6-9 Tesla Formula (Manifest Faster)",
    icon: Sparkles,
  },
];

const benefits = [
  "Daily healing routine set karne mein",
  "Emotional blocks release karne mein",
  "Relationship energy improve karne mein",
  "Protection & inner balance banane mein",
  "Clarity ko real-life action mein convert karne mein",
];

const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 0 rgba(255,219,88,0)",
      "0 0 30px rgba(255,219,88,0.8)",
      "0 0 0 rgba(255,219,88,0)",
    ],
  },
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: [0.4, 0, 0.6, 1], // ✅ cubic-bezier (TS VALID)
  },
};


const OtoUpgradeSection = () => {
  const handleUpgrade = () => {
    // 👉 Replace with your upgrade checkout link
    window.location.href = "/upgrade-checkout";
  };

  const handleSkip = () => {
    // 👉 Continue without upgrade
    window.location.href = "/thank-you";
  };

  return (
    <section className="relative bg-[#FFF8E1] py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-[#FFDB58]/40 p-6 md:p-10">

        {/* HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FFDB58]/30 text-[#3A2C10] font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            Upgrade Option
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3A2C10] leading-tight">
            Ab Healing Ko Aur <span className="text-[#FFDB58]">Fast</span> Kijiye
          </h1>

          <p className="mt-4 text-[#6A6A4E] max-w-2xl mx-auto">
            Aapne Akashic session choose karke already ek powerful step liya hai.
            Ab agar aap sirf feel nahi, balki real life mein visible change chahte
            hain — yeh Healing Upgrade Bundle aapke liye hai.
          </p>
        </motion.div>

        {/* EBOOKS */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {ebooks.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFF4C4] border border-[#FFDB58]/40"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFDB58] flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#3A2C10]" />
              </div>
              <p className="font-semibold text-[#3A2C10]">{item.title}</p>
            </motion.div>
          ))}
        </div>

        {/* WHY UPGRADE */}
        <div className="bg-[#3A2C10] rounded-2xl p-6 mb-10">
          <h3 className="text-xl font-bold text-[#FFDB58] mb-4">
            Yeh Upgrade Kyun Lena Chahiye?
          </h3>

          <div className="grid sm:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                className="flex items-start gap-3 text-white"
              >
                <CheckCircle className="w-5 h-5 text-[#FFDB58]" />
                <p className="text-sm">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* VALUE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <p className="text-lg font-bold text-[#3A2C10]">
            Actual Worth: <span className="line-through text-[#6A6A4E]">₹5,000+</span>
          </p>
          <p className="text-xl font-extrabold text-[#FFDB58]">
            Aaj Special Upgrade Price 💛
          </p>
        </motion.div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <motion.button
            onClick={handleUpgrade}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            {...glowPulse}
            className="
              inline-flex items-center gap-3
              px-10 py-4 rounded-full
              bg-[#FFDB58]
              text-[#3A2C10]
              font-extrabold text-lg
              shadow-xl
            "
          >
            Haan, main upgrade karna chahta / chahti hoon
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <button
            onClick={handleSkip}
            className="block mx-auto text-sm text-[#6A6A4E] underline hover:text-[#3A2C10]"
          >
            Nahi, abhi skip karna hai
          </button>
        </div>

        {/* DELIVERY NOTE */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#6A6A4E]">
          <Shield className="w-4 h-4" />
          Payment ke baad E-Books WhatsApp / Email par share ki jaayengi
        </div>

      </div>
    </section>
  );
};

export default OtoUpgradeSection;
