"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Send, Camera, MessageCircleHeart } from "lucide-react";
import React, { Suspense, lazy } from "react";
import { toast } from "react-hot-toast";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function ValentineLanding() {
  const imageLink =
    "https://imgs.search.brave.com/PWLH6u2iBfbpbjNMx2CV581BZ0Ul4scxNXoDb94m0JI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NkLzNm/Lzc4L2NkM2Y3OGY1/Mzc1ZWZiM2Y2OTlj/NzIyY2M3Y2I3NDRk/LmpwZw";
  const imageUrls = [
    "https://i.pinimg.com/736x/27/2c/3c/272c3c10cbe4dce87e86c20bf4d4cffa.jpg",
    "https://i.pinimg.com/736x/2e/10/a4/2e10a48babc6ededf2e3df9b8e661360.jpg",
    "https://i.pinimg.com/736x/11/8b/00/118b006a37cb3eebf7bf13e80ad59bbc.jpg",
    "https://i.pinimg.com/736x/b8/f4/89/b8f489c15f1ceb37a090f610ee88a3b8.jpg",
    "https://i.pinimg.com/736x/8a/18/b1/8a18b11eeb4ebe12467ac51d3347b449.jpg",
    "https://i.pinimg.com/736x/bb/bf/28/bbbf285d7a812d9f279ff200dc656579.jpg",
    "https://i.pinimg.com/736x/0b/98/3c/0b983c4d92c697babad77409593d150f.jpg",
    "https://i.pinimg.com/736x/d4/b1/67/d4b167320f798276ecb362fe8083129c.jpg",
  ];
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <section className="min-h-screen relative flex items-center">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0">
          <Suspense fallback={<div>Loading...</div>}>
            <Spline
              className="w-full h-full max-h-[80vh] md:max-h-[100vh]"
              scene="https://prod.spline.design/boA8aVz26y0N8o5u/scene.splinecode"
            />
          </Suspense>
        </div>
        <motion.div
          className="absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 md:bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div
            className="w-12 h-12 rounded-full bg-black border flex items-center text-white justify-center hover:bg-black/80 transition-colors cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            onTouchStart={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>
      <section className="py-16 md:py-32 bg-black border-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loveMessages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2 },
                }}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
                className="relative p-4 rounded-2xl bg-black border border-white shadow-xl hover:scale-105 transition-all duration-300 hover:bg-black/80"
              >
                <div className="relative flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white text-black opacity-80">
                    {message.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {message.title}
                  </h3>
                </div>
                <p className="relative text-gray-400 leading-relaxed text-sm">
                  {message.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="py-32 bg-gradient-to-b from-black to-black text-white text-center border-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative p-8 bg-black border border-white max-w-full mr-10 ml-10 mx-auto items-center justify-center rounded-sm hover:scale-105 transition-all duration-300 px-4"
        >
          <h2 className="text-4xl font-bold mb-4">С днем святого валентина!</h2>
          <p className="text-lg mb-4">
            Пусть этот день будет наполнен любовью и счастьем. Я очень сильно
            тебя люблю!
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              variant="ghost"
              onClick={() => toast.success("Ты моя любовь!")}
            >
              Жмакай сюда
            </Button>
          </div>
        </motion.div>
      </section>
      <section className="py-20 bg-black border-none">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {imageUrls.map((url, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{
                  scale: 1.05,
                  filter: "brightness(0.8)",
                }}
                className="aspect-square bg-gray-100 relative overflow-hidden group"
              >
                <img src={url} alt={`Memory ${index}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all">
                  <Heart className="text-white opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-black via-pink-400 to-black backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black">
                Отправь свою любовь
              </h2>
              <p className="text-black">
                Сделай красивую фоточку и отправь мне, как вот эта лыжа!
              </p>
              <Button
                size="lg"
                variant="ghost"
                className="bg-black text-white hover:scale-105 transition-all duration-300 hover:bg-black/80 hover:text-pink-400"
                onClick={() => toast.success("Где фоточка?")}
              >
                Нажми на лыжу
              </Button>
            </div>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <img
                src={imageLink}
                alt="Лыжа"
                onClick={() => toast.success("Ты лыжа!")}
                className="w-64 h-64 md:w-72 md:h-72 rounded-full opacity-90 cursor-pointer hover:scale-105 transition-all duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 max-w-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Я хочу тепла</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Твое имя"
              className="w-full p-4 bg-transparent border-2 border-white focus:outline-none"
            />
            <textarea
              placeholder="Твое сообщение"
              rows={4}
              className="w-full p-4 bg-transparent border-2 border-white focus:outline-none"
            />
            <Button
              type="submit"
              variant="ghost"
              size="lg"
              className="w-full bg-white text-black hover:bg-white/80 h-12"
            >
              Жмакай сюда
            </Button>
          </form>
        </motion.div>
      </section>
      <section className="py-32 bg-gradient-to-b from-black to-pink-400 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-4">Никогда не грусти</h2>
          <p className="text-lg mb-4">
            Будешь грустить - откушу нос.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-black hover:scale-105 transition-all duration-300 hover:bg-white/80 hover:text-pink-400"
              onClick={() => toast.success("Ты самая красивая женщина в мире!")}
            >
              Жмакай сюда
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

const loveMessages = [
  {
    icon: <Send className="w-6 h-6" />,
    title: "Отправь любовь",
    text: "Потыкай кнопочки и отправь свою любовь",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Жду сегодня красивую фоточку своего котика",
    text: "Сделай фото и отправь его",
  },
  {
    icon: <MessageCircleHeart className="w-6 h-6" />,
    title: "Напиши сообщение мне",
    text: "Напиши сердечные сообщение своему котику",
  },
];
