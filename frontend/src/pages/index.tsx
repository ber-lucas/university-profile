import GitHubIcon from '@mui/icons-material/GitHub';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>DarkOwl</title>
      </Head>
      <main className="flex justify-center">
        <div className="grid items-center h-[100vh] w-[41rem] bg-[#343541] opacity-50 shadow-2xl">
          <header className="flex flex-col items-center text-white">
            <Image src="/favicon.ico" alt={"Logo"} width={75} height={75} />

            <h1 className="font-gloriaHallelujah text-5xl font-bold mt-4 mb-5">
              DarkOwl
            </h1>

            <p className="text-xl font-normal">
            Unlock the wisdom of the night.
            </p>
          </header>

          <section className="flex flex-col items-center">
            <div className="grid gap-2 justify-center">
              <button className="flex justify-center items-center gap-2 border-2 border-[#000000] text-[#FFFFFF] text-lg font-semibold rounded-xl h-14 w-96">
                <Image src={"/google.svg"} alt={"Google Icon"} height={40} width={40}/>
                <p>Sign in with Google</p>
              </button>
              <button className="flex justify-center items-center gap-3 border-2 border-[#000000] text-[#FFFFFF] text-lg font-semibold rounded-xl h-14 w-96">
                <GitHubIcon fontSize='large'/>
                <p>Sign in with Github</p>
              </button>
            </div>

            <div className='flex items-center gap-2 my-5'>
              <hr className='border-[#D8D8D8] border-[1px] h-[1px] w-44 opacity-50'/>
              <p className='text-[#D8D8D8] text-lg opacity-50 font-medium'>or</p>
              <hr className='border-[#D8D8D8] border-[1px] h-[1px] w-44 opacity-50'/>
            </div>

            <form action="" method="post" className='grid gap-2 items-center'>
              <input
                type="email" 
                name="email" 
                id="email" 
                placeholder='Email address'
                className='bg-[#343541] border-[1px] border-black text-[#FFFFFF] text-lg rounded-xl h-[54px] w-96 pl-4 o14-none' 
              />

              <input 
                type="submit" 
                value="Continue"
                className="flex justify-center items-center gap-3 border-2 border-[#000000] bg-white text-[#000000] text-lg font-semibold rounded-xl h-[54px] w-96 cursor-pointer hover:bg-gray-300 transition-colors 14on-300"
              />

              <div className='flex justify-center items-center mt-10'>
                <Checkbox.Root
                  className="hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
                  defaultChecked
                  id="c1"
                >
                <Checkbox.Indicator className="text-violet-600">
                  <CheckIcon />
                </Checkbox.Indicator>
                </Checkbox.Root>
                <label className="pl-[10px] text-lg leading-none text-white" htmlFor="c1">
                  Remember me.
                </label>
              </div>
            </form>          
          </section>

          <footer className='flex flex-col items-center gap-1'>
            <p className='text-lg text-white opacity-50 font-semibold'>Don`t have an account?</p>
            <a href="./" className='text-xl text-white hover:text-gray-300 transition-colors duration-300 font-bold'>Create one.</a>
          </footer>
        </div>
      </main>
    </>
  )
}
