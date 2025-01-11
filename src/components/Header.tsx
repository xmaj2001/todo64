import { Input } from "@nextui-org/react";
import { BsSearch } from "react-icons/bs";
import {motion} from 'framer-motion'

export function HeaderHome() {
    return (
        <div className="w-full h-full  dark:text-white light:text-zinc-900 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-light ">
                Todo <b className="font-bold">64</b>
            </h1>
            <div className="text-center">
                <h4 className="text-zinc-700 text-md my-2">X-MAJ</h4>
                <p className="px-10 text-zinc-500" style={{fontSize:13}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae libero officia. Obcaecati, aliquam odio dolore quo voluptas veritatis fugit doloribus? Illo deserunt, sequi consectetur a fuga autem dolorum sapiente!</p>
            </div>
        </div>
    );
}

export function HeaderDashboard() {
    const list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    return (
        <motion.div initial={{y:700}} animate={{y:[700,0]}} transition={{delay:0.8, duration:0.5, ease:"anticipate"}} className="w-[50%] h-full text-white flex flex-col justify-center items-center gap-4">
            <div className="text-center">
                <h1 className="text-3xl font-light">Todo<b className="font-mono">64</b></h1>
                <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="w-[350px] px-4 py-3 rounded-xl flex justify-center items-center bg-gradient-to-tr from-zinc-800 to-neutral-800 text-white shadow-lg">
                <Input
                    isClearable
                    className="text-white"
                    classNames={{
                        input: [
                            "bg-transparent",
                            "text-white dark:text-white/90",
                            "placeholder:text-white dark:placeholder:text-white/60",
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                            "shadow-xl",
                            "text-white",
                            "bg-zinc-900/50",
                            "dark:bg-zinc-900/60",
                            "backdrop-blur-xl",
                            "backdrop-saturate-200",
                            "hover:bg-zinc-800/50",
                            "dark:hover:bg-zinc-800/70",
                            "group-data-[focus=true]:bg-zinc-200/50",
                            "dark:group-data-[focus=true]:bg-zinc-500/60",
                            "!cursor-text",
                        ],
                    }}
                    placeholder="Type to search..."
                    radius="lg"
                    startContent={
                        <BsSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                    }
                />
            </div>
            <div className="w-full mt-5">
                <h4 className="text-center">Projects: <span className="text-gray-400 font-mono">(42)</span></h4>
                <div className="flex mx-16  flex-wrap items-center justify-center">
                    {
                        list.map((item, index) => {
                            if (index < 11) {
                                return (
                                    <div className="p-1 f text-center flex justify-center items-center flex-col ">
                                        <div className="w-[87px] h-[80px] rounded-lg hover:bg-neutral-950 hover:border-2 p-2 border-zinc-800">
                                            <div className="
                                                        hover:bg-neutral-950 
                                                        bg-gradient-to-br 
                                                        from-zinc-800 
                                                        to-neutral-800
                                                        hover:from-zinc-950 
                                                        hover:to-neutral-950
                                                        h-full 
                                                        rounded-lg flex justify-center items-center">
                                                <small>PC</small>
                                            </div>
                                        </div>
                                        <p className="text-gray-400"><small>Task {item}</small></p>
                                    </div>
                                )
                            }
                        })
                    }
                    {
                        <div className="p-1 f text-center flex justify-center items-center flex-col ">
                            <div className="w-[87px] h-[80px] rounded-lg hover:bg-neutral-950 border-2 p-2 border-zinc-800">
                                <div className="
                                        hover:bg-neutral-950 
                                        text-gray-400
                                        bg-gradient-to-br 
                                        from-zinc-900 
                                        to-neutral-900
                                        hover:from-zinc-950 
                                        hover:to-neutral-950
                                        h-full 
                                        rounded-lg flex justify-center items-center">
                                    <small className="font-mono text-2xl">+</small>
                                </div>
                            </div>
                            <p className="text-gray-400"><small>Ver +42</small></p>
                        </div>
                    }
                </div>
            </div>
        </motion.div>
    );
}