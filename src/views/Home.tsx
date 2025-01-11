import { motion } from "framer-motion"
import { HeaderDashboard, HeaderHome } from "../components/Header"
import { Todo } from "../components/Todo"

function Home() {

  return (
    <motion.div initial={{ scale: 0, rotate: 360 }} animate={{ scale: [0.2, 0.1, 1], rotate: [360, 0, 0] }} transition={{ duration: 0.5, ease: "circIn" }} className="bg-neutral-900 h-screen w-screen flex rounded-md overflow-hidden">
      <HeaderDashboard />
      <motion.div initial={{ x: -538 }} animate={{ x: 0 }} transition={{ delay: 0.5, duration: 0.5, ease: "backIn" }} className="w-[50%] h-full p-4">
        <div className="dark:bg-zinc-800 bg-white h-full rounded-lg p-14 flex flex-col gap-2 items-center justify-center">
          <HeaderHome  />
          <div className="hidden">
            <h1 className="font-bold text-2xl">Todo64</h1>
            <motion.p animate  className="text-gray-400 px-2">
              <small >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate iste, ad ut facere quia praesentium quos unde illum iure quae, optio maxime,
                placeat dolore dicta fugit quidem porro repellendus cumque.
              </small>
            </motion.p>
            <div className="mt-5">
              <h4 className="mb-5">Todo</h4>
              <hr className="bg-zinc-900 h-[1px]" />
              <Todo />
              <Todo />
              <Todo />
              <Todo />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Home
