import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";
import ContactCard from "./ContactCard";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "이메일",
      value: "oktui2002@naver.com",
    },
    {
      icon: Phone,
      title: "전화번호",
      value: "010-7339-1182",
    },
    {
      icon: MessageSquare,
      title: "카카오톡",
      value: "@Dodev",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* <Mail className="w-12 h-12 mx-auto text-purple-400 mb-6" /> */}
          <h2 className="text-4xl font-bold text-white mb-8">연락하기</h2>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {contactInfo.map((info, index) => (
              <ContactCard
                key={index}
                icon={info.icon}
                title={info.title}
                value={info.value}
              />
            ))}
          </div>

          <form className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <input
                type="text"
                placeholder="이름"
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <input
                type="email"
                placeholder="이메일"
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <textarea
                placeholder="메시지"
                rows={4}
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400"
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              <span>메시지 보내기</span>
              <Send className="w-5 h-5" />
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-gray-400"
          >
            <p className="flex items-center justify-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span>24시간 이내에 답변드리겠습니다</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
